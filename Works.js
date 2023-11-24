import React from "react";
import './Works.css';
import webDesign from '../assets/webDesign.png';
import webDevelope from '../assets/webDevelop.jpg';
import reactgirl from '../assets/reactgirl.jpg';
//import { Link } from "react-router-dom";

const Works = () => {

    const btnClick = () => {
        window.open("https://github.com/AryaSingh9525?tab=repositories");
    }
    return(
        <section id="works">
            <h3 className="worksTitle">My Portfolio</h3>
            <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I believe that my skills and passion align perfectly with your organization's goals.</span>
            <div className="worksImgs">
                <a href="https://github.com/AryaSingh9525/Time-Table-Generatore" target="_blank" rel="noreferrer">
                   <img src={webDesign} alt="" className="worksImg"/>
                </a>
                <a href="https://github.com/AryaSingh9525/FarmAssist" target="_blank" rel="noreferrer">
                   <img src={webDevelope} alt="" className="worksImg"/>
                </a>
                <a href="https://github.com/AryaSingh9525/Time-Table-Generatore" target="_blank" rel="noreferrer">
                   <img src={reactgirl} alt="" className="worksImg"/>
                </a>
            </div>
            
            <button className="workBtn" onClick={btnClick}>Check Out My Works!</button>
        </section>
    )
}

export default Works