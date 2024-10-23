
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/users/Header';
import Home from './components/users/Home';
import About from './components/users/About';
import Contact from './components/users/Contact';
import Logo from './components/users/Logo';



function App() {
  return (
          <>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/logo" element={<Logo/>}/>
           
          </Routes>
          </BrowserRouter>
          </> 
  );
}

export default App;
