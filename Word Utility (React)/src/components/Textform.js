import React, { useState } from 'react'

export default function Textform(props) {

    const handleCopy= () => {
        navigator.permissions.query({ name: "write-on-clipboard" }).then((result) => {
         if (result.state == "granted" || result.state == "prompt") {
         alert("Write access granted!");
            }
          });
    }

    const handleUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Upper Case Successful", "success")
    }
    const handleLoclick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Lower Case Successful", "success")
    }

    const handleOnchange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('')

    const clearText = () => {
        setText('')
        props.showAlert("Text Cleared", "success")
    }

  return (
    <>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea  className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8"
        style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
    </div>
    <button disabled={text.length===0} className='btn btn-primary mx-1' onClick={handleUpclick}>Convert to Uppercase</button>
    <button disabled={text.length===0} className='btn btn-primary mx-1' onClick={handleLoclick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className='btn btn-primary mx-1' onClick={clearText}>Clear Text</button>
    <button disabled={text.length===0} className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
    
    
    <div  className="conatiner mx-2 my-3">
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).length - 1} words & {text.length} charachters </p>
    </div>
    
    </div>
    </>
  
  )
}
