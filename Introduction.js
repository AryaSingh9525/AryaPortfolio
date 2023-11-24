import React from "react";
import './Introduction.css';
import bg from '../assets/aryaphoto.jpg';
import btnImg from '../assets/hireme.png'
import { Link } from "react-scroll";

const Introduction = () => {

    const handleDownload = () => {
        const downloadLink = '/AryaSingh_Resume.pdf';
        window.open(downloadLink, 'blank');
      };

    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText">I'm <span className="introName">Arya Singh</span> <br/> FrontEnd Developer</span>
                <p className="introPara">I'm a skilled Frontend and Adobe Campaign Developer with experience in creating <br/> web application and user friendly websites.</p>

                <Link><button className="btn" onClick={()=>{
                  document.getElementById('contact').scrollIntoView({behavior : 'smooth'});
                 }}>
                    <img src={btnImg} alt="Hire Me" className="btnImg"/>
                Hire Me</button>
                
                <button className="btnCv" onClick={handleDownload}>Download CV</button>
                </Link>
            </div>

            <img src={bg} alt="Profile" className="bg"/>
        </section>
        
        //1:02 min
    )
}

export default Introduction;