import React from 'react'
import food2 from '../../assets/food2.jpeg'
import { SlideUp } from '../Hero/Hero'
import { motion } from "framer-motion";
import { FaCartShopping } from "react-icons/fa6";

const Banner = () => {
  return (
    <div>
      <div className='container py-4 px-72 bg-red-400'>
        <div className=' grid grid-cols-1  md:grid-cols-2 place-items-center  '>
          <div>
          <motion.img variants={SlideUp(0)}
          initial={{opacit:0, x:-100, y:100}}
          whileInView={{opacity:1, x:0, y: 0}}
          whileHover={{scale:1.2, rotate:10, x:30, y:-50}}
          transition={{duration:0.6, delay:0.2}}
          src={food2} alt=''
          className=' rounded-3xl bg-red-900  '>
          </motion.img>
          </div>
          <div className=' space-y-5 lg:max-w-[400px]'> 
            <motion.h1 variants={SlideUp(0)}
            initial='initial'
            whileInView='animate'
             className=' text-4xl font-bold uppercase align-middle py-2'>Here is the Best Food available</motion.h1>
            <motion.p1 variants={SlideUp(0)}
            initial='initial'
            whileInView='animate'
            className=' font-normal'> Get ready to improve the standard of Eating out there!</motion.p1>
            <button 
            className='btn-primary outline-double outline-orange-950 rounded-full px-3 py-3 bg-red-900 text-white hover:scale-110'>Order Now
              <FaCartShopping className='  inline ml-2'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
