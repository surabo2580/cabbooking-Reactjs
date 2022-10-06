import React, { useEffect, useState } from 'react';
// import { validUserName, validPassword } from '../Regex.js';
import { useSelector, useDispatch } from "react-redux";
import { changingStatus } from "../Action/index";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Table from 'react-bootstrap/Table';




const Bookings = () => {
    // var currentTime = new Date();
    var currentDateTime = new Date();
    var utc = currentDateTime.getTime() + (currentDateTime.getTimezoneOffset() * 60000);
    var nd = new Date(utc + (3600000*+5.5));
    var ist =  nd.toLocaleString();
    let arr = ist.split(',');
    console.log("IST now is : " +ist);
    
    const navigate = useNavigate();
    const mystate = useSelector((state) => state.changeLoginStatus);
    const [data, setData] = useState([]);

    const deleteBooking = (id) =>{
        axios.get("http://localhost:8080/api/auth/getbook/"+id).then(
            (response) => {
                // currentTime = currentTime.getHours()+ ":" + currentTime.getMinutes()
                //here arr[0] is the date and arr[1] is time
                var correctedDate = arr[0].split('/');
                correctedDate = correctedDate[2]+"-"+correctedDate[0]+"-"+correctedDate[1];
                //correctedDate = Date.parse(correctedDate) + 19800000;
                var currentDate = Date.parse(correctedDate) + 19800000;
                correctedDate = Date.parse(correctedDate);
                var responseDate = Date.parse(response.data.date);
                console.log("response type date ",responseDate);
                console.log("type date database",correctedDate);
                let time = arr[1].split(':')
                let correctedTime = time[0]+":"+time[1];
                console.log("correctedTime",correctedTime);
                console.log("current time " , arr[0],arr[1]);
                console.log("response date",response.data.date)
                var diff = correctedDate-responseDate;
                console.log(diff);
                if(diff == 66600000 || currentDate == responseDate){
                    console.log("after if condition",correctedDate,responseDate)
                    console.log(diff);
                    alert("you cannot cancel your bookings")
                }
                else{
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
                console.log("00000000000000",response.data.depart);
            }
        )
        // axios.delete("http://localhost:8080/api/auth/delete-booking/" + id).then(
        //     (response) => {
                
                
        //         if (response.status==200) {
        //           alert("your bookings has been deleted")
        //           setData(current =>
        //             current.filter(element => {
        //                 console.log(element.id,id);
        //                 return element.id !==id;
        //             }),
        //         );
                  
                  
        //       }
        //     }, (error) => {
        //         console.log(error);
        //         alert("Operation failed");
        //     }
        // );

    }



    useEffect(() => {
        fetch("http://localhost:8080/api/auth/bookings")
            .then(response => response.json())
                        
                        .then(data1 => setData(data1))
                }, [])
    
    console.log(data);
    return (
        
        <div className="cartdisplaydiv">
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>UserName</th>
                    <th>Pickup</th>
                    <th>Drop</th>
                    <th>Date</th>
                    <th>Depart</th>
                    </tr>
                </thead>
                <tbody>
                
                    
                    
                
                
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
                </tbody>
                
                </Table>
            <button className="checkout" onClick={()=>navigate('/payment')}>Checkout</button>
        </div>
    );
};



export default Bookings;