import React from "react";
import './Help.css';

function Help({helpLeave}) {
    return(
        <div onMouseLeave={helpLeave} className="help">
            <p>DONATE</p>
            <hr />
            <p>EVENTS AND FUNDRAISING</p>
            <hr />
            <p>VOLUNTEER</p>
            <hr />
            <p>WORK WITH US</p>
            <hr />
            <p>BECOME A PARTNER</p>
            <hr />
            <p>CONTACT OUR TEAM</p>
            <hr />

        </div>
    )
}

export default Help;