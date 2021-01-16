import React from "react";
import "./Account.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavTabs from "../../components/NavTabs/NavTabs";

function Account() {
    return (
        <div>
            <NavTabs />
            <div className="palmsBackground">
                <br /> <br />
                <h1>@username's Account</h1>
            </div>
        </div>
    );
}

export default Account;