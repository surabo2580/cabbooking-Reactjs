import React from 'react';
import './signin.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changingStatus } from "../Action/index";


const PasswordChange1 = () => {
    const currentYear = (new Date().getFullYear())
   const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+currentYear

    const mystate = useSelector((state) => state.changeLoginStatus);
    console.log(mystate.userStatus);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [oldPassword,setOldPassword]=useState("");
    const [newPassword,setNewPassword]=useState("");

   const onInputChangeOldPassword = event => {
        setOldPassword(event.target.value);
      };
    const onInputChangeNewPassword = event => {
    setNewPassword(event.target.value);
    };

    const passwords = {"oldPassword":oldPassword,"newPassword":newPassword};
    const FormHandle = e => {
        e.preventDefault();
        addDataToServer(passwords)
    }

    const addDataToServer = (passwords) => {
        console.log(passwords);
        axios.put("http://localhost:8080/api/auth/change-password/" + mystate.userid, passwords).then(



           (response) => {
                alert("password changed Successfully!");
                console.log(response.data);



           }, (error) => {



               //console.log(error);



               alert(error.response.data.message);



           }



       );
    }

        

  return (
    <><div
      style={{
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Center',
        height: '100vh'
      }}
    >

      <div className='signin'>
        <form onSubmit={e => FormHandle(e)} className="check-credentials-form">
          <br></br>
          <div id="email" class="form-group">
            <p id="hint"><strong>Enter username</strong></p>
            <input id="usertext" type="text" class="form-control" name="username" placeholder="Enter username" value={username} onChange={(e) => onInputChangeUserName(e)} required />
          </div><br></br>
          <div id="password" class="form-group">
            <p id="hint"><strong>Enter password</strong></p>
            <input id="passtext" type="password" class="form-control" name="password" placeholder="Enter password" value={password} onChange={(e) => onInputChangePassword(e)} required />
          </div><br></br>

          <div className="btnsigninbackground">
            <button id="b" type="submit" class="btn btn-outline-secondary my-2 text-center mr-2">Sign In</button><br></br>

          </div>
        </form>
      </div>
    </div><footer class="footer">
        <p id="footerp">© {yearTxt} Service - Developed by Company</p>
      </footer></>
  );
};

export default PasswordChange1;