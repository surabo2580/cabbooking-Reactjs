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
import Bookings from './pages/Bookings'
import PasswordChange from './pages/PasswordChange';
import ProtectedRoutes from './ProtectedRoutes';
import ProfileSettings from './ProfileSetting';
import Book from './pages/Book';
import ForgetPassword from './pages/ForgetPassword';

  
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/payment' element={<ProtectedRoutes Components={Payment}/>}/>
        <Route path='/bookings' element={<ProtectedRoutes Components={Bookings}/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/book' element={<Book/>} />
        <Route path='/profile-settings' element={<ProfileSettings/>}/>
        <Route path='/change-password' element={<ProtectedRoutes Components={PasswordChange}/>} />
        <Route path='/forgetpassword' element={<ForgetPassword/>} />
        

      </Routes>
    </Router>
  );
}
  
export default App;
