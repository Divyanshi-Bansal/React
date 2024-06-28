import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1>JSX HEading</h1>

function ChildFunctionalComponent(){
    return (
        <div>
            <h1>Functional Component</h1>
        </div>
    )
}

const number = 1000;

const Heading = () => {
    return (
        <div>
            <ChildFunctionalComponent />
            <ChildFunctionalComponent>Limit ?</ChildFunctionalComponent>
            <h1>Functional Component in HEading as a element</h1>
            {true == "true" ? "its a true match" : "Its not a true match"}
            <h1>{number}</h1>
        </div>
    )
}

// ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);
ReactDOM.createRoot(document.getElementById("root")).render(<Heading/>);