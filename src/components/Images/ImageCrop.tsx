import React, { useState, useCallback, useRef, useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

// Setting a high pixel ratio avoids blurriness in the canvas crop preview.
const pixelRatio = 4;

// We resize the canvas down when saving on retina devices otherwise the image
// will be double or triple the preview size.
function getResizedCanvas(canvas: any, newWidth: number, newHeight: number) {
  const tmpCanvas = document.createElement("canvas");
  tmpCanvas.width = newWidth;
  tmpCanvas.height = newHeight;

  const ctx: any = tmpCanvas.getContext("2d");
  ctx.drawImage(
    canvas,
    0,
    0,
    canvas.width,
    canvas.height,
    0,
    0,
    newWidth,
    newHeight
  );

  return tmpCanvas;
}

function generateDownload(previewCanvas: any, crop: any) {
  if (!crop || !previewCanvas) {
    return;
  }

  const canvas = getResizedCanvas(previewCanvas, crop.width, crop.height);

  canvas.toBlob(
    blob => {
      const previewUrl = window.URL.createObjectURL(blob);

      const anchor = document.createElement("a");
      anchor.download = "cropPreview.png";
      anchor.href = URL.createObjectURL(blob);
      anchor.click();

      window.URL.revokeObjectURL(previewUrl);
    },
    "image/png",
    1
  );
}

interface Crop {
  aspect?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  unit?: 'px' | '%';
}
export default function ImageCrop() {
  const [upImg, setUpImg] = useState('');
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [crop, setCrop] = useState({ unit: "%", aspect: 16 / 9, width: 200, height: 200, x: 0, y: 0 });

  const [completedCrop, setCompletedCrop] = useState({ width: 1, height: 1});

  const onSelectFile = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader: any = new FileReader();
      reader.addEventListener("load", () => setUpImg(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onLoad = useCallback(img => {
    imgRef.current = img;
  }, []);

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image: any = imgRef.current;
    const canvas: any = previewCanvasRef.current;
    const crop: Crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx: any = canvas.getContext("2d");

    (canvas.width as number) = (crop.width as number) * pixelRatio;
    (canvas.height  as number)= (crop.height as number) * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingEnabled = false;

    ctx.drawImage(
      image,
      (crop.x as number) * scaleX,
      (crop.y as number) * scaleY,
      (crop.width as number) * scaleX,
      (crop.height as number) * scaleY,
      0,
      0,
      crop.width,
      crop.height
    ) as Crop;
  }, [completedCrop]);

  return (
    <div className="App">
      <div>
        <input type="file" accept="image/*" onChange={onSelectFile} />
      </div>
      <ReactCrop
        src={upImg.toString()}
        onImageLoaded={onLoad}
        crop={crop}
        onChange={(c: any) => setCrop(c)}
        onComplete={(c: any) => setCompletedCrop(c)}
      />
      <div>
        <canvas
          ref={previewCanvasRef}
          style={{
            width: completedCrop?.width ?? 0,
            height: completedCrop?.height ?? 0
          }}
        />
      </div>
      <p>
        For some browsers e.g. Chrome access from{" "}
        <a
          href="https://y831o.csb.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          outside the preview iframe
        </a>{" "}
        to download due to programmatically triggering a click (security).
      </p>
      <p>
        The alternative would be to generate a blob each time the crop is
        complete and render out an anchor tag if you want to download from
        inside an iframe.
      </p>
      <button
        type="button"
        disabled={!completedCrop?.width || !completedCrop?.height}
        onClick={() =>
          generateDownload(previewCanvasRef.current, completedCrop)
        }
      >
        Download cropped image
      </button>
    </div>
  );
}
