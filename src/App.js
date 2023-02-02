import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
  <Routes>
    
         <Route exact path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Portfolio" element={<Portfolio/>} />
          <Route path="/Contact" element={<Contact/>} />
  </Routes>
    </BrowserRouter>
  );
}

export default App;
