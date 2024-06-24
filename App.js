let heading = React.createElement("h1", {id:"heading", onClick:headingFunc}, "Hello world from React");
let root = ReactDOM.createRoot(document.getElementById("root"));
// all react code runs only in root .
// react comes with the philosphy that we need to manipulate react dom by using js
// root.render(heading);



function headingFunc(){
    console.log("heading clicked");
}


let child = React.createElement("div",{id:"child"}, heading);
let parent = React.createElement("div",{id:"parent"}, [child, child]);

root.render(parent);

// React is library because it can work in a small portion of our app as well where root are.
// framework : it provides a complete structure to build our app
