import React, {useRef, useState} from "react";
import './Contact.css';
import adity from '../assets/aditya.png';
import techM from '../assets/techMa.png';
import hdfc from '../assets/hdfc.png';
import linkedin from '../assets/linked.png';
//import github from '../assets/github.png';
import naukri from '../assets/naukri.jpg'
//import facebook from '../assets/facebook.png';
import insta from '../assets/insta.jpg';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const [formData, setFormData] = useState({
        your_name: '',
        your_email: '',
        message: ''
      });

    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      const sendEmail = (e) => {
        e.preventDefault();
        if (formData.your_name === '' || formData.your_email === '' || formData.message === '') {
            alert("Please fill all fields.")
          // Validation failed, show alert
          setShowAlert(true);
        } else {
          // Validation passed, send email using EmailJS
          emailjs.send('service_segqvsd', 'template_cmxmwhq', formData, 'vB673csp7kx9CUZqs')
            .then((response) => {
              console.log('Email sent!', response);
              alert("Thanks for submitting your response.")
              // Clear the form after sending the email
              setFormData({ your_name: '', your_email: '', message: '' });
              setShowAlert(false);
            })
            .catch((error) => {
              console.error('Error sending email:', error);
            });
        }
      };

    return(
        <section id="contactPage">
            <div id="clients">
                <h3 className="contactPageTitle">Clients I Worked With</h3>
                <p className="clientDesc">
                    I had the opportunity to work with a diverse group of companies.
                    Some of the notable companies I have worked with includes:
                </p>
                <div className="clientImgs">
                    <img src={adity} alt="" className="clientImg"/>
                    <img src={techM} alt="" className="clientImg"/>
                    <img src={hdfc} alt="" className="clientImg"/>
                </div>
            </div>

            <div id="contact">
                <h3 className="contactPageTitle">Reach Out To Me</h3>
                <span className="contactDesc">Please assist me with any openings in your firm based on my profile.</span>

                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" value={formData.your_name} onChange={handleInputChange} className="name" placeholder="Your Name" name='your_name'/>
                    <input type="email" value={formData.your_email} onChange={handleInputChange} className="email" placeholder="Your Email" name="your_email"/>
                    <textarea className="msg" value={formData.message} onChange={handleInputChange} name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type="submit" value="Send" className="submitBtn">Submit</button>

                    <div className="links">
                        <a href="https://www.linkedin.com/in/arya-singh-b7a228189/" target="_blank" rel="noreferrer">
                           <img src={linkedin} alt="LinkedIn" className="link"/>
                        </a>
                        <a href="https://www.naukri.com/mnjuser/profile?id=&altresid" target="_blank" rel="noreferrer">
                           <img src={naukri} alt="Facebook" className="link"/>
                        </a>
                        <a href="https://instagram.com/aryasingh952553?igshid=NzZlODBkYWE4Ng==" target="_blank" rel="noreferrer">
                           <img src={insta} alt="Instagram" className="link"/>
                        </a>
                    </div>

                </form>
                {showAlert}

            </div>
        </section>
    )
}

export default Contact