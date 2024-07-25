import React, { useState } from "react";
import style from "./index.css";

const Structure = (props) => {
  const [expandFiles, setExpandFiles] = useState(false);
  const [addFile, setAddFile] = useState(false);

  const handleExpandStructure = () => {
    setExpandFiles((prev) => !prev);
  };

  return (
    <div className="folderStructure">
      <div id="leadItem" className="folder">
        <div className="folderDetails">
          <p>{props.item.id}.</p>
          <p className="folderName">{props.item.name}</p>
        </div>
        <div className="btnsBound">
          <button
            id="expand"
            onClick={() => handleExpandStructure()}
            className="structureBtn"
          >
            v
          </button>
          <button id="addFile" className="structureBtn" onClick={()=>setAddFile(true)}>
            +
          </button>
        </div>
      </div>
      {addFile && <div>
        <input
          type="text"
          id="fileNameInput"
          className="fileNameInput"
          value={props.addFileName}
          onChange={(e)=>props.setAddFileName(e.target.value)}
          onClick={(e)=>e.stopPropagation()}
        />
        <button onClick={()=>{
                props.handleAddFileName(props.item.id);
                setAddFile(false);
            }}
        >Add</button>
      </div>}
      <div>
        {expandFiles &&
          props.item?.files.length > 0 &&
          props.item?.files.map((name, index) => {
            return <File name={name} key={index}/>;
          })}
        {expandFiles &&
          props.item?.subfolders?.length > 0 &&
          props.item.subfolders.map((item, index) => {
            return (
              <Structure
                key={item.id}
                item={item}
                addFileName={props.addFileName}
                setAddFileName={props.setAddFileName}
                handleAddFileName={props.handleAddFileName}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Structure;

export const File = (props) => {
  return (
    <div className="fileName">
      <p>{props.name}</p>
    </div>
  );
};
