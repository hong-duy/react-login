import React from "react";

// Undo and redo functions for Custom Toolbar
function undoChange(this: any) {
  this.quill.history.undo();
}

function redoChange(this: any) {
  this.quill.history.redo();
}

function handleImage() {
  console.log(111);
}

function alignLeft(this: any) {
  this.quill.format('align', '');
}

function alignRight(this: any) {
  this.quill.format('align', 'right');
}

function alignCenter(this: any) {
  this.quill.format('align', 'center');
}

function alignJustify(this: any) {
  this.quill.format('align', 'justify');
}


// Modules object for setting up the Quill editor
export const modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      undo: undoChange,
      redo: redoChange,
      images: handleImage,
      remove: handleImage,
      aleft: alignLeft,
      aright: alignRight,
      acenter: alignCenter,
      ajustify: alignJustify
    }
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true
  }
};


// Quill Toolbar component
export const QuillToolbar = () => (
  <div id="toolbar" className="custom-toolbar">
    <button className="ql-header header-one" value="1" />
    <button className="ql-header header-two" value="2" />
    <button className="ql-header header-three" value="3" />
    <select title="Size" className="ql-size">
      <option value="10px">10px</option>
      <option value="12px">12px</option>
      <option value="14px" defaultValue="14px">14px</option>
      <option value="16px">16px</option>
    </select>
    <button className="ql-images" />
    <button className="ql-video" />

    <button className="ql-link" />
    <button className="ql-remove" />
    <button className="ql-undo" />
    <button className="ql-redo" />

    <button className="ql-bold" />
    <button className="ql-italic" />
    <small style={{paddingLeft: '1em', paddingRight: '15px', color: '#999'}}>
         Octicon
      </small>
    <button className="ql-underline" />
    <small style={{paddingLeft: '1em', paddingRight: '0', color: '#999'}}>
         FontAwesome
      </small>
    <span className="ql-formats">
      <select className="ql-color" />
      <select className="ql-background" />
    </span>
    <span className="ql-formats">
      <button className="ql-list ql-ordered" value="ordered" />
      <button className="ql-list ql-bullet" value="bullet" />
      <button className="ql-blockquote" />
      {/* <button className="ql-indent" value="-1" />
      <button className="ql-indent" value="+1" /> */}
      {/* <select className="ql-align" /> */}
    </span>
    <button className="ql-aleft" value="left"/>
    <button className="ql-acenter" value="center" />
    <button className="ql-aright" value="right"/>
    <button className="ql-ajustify" value="justify"/>
    <span className="ql-formats">
      <button className="ql-script ql-super" value="super" />
      <button className="ql-script ql-sub" value="sub" />
      <button className="ql-clean" />
    </span>
  </div>
);

export default QuillToolbar;