import React, { useEffect, useState } from 'react';
// import { validUserName, validPassword } from '../Regex.js';
import { useSelector, useDispatch } from "react-redux";
import { changingStatus } from "../Action/index";
import { useNavigate } from "react-router-dom";
import axios from 'axios';




const Bookings = () => {
    
    const navigate = useNavigate();
    const mystate = useSelector((state) => state.changeLoginStatus);
    const [data, setData] = useState([]);

    const deleteBooking = (id) =>{
        axios.delete("http://localhost:8080/api/auth/delete-booking/" + id).then(
            (response) => {
                
                
                if (response.status==200) {
                  alert("your bookings has been deleted")
                  setData(current =>
                    current.filter(element => {
                        console.log(element.id,id);
                        return element.id !==id;
                    }),
                );
                  
                  
              }
            }, (error) => {
                console.log(error);
                alert("Operation failed");
            }
        );

    }



    useEffect(() => {
        fetch("http://localhost:8080/api/auth/bookings")
            .then(response => response.json())
                        
                        .then(data1 => setData(data1))
                }, [])
    
    console.log(data);
    return (
        <div className="cartdisplaydiv">
            <table>
                <tr class="heading">
                    <td>UserName</td>
                    <td>Pickup</td>
                    <td>Drop</td>
                    <td>Date</td>
                    <td>Depart</td>
                    
                </tr>
                {
                    data.map((item) =>
                        
                        <><tr>
                            <td>{item.username}</td>
                            <td>{item.pickup}</td>
                            <td>{item.drop}</td>
                            <td>{item.date}</td>
                            <td>{item.depart}</td>

                        </tr><button id="b" onClick={()=>deleteBooking(item.id)} type="submit" class="btn btn-outline-secondary my-2 text-center mr-2">Cancel Booking</button><br></br></>




                   )
                }
                
            </table>
            <button className="checkout" onClick={()=>navigate('/payment')}>Checkout</button>
        </div>
    );
};



export default Bookings;