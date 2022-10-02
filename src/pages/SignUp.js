import React from 'react';
import { useState } from 'react';
import './signup.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
  
const SignUp = () => {
    const navigate = useNavigate();
    const[username,setUserName] = useState("")
    const[firstname,setFirstName] = useState("");
    const[lastname,setLastName] = useState("");
    const[email,setEmail] = useState("");
    const[phone,setPhone] = useState("");
    const [password,setPassword] = useState("");
    const [confirmpassword,setConfirmPassword] = useState("");

    const onInputChangeUserName = event => {
        setUserName(event.target.value);
      };
    const onInputChangeFirstName = event => {
        setFirstName(event.target.value);
      };
    const onInputChangeLastName = event => {
    setLastName(event.target.value);
    };
    const onInputChangePhone = event => {
        setPhone(event.target.value);
        };
    const onInputChangeEmail = event => {
        setEmail(event.target.value);
      };
    const onInputChangePassword = event => {
    setPassword(event.target.value);
    };
    const onInputChangeConfirmPassword = event => {
        setConfirmPassword(event.target.value);
        };

    const data = {"username":username,"firstname":firstname,"lastname":lastname,"email":email,"phone":phone,"password":password,"confirmpassword":confirmpassword};
    const FormHandle = e => {
        e.preventDefault();
        addDataToServer(data)
    }
    console.log(data);
    const addDataToServer = (cred) => {
        console.log(cred);
        axios.post("http://localhost:8080/api/auth/signup", cred).then(
            (response) => {
                
                console.log(response);
                alert("user Added Successfully");
                if (response.status==200) {
                    console.log("navigating");
                    navigate('/sign-in');
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
      
      <div className='signup'>
            <form onSubmit={e => FormHandle(e)} class="check-credentials-formsp">
                
            <div id="usernamesp" class="username">
                <p id="hint"><strong>Enter username</strong></p>
                    <input type="text" class="form-control" name="username"  placeholder="Enter username" value={username} onChange={(e) => onInputChangeUserName(e)} />
                </div>
                <div id="firstnamesp" class="firstname">
                <p id="hint"><strong>Enter first name</strong></p>
                    <input type="text" class="form-control" name="firstname"  placeholder="Enter First Name" value={firstname} onChange={(e) => onInputChangeFirstName(e)} />
                </div>
                <div id="lastnamesp" class="lastname">
                <p id="hint"><strong>Enter last name</strong></p>
                    <input type="text" class="form-control" name="lastname"  placeholder="Enter Last Name" value={lastname} onChange={(e) => onInputChangeLastName(e)} />
                </div>
                <div id="phonesp" class="phone">
                <p id="hint"><strong>Enter Number</strong></p>
                    <input type="number" class="form-control" name="phone"  placeholder="Enter phone" value={phone} onChange={(e) => onInputChangePhone(e)} />
                </div>
                <div id="emailsp" class="email">
                <p id="hint"><strong>Enter email</strong></p>
                    <input type="text" class="form-control" name="email"  placeholder="Enter email" value={email} onChange={(e) => onInputChangeEmail(e)} />
                </div>
                <div id="passwordsp" class="password">
                <p id="hint"><strong>Enter password</strong></p>
                    <input type="password" class="form-control" name="password"  placeholder="Enter password" value={password} onChange={(e) => onInputChangePassword(e)} />
                </div>
                <div id="confirmpasswordsp" class="confirmpassword">
                <p id="hint"><strong>Re-Enter password</strong></p>
                    <input type="password" class="form-control" name="confirmpassword"  placeholder="Re Enter password" value={confirmpassword} onChange={(e) => onInputChangeConfirmPassword(e)} />
                </div><br></br>
                <div className="btnsignup">
                    <button id="b" type="submit" class="btn btn-outline-secondary my-2 text-center mr-2">Sign Up</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default SignUp;