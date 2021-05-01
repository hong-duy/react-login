import React, { useState, useEffect, useContext } from "react"
import Dropzone, { FileRejection } from 'react-dropzone'
import RSC from "react-scrollbars-custom"
import "react-image-crop/dist/ReactCrop.css"
import '../Images/Upload.scss'
import { SETTING } from "../../configs/config"
import { UploadFile } from '../../api/HandleRequest';
import CONFIG from "../../configs/config"
import ImageList from "./ImageList"
import { AuthContext } from "../../reducers/Auth"

// Setting a high pixel ratio avoids blurriness in the canvas crop preview.
export default function Upload() {
  const { dispatch } = useContext(AuthContext);
  const [innerHeight] = useState(window.innerHeight - 230)
  const [isMultipleFile, /*setIsMultipleFile*/] = useState(false);
  const [acceptedFiles, setAcceptedFiles] = useState<any>([])
  const [rejectFiles, setRejectFiles] = useState<any>([])
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [validate, setValidate] = useState([])
  const [previewImages, setPreviewImages] = useState<any>([]);

  useEffect(() => {
    if (acceptedFiles.length > 2) {
      return console.log("Upload tối đa 10 file 1 lần")
    }

    let dataFile = new FormData();
    acceptedFiles.map((file: any) => {
      return dataFile.append('files[]', file);
    });

    async function upload() {
      setSaving(true)
      const res = await UploadFile(CONFIG.API_IMAGE.LIST, dataFile);
      setSaving(false);
      if (res.isError) {
        if (res.statusCode === 401) {
          dispatch({ type: "LOGOUT" })
        }
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
      </div>
    </>
  )
}
