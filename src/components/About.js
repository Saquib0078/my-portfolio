import React, { useState } from "react";
import './About.css'

function About() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);

    window.open("https://drive.google.com/file/d/11VNmbJac99xNo_G28BvhZoJPmjzey04u/view?usp=share_link");

  };
  return (
    <div className="about-container">
      <div className="about-header">
        <h2 id="h2">About Me</h2><br/>
        <h1 id="h1">__________</h1><br/>
      </div>
      <div className="about-content">
        <div className="about-content-left">
          <img
            src="https://scontent.fpnq7-5.fna.fbcdn.net/v/t1.18169-9/15242021_653648654795860_8161194982340630996_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=91zYP7BGWlQAX8Di13c&_nc_ht=scontent.fpnq7-5.fna&oh=00_AfBYpaPjLCG43L3KYdnL5Mc9xlZYguK4BcJKKvimN7mjiQ&oe=6402BDC1"
            alt="Profile picture"
            className="about-content-left-img"
          />
        </div>
        <div className="about-content-right">
          <h3>Hey,</h3>
          <h3>I am Mohammad Saquib,</h3>
    
          <p id="intro">
           I am a full-stack developer with a passion for building things using the latest technologies. I have extensive experience in Node.js, Express, MongoDB, React.js, and MySQL, and have also dabbled in Android development. I am from Akola, Maharashtra, and have a Bachelor's degree in BCA. My love for technology and my desire to build innovative solutions drives me to constantly learn and expand my skillset. I am excited to continue my journey in the tech industry and to bring my ideas to life.
          </p>
         
          <button onClick={handleDownload} disabled={loading} id="btn">
         Download CV

          </button>

        </div>
       
      </div>
    </div>
  )
}

export default About
