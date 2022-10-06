import React from 'react';
import Select from 'react-select'
import './home.css';
import car1 from '../images/car1.jpg'
import car2 from '../images/car2.jpg'
import car4 from '../images/car4.jpg'
import { useNavigate } from "react-router-dom";

import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api'

  
// const Home = () => {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'Center',
//         alignItems: 'Center',
//         height: '100vh'
//       }}
//     >
//       <h1>Home.</h1>
//     </div>
//   );
// };

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useRef, useState } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";

const center = { lat: 48.8584, lng: 2.2945 }



const Home = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],})
    const navigate = useNavigate();
    const mystate = useSelector((state) => state.changeLoginStatus);
    console.log(mystate.userStatus);
    const currentYear = (new Date().getFullYear())
    const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+currentYear
    console.log("bhaaaa")
    const[bookObject,setBookObject]=useState({
        pickup:"",
        drop:"",
        distance:0,
        fixedPrice:20,
        price:0,
        date:"",
        depart:"",

    })
    const[pickup,setPickUp] = useState("");
    const[drop,setDrop] = useState("");
    const[distance,setDistance]=useState(9);
    const[fixedPrice,setFixedPrice]=useState(20);
    const[price,setprice]=useState(0);
    // const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    // const [directionsResponse, setDirectionsResponse] = useState(null)
    const[date,setDate] = useState("");
    const[depart,setDepart] = useState("");
    const fixedRatePerKm = 20;
    if (pickup=="gachibowli" && drop=="hitex city"){
        setDistance(5);
    }
    console.log("pickup",pickup)
    console.log("price",price);
    console.log("distance",distance);
    // const[mpickup,]
    // const pickup = useRef()
    // const drop = useRef()
    const onInputChangePickUp = event => {
        setPickUp(event.target.value);
      };
    const onInputChangeDrop = event => {
    setDrop(event.target.value);
    };
    const onInputChangeDate = event => {
        setDate(event.target.value);
        };
    const onInputChangeDepart = event => {
        setDepart(event.target.value);
      };
    
    
    

    const data = {"username":mystate.username,"pickup":pickup,"drop":drop,"date":date,"depart":depart,"distance":distance};
    const FormHandle = e => {
        e.preventDefault();
        // if(mystate.userStatus == false){
        //   alert("you need to sign in")
        //   navigate('/sign-in');
        // }
        if (pickup=="banjara hills" && drop=="hitex city"){
            //setDistance(9);
            setprice(fixedRatePerKm*distance);
            console.log("price new ++++",price);
    
        }
        // if(mystate.userStatus == true){
        // addDataToServer(data)
        // }
    }
    console.log("++++++data",data);
    const addDataToServer = (cred) => {
        console.log(cred);
        
        axios.post("http://localhost:8080/api/auth/book", cred).then(
            (response) => {
                console.log(response.status);
                
                if(response.status==200 ){

                  setPickUp("");
                  setDrop("");
                  setDate("");
                  setDepart("");
                }
                alert("you are redirecting to payment page")
                navigate('/payment');
            }, (error) => {
                console.log(error);
                alert("Operation failed");
            }
        );
    }

  return (

    <><>
    <div id="main">

      
      <div id="cars"><br></br>
      <h1>Go cabs</h1>
      <CardGroup>
      
      <Card>
        <Card.Img variant="top" src={car1} />
        <Card.Body>
          <Card.Title>sedan</Card.Title>
          <Card.Text>
           premium
          </Card.Text>
          <Button variant="primary">Go</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={car2} />
        <Card.Body>
          <Card.Title>suv</Card.Title>
          <Card.Text>
            premium
          </Card.Text>
          <Button variant="primary">Go</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={car4} />
        <Card.Body>
          <Card.Title>van</Card.Title>
          <Card.Text>
           premium
          </Card.Text>
          <Button variant="primary">Go</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>

      </div>
      
      <div
      
        style={{
          display: 'flex',
          justifyContent: 'Center',
          alignItems: 'Center',
          height: '100vh'
        }}
      >

        <div className='home'>
          <form onSubmit={e => FormHandle(e)} class="check-credentials-book">
            <br></br>
            <div id="pickup" class="pickup">
              <p id="hint"><strong>Enter pickup point</strong></p>
              {/* <Select id="selectCity"  placeholder="Select City" options={cityList} onChange={handleCityChanges}>City</Select> */}
              <input type="text" class="form-control" name="pickup" placeholder="Enter pickup point" value={pickup} onChange={(e) => onInputChangePickUp(e)} required />
            </div><br></br>
            <div id="lastnamesp" class="lastname">
              <p id="hint"><strong>Enter destination point</strong></p>
              <input type="text" class="form-control" name="drop" placeholder="Enter destination point" value={drop} onChange={(e) => onInputChangeDrop(e)} required />
            </div><br></br>
            <div id="date" class="date">
              <p id="hint"><strong>Enter Your CheckIn Date</strong></p>
              <input type="date" class="form-control" name="date" placeholder="Enter date" value={date} onChange={(e) => onInputChangeDate(e)} required />
            </div><br></br>
            <div id="emailsp" class="email">
              <p id="hint"><strong>Enter departure time</strong></p>
              <input type="time" class="form-control" name="depart" placeholder="Enter departing time" value={depart} onChange={(e) => onInputChangeDepart(e)} required/>
            </div><br></br>
            <div id="btnbookbackground" className="btnbook">
              <button id="b"type="submit" class="btn btn-outline-secondary my-2 text-center mr-2">Book</button>
              {/* <button id="b" onClick={()=>navigate('/change-password')} type="submit" class="btn btn-outline-secondary my-2 text-center mr-2">Change Password</button><br></br> */}

            </div>
          </form>
        </div>
        </div>
        
      </div><br></br>
      <h1>Go Tours</h1>
      <div id="tours"><br></br>
      
      {/* <p> Go tours comes witj a </p> */}
      <CardGroup>
      
      <Card>
        <Card.Img variant="top" src={car1} />
        <Card.Body>
          <Card.Title>shimla</Card.Title>
          <Card.Text>
           price INR 30000
          </Card.Text>
          <Button variant="primary">Go</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={car2} />
        <Card.Body>
          <Card.Title>Goa</Card.Title>
          <Card.Text>
            price INR 15000
          </Card.Text>
          <Button variant="primary">Go</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={car4} />
        <Card.Body>
          <Card.Title>cheerapunji</Card.Title>
          <Card.Text>
           price INR 20000
          </Card.Text>
          <Button variant="primary">Go</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>

      </div>
      
      <br></br></><footer class="footer">
        <p id="footerp">© {yearTxt} Service - Developed by Company</p>
      </footer></>
      
  );
}


  
export default Home;