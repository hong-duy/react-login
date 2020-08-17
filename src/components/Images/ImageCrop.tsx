import React, { useState, useCallback, useRef, useEffect } from "react"
import Dropzone from 'react-dropzone'
import ReactCrop from "react-image-crop"
import "react-image-crop/dist/ReactCrop.css"
import '../Images/Upload.scss'

// Setting a high pixel ratio avoids blurriness in the canvas crop preview.
const pixelRatio = 4;

// We resize the canvas down when saving on retina devices otherwise the image
// will be double or triple the preview size.
function getResizedCanvas(canvas: HTMLCanvasElement, newWidth: number, newHeight: number) {
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

export default function ImageCrop() {
  const [upImg, setUpImg] = useState('');
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [multipleFile, setMultipleFile] = useState(false);
  const [crop, setCrop] = useState({ aspect: 16 / 9, x: 0, y: 0, unit: "%", width: 50 } as ReactCrop.Crop);

  const [completedCrop, setCompletedCrop] = useState({ width: 1, height: 1 });

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
    const crop: ReactCrop.Crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx: any = canvas.getContext("2d");

    (canvas.width as number) = (crop.width as number) * pixelRatio;
    (canvas.height as number) = (crop.height as number) * pixelRatio;

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
    );
  }, [completedCrop]);

  return (
    <>
      <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)} multiple={multipleFile}>
        {({ getRootProps, getInputProps }) => (
          <section className="d-flex flex-wrap box-dropzone">
            <div {...getRootProps()} className="d-flex flex-wrap dropzone" style={{ minHeight: '180px' }}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </section>
        )}
      </Dropzone>
      <div className="preview-image">
        <div className="preview-header">All images have been uploaded</div>
        <div className="items">
          {/* {this.renderPreviewImg(imagesPreviewUrls)} */}
          <div className="col-4">
            <div className="thumbnail">
            <img src="https://storage.googleapis.com/duy-bucket/uploads-test/JCyMJ3vzPc226hAj77Ir8ny2F3e8UEJ3MhnmRqrx.jpeg" alt="" />
            </div>
          </div>
          <div className="col-4">
            <div className="thumbnail">
              <img src="https://storage.googleapis.com/duy-bucket/uploads-test/nOgiBXRwlk98TmEqed5GlsPdK0F0BOPnobMhIFJd.jpeg" alt="" />
            </div>
          </div>
          <div className="col-4">
            <div className="thumbnail">
              <img src="https://storage.googleapis.com/duy-bucket/uploads-test/IB5vNHn9qFdqI0PMeJpgC73uj0v1P5nufy0MvUY9.jpeg" alt="" />
            </div>
          </div>
          <div className="col-4">
            <div className="thumbnail">
            <img src="https://storage.googleapis.com/duy-bucket/uploads-test/lhn1H76AVl6Xzz679gj0sRt2Egr3Y1OqB6fijS9i.jpeg" alt="" />
            </div>
          </div>
          <div className="col-4">
            <div className="thumbnail">
            <img src="https://storage.googleapis.com/duy-bucket/uploads-test/z29jCbtSFcSKvmYcD66sCunXdjjHGukwvfqxTduO.jpeg" alt="" />
            </div>
          </div>
          <div className="col-4">
            <div className="thumbnail">
            <img src="https://storage.googleapis.com/duy-bucket/uploads-test/QI5W7Ar7kRKL1Rvyx3y6HQ3Sry7iIbizHCnhn6ag.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>

    // <div className="box-dropzone">
    //   <div className="dropzone" style={{ minHeight:  '100px'}}>
    //     <input type="file" accept="image/png, image/jpg, image/jpeg" onChange={onSelectFile} multiple={true}/>
    //     <p>Drag 'n' drop some files here, or click to select files</p>
    //   </div>
    //   <ReactCrop
    //     src={upImg.toString()}
    //     onImageLoaded={onLoad}
    //     crop={crop}
    //     onChange={(c: any) => setCrop(c)}
    //     onComplete={(c: any) => setCompletedCrop(c)}
    //   />
    //   <div>
    //     <canvas
    //       ref={previewCanvasRef}
    //       style={{
    //         width: completedCrop?.width ?? 0,
    //         height: completedCrop?.height ?? 0
    //       }}
    //     />
    //   </div>
    //   <button
    //     type="button"
    //     disabled={!completedCrop?.width || !completedCrop?.height}
    //     onClick={() =>
    //       generateDownload(previewCanvasRef.current, completedCrop)
    //     }
    //   >
    //     Download cropped image
    //   </button>
    // </div>
  )
}
