import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Payment from './pages/Payment';
  
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
    </Router>
  );
}
  
export default App;
