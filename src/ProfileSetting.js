import React from 'react';
import { useNavigate } from "react-router-dom";
  
const About = () => {
    const navigate = useNavigate();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Center',
        height: '100vh'
      }}
    >
      <h1 style={{color:"black"}}>change password</h1><br></br>
      <button id="b" onClick={()=>navigate('/change-password')} type="submit" class="btn btn-outline-secondary my-2 text-center mr-2">Change Password</button><br></br>

    </div>
  );
};
  
export default About;