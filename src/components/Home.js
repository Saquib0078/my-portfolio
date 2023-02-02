import './Home.css'
import React, { useState } from 'react';
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";








function Home() {
  const navigate=useNavigate();

  return (
    <div id="profile">

  <div class="wrapper">
    <div class="img-area">
      <div class="inner-area">
        <img src="https://tse3.mm.bing.net/th?id=OIP.PKIE0R0cDpIh738CwMK9jgHaE3&pid=Api&P=0" alt=""/>
      </div>
    </div>
    <div class="name">Mohammad Saquib</div>
    <div id="typewrite">
    <Typewriter
  
  onInit={(typewriter)=> {

 setInterval(()=>{
  typewriter
   
  .typeString("Hello,")
  .pauseFor(1000)
  .deleteAll()
  .typeString("I am a full-stack web developer.")
  .pauseFor(1000)
  .deleteAll()
  .typeString("Welcome to my portfolio.")
  .pauseFor(1000)
  .deleteAll()
  .start()

 },2000)
  }}
  />
    </div>
    <div class="about">Follow me on</div>
    <div class="social-icons">
      <a href="https://www.facebook.com/saquib.parvez.1" target="_blank" class="fb"><img src="./images/facebook.png"/></a>
      <a href="https://www.linkedin.com/in/saquib-parvez-182903217/" target="_blank" class="twitter"><img src="./images/linkdin.png"/></a>
      <a href="https://www.instagram.com/saquib.p/" target="_blank" class="insta"><img src="./images/instagram.png"/></a>
      <a href="https://github.com/Saquib0078" target="_blank" class="github"><img src="./images/github.png"/></a>
    </div>
    <div class="buttons">
      <button id="btnmsg"  class="msg" onClick={()=>{navigate('/Contact')}}>Message</button>
    <button id="btnhome"  class="home" onClick={()=>{navigate('/Portfolio')}}>Portfolio</button>
    </div>
  </div>
    </div>
  )
}



export default Home
