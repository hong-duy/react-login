import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../styles/TextEditor.scss';
import EditorToolbar, { modules } from "./EditorToolbar";


export default function EditorCustom() {
  const [value] = useState('');

  const handleChange = (value: any) => {
    // setValue('test');
  }

  return (
    <div className="container">
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={value}
        onChange={handleChange}
        modules={modules}
      />
    </div>
  );
}