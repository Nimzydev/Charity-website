import React from "react";
import './WhatWeDo.css'


function WhatWeDo({whatWeDoLeave}){
    return(
        <div onMouseLeave={whatWeDoLeave} className="wwd">
            <p>OUR VISSION</p>
            <hr />
            <p>OUR PROGRAMS</p>
            <hr />
            <p>MISSION STATEMENT</p>
            <hr />
            <p>OUR WORK IN THE UK</p>
            <hr />
            <p>REUNITING FAMILIES</p>
            <hr />
            <p>OUR IMPACT STORIES</p>
            <hr />
            <p>OUR POLICY</p>
            <hr />

        </div>
    )
}

export default WhatWeDo