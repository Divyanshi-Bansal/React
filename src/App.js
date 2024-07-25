import React from "react";
import ReactDOM from "react-dom/client";
import ToDoList from "./components/todoList/ToDoList";
import Hooks from "./components/concept/Hooks";
import Accordian from "./components/accordian/Accordian";
import Question1 from "./components/questions/question1/Question1";

const jsxHeading = <h1>JSX HEading</h1>

function ChildFunctionalComponent(){
    return (
        <div>
            <h1>Functional Component</h1>
        </div>
    )
}

const number = 1000;

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
                "folder":"accordian",
                "files":[
                    "accordian.jsx",
                    "accordianstyle.css"
                ],           
            },
            {
               "folder":"counter",
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

const Heading = () => {
    return (
        <div>
            {/* <ChildFunctionalComponent />
            <ChildFunctionalComponent>Limit ?</ChildFunctionalComponent>
            <h1>Functional Component in HEading as a element</h1>
            {true == "true" ? "its a true match" : "Its not a true match"}
            <h1>{number}</h1> */}
            {/* <ToDoList/> */}
            {/* <Hooks/> */}
            {/* <Accordian/> */}
            <Question1/>
        </div>
    )
}

// ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);
ReactDOM.createRoot(document.getElementById("root")).render(<Heading/>);