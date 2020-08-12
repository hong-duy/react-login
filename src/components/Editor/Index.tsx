import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Toolbar, { modules } from "./Toolbar";

export default function Editor() {
  const [value, setValue] = useState('');

  const handleChange = (value: any) => {
    setValue(value);
  }
  // async function handleImage() {
  //   console.log('image');
  // }


  // const formats = [
  //   'header',
  //   'bold', 'italic', 'underline', 'strike', 'blockquote',
  //   'list', 'bullet', 'indent',
  //   'link', 'image'
  // ]

  return (
    <div className="container">
      <Toolbar />
      <ReactQuill
        theme="snow"
        value={value}
        onChange={handleChange}
        placeholder={"Write something awesome..."}
        modules={modules}
        // formats={formats}
      />
    </div>
  );
}