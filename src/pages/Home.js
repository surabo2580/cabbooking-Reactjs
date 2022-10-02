import React from 'react';
import Select from 'react-select'
import './home.css';
import car1 from '../images/car1.jpg'
import car2 from '../images/car2.jpg'
import { useNavigate } from "react-router-dom";
  
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
import { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
  
const Home = () => {
    const navigate = useNavigate();
    const mystate = useSelector((state) => state.changeLoginStatus);
    console.log(mystate.userStatus);
    const currentYear = (new Date().getFullYear())
    const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+currentYear

    const[pickup,setPickUp] = useState("");
    const[drop,setDrop] = useState("");
    const[date,setDate] = useState("");
    const[depart,setDepart] = useState("");
    // const[mpickup,]
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
    
    
    

    const data = {"pickup":pickup,"drop":drop,"date":date,"depart":depart};
    const FormHandle = e => {
        e.preventDefault();
        if(mystate.userStatus == false){
          alert("you need to sign in")
          navigate('/sign-in');
        }
        if(mystate.userStatus == true){
        addDataToServer(data)
        }
    }
    console.log(data);
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
      <div id="car2">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="bottom" src={car2} />
          <Card.Body>
            <Card.Title>Premium</Card.Title>
            <Card.Text>
              sedan
            </Card.Text>
            <Button variant="primary">Go</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="bottom" src={car2} />
          <Card.Body>
            <Card.Title>Premium</Card.Title>
            <Card.Text>
              sedan
            </Card.Text>
            <Button variant="primary">Go</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="bottom" src={car2} />
          <Card.Body>
            <Card.Title>Premium</Card.Title>
            <Card.Text>
              sedan
            </Card.Text>
            <Button variant="primary">Go</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="bottom" src={car1} />
          <Card.Body>
            <Card.Title>Premium</Card.Title>
            <Card.Text>
              suv
            </Card.Text>
            <Button variant="primary">Go</Button>
          </Card.Body>
        </Card>
      </div><div
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
              <input type="text" class="form-control" name="pickup" placeholder="Enter pickup point" value={pickup} onChange={(e) => onInputChangePickUp(e)} />
            </div><br></br>
            <div id="lastnamesp" class="lastname">
              <p id="hint"><strong>Enter destination point</strong></p>
              <input type="text" class="form-control" name="drop" placeholder="Enter destination point" value={drop} onChange={(e) => onInputChangeDrop(e)} />
            </div><br></br>
            <div id="date" class="date">
              <p id="hint"><strong>Enter Your CheckIn Date</strong></p>
              <input type="date" class="form-control" name="date" placeholder="Enter date" value={date} onChange={(e) => onInputChangeDate(e)} />
            </div><br></br>
            <div id="emailsp" class="email">
              <p id="hint"><strong>Enter departure time</strong></p>
              <input type="time" class="form-control" name="depart" placeholder="Enter departing time" value={depart} onChange={(e) => onInputChangeDepart(e)} />
            </div><br></br>
            <div id="btnbookbackground" className="btnbook">
              <button id="b"type="submit" class="btn btn-outline-secondary my-2 text-center mr-2">Book</button>
            </div>
          </form>
        </div>
        </div>
      </div></><footer class="footer">
        <p id="footerp">© {yearTxt} Service - Developed by Company</p>
      </footer></>
  );
}


  
export default Home;