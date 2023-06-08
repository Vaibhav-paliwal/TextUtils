import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "Success")
  };

  const handleLoClick = () => {
    // console.log("UpperCase was clicked" + text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "Success")
  };

  const handleClearClick = () => {
    // console.log("UpperCase was clicked" + text)
    let newText = (' ');
    setText(newText);
    props.showAlert("Cleared the string", "Success")
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied the text", "Success")
  };

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Handled extra spaces", "Success")
  }

  const handleOnChange = (event) => {
    // console.log("On Change")
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text = "new text"  (wrong way to change the state)
  // setText("new text")  (Right way to change the state)
  return (
    <>
      <div className="container" style= {{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==='dark'?'grey':'white',
                    color:props.mode==='light'?'#042743':'white'}}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lower Case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove ExtraSpaces
        </button>
      </div>
      <div className="container my-2" style= {{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
