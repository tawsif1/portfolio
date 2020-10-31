/** @jsx jsx */
import React, { useEffect } from 'react';
import {Global, css, jsx } from '@emotion/core';
import logo from '../img/Tawsif Ahmed Logo.png';
import linkedin from '../img/linkedin.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLinkedin, FaGithubSquare, FaFileDownload } from 'react-icons/fa';




const Resume = () => {

  useEffect(() => {
  
    AOS.init({duration: 2000});
  }, []); 
  
 

    
return(
<div css={css``}>
    <Global styles={GlobalCSS}  />
    <div css={css`{
     
     margin-top: 10vh;
     width: auto;
     height:auto;
        
        color:#151515;
        z-index: 99;
        border-right: 1px solid #F1FFF8;
        position: relative;}`}>

        
          {/* <div css={css`display: flex; width: auto;text-align:center; font: 30px bold ; font-family: 'open sans' ;
            color: #151515;`}>
         <img src={logo} css={css`transform: scale(.5);` }/>
          </div> */}

          <div css={css`display:block; border: 1px solid #280069;
         background: #ffffff;
          background-size: cover;
           margin-top: 20vh;
           margin-bottom: 20vh;
         
         
           width: 50vw; height: 50vh; 
          margin-left: 22.5vw; padding: 3vw; `}>
             <img src={logo} css={css`transform: scale(.75); display: flex; float: right; ` }/>
            <h4 css={css`font-size: 30px`}>Bsc in Electrical Engineering</h4>
            <h5 css={css`font-size: 25px`}>University of Alberta</h5>
          

            <h5 css={css`font-size: 20px; display: flex`}>Course work</h5> 
            <p>Analog Electronics• Electric Machines• AC-DC Conversion.  Digital Logic • Microprocessor • Digital Image Processing • Differential Equations 
              • Communication Systems • Communication Networks • Analog and Mixed Signals • Power Engineering • Power System Analysis• Control Systems •</p>
             
          </div>
    </div>

{/*skills*/}

<div data-aos="fade-up" css={css`{
     
     margin-top: 10vh;
     width: auto;
     height:auto;
       
        color:#151515;
        z-index: 99;
        border-right: 1px solid #F1FFF8;
        position: relative;}`}>

        
          {/* <div css={css`display: flex; width: auto;text-align:center; font: 30px bold ; font-family: 'open sans' ;
            color: #151515;`}>
         <img src={logo} css={css`transform: scale(.5);` }/>
          </div> */}

          <div  css={css`display:block; border: 1px solid black;
         border-top: 1px solid black;
         background: #ffffff;
         background-size: cover;
           width: 50vw; height: 60vh; 
          margin-left: 22.5vw; padding: 2vw; `}>
             
            
            <h4 css={css`font-size: 30px`}>Skills</h4>
            <div css={css`display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);`}>
            <div> <h5 css={css`font-size: 20px`}>PROGRAMMING LANGUAGES</h5>
            <p css={css`font-size: 20px`}>Reactjs • JavaScript • HTML5 • CSS • Python • C • C# • C++  </p>
           </div>
           <div css={css`padding-left: 3vw;`}> <h5 css={css`font-size: 20px`}>API</h5>
            <p css={css`font-size: 20px`}> Wordpress </p></div>
          <div><h5 css={css`font-size: 20px`}>Game Engine</h5>
            <p css={css`font-size: 20px`}>Unity </p></div>
     
            <div>
<h5 css={css`font-size: 20px`}>IDE</h5>
<p css={css`font-size: 20px`}>Eclipse • MS Visual Studio • MatLab •
</p>
</div>
<div><h5 css={css`font-size: 20px`}>SIMULATION  TOOLS</h5>
<p css={css`font-size: 20px`}>Xilinx • Ltspice </p></div>
<div><h5 css={css`font-size: 20px`}>OPERATING SYSTEM</h5>
<p css={css`font-size: 20px`}>Windows 10 • MacOS • Linux•</p></div>
</div>




             
          </div>
    </div>
  
{/*Work Experienc*/}

<div data-aos="fade-up" css={css`{
     display: flex;
     margin-top: 10vh;
     margin-left: 17vw;
        width: auto;
        height:auto;
        
        color:#151515;
        z-index: 99;

        position: relative;}`}>

        
          {/* <div css={css`display: flex; width: auto;text-align:center; font: 30px bold ; font-family: 'open sans' ;
            color: #151515;`}>
         <img src={logo} css={css`transform: scale(.5);` }/>
          </div> */}

          <div data-aos="fade-left" css={css`display:block; border: 1px solid black;
         border-top: 1px solid black; 
          background: #ffffff;
          background-size: cover;
         
           width: 20vw; height: 60vh; 
         padding: 1vw; `}>
            <header> Work Experience</header>
             
            <h4 css={css`font-size: 25px`}>  RUFFALO NOEL LEVITZ </h4>
            <h5 css={css`font-size: 20px`}>STUDENT AMBASSADOR</h5>
          

            <h5 css={css`font-size: 20px; display: flex`}>Role</h5> 
            <p><ul>
              <li>Would converse with alumni, update demographic information and keep them updated on their faculties and events at the University .</li>
              <li>Informing alumni on fundraising opportunities as well as directing donations towards a wide array of funds.</li>
              
              </ul></p>
             
          </div>
          <div data-aos="fade-up" css={css`display:block; border: 1px solid black;
         border-top: 1px solid black;
         margin-left: 3vw;
         background: #ffffff;
         background-size: cover;
           width: 20vw; height: 60vh; 
         padding: 1vw; `}>
             <header> Work Experience</header>
             
             <h4 css={css`font-size: 30px`}> RUFFALO NOEL LEVITZ </h4>
            <h5 css={css`font-size: 25px`}>STUDENT AMBASSADOR</h5>
          

            <h5 css={css`font-size: 20px; display: flex`}>Role</h5> 
            <p><ul>
              <li>Would converse with alumni, update demographic information and keep them updated on their faculties and events at the University .</li>
              <li>Informing alumni on fundraising opportunities as well as directing donations towards a wide array of funds.</li>
              
              </ul></p>
          </div>
          <div data-aos="fade-right" css={css`display:block; border: 1px solid black;
         border-top: 1px solid black;  background: #ffffff;
         background-size: cover;
         margin-left: 3vw;
           width: 20vw; height: 60vh; 
         padding: 1vw; `}>
             <header> Work Experience</header>
             
             <h4 css={css`font-size: 25px`}> SPADE DIGITAL  </h4>
            <h5 css={css`font-size: 20px`}>MARKETING AND SOCIAL MEDIA COORDINATOR</h5>
          

            <h5 css={css`font-size: 20px; display: flex`}>Role</h5> 
            <p><ul>
              <li>Managed social media of clients in the food and clothing industry .</li>
              <li>Individually conducted primary research of our current clients to further analyze the target demographics.</li>
              <li>Enhanced department marketing techniques by implementing new writing standards for the web.</li>
              <li>Restaurant content marketing.</li>
              
              </ul></p>
          </div>

          



    </div>

{/*project experience*/}

<div data-aos="fade-up" css={css`{
     display: flex;
     margin-top: 10vh;
     margin-left: 9vw;
        width: auto;
        height:auto;
        
        color:#151515;
        z-index: 99;

        position: relative;}`}>

        
          {/* <div css={css`display: flex; width: auto;text-align:center; font: 30px bold ; font-family: 'open sans' ;
            color: #151515;`}>
         <img src={logo} css={css`transform: scale(.5);` }/>
          </div> */}

          <div data-aos="fade-right"css={css`display:block; border: 1px solid black;
         border-top: 1px solid black; 
         background: #ffffff;
         background-size: cover;
         margin-left: 1vw;
           width: 25vw; height: 58vh; 
         padding: 1vw; `}>
            <header> Project Experience</header>
             
            <h4 css={css`font-size: 25px`}> HAND GESTURE CONTROLLED DRONE </h4>
            <h5 css={css`font-size: 20px`}>CAPSTONE & 2020 CAPSTONE  PROJECT COMPETITION</h5>
          

            <h5 css={css`font-size: 20px; display: flex`}>Role</h5> 
            <p><ul>
              <li>Designed a neural network to train the computer to identify gestures using libraries like open cv, PCA, Scikit-learn
</li>
              <li>Decode iBus protocol using logic analyzer</li>
              <li>Send signals using serial port communication python between Raspberry Pi and 2.4 GHz receiver
</li>
              <li>Designed serial port communication between raspberry pi and flight computer.</li>
              
              
              </ul></p>
             
          </div>
          <div data-aos="fade-down" css={css`display:block; border: 1px solid black;
         border-top: 1px solid black;
         margin-left: 1.5vw;
         background: #ffffff;
         background-size: cover;
           width: 25vw; height: 58vh; 
         padding: 1vw; `}>
            <header> Project Experience</header>
             
             <h4 css={css`font-size: 25px`}> PINEAPPLE EXTRACTOR FROM PIZZA</h4>
            <h5 css={css`font-size: 20px`}>HACKED HACKATHON 2020</h5>
          

            <h5 css={css`font-size: 20px; display: flex`}>Role</h5> 
            <p><ul>
              <li>Designed algorithm for image processing on python with open cv library that detects  the pineapple on pizza
</li>
              <li>Created a mechanical arm with servo motors that are connected to arduino.
</li>
              <li>Used C++ to design an algorithm to assign angles of motion to the servo motors.
</li>
              
              
              
              </ul></p>
             
          </div>
          <div data-aos="fade-left" css={css`display:block; border: 1px solid black;
         border-top: 1px solid black;  background: #ffffff;
         background-size: cover;
         margin-left: 1.5vw;
           width: 25vw; height: 58vh; 
         padding: 1vw; `}>
                     <header> Project Experience</header>
             
             
             <h4 css={css`font-size: 25px`}> AUTOMATIC WELDING TORCH  </h4>
            <h5 css={css`font-size: 20px`}>ECE 312 FINAL PROJECT</h5>
          

            <h5 css={css`font-size: 20px; display: flex`}>Role</h5> 
            <p><ul>
              <li>Designed the schematic with voltage and current reading to connect all the peripherals to the Atmel microchip using the microchip manual and the manuals of individual peripherals 
</li>
              <li>Used analog to digital conversion to design an algorithm using c++ to read voltage to maintain a constant distance between object and the welding torch
</li>
              
              </ul></p>
          </div>

          



    </div>

{/*Award*/}
<div data-aos="fade-up" css={css`display:block; border: 1px solid black; margin-top: 10vh;
         border-top: 1px solid black;
         background: #ffffff;
          background-size: cover;
           width: 30vw; height: 30vh; 
          margin-left: 35vw; padding: 3vw; `}>
   
            <h4 css={css`font-size: 30px`}>Awards</h4>
           
          

           
            <p>
              <ul>
                <li>A University of Alberta Country Award - Leadership Quality</li>
                <li>An international student scholarship - Academic achievement</li>
                <li>Daily star Awards - Academic achievement</li>
                <li>Scholarship Award Certificate (2020 Capstone Project Competition)</li>
              </ul>


            </p>
             
          </div>
          <div data-aos="fade-up" css={css`display:block; border: 1px solid black; margin-top: 10vh;
         border-top: 1px solid black;
         background: #ffffff;
          background-size: cover;
           width: 30vw; height: 30vh; 
          margin-left: 35vw; padding: 3vw; `}>
   
            <h4 css={css`font-size: 30px`}>Contact Info</h4>
           <button css={css`border: none; margin: 15px; transform: scale(2);:focus {
  outline: none;}`}> <FaLinkedin css={css`transform: scale(2);`} /> </button>
           <button css={css`border: none; margin: 15px;  transform: scale(2);:focus {
  outline: none;}`}> <FaGithubSquare css={css`transform: scale(2);`} /> </button>
           <button css={css`border: none; margin: 15px; margin-left: 300px; background: transparent;  transform: scale(2); :focus {
  outline: none;
}`}> <FaFileDownload css={css`transform: scale(2);`} /> <br/> <text css={css`font-size: 7px;`} >Resume</text></button>

           <p>Email: tawsif1@ualberta.ca | tawsifahmed119@gmail.com <br />
                   
              Phone: 5877786816
           </p>

           
            
          </div>



<div css={css`height: 200px;`} >

  </div>

    </div>
)

}

export default Resume;

const GlobalCSS = css`
  html,
  body,
  .app {
    margin: 0;
    min-height: 100%;
    width: 100%;
    padding:0px;
   
  }
  body {
    padding:0px;
    
    overflow-x: hidden;
    background-image: url("https://st3.depositphotos.com/3423429/15757/v/950/depositphotos_157579156-stock-illustration-blog-object-set.jpg");
    //background-image: url("https://st2.depositphotos.com/5539346/8775/v/950/depositphotos_87752424-stock-illustration-vector-modern-seamless-geometry-pattern.jpg");
    //background-image: url("https://previews.123rf.com/images/lux100/lux1001601/lux100160100072/50368477-vector-illustration-with-doodle-home-seamless-pattern-for-wallpapers-wrapping-backgrounds-textile-pr.jpg");
    background-size: initial;
    background-repeat: round;
    
  
 
  background-attachment: fixed;
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
  
      to {
        opacity: 1;
      }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  
  `
