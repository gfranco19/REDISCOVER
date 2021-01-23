import React from "react";
import "./Account.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavTabs from "../../components/NavTabs/NavTabs";
import Uploads from "../../Uploads"

function Account() {
    return (
        <div>
            <NavTabs />
            <div className="palmsBackground">
                <br /> <br /> <br />
                    
                    <h1>Welcome</h1>
                    <Uploads />           
            </div>
        </div>
    );
}
export default Account;