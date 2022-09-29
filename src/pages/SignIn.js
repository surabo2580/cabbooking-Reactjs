import React from 'react';
import './signin.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
  
const SignIn = () => {
    const navigate = useNavigate();
    const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");

    const onInputChangeUserName = event => {
        setUserName(event.target.value);
      };
    const onInputChangePassword = event => {
    setPassword(event.target.value);
    };

    const data = {"username":username,"password":password};
    const FormHandle = e => {
        e.preventDefault();
        addDataToServer(data)
    }

    const addDataToServer = (cred) => {
        console.log(cred);
        axios.post("http://localhost:8080/api/auth/signin", cred).then(
            (response) => {
                
                console.log(response);
                // alert("user signed in Successfully");
                if (response.status==200) {
                  console.log("navigating");
                  navigate('/');
              }
            }, (error) => {
                console.log(error);
                alert("Operation failed");
            }
        );
    }

  return (
    <div
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
                    <input type="text" class="form-control" name="username"  placeholder="Enter username" value={username} onChange={(e) => onInputChangeUserName(e)} />
                </div><br></br>
                <div id="password" class="form-group">
                    <p id="hint"><strong>Enter password</strong></p>
                    <input type="password" class="form-control" name="password"  placeholder="Enter password" value={password} onChange={(e) => onInputChangePassword(e)} />
                </div><br></br>
                
                <div className="btnsignin">
                    <button type="submit" class="btn btn-outline-secondary my-2 text-center mr-2">Sign In</button><br></br>
                    
                </div>
            </form>
        </div>
    </div>
  );
};

export default SignIn;