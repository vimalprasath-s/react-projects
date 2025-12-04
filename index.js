import React from "react";
import ReactDOM from "react-dom/client"

// const heading = React.createElement("h1", {id: "heading"}, "Hello World From React!");

const heading = <h1 id="heading">Hello World From React</h1>

const Title = () => (
    <h1>This is Title Component</h1>
)

const firstTitle = <span>First title element</span  >
const titleElement = <h1> {firstTitle} This is title element</h1>;

const HeadingComponent = () => {    
    return   <div>
        {titleElement}
        <Title />
        <h1>Hello World From Function Component</h1>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);