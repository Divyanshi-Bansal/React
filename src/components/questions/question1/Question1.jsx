import React, { useEffect, useState } from "react";
import Structure from "./Structure";

const Question1 = () => {
  // Make a file structure in React. We can add some files inside a folder. we can expand collapse the folders as well
  const fileFolderStructure = [
    {
        "id":1,
        "name": "src",
        "files":[
            "index.html", "index.js"
        ]
    },
    {
        "id":2,
        "name":"component",
        "subfolders":[
            {
                "id":2.1,
                "name":"accordian",
                "files":[
                    "accordian.jsx",
                    "accordianstyle.css"
                ],
                "subfolders":[
                    {
                        "id":'a',
                        "name":"sub-accordian",
                        "files":[
                            "sub-accordian.jsx",
                            "sub-accordianstyle.css"
                        ],
                    }
                ]
            },
            {
                "id":2.2,
               "name":"counter",
                "files":[
                    "counter.jsx",
                    "counterstyle.css"
                ], 
            }
        ],
        "files":[
            "file1.jsx","file2.jsx"
        ]
    },
    {
        "id":3,
        "name": "build",
        "files":[
            "script.min.js", "script.max.js"
        ]
    }
]

  const [fileFolderList, setFileFolderList] = useState(
        fileFolderStructure
    );
  const [addFileName, setAddFileName] = useState("");

  function handleAddFileName(folderId) {
    console.log(folderId);
    let list = fileFolderList.map((item, index)=>{
        if(item.id == folderId){
            return {...item, "files":[...item.files, addFileName]}
        }
        else if(item?.subfolders?.length>0){
            let subFoldersItems = item.subfolders.map((subItem, index)=>{
                if(subItem.id == folderId){
                    return {...subItem, "files":[...subItem.files, addFileName]}
                }
                return {...subItem};
            });
            return {...item, "subfolders": subFoldersItems}
        }
        return {...item};
    });

    console.log(list);
    setFileFolderList(list);
    setAddFileName("");
  }

  return (
    <>
    <h1>Folder-File Structure</h1>
      {fileFolderList.map((item, index) => {
        return (
            <Structure
                key={item.id}
                item={item}
                addFileName={addFileName}
                setAddFileName={setAddFileName}
                handleAddFileName={handleAddFileName}
            />
        )
      })}
    </>
  );
}

export default Question1;
