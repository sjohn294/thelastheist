import React from "react";
import HomeCSS from './home.module.css'
import ProfileIMG from '../../../assets/Profile.jpg'


export default function Home() {
    return (
      <div className={HomeCSS.container}>
        <div className={HomeCSS.image}><img src={ProfileIMG} alt="" /></div>
        <div className={HomeCSS.hero}>
        <header className={HomeCSS.name}>Will Speakman</header>
        <p className={HomeCSS.title}>
         Full Stack Web Developer
        </p>
        </div>
        
      </div>
    );
  }