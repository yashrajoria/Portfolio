
import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './YASH RAJORIA.pdf';

const transition = {duration: "1", type: "spring"}

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
        <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
            <span>Services</span>
            <span>Lorem, ipsum dolor sit amet consectetur niam quas reiciendis,<br /> voluptatem perspiciatis architecto adipisci?</span>
             <a href={Resume} download>
             <button className="button s-button">
                 Download CV
             </button>
                 
             </a>
             <div className="blur s-blur" style={{background: "#ABF1FF94"}}></div>
        </div>

        <div className="cards">
        <motion.div 
        whileInView={{left:"14rem"}}
        initial={{left:"25rem"}}
        transition={transition}
        style={{left:"14rem"}}>
            <Card
            emoji = {HeartEmoji}
            heading = {'design'}
            detail = {"Figma, PS, LightasdasdadsRoomadasdasdadadada"}
            />
        </motion.div>
        {/* second car */}
        <motion.div
        initial={{left:"11rem", top:"12rem"}}
        whileInView={{left:"-4rem"}}
        transition={transition}

        style={{top: "12rem", left: "-4rem"}}>           
         <Card 
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTML, CS, JS and React ,adobexd, phoyosj[o"}
            />
    
        </motion.div>

        {/* 3rd card */}
        <motion.div 
        initial={{top:"19rem", left:"25rem"}}
        whileInView={{left:"12rem"}}
        transition={transition}
        style={{top: "19rem", left: "12rem"}}>            <Card 
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Loreasdassdasdadadasdadasdadaadaasm10"}
            />
    
        </motion.div>
        <div className="blur s-blur2"
        style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services