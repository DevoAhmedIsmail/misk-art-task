"use client"
import { motion } from "framer-motion"

const Popup = ({children, delay, fromTop, y}) => {
  return (
    <motion.div
        initial={{opacity: 0, y: fromTop ? -30: 30}}
        whileInView={{opacity: 1, y:  y || 0}}
        exit={{opacity:0, y:  fromTop ? -30: 30, transition: {duration: 0.2}}}
        transition={{delay: delay, duration: 0.5,type:"spring", stiffness: 150}}
    >
      {children}
    </motion.div>
  )
}

export default Popup
