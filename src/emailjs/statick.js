import React from 'react';
import emailjs from "@emailjs/browser"
import  { useRef } from 'react';


function EmailForm() {
 
  
  
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_1mw2acd', 'template_armhsdm', form.current, {
          publicKey: 'KdWIYkl5o-ZZ1K9nF',
        })
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
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
  

export default EmailForm;
