import './App.css';
import About from './components/About';
import Alert from './components/Alert'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import Service from './components/Service';
import Shop from './components/Shop';
import ContactUs from './components/ContactUs';
import React , {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Shipping from './components/Shipping';
import Returns from './components/Returns';
import FAQ from './components/FAQ';
import Login from './components/Login';


function App() {
  const [mode, setMode] = useState('light'); // 'light' or 'dark'
  const[alert,setAlert] = useState(null);

    const showAlert = (message , type) =>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500)
    }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#333';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
    }
  };
   
  return (
    <>
    <Router>
      <Navbar title="GreenishORA" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className = "container my-3 ">
        <Routes>
      <Route path="/about" element={<About mode={mode} />} />
      <Route path="/" element={<Home showAlert={showAlert} heading="Enter Text Here" mode={mode} />} />
      <Route path="/Shop" element={<Shop mode={mode} />} />
      <Route path="/Service" element={<Service mode={mode} />} />
      <Route path="/ContactUs" element={<ContactUs mode={mode} />} />
      <Route path="/Shipping" element={<Shipping mode={mode} />} />
      <Route path="/Returns" element={<Returns mode={mode} />} />
      <Route path="/FAQ" element={<FAQ mode={mode} />} />
      <Route path="/Login" element={<Login mode={mode} />} />
    </Routes>
      </div>
      <Footer/>
    </Router>
    
    </>
  );
}

export default App;