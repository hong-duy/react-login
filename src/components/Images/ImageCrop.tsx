import React, { useState, useCallback, useRef, useEffect } from "react"
import Dropzone, { FileRejection } from 'react-dropzone'
import ReactCrop from "react-image-crop"
import RSC from "react-scrollbars-custom"
import "react-image-crop/dist/ReactCrop.css"
import '../Images/Upload.scss'
import { SETTING } from "../../configs/config"
import { UploadFile } from '../../api/HandleRequest';
import CONFIG from "../../configs/config"

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
  const [innerHeight] = useState(window.innerHeight - 230)
  const [upImg, setUpImg] = useState('');
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [multipleFile, setMultipleFile] = useState(true);
  const [crop, setCrop] = useState({ aspect: 16 / 9, x: 0, y: 0, unit: "%", width: 50 } as ReactCrop.Crop);
  const [completedCrop, setCompletedCrop] = useState({ width: 1, height: 1 });
  const [isCrop, setIsCrop] = useState(false);
  const [acceptedFiles, setAcceptedFiles] = useState<any>([])
  const [rejectFiles, setRejectFiles] = useState<any>([])
  const [saving, setSaving] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState(0);
  const [error, setError] = useState('');
  // const test = useVeriyFile()

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

  useEffect(() => {
    if (acceptedFiles.length > 2) {
      return console.log("Upload tối đa 10 file 1 lần")
    }

    let dataFile = new FormData();
    acceptedFiles.map((file: any) => {
      file.media_size = 1;
      dataFile.append('files[]', file);
    });

    dataFile.append('media_size', selectedCrop as any);

    console.log(dataFile);

    async function upload() {
      setSaving(true)
      const response = await UploadFile(CONFIG.API_UPLOAD, dataFile);
      if (response.isError) {
        setError('Error when upload');
        setSaving(false);
      }
    }

    if (acceptedFiles.length > 0) {
      upload();
    }
  }, [acceptedFiles])

  function renderDrop() {
    if (saving) {
      return <div style={{ width: "100%" }}>
        <div className="loading">
          <div className="lds-css">
            <div style={{ width: '100%', height: '100%' }} className="lds-wedges">
              <div>
                <div><div></div></div>
                <div><div></div></div>
                <div><div></div></div>
                <div><div></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    }

    return <Dropzone
      onDropAccepted={files => setAcceptedFiles(files)}
      onDropRejected={files => setRejectFiles(files)}
      accept={SETTING.ACCEPTED_FILE_TYPES}
      maxSize={SETTING.MAX_SIZE}
      multiple={multipleFile}
    >
      {({ getRootProps, getInputProps }) => (
        <section className="d-flex flex-wrap box-dropzone">
          <div {...getRootProps()} className="d-flex flex-wrap dropzone" style={{ minHeight: '180px' }}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </section>
      )}
    </Dropzone>
  }

  /**
   * Store image
  * @param files: any
  * @param rejectedFiles: any
  * @event Cropped Image: https://www.youtube.com/watch?v=b2ExhH3g64w&list=PLEsfXFp6DpzQbwYDx1zgcKJ4tzyWFaESK&index=30
  * @returns
   */
  return (
    <>
      {renderDrop()}
      <div className="preview-image">
        {error && <div className="preview-header">{error}</div>}
        {
          rejectFiles.length > 0 &&
          <>
            <div className="preview-header">Files upload error</div>
            <div className="errors">
              <RSC noScrollX={true} style={{ height: innerHeight - 350 }}>
                {
                  rejectFiles.map((item: FileRejection, idx: number) =>
                    <div className="d-flex flex-wrap error-line" key={idx}>
                      <div className="col-7">
                        <span className="error">{item.file.name}</span>
                      </div>
                      <div className="col-5">
                        {item.errors.map((error) => <span className="error">{error.message}</span>)}
                      </div>
                    </div>
                  )
                }
              </RSC>
            </div>
          </>
        }
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
