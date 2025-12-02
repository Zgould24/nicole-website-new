import { useRef, useEffect, useState } from 'react';
import React from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import ReCAPTCHA from 'react-google-recaptcha';
import API from './../../API.js'

export default function ContactForm() {
  const form = useRef();
  const recaptcha = useRef();

  async function sendReCAPTCHA() {
    const recaptchaValue = recaptcha.current.getValue();
    
    if(!recaptchaValue) {
      alert('Please verify the reCAPTCHA validation.');
    } else {
      const success = API.post('/verify', {
        token: recaptchaValue
      })
      .then(res => {
        return res.data.success;
      })
      .catch(err => {
        console.log(err);
      })

      if(success) {
        alert('Form submission successful');
        return true;
      } else {
        alert('ReCAPTCHA validation failed');
        return false;
      }
    }
  }

  const sendEmail = async (e) => {
    e.preventDefault();

    let name = form.current.querySelector('[name="user_name"]');
    let email = form.current.querySelector('[name="user_email"]');
    let message = form.current.querySelector('[name="message"]');

    if(name.value.length !== 0 && email.value.length !== 0 && message.value.length !== 0) {
      // const r = await sendReCAPTCHA().then(resp => {return resp});

      // if(r) {
        emailjs.sendForm('service_fj9xl3v', 'template_6cykqtm', form.current, '19D5r_sW-l-fqo2mF')
        .then((result) => {
            window.location.reload();
        }, (error) => {
            console.log(error.text);
        });
      // } else if(!r && r != undefined) {
      //   alert('reCAPTCHA failed. Please try again later. We apologies for the inconvenience.');
      // }
    } else {
      name.value.length === 0 ? name.classList.add('missing-input') : name.classList.remove('missing-input');
      email.value.length === 0 ? email.classList.add('missing-input') : email.classList.remove('missing-input');
      message.value.length === 0 ? message.classList.add('missing-input') : message.classList.remove('missing-input');
    }
  };

  const [getFormVisible,setFormVisible] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setFormVisible(entries[0].isIntersecting);
    })

    observer.observe(form.current);
  },[])

  return (
    <form ref={form} onSubmit={sendEmail} className={`contact-form ${getFormVisible ? 'fade-in-directional' : ''}`}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      {/* <ReCAPTCHA ref={recaptcha} sitekey={process.env.REACT_APP_SITE_KEY}/> */}
      <input type="submit" value="Send" />
    </form>
  );
};
