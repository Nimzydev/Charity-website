import React from 'react'
import './AboutUs.css'


function AboutUs({aboutMouseLeave}){
    return(
        <div onMouseLeave={aboutMouseLeave} className='about-us'>
            <p>WHO WE ARE</p>
            <hr />
            <p>WHAT WE DO</p>
            <hr />
            <p>WHO WE WORK WITH</p>
            <hr />
            <p>OUR PARTNERS</p>
            <hr />
            <p>CONTACT US</p>
            <hr />
            <p>OUR HISTORY</p>
            <hr />
            <p>OUR FINANCES</p>
            <hr />

        </div>
    )
}


export default AboutUs;