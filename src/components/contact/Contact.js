import { useState as UseState, useRef as UseRef, useContext as UseContext } from "react";
import emailjs from '@emailjs/browser';

import '../contact/contact.css';
import Phone from '../../img/phone.png';
import Mail from '../../img/mail.png';
import Address from '../../img/address.png';
import { ThemeContext } from '../../context';

const contact = () => {
    const formRef = UseRef();
    const [done, setDone] = UseState(false);
    const theme = UseContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mt87wb8', 'template_yu54efp', formRef.current, 'ljYaEEiwtY4Aybwaw')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
  return (
    <div className="c">
        <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-tittle" >Let's Discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img 
                                src={Phone}
                                alt=""
                                className="c-icon" 
                                />
                                <a href="tel: +977 9864003299">+977 9864003299</a>
                        </div>
                        <div className="c-info-item">
                            <img 
                                src={Mail}
                                alt=""
                                className="c-icon" 
                                />
                                milesshrestha@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img 
                                src={Address}
                                alt=""
                                className="c-icon" 
                                />
                                Pepsicola, Kathmandu
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                    <b>What's your query? </b> Get in 
                    touch. Always available 
                    for projects if the right 
                    project comes to me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" /> 
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" /> 
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                        <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" /> 
                        <button>Submit</button>
                        {done && "Thank you..."}
                     </form>
                </div>
               
            </div>
    </div>
  )
}

export default contact