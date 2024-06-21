import React, { useState } from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Dynamic = () => {
    const [toEmail,setToEmail]= useState([])
    const[template,setTemplate] = useState("")
    const form = useRef();
    const data = {
        to_email:toEmail,
        message:template
      } 
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
      .send('service_1mw2acd', 'template_4ri6k1g', data,'KdWIYkl5o-ZZ1K9nF')
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
 
 
  return (
    <div>
    <form ref={form} onSubmit={sendEmail}>
      {/* <label>Name</label>
      <input type="text" name="user_name" /> */}
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
 
      
    </div>
  )
}

export default Dynamic
