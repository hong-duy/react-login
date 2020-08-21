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
import { faThList, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import ImageCrop from '../Images/ImageCrop'
import SizeList from '../Size/SizeList'

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

export default function Editor() {
  const [innerHeight] = useState(window.innerHeight - 200)
  const [value] = useState('')
  const [showPopup, setShowPopup] = useState(true)
  const [activeTab, setActiveTab] = useState(1);
  const [images, isLoading, totalPage, page, setPage] = useImages(showPopup, activeTab) as [Provider[], boolean, number, number, React.Dispatch<React.SetStateAction<number>>];

  const handleChange = (content: any, delta: any, source: any, editor: any) => {
    // console.log(editor.getHTML()); // rich text
    // console.log(editor.getText()); // plain text
    // console.log(editor.getLength()); // number of characters
  }

  async function handleImageList() {
    setShowPopup(true);
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

  function handleClose() {
    setShowPopup(false)
  }

  function handleTest(item: any) {
    console.log(item)
  }

  function displayItem() {
    if (isLoading) {
      return <Loading totalItem={6} col={4} clsName="d-flex flex-wrap wrap-list" />
    }

    return <ImageList items={images} onChange={handleTest} prefixUrl={CONFIG.IMAGE_URL} clsName="d-flex flex-wrap wrap-list" />
  }

  const handleChangePage = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  function handleActiveTab(key: number) {
    if (key !== activeTab) {
      setActiveTab(key)
    }
  }

  return (
    <div className="container">
      <Toolbar />
      <ReactQuill
        theme="snow"
        value={value || ''}
        onChange={handleChange}
        placeholder={"Write something awesome..."}
        modules={modules}
      />
      {
        showPopup &&
        <div className="image-manager">
          <div className="container">
            <div className="box">
              <header className="header">
                <button className={`btn btn-list ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleActiveTab(1)}><FontAwesomeIcon icon={faThList} size="lg" /></button>
                <button className={`btn btn-upload ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleActiveTab(2)}><FontAwesomeIcon icon={faCloudUploadAlt} /></button>
                <button className="btn arrow arrow-close" onClick={handleClose} />
                <button className="btn arrow arrow-expand" />
              </header>
              {
                activeTab === 1 ?
                  <RSC noScrollX={true} style={{ height: innerHeight }}>
                    {displayItem()}
                  </RSC> :
                  <div style={{ height: innerHeight }}>
                    <SizeList actived={activeTab} onChange={(item) => console.log(item)} />
                    <ImageCrop />
                  </div>
              }
              <footer className="footer">
                { activeTab === 1 && <Pagination count={totalPage} page={page} boundaryCount={4} onChange={handleChangePage} showFirstButton showLastButton />}
              </footer>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
