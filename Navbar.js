import React, { useState } from "react";
import './Navbar.css';
import logo from '../assets/logo.png'
import contact from '../assets/contact.png';
import menu from '../assets/menu1.png'
import { Link } from "react-scroll";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return(
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to="skills" spy={true} offset={-30} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to="works" spy={true} offset={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>
                <Link activeClass="active" to="clients" spy={true} offset={-80} duration={500} className="desktopMenuListItem">Clients</Link>
            </div>
            <button className="desktopMenuBtn" onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior : 'smooth'});
            }}>
                <img src={contact} alt="" className="desktopMenuImg"/>Get in Touch
            </button>

            <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display:showMenu? 'flex':'none'}}>
                <Link activeClass="active" to="intro" spy={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to="skills" spy={true} offset={-30} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass="active" to="works" spy={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass="active" to="clients" spy={true} offset={-80} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Clients</Link>
                <Link activeClass="active" to="contact" spy={true} offset={-80} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact Me</Link>
            </div>
        </nav>
    )
}

export default Navbar
