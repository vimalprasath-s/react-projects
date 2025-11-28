/********* 1. Printing Hello world from React !!!   ***/

// CreateElement will take three things h1 = tag name, attributes to the tag, value of the tag
const heading = React.createElement("h1", {id: "heading", abc: "xyz"}, "Hello World from React ❤️!!!");
console.log(heading)    // It will print React element object not a h1 tag

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("root", root)   // ReactDOMRoot object

root.render(heading);   // This will take the object (react element) and change it into h1 tag and render it



/************  2. Nested elements with siblings
<div id = "parent">
    <div id="child">
        <h1> Nested elements </h1>
        <h2> Second element </h2>
    </div>
</div>

*************/

const heading1 = React.createElement("div", {id: "Parent"}, React.createElement("div", {id: "child"}, [React.createElement("h1", {key: "1"}, "Nested elements"), React.createElement("h2", {key: "2"}, "Second element")]));
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(heading1);


// 1. <link rel = "" > tag
// 2. copy paste index.js 