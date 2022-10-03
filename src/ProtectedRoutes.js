import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";



const ProtectedRoutes = (props) => {
    const { Components } = props;
    const navigate = useNavigate();
    const mystate = useSelector((state) => state.changeLoginStatus);
    useEffect(() => {
        
        if (!mystate.userStatus) {
            console.log("navigating");
            navigate('/sign-in');
        }
})
    
    
        return (<>
            <Components />
        </>
        );
    
};



export default ProtectedRoutes;