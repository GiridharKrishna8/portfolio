import React, { Component } from 'react'
import Nav from '../Nav/Nav';
import HeroImage from '../images/logo.png';

// const SetBgImage = {
//     width: "100%",
//     height: "400px",
//     backgroundImage: "url(" + { HeroImage } + ")"
//   };



export default function Hero({title,subtitle}) {
    return (
        <div className="Hero-section" id="home"> 
            <Nav/>
                 <h1 className="  text-uppercase text-center display-4 txt-color title-align">{title}</h1> 
                 <h4 className="text-white mr-2 text-p">{subtitle}</h4>

        </div>
    )
}
