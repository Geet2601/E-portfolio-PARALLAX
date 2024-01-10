import "./navbar.scss"
import {motion} from "framer-motion"
import Sidebar from "../sidebar/Sidebar"
   
const Navbar = () => {
return (
<div className="navbar">
    
    <div className="wrapper">
    <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>Geet2601</motion.span>
    <div className="social">
        <a href="https://www.linkedin.com/in/geet-tiwari-7a8859282/" target="_blank"><img src="/linkedin02.png" alt="linkedin icon" /></a>
        <a href="https://github.com/Geet2601" target="_blank"><img src="/github022.png" alt="github icon" /></a>
        <a href="#"><img src="/hireme02.png" alt="hiremelinkedin icon" /></a>
        <a href="#"><img src="/linkedin02.png" alt="linkedin icon" /></a>
    </div>
    </div>
</div>
)
}

export default Navbar;
