import React from 'react';
import go from './go.png';
import { useSelector, useDispatch } from "react-redux";
import { changingStatus } from '../../Action';
import Popup from 'reactjs-popup';
import './index.css'
import "bootstrap/dist/css/bootstrap.css";
import { useState } from 'react';


import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import { useNavigate } from "react-router-dom";
  
const Navbar = () => {
  
  // const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mystate = useSelector((state) => state.changeLoginStatus);
  // const handleShow = () => setShow(true);
  return (
    <>
      <Nav>
        <Bars />
        <NavLink to='/' activeStyle>
        <img src={go} width="90" height="70"></img>
        </NavLink>
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          {/* {mystate.userStatus && (< NavBtn onClick={() => dispatch(changingStatus(false, -1, "null", "null"))}>LogOut</NavBtn>)} */}
          {mystate.userStatus===false?
          <NavLink to='/sign-in' activeStyle>
            Sign In

          </NavLink>:< NavLink style={{color:"white"}} onClick={() => dispatch(changingStatus(false, -1, "null", "null"))}>LogOut</NavLink>
          }
           {mystate.userStatus && (<NavBtn ><NavBtnLink style={{backgroundColor:"black",color:"white",border:"none"}} to=''><b>{mystate.username}</b></NavBtnLink></NavBtn>)}


           


          
            
          {mystate.userStatus===true?
          <div >
           <Popup  trigger={<button>{mystate.username}</button>} 
            position="down"><br></br><br></br>
              
              
              <div style={{backgroundColor:"grey"}} id="popup">{mystate.userStatus && (<NavBtn><NavBtnLink to='/profile'><b>username<br></br>{mystate.username}</b></NavBtnLink></NavBtn>)}</div>
              <div style={{backgroundColor:"grey"}} id="popup">{mystate.userStatus && (<NavBtn><NavBtnLink to='/profile'><b>profile settings</b></NavBtnLink></NavBtn>)}</div>
              
            </Popup>
            </div>:<div >
           <Popup  trigger={<button></button>} 
            position="down"><br></br><br></br>
              
              
              <div style={{backgroundColor:"grey"}} id="popup">{mystate.userStatus && (<NavBtn><NavBtnLink to='/profile'><b>username<br></br>{mystate.username}</b></NavBtnLink></NavBtn>)}</div>
              <div style={{backgroundColor:"grey"}} id="popup">{mystate.userStatus && (<NavBtn><NavBtnLink to='/profile'><b>profile settings</b></NavBtnLink></NavBtn>)}</div>
              
            </Popup>
            </div>
}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
      {/* style={{backgroundColor:"black",color:"white",border:"none"}} */}


    </>
  );
};
  
export default Navbar;