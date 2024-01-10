import "./portfolio.scss"
import {motion, useScroll , useSpring, useTransform} from "framer-motion"
import { useRef} from "react"
import ChatAppImage from "./Projects/ChatApp001.png"
import BeigeEcommerce from "./Projects/BeigeEcommNEW.png"
import Movie from "./Projects/Movie.png"
import Notes from "./Projects/Notes02.png"

const items = [
  {
    id:1,
    title: "Chat App",
    img: ChatAppImage ,
    desc:"A real time chat for engaging with people in live conversations world wide. Google Account Integration and user friendly interface makes it a seamless chatting experience.",
  },
  {
    id:2,
    title: "Beige Ecommerce",
    img: BeigeEcommerce,
    desc:"With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need.",
  },
  {
    id:3,
    title: "Movie Website",
    img: Movie,
    desc:"This project is a simple web application that fetches and displays movies using The Movie Database (TMDb) API. It allows users to view a list of popular movies and search for movies by title.",
  },
  {
  id:4,
  title: "Notes NOW",
  img: Notes,
  desc:"A React Native and Firebase Notes taking app for android devices. Take notes in real time and retract data anytime, anywhere.",
  },

];

const Single = ({item}) => {
  const ref = useRef();
  const {scrollYProgress} = useScroll({
    target:ref, 
    // offset:["start start" , 
    // "end start"]
  });

  const y = useTransform(scrollYProgress, [0,1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
        <img src={item.img} alt="" />
        </div>
      <motion.div className="textContainer" style={{y}}>
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <button>See Demo</button>
      </motion.div>
      </div>
      </div>
    </section>
  )
}

const Portfolio = () => {

  const ref = useRef()
  const {scrollYProgress} = useScroll({
    target:ref, 
    offset:["end end" , 
    "start start"]
  });
const scaleX = useSpring(scrollYProgress,{
  stiffness:100,
  damping:30,
});

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
      <h1>Featured Works</h1>      
      <motion.div style={{ scaleX }} className="progressBar">
      </motion.div>
      </div>
      {items.map((item) => (
        <Single item = {item} key={item.id} />
      ))}
      
      </div>
  );
};

export default Portfolio;

