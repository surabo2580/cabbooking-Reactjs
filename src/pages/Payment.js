import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import barcode from '../images/barcode.png';
import paytm from '../images/paytm.jpg';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './payment.css';
import { useSelector, useDispatch } from "react-redux";
import  { useEffect, useState } from 'react';


  
const Payment = () => {
    const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("http://localhost:8080/api/auth/getbook/"+mystate.userid)
    //         .then(response => response.json())
                        
    //                     .then(data => setData(data))
    //             }, [])

    const mystate = useSelector((state) => state.changeLoginStatus);
    console.log(data)
    console.log(mystate.userStatus);
    const FormHandle = e => {
        e.preventDefault();
        // fetchDataFromServer()
    }
    console.log(mystate.userid);

    // const fetchDataFromServer = (id) => {
    //     console.log("id is ",id);
    //     axios.get("http://localhost:8080/api/auth/getbook",id).then(
    //         (response) => {
    //             console.log("state id",mystate.userid);
    //             console.log(response);
                
    //         }, (error) => {
    //             console.log(error);
    //             alert("data not fetched");
    //         }
    //     );
    //}
  return (
    <><><div id="payment">
          <img src={paytm} width="150" height="150"></img>



      </div><div className="qrcode">
                
              <img src={barcode} width="200" height="200"></img>
          </div></><form onSubmit={e => FormHandle(e)} class="check-credentials-book">
              <div id="btnbookbackground" className="btnbook">

                  <button id="b" type="submit" class="btn btn-outline-secondary my-2 text-center mr-2">pay</button>
              </div>
          </form></>
  );
};
  
export default Payment;