// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar.js'
import TextForm from './component/TextForm';
// import Demo from './component/demo.js'
import About from './component/About';
import React, { useState } from 'react';
import Alert from './component/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   useLocation,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";


let Name = "Jay Bhagvan";
// let Name = prompt("Enter your name : ");
function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState();

  let toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      showAlert("Dark Mode is enabled", "success");
    }
    else {
      setMode("light");
      showAlert("Light Mode is enabled", "success");
    }
  }

  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }

  return (
    <>

      {/* <Router> */}
        {/* <h1>Jay Bhagvan React</h1>
      <h1>Jay Bhagvan React {name}</h1> */}

        {/* <Navbar/> */}
        <Navbar title={Name} aboutText="Text" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} showAlert={showAlert} />

        {/* <Routes> */}
          {/* <Route path="/about" element={}> */}

          {/* </Route> */}
          {/* <Route path="/" element={}> */}
            <div className="container my-3">
              <TextForm heading="Enter the Text for Analyze" />
            </div>
          {/* </Route> */}
        {/* </Routes> */}

        <About />
        {/* <Demo/> */}


      {/* </Router> */}


    </>
  );
}

export default App;