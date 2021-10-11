import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { Fade, Slide } from "react-reveal";
import styled from 'styled-components';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
      if (name && email && message) {
          const serviceId = 'service_j4i7gd9';
          const templateId = 'template_9epq6h4';
          const userId = 'user_o0hhSiKhe6nHK1OuNnYY6';
          const templateParams = {
              name,
              email,
              message
          };

          emailjs.send(serviceId, templateId, templateParams, userId)
              .then(response => console.log(response))
              .then(error => console.log(error));

          setName('');
          setEmail('');
          setMessage('');
          setEmailSent(true,alert('Thank you, message sent'));
      } else {
          alert('Please fill in all fields.');
      }
  }

  return (
      <div id="contact">
          <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span></span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">Get in Touch</p>
            </div>
          </div>
        </Fade>
        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
          <form id="contactForm" name="contactForm">
          <label>Name</label>
          <input type="text" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
          <label>E-mail</label>
          <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
          <label>Message</label>
          <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
          </form>
          <button className="submit" onClick={submit}>Send Message</button>
      </div>
      </Slide>
      </div>
      </div>
  );
  
};

const Span = styled.span`
display: none;
 text-align: center;
 .visible {
	 display: block;
}
 
`

export default Contact;