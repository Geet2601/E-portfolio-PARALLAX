import Sidebar from "../sidebar/Sidebar";
import "./hero.scss";
import {motion} from "framer-motion";

const textVariants = {
    initial: {
    x:-500,
    opacity:0,
},
animate: {
    x: 0,
    opacity:1,
    transition: {
        duration: 1,
        staggerChilderen: 0.1,
    },
},
scrollButton: {
    opacity: 0,
    y:10,
    transition:{
    duration:1.4,
    repeat:Infinity,
    }
},

};
const sliderVariants = {
    initial: {
    x:0,
},
animate: {
    x: "-990%",
    transition: {
        repeat:Infinity,
        repeatType:"mirror",
        duration: 40,
    },
},

};

const Hero = () => {
  return (
    <div className="hero">
        <Sidebar/>
        <div className="coo">
        <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants}
        initial="initial"
        animate="animate"
        >
        <motion.h2 variants={textVariants}>GEET TIWARI</motion.h2>
        <motion.h1 variants={textVariants}>Full Stack Developer</motion.h1>
        <motion.div variants={textVariants} className="buttons">
        <motion.button variants={textVariants}>See the Latest work</motion.button>
        <motion.button variants={textVariants}>Contact Me</motion.button>
        </motion.div>
        <motion.img variants={textVariants} 
        animate="scrollButton"
        src="/scroll.png" alt="" />
        </motion.div>
        </div>
        <motion.div variants={sliderVariants} initial="initial" animate="animate" className="slidingTextContainer">
            Full Stack Developer SASS HTML React.js CSS Firebase 
        </motion.div>
        <div className="imageContainer">
            <img className="face" src="/facehp.jpg" alt="my face" />

        </div>
        </div>
    </div>
  )
}

export default Hero;

