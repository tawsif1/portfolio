/** @jsx jsx */
import React, { Component } from 'react';
import { css, jsx } from '@emotion/core';
import portimg from "../img/portfolio.png";
import resimg from "../img/resume.png";
import others from "../img/others.png";
import Typical from 'react-typical';



const Front = () => {


return(
<div css={css`
background:#3C3A3D;
// background-image: linear-gradient(to left top, rgba(60, 58, 61, .1) 50%
// , rgba(60, 58, 61,1)10%);
height: 100vh;
width: 100vw;
position: fixed;
`} >

    <div css={css`text-align: center;transform:translate(95%,100px); width:500px; height: 136px; position: fixed`}>
        <p css={css`color: white;font: 25px Courier New;`}>

        <Typical
        steps={['', 2000,'Hey',1000, 'Hey :)', 2000, 'Hey, I am Tawsif',
        1500,'Hey, I am Tawsif.',1000, 'Hey, I am Tawsif and I am a programmer', 2000,
         'Hey, I am Tawsif and I am a full stack programmer',2000,'Hey, I am Tawsif and I am a full stack programmer.',2000,
         'Hey, I am Tawsif and I am a full stack programmer. \nHowever I am unemployed :(',2000,
         "Hey, I am Tawsif and I am a full stack programmer. \nHowever I am unemployed :",1000,
        
         "Hey, I am Tawsif and I am a full stack programmer. \nHowever I am unemployed :'(",3000,
         'Hey, I am Tawsif and I am a full stack programmer. \nHowever I am unemployed. Thank you for coming to my Ted Talk.',5000]}
        loop={1}
        wrapper="p"
      />
        </p>
    </div>
    <div css={css` transform: translate(32%, 230%); position: fixed`}>
<button type= "button" css={css` background-color: transparent;
border: none; margin: 10px; padding: 5px; width: 10%; height: 10%;cursor: pointer; filter: brightnesss(120%);
`}>
<img src={portimg} css={css` width: 70%; height: 70%; 
:hover{
    filter: brightness(50%)
} `} />

< h4 style={{font: 'bold',color: 'white'}}>PORTFOLIO</h4>
</button>

<button type= "button" css={css` background-color: transparent;
border: none; margin: 10px; padding: 5px; width: 10%; height: 10%;cursor: pointer;
filter: brightnesss(120%);

`}>
<img src={resimg} css={css` width: 70%; height: 70%;
:hover{
    filter: brightness(50%)
}  `} />

< h4 style={{font: 'bold ' ,color: 'white'}}>RESUME</h4>

</button>

<button type= "button" css={css`background-color: transparent; border: none;
 margin: 10px; padding: 5px; width: 10%; height: 10%;cursor: pointer;

filter: brightnesss(120%);`}>
<img src={others} css={css`width: 70%; height: 70%;
:hover{
    filter: brightness(50%)
}  `} />

< h4 style={{font: 'bold white',color: 'white'}}>OTHERS</h4>


</button>
 
 


</div>

</div>

)





}

export default Front