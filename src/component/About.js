// Jay Bhagvan 
import React, { useState } from 'react'

export default function About() {

    let [style, setStyle] = useState({
        backgroundColor: 'white',
        color: "black",
        borderRadius: "5px"
    });

    const [btnText, setbtnText] = useState("🌑 Dark");

    let toggle = () => {
        if (style.backgroundColor === 'white') {
            setStyle({
                backgroundColor: 'black',
                color: 'white',
                borderRadius: "5px"
            })
            setbtnText("☀️ Light")
        }
        else {
            setStyle({
                backgroundColor: 'white',
                color: 'black',
                borderRadius: "5px"
            })
            setbtnText("🌑 Dark")
        }
    }
    return (
        <>
        <div className='container p-3' style={style}>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item" style={style}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Author Information
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                        <div className="accordion-body">
                            <strong>Suchit Jithara is a Author of this Text-Util app.</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={style}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            About this app
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <strong>This is a Text-Util app</strong> 
                            , which is use for convert text in to Upercase, Lowercase, etc.
                            you can download this text.
                            And through the Speack Text button, you can hear the text which is present in the textarea. 
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={style}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Thanks
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <strong>Thanks For ussing my Text-Util app</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <button type="button" onClick={toggle} className="btn btn-dark my-3" style={style}>{btnText}</button>
        </div>
        </>
    )
}
