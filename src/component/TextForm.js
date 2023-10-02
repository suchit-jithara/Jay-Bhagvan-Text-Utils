// Jay Bhagvan 

import React, {useState} from 'react'

export default function TextForm(props) {


    const handleUpperCaseClick = ()=> {
        // console.log("Uppercase was Clicke : ");
        let Text = text.toUpperCase();
        setText(Text);
    }

    const handleLowerCaseClick = ()=> {
        // console.log("LoweCase was Clicke : ");
        let Text = text.toLowerCase();
        setText(Text);
    }

    const handleClear = () => {
        let newText = "";
        setText(newText);
    }

    const handleDownload = () => {
    }

    const handleOnChange = (event)=> {
        // console.log("On change");
        setText(event.target.value);
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        msg.voice = window.speechSynthesis.getVoices()[0];
        window.speechSynthesis.speak(msg);
        // console.log(msg);
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className="container mb-3">
                <h1 className='my-3 fs-1'>{props.heading}</h1>
                <textarea className="form-control border-2 border-dark fs-5" id="exampleFormControlTextarea1" rows="7" value={text} onChange={handleOnChange}></textarea>
                <button className="btn btn-dark my-3 mx-3 p-3 fs-5" data-bs-theme="dark" onClick={handleUpperCaseClick}> Convert to UperCase
                </button>
                <button className="btn btn-dark my-3 mx-3 p-3 fs-5" data-bs-theme="dark" onClick={handleLowerCaseClick}> Convert to LowerCase
                </button>
                <button className="btn btn-dark my-3 mx-3 p-3 fs-5" data-bs-theme="dark" onClick={handleClear}> Clear Text
                </button>
                <button className="btn btn-dark my-3 mx-3 p-3 fs-5" data-bs-theme="dark" onClick={speak}> Speak Text
                </button>
                <button className="btn btn-dark my-3 mx-3 p-3 fs-5" data-bs-theme="dark" onClick={handleDownload}> Download
                </button>
            </div>

            <div className="container">
                <h2>Your Text Summary</h2>
                <p><span className='fw-bold'>{text.split(" ").filter((e)=>{return e.length != 0}).length} Words</span> and <span className='fw-bold'>{text.length} Charachter</span> </p>
                <p>You take approximate <span className='fw-bold'>{text.split(" ").length / 100} Minutes</span> to read</p>
                <h3>Preview</h3>
                <p>{text.length === 0 ? "Enter some text to Preview": text}</p>

            </div>
        </>
    )
}
