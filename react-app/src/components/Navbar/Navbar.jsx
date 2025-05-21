import React, { useState } from 'react';
import './Navbar.css'
import { IoIosArrowDown } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import {useNavigate} from "react-router-dom"; 
import logo from '../../../public/aelenda.jpg' 
import AboutUs from '../../Dropdowns/AboutUs/AboutUs';
import WhatWeDo from '../../Dropdowns/WhatWeDo/WhatWeDo';
import Help from '../../Dropdowns/Help/Help';


const Navbar = () => {
    const [aboutDropDown, setAboutDropDown] = useState(false)
    const [whatWeDoDropDown, setWhatWeDoDropDown] = useState(false)
    const [helpDropDown, setHelpDropDown] = useState(false)
    const navigate = useNavigate();

    const [menu, setMenu] = useState('home')

    const homeActive = () => {
        navigate('/')
        setMenu('home')
    }

    const aboutMouseEnter = () => {
        if (window.innerWidth < 950) {
            setAboutDropDown(false)
        } else {
            setAboutDropDown(true)
            setWhatWeDoDropDown(false)
            setHelpDropDown(false)
        }
    }

    const aboutMouseLeave = () => {
        if (window.innerWidth < 950) {
            setAboutDropDown(false)
        } else {
            setAboutDropDown(false)
        }
    }

    const aboutActive = () => {
        navigate('/about')
        setMenu('about')
    }

    const whatWeDoEnter = () => {
            if (window.innerWidth < 950) {
                setWhatWeDoDropDown(false)
            } else {
                setWhatWeDoDropDown(true)
                setAboutDropDown(false)
                setHelpDropDown(false)
            }
    }
        

    const whatWeDoLeave = () => {
        if (window.innerWidth < 950) {
            setWhatWeDoDropDown(false)
        } else {
            setWhatWeDoDropDown(false)
            setHelpDropDown(false)
        }
    }

    const projectActive = () => {
        navigate('/projects')
        setMenu('projects')
    }


    const helpEnter = () => {
        if (window.innerWidth < 950) {
            setHelpDropDown(false)
        } else {
            setHelpDropDown(true)
            setAboutDropDown(false)
            setWhatWeDoDropDown(false)
        }
    }

    const helpLeave = () => {
        if (window.innerWidth < 950) {
            setHelpDropDown(false)
        } else {
            setHelpDropDown(false)
        }
    }




    const donateActive = () => {
        navigate('/donate')
        setMenu('donate')
    }


    return(
    <div className='navbar'>
    <img onClick={homeActive} className='logo-img' src={logo}/>
        <ul className='nav-menu'>
            <li onClick={homeActive} onMouseEnter={aboutMouseEnter} className={menu==='home'? "active": ""}>
                ABOUT US <IoIosArrowDown className='arrow-btn' />
                 {aboutDropDown && <AboutUs aboutMouseLeave={aboutMouseLeave}/>}
                </li>
            <li onClick={aboutActive} onMouseEnter={whatWeDoEnter} className={menu==='about'? "active": ""}>
                WHAT WE DO  <IoIosArrowDown className='arrow-btn' />
                {whatWeDoDropDown &&(<WhatWeDo whatWeDoLeave={whatWeDoLeave}/>)}
                </li>
            <li onClick={projectActive} className={menu==='projects'? "active": ""}>
                PROJECTS      <IoIosArrowDown className='arrow-btn' />
                </li>
            <li onClick={donateActive} onMouseEnter={helpEnter} className={menu==='donate'? "active": ""}>
                HOW YOU CAN HELP 
                <IoIosArrowDown className='arrow-btn' />: 
                {helpDropDown && <Help helpLeave={helpLeave} />}
                </li>
            <IoMdMenu/>
             </ul>




    </div>
    )
}

export default Navbar 