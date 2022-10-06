import React from 'react';
import './signin.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changingStatus } from "../Action/index";

const Contact = () => {
    const currentYear = (new Date().getFullYear())
   const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+currentYear

    const mystate = useSelector((state) => state.changeLoginStatus);
    console.log(mystate.userStatus);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [complain,setComplain] = useState("");


    const onInputChangeEmail = event => {
        setEmail(event.target.value);
      };
    const onInputChangePhone = event => {
    setPhone(event.target.value);
    };
    const onInputChangecomplain = event => {
      setComplain(event.target.value);
      };

    const data = {"email":email,"phone":phone,"complain":complain};
    const FormHandle = e => {
        e.preventDefault();
        addDataToServer(data)
    }

    const addDataToServer = (data) => {
        console.log(data);
        axios.post("http://localhost:8080/api/auth/savecomplain", data).then(
            (response) => {
                
                console.log(response);
                // alert("user signed in Successfully");
                if (response.status==200) {
                  setComplain("");
                  setEmail("");
                  setPhone("");
                  alert("your complained has been filled ");
                  console.log("navigating");
                  navigate('/contact');
              }
            }, (error) => {
                console.log(error);
                alert("something went wrong");
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

      <div className='complain'>
        <form onSubmit={e => FormHandle(e)} className="check-credentials-form">
          <div id="email" class="form-group">
            <p id="hint"><strong>Enter your email</strong></p>
            <input id="usertext" type="text" class="form-control" name="email" placeholder="Enter your email" value={email} onChange={(e) => onInputChangeEmail(e)} required />
          </div><br></br>
          <div id="mobile" class="form-group">
            <p id="hint"><strong>Enter your phone number</strong></p>
            <input id="usertext" type="number" class="form-control" name="number" placeholder="Enter your mobile number" value={phone} onChange={(e) => onInputChangePhone(e)} required />
          </div><br></br>
          <div id="complain" class="form-group">
            <p id="hint"><strong>write your complain</strong></p>
            <input id="passtext" type="text" class="form-control" name="complain" placeholder="Enter your complain here" value={complain} onChange={(e) => onInputChangecomplain(e)} required />
          </div><br></br>

          <div className="btnsigninbackground">
            <button id="b" type="submit" class="btn btn-outline-secondary my-2 text-center mr-2">Submit</button><br></br>

          </div>
        </form>
      </div>
    </div><footer class="footer">
        <p id="footerp">© {yearTxt} Service - Developed by Company</p>
      </footer></>
  );
};

export default Contact;