import React, { useState } from "react";

export default function TextForm(props) {

  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("uppercase was clicked" + text);
    const newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    const newText = "";
    setText(newText);
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpace = () => {
    var newText = text.split(/ [ ]+/);
    setText(newText.join(" "));
  };

  const handleOnChange = (event) => {
    // console.log("on chage");
    setText(event.target.value);
  };

  

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "light" ? "#042743" : "white",
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase{" "}
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to LowerCase{" "}
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy text{" "}
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
          Remove spaces{" "}
        </button>
        <button className="btn btn-danger mx-1" onClick={handleClearClick}>
          Clear text{" "}
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{text.length>0 ? 0.008 * text.split(" ").length :0 } Minutes to read..</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter some text to preview here"}</p>
      </div>
    </>
  );
}
