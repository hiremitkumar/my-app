import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import React , {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [Title, setTitle] = useState("Enable DarkMode");

  const toggleMode=()=>{
      if (Mode==='light') {
        setMode('dark');
        setTitle('Enable LightMode')
        document.body.style.backgroundColor='grey'
      } else {
        setMode('light')
        setTitle('Enable DarkMode')
        document.body.style.backgroundColor='white'
      }
  }

  return (
        <>
        <Router>
        <Navbar title="Amul" Mode={Mode} Title={Title} toggleMode={toggleMode}/>
        <div className="container my-5">
        <Routes>
          <Route exact path="/about" element={<About/>}/>
          {/* we use exact because if we dont then react should be doing partial matching so we use exact befor the path */}
          <Route exact path="/" element={<Textform Mode={Mode}/>}/>
        </Routes>
        </div>
        {/* <div className="container">
          <About/>
        </div> */}
        </Router>
      

        </>
  );
}

export default App;
