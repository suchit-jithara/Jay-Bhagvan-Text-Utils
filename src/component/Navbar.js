// Jay Bhagvan 
import React from 'react'
import PropTypes from 'prop-types'
import AppleIcon from '@mui/icons-material/Apple';
// import {link} from "react-router-dom";

export default function Navbar(props) {
    return (
        <nav className={`navbar bg-${props.mode} navbar-expand-lg bg-body-tertiary`} data-bs-theme={`${props.mode}`}>
            <div className="container-fluid p-2 fs-5 ">

                <AppleIcon className={`mx-3 fs-1 text-${props.mode==='light'?'dark':'light'}`} data-bs-theme={`${props.mode==='light'?'dark':'light'}`} />
                {/* <link className="navbar-brand" to="/">{props.title} React</link> */}
                <a className="navbar-brand" href="/">{props.title} React</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <link className="nav-link active" aria-current="page" to="/">Home</link> */}
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            {/* <link className="nav-link" to="/about">About</link> */}
                            <a className="nav-link" href="/about">About</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                    <div className="form-check form-switch mx-3" >
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                        <label className={`form-check-label fs-6 text-${props.mode==="light"?'dark':"light"}`} htmlhtmlFor="flexSwitchCheckDefault">{props.mode==="light"?'🌑Dark':"☀️Light"}</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Jay Bhagvan",
    aboutText: "Demo"
}