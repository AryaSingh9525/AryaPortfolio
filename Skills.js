import React from 'react';
import './Skills.css';
import webDesign from '../assets/webDesign.png';
//import appDesign from '../assets/appDesign.png';
import adobeDesign from '../assets/adobeCam.jpg'

const Skills = () => {
    return(
        <section id='skills'>
            <span className='skillTitle'>What I Do</span>
            <span className='skillDesc'>Having 2.4 years of experience in Software Development and Adobe Campaign Classic.
            I'm proficient in ReactJs, JavaScript, HTML, CSS, MySql as well as design Campaign using Adobe Campaign Classic tool.
            </span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={webDesign} alt='WebDesign' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h3>Web Design</h3>
                        <p>Created the UI of web applications using the ReactJS according to use cases. Designing layouts, components, views and apply CSS styles to React components, implementing state and props mechanisms, set up routing and connected the frontend to backend services and APIs by making HTTP requests.  
                        </p>
                    </div>
                </div>
                {/* <div className='skillBar'>
                    <img src={appDesign} alt='AppDesign' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h3>App Design</h3>
                        <p>Designed mobile app using Java at college time. This app helps the farmers to know the process of cultivation and provides all the information of production and the government rate of grains.</p>
                    </div>
                </div> */}
                <div className='skillBar'>
                    <img src={adobeDesign} alt='AdobeCampaign' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h3>Adobe Campaign</h3>
                        <p>Worked on Adobe Campaign Classic v7, where I have gained experience in integrated channels like Email, SMS and WhatsApp using JS, 
                            created templates, external accounts ,schemas, operators, disabled the account and handled escalated calls and providing level 1 Technical Support to 
                            end-users, conducted testing, overseeing deliveries, and generating reports to optimize campaign performance.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills