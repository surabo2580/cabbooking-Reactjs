import './ForgotPassword.css';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";





const ForgetPassword = () => {
    const mystate = useSelector((state) => state.changeLoginStatus);
    const navigate=useNavigate();
    const [forgotuser, setForgotUser] = useState({
        username:"",
        newpassword: "",
        confirmpassword:""
    });



   const setNewPassword = () => {
        if (forgotuser.newpassword == forgotuser.confirmpassword) {



           axios.put("http://localhost:8080/api/auth/setnewpassword/", forgotuser).then(



               (response) => {
                    alert("password changed Successfully!");
                    console.log(response.data);
                    navigate('/sign-in');



               }, (error) => {



                   //console.log(error);



                   alert(error.response.data.message);



               }



           );
        }
        else {
            alert("New Password and Confirm Password should be same");
        }
    }
    return (

        <div className="passwordchangediv">
            <table cellSpacing="15">
                <tr>
                   <p id="p1">Enter user name</p>
                    <td><input style={{color:"white"}} type="text" onChange={(e) => setForgotUser(existingValues => ({
                        ...existingValues,
                        username: e.target.value,
                    }))} placeholder="Enter User Name"></input></td>
                </tr>
                <tr>
                     <p id="p1">Enter New password</p>
                    <td><input type="password" onChange={(e) => setForgotUser(existingValues => ({
                        ...existingValues,
                        newpassword: e.target.value,
                    }))} placeholder="Enter New Password"></input></td>
                </tr>
                <tr>
                    <p id="p1">Re Enter Password</p>
                    <td><input type="password" onChange={(e) => setForgotUser(existingValues => ({
                        ...existingValues,
                        confirmpassword: e.target.value,
                    }))} placeholder="Enter New Password Again"></input></td>
                </tr>
            </table>
            <button className="changePassword" onClick={setNewPassword}>Set Password</button>
        </div>
    );
};



export default ForgetPassword;