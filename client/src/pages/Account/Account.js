import React from "react";
import "./Account.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavTabs2 from "../../components/NavTabs2/NavTabs2";

function Account() {
    return (
        <div>
            <NavTabs2 />
            <div className="palmsBackground">
                <br /> <br />
                <h1>@username's Account</h1>
            </div>
        </div>
    );
}

export default Account;