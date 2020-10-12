import React, { useState, useRef, useEffect, useCallback } from "react"
import Dropzone, { FileRejection } from 'react-dropzone'
import ReactCrop from "react-image-crop"
import RSC from "react-scrollbars-custom"
import "react-image-crop/dist/ReactCrop.css"
import '../Images/Upload.scss'
import { SETTING } from "../../configs/config"
import { UploadFile } from '../../api/HandleRequest';
import CONFIG from "../../configs/config"
import ImageList from "./ImageList"
import { Size } from "../Size/SizeInterface"

// Setting a high pixel ratio avoids blurriness in the canvas crop preview.
const pixelRatio = 4;

// We resize the canvas down when saving on retina devices otherwise the image
// will be double or triple the preview size.
// function getResizedCanvas(canvas: HTMLCanvasElement, newWidth: number, newHeight: number) {
//   const tmpCanvas = document.createElement("canvas");
//   tmpCanvas.width = newWidth;
//   tmpCanvas.height = newHeight;

//   const ctx: any = tmpCanvas.getContext("2d");
//   ctx.drawImage(
//     canvas,
//     0,
//     0,
//     canvas.width,
//     canvas.height,
//     0,
//     0,
//     newWidth,
//     newHeight
//   );

//   return tmpCanvas;
// }

// function generateDownload(previewCanvas: any, crop: any) {
//   if (!crop || !previewCanvas) {
//     return;
//   }

//   const canvas = getResizedCanvas(previewCanvas, crop.width, crop.height);

//   canvas.toBlob(
//     blob => {
//       const previewUrl = window.URL.createObjectURL(blob);

//       const anchor = document.createElement("a");
//       anchor.download = "cropPreview.png";
//       anchor.href = URL.createObjectURL(blob);
//       anchor.click();

//       window.URL.revokeObjectURL(previewUrl);
//     },
//     "image/png",
//     1
//   );
// }

export default function ImageCrop({ size }: { size?: Size }) {

  const [innerHeight] = useState(window.innerHeight - 230)
  // const [upImg, setUpImg] = useState('');
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [isMultipleFile, /*setIsMultipleFile*/] = useState(false);
  const [crop, setCrop] = useState({ aspect: 16 / 9, x: 0, y: 0, unit: "%", width: 50, height: 50 } as ReactCrop.Crop);
  const [completedCrop, setCompletedCrop] = useState({} as ReactCrop.Crop);
  const [isCrop] = useState(size);
  const [acceptedFiles, setAcceptedFiles] = useState<any>([])
  const [rejectFiles, setRejectFiles] = useState<any>([])
  const [saving, setSaving] = useState(false);
  const [selectedCrop] = useState(0);
  const [error, setError] = useState('');
  const [validate, setValidate] = useState([])
  const [previewImages, setPreviewImages] = useState<any>([]);
  const [upImg, setUpImg] = useState('');

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
    // only validate dimension of image when upload single file
    if (acceptedFiles.length > 0 && isCrop) {
      const currentFile = acceptedFiles[0];
      const reader = new FileReader();
      reader.addEventListener("load", () => setUpImg(reader.result as string));
      reader.readAsDataURL(currentFile);
      return;
    }

    if (acceptedFiles.length > 2) {
      return console.log("Upload tối đa 10 file 1 lần")
    }

    let dataFile = new FormData();
    acceptedFiles.map((file: any) => {
      file.media_size = 1;
      file.medial_title = "aaaaa";
      return dataFile.append('files[]', file);
    });

    dataFile.append('media_size', selectedCrop as any);

    async function upload() {
      setSaving(true)
      const res = await UploadFile(CONFIG.API_IMAGE.LIST, dataFile);
      setSaving(false);
      if (res.isError) {
        return setError(res.message);
      }

      if (res.isValidate) {
        return setValidate(res.message);
      }

      setPreviewImages(res.result.data);
    }

    if (acceptedFiles.length > 0) {
      upload();
    }
  }, [acceptedFiles, selectedCrop, isCrop])

  useEffect(() => {
    const crop = {
      aspect: 16 / 9,
      x: 0,
      y: 0,
      unit: "px",
      width: size?.width,
      height: size?.height,
    } as any;

    if (size !== undefined && Object.keys(size).length > 0) {
      setCrop(crop);
    }

  }, [size])

  function handleChangeCrop(crop: ReactCrop.Crop) {
    setCrop(crop);
  }

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

    if (upImg.length)
      return <ReactCrop
        className={'custom-css-react-crop'}
        style={{ width: '50%', maxHeight: '400px' }}
        src={upImg as any}
        crop={crop as any}
        onImageLoaded={onLoad}
        onChange={handleChangeCrop}
        onComplete={(c: any) => setCompletedCrop(c)}
      />

    return <Dropzone
      onDropAccepted={files => setAcceptedFiles(files)}
      onDropRejected={files => setRejectFiles(files)}
      accept={SETTING.ACCEPTED_FILE_TYPES}
      maxSize={SETTING.MAX_SIZE}
      multiple={isMultipleFile}
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
      {
        crop &&
        <div className="preview-image-option">
          <div className="option-block">
            <label>X:</label>
            <span>{crop.x}</span>
          </div>
          <div className="option-block">
            <label>Y:</label>
            <span>{crop.y}</span>
          </div>
          <div className="option-block">
            <label>W:</label>
            <span>{Math.round(crop.width as number)}</span>

          </div>
          <div className="option-block">
            <label>H:</label>
            <span>{Math.round(crop.height as number)}</span>
          </div>
          <div className="option-block">
            <label>U:</label>
            <span>{crop.unit}</span>
          </div>
        </div>
      }
      <div className="preview-image">
        {validate.length > 0 && <div className="preview-header">{validate}</div>}
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
        {
          previewImages.length > 0 &&
          <div className="box">
            <RSC noScrollX={true} style={{ height: innerHeight - 300 }}>
              <ImageList items={previewImages} prefixUrl={CONFIG.IMAGE_URL} clsName="d-flex flex-wrap wrap-list" />
            </RSC>
          </div>
        }
        {
          previewCanvasRef &&
          <div className="preview-header">
            <div className="preview-canvas">
              <RSC noScrollX={true} style={{ height: innerHeight - 450 }} className="scroll-canvas">
                <canvas
                  ref={previewCanvasRef}
                  style={{
                    width: completedCrop?.width ?? 0,
                    height: completedCrop?.height ?? 0
                  }}
                />
              </RSC>
            </div>
          </div>
        }
      </div>
    </>
  )
}
