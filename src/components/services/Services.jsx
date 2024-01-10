import { useRef } from "react";
import "./services.scss"
import {motion, useInView} from "framer-motion"


const variants = {
    initial:{
        x:-500,
        y:100,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
        duration:1,
        staggerChildren: 0.1,
        },
    },
};

const Services = () => {
    const ref = useRef()
    const isInView = useInView(ref,{margin:"-100px"})

  return (
    <motion.div className="services"
     variants={variants} 
     initial="initial"
    //  animate="animate"
    // whileInView="animate"
    ref = {ref}
    animate={isInView && "animate"}
    >
    <motion.div className="textContainer" variants={variants}>
        <motion.p>
        My focus lies in advancing and elevating 
        <br/>your brand's development.
        </motion.p>
        <hr />
    </motion.div>
    <motion.div className="titleContainer" variants={variants}>
        <div className="title">
        <img src="/people.webp" alt="" />
        <h1>
            <motion.b whileHover={{color:"#03ffe6"}}>Unique</motion.b> Ideas</h1>
        </div>
        <div className="title">
            <h1>
                <motion.b whileHover={{color:"#2bffea"}}>For Your</motion.b>
                Business.
            </h1>
            <button>WHAT WE DO?</button>
        </div>  
    </motion.div> 
    <motion.div className="listContainer" variants={variants}> 
    <motion.div className="box" whileHover={{background:" #6effe9dc", color:"black"}}><h2>Branding</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime doloribus, minus rem veritatis sequi, eius numquam id iste cumque deleniti tenetur exercitationem! Earum iusto mollitia odit assumenda blanditiis maiores magni!</p>
    <motion.button whileHover={{background:" #33014e" , color:"white"}}>Go</motion.button>
    </motion.div><motion.div  className="box" whileHover={{background:" #6effe9dc", color:"black"}}><h2>Branding</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime doloribus, minus rem veritatis sequi, eius numquam id iste cumque deleniti tenetur exercitationem! Earum iusto mollitia odit assumenda blanditiis maiores magni!</p>
    <motion.button whileHover={{background:" #33014e" , color:"white"}}>Go</motion.button>
    </motion.div><motion.div  className="box" whileHover={{background:" #6effe9dc", color:"black"}}><h2>Branding</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime doloribus, minus rem veritatis sequi, eius numquam id iste cumque deleniti tenetur exercitationem! Earum iusto mollitia odit assumenda blanditiis maiores magni!</p>
    <motion.button whileHover={{background:" #33014e" , color:"white"}}>Go</motion.button>
    </motion.div><motion.div  className="box" whileHover={{background:" #6effe9dc", color:"black"}}><h2>Branding</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime doloribus, minus rem veritatis sequi, eius numquam id iste cumque deleniti tenetur exercitationem! Earum iusto mollitia odit assumenda blanditiis maiores magni!</p>
    <motion.button whileHover={{background:" #33014e" , color:"white"}}>Go</motion.button>
    </motion.div>
    </motion.div>
    </motion.div>
  )
}

export default Services;
