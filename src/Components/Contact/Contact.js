import { useRef, useEffect, useState } from 'react';
import React from "react";
import './Contact.css'
import Header from '../Header/Header';

import ContactForm from './ContactForm'

export default function Contact() {
    const titleRef = useRef();

    return (
        <div className="Contact" id="contact">
            <ContactForm />
        </div>
    )
}