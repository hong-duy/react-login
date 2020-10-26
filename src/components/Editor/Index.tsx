import 'react-quill/dist/quill.snow.css'
import '../Images/Index.scss'
import React, { useState, useEffect } from "react"
import ReactQuill from 'react-quill'
import Toolbar, { undoChange, redoChange } from "./Toolbar"
import CONFIG from "../../configs/config"
import { getList } from '../../api/HandleRequest'
import RSC from "react-scrollbars-custom"
import Loading from '../Loading/Loading'
import Pagination from '@material-ui/lab/Pagination'
import ImageList from '../Images/ImageList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThList, faCloudUploadAlt, faCropAlt } from '@fortawesome/free-solid-svg-icons'
import ImageCrop from '../Images/ImageCrop'
import Upload from '../Images/Upload'
import SizeList from '../Size/SizeList'
import { Size } from '../Size/SizeInterface'
import { useRef } from 'react'

interface Provider {
  id: number;
  thumbnail: string;
  media_title: string;
  views: number;
  published_at: string;
  description: string;
  slug: string
}

function useImages(showPopup: boolean, activeTab: number) {
  const [images, setImages] = useState<Provider[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [totalPage, setTotalPage] = useState(1)
  const [page, setPage] = useState(0)

  useEffect(() => {
    async function getImages() {
      setIsLoading(true);
      const res = await getList(CONFIG.API_IMAGE.LIST, page)
      setImages(res.result.data)
      setTotalPage(res.result.meta.total_pages);
      setIsLoading(false)
    }

    if (showPopup && activeTab === 1) {
      getImages()
    }
  }, [page, showPopup, activeTab])

  return [images, isLoading, totalPage, page, setPage];
}


const modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      undo: undoChange,
      redo: redoChange,
      images: handleImageList
    }
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true
  }
};

async function handleImageList() {
  console.log(11);
  // setShowPopup(true);
}


export default function Editor() {
  const [innerHeight] = useState(window.innerHeight - 300)
  const [valueEditor] = useState('')
  const [showPopup, setShowPopup] = useState(true)
  const [activeTab, setActiveTab] = useState(1);
  const [images, isLoading, totalPage, page, setPage] = useImages(showPopup, activeTab) as [Provider[], boolean, number, number, React.Dispatch<React.SetStateAction<number>>];
  const [size, setSize] = useState<Size>({})
  const inputElement = useRef(null);

  const handleEditorChange = (content: any, delta: any, source: any, editor: any) => {
    console.log(111);
    console.log(editor.getHTML()); // rich text
    // console.log(editor.getText()); // plain text
    // console.log(editor.getLength()); // number of characters
  }


  function handleSelectImg(item: any) {
    console.log(item);

    // ReactQuill.in(10, 'image', 'https://quilljs.com/images/cloud.png');
    if (inputElement && inputElement.current) {
      const quill = inputElement.current as any;
      const editor = quill.getEditor();
      console.log(editor)
      editor.insertText(0, 'Hello', 'bold', true);

      // editor.insertEmbed(0, 'image', 'https://i.picsum.photos/id/211/200/300.jpg')
    }
  }

  function displayItem() {
    if (isLoading) {
      return <Loading totalItem={9} col={4} clsName="d-flex flex-wrap wrap-list" />
    }

    return <ImageList items={images} onChange={handleSelectImg} prefixUrl={CONFIG.IMAGE_URL} clsName="d-flex flex-wrap wrap-list" />
  }

  function handleActiveTab(key: number) {
    if (key !== activeTab) {
      setActiveTab(key)
    }
  }

  function handleSize(item: Size) {
    setSize({
      width: item.width,
      height: item.height
    })
  }


  return (
    <div className="container">
      <Toolbar />
      <ReactQuill
        ref={e => console.log('init')}
        theme="snow"
        value={valueEditor || ''}
        onChange={handleEditorChange}
        placeholder={"Write something awesome..."}
        modules={modules}
      />
      {
        showPopup &&
        <div className="image-manager" style={{ top: 200 }}>
          <div className="container">
            <div className="box">
              <header className="header">
                <button className={`btn btn-list ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleActiveTab(1)}><FontAwesomeIcon icon={faThList} size="lg" /></button>
                <button className={`btn btn-upload ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleActiveTab(2)}><FontAwesomeIcon icon={faCloudUploadAlt} /></button>
                <button className={`btn btn-drop ${activeTab === 3 ? 'active' : ''}`} onClick={() => handleActiveTab(3)}><FontAwesomeIcon icon={faCropAlt} /></button>
                <div className="arrow-action">
                  <button className="btn arrow arrow-close" onClick={() => setShowPopup(false)} />
                  <button className="btn arrow arrow-expand" />
                </div>
              </header>
              {activeTab === 1 && <RSC noScrollX={true} style={{ height: innerHeight }}> {displayItem()}</RSC>}
              {activeTab === 2 && <div className="image-crop-box" style={{ height: innerHeight }}> <Upload /></div>}
              {
                activeTab === 3 &&
                <div className="image-crop-box" style={{ height: innerHeight }}>
                  <SizeList onChange={handleSize} />
                  <ImageCrop size={size} />
                </div>
              }
              <footer className="footer">
                {activeTab === 1 && <Pagination count={totalPage} page={page} boundaryCount={4} onChange={(_e, page) => setPage(page)} showFirstButton showLastButton />}
              </footer>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
