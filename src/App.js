import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef } from 'react';
import API from './API.js';

import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Teaching from './Components/Teaching/Teaching'
import Testamonials from './Components/Testamonials/Testamonials'
import Performance from './Components/Performance/Performance'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Media from './Components/Media/Media.js';
import Gallery from './Components/Gallery/Gallery.js';

export default function App() {
  return (
      <div className="App">
        <Navbar/>
        <Hero />
        <About />
        <Teaching />
        <Gallery />
        <Media />
        <Contact />
        <Footer />
      </div>
  );
} 