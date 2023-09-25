import React, { useState } from "react";

export default function TextForm(props) {
     
    const handleUpClick = ()=>{
        // console.log("Button clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Upper Case", "success")
    }
    const handleDownClick = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lower Case", "success")
    }
    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success")
    }
    const handleClearClick = ()=>{
        setText("");
    }
    const textToSpeak = () =>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const handleOnCHange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState("")
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text} onChange ={handleOnCHange} style={{backgroundColor: props.mode === 'light'?'white':'grey', color:props.mode === 'light'?'black':'white' }}id="myBox" rows="8" ></textarea>
            </div>
            <button className="btn btn-primary MX-2" onClick = {handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-2" onClick = {handleDownClick}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={textToSpeak}>Text to Speak</button>
            <button className="btn btn-primary " onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-4" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h3>Your Text Summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length } Minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length > 0?text:"Enter Something to preview it here"}</p>
        </div>
        </>
    )
}
