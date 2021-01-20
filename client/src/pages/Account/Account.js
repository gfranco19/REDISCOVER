import React from "react";
import "./Account.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavTabs from "../../components/NavTabs/NavTabs";
import Uploads from "../../Uploads";

function Account() {
    return (
        <div>
            <NavTabs />
            <div className="palmsBackground">
                <br /> <br />
                <h1>@username's Account</h1>
                <Uploads />
            </div>
        </div>
    );
}

export default Account;