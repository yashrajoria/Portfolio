import React from 'react'
import './intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDIv/FloatingDiv';
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion'


const transition = {duration : 2, type: 'spring'}
function Intro() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode ? 'white' : ' '}}>Hi I am </span>
                <span>Yash Rajoria</span>
                <span>Web enthusiast, front end developer</span>
            </div>
            <button className="button i-button">Hire Me</button>
            <div className="i-icons">
                <a href="www.google.com">
                <img src={Github} alt="" />
                </a>
                <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <motion.img 
            initial={{left: '-36%'}}
            whileInView={{left:'-24%'}}
            transition = {transition}
            src={glassesimoji} alt="" />

            <motion.div 
             initial={{top:"-4%", left: '74%'}}
             whileInView={{left:'68%'}}
             transition = {transition}

            style={{top:"-4%", left:"68%"}}
            className="floating-div">

                <FloatingDiv image={Crown} text1='Web' text2='Developer'/>
            </motion.div>
            <motion.div 
             initial={{left: '9rem', top: "18rem"}}
             whileInView={{left:'0rem'}}
             transition = {transition}
            style={{top: '18rem', left: '0rem'}}
            className="floating-div">
                <FloatingDiv image={thumbup} text1='best UI' text2='work'></FloatingDiv>
            </motion.div>
            <div className="blur" style={{background: "rgb(238 210 255"}}>

            </div>
             <div className="blur" style={{background: "#C1F5FF", top: '17rem', width:'21rem', height:"11rem" , left:"-9rem"}}></div>
              </div>
    </div>
  )
}

export default Intro