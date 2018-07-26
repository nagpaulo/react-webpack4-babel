import React from "react";
import ReactDOM from "react-dom";

const Index = () => {
    const message = "This is OK!"
    return <div>{`Hello React! ${message}`}</div>;
};

ReactDOM.render(<Index />, document.getElementById("app"));