import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light')

  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout( () =>{
      setAlert(null)
    },2000)
  }

  const removeCls = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
  }

let toggleMode = (cls) => {
  removeCls();
    document.body.classList.add('bg-'+cls)
    if(mode == 'light'){
        document.body.style.backgroundColor = 'grey';
        document.body.style.color = 'white';
        setmode('dark');
        showAlert("Dark mode has been enabled", "success")
    }
    else{
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'dark';
      setmode('light');
      showAlert("Light mode has been enabled", "success")
    }
}

  return (
    <>
    <Router> 
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    
    <div className="container">
      <Routes>
        <Route exact path="/about" element={<About mode={mode}/>}/>
        <Route exact path="/" element={<Textform heading="Enter the text" mode={mode} showAlert={showAlert}/>}/>
      </Routes>
  
    </div>
    </Router>
    </>
   
  );
}

export default App;

