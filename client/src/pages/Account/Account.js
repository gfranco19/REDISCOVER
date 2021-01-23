import React, {useState, useEffect} from 'react';
import "./Account.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavTabs from "../../components/NavTabs/NavTabs";
import Uploads from "../../Uploads"

function Account(googleUser) {
    //gets login info and use it to render on page
    const [user] = useState(JSON.parse(localStorage.getItem('profile')));

    return (
        
        <div>
            <NavTabs />
            <div className="palmsBackground">
                <br /> <br /> <br />
                    
                    <h1>Welcome {user.result.name}</h1>
                    <Uploads />           
            </div>
        </div>
    );
}
export default Account;