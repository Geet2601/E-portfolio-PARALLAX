import {motion, spring} from 'framer-motion'
import { useState } from 'react'

const Test = () => {
const [open, setOpen] = useState(false)

const variants = { // we will define the visiblity, animation and transition  as a common variable and use it to give  common effect 
    visible: (i)=>( {
    opacity:1, 
    x:100 , 
    transition: {delay: i * 0.5}
    // {type:"spring" , stiffness:100 , damping:100 } , scale:1
    }),
hidden: {opacity:0},
}
const items = [
"item1" , "item2", "item3", "item4"
]
return (
<div className='course'>
{/* <motion.div 
className='box'
initial={{opacity:0.5 , scale:0.5}} 
// // animate={{opacity:1 , scale:1, x:200, y:500}} 

// whileInView ={{opacity:1, scale:2}}
// drag
variants={variants}
transition={{duration:2 }}
animate={open ? "visible": "hidden" }
// initial="hidden"
// animate="visible"
>

</motion.div>
<button onClick={()=>setOpen(prev=>!prev)}>Click </button> 
    if its false, its gonna be true */}


    <motion.ul initial="hidden" animate="visible" variants={variants}>
{/*variants is used to give common animation and visibility effects */}
    {items.map((item, i) => (
    <motion.li variants={variants}  key={item} custom={i}>{item}</motion.li> //in the form of list so bullets
    ))}
    </motion.ul>
</div>
)
}
 
export default Test