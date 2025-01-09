import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import Food from '../../assets/food.jpeg'
import { motion } from "framer-motion";
import foood from '../../assets/FOOOD.png';

 export const SlideUp = (delay ) => {
  return{
    initial:{y:'100%' , opacity:'0',
  },
  animate: {y:0, opacity:1, transition:{ duration:1,
    delay:delay, },
  },}}

const hero = () => {
  return (
    <main>
    <div className='container min-h-[400px] bg-red-200 flex justify-center'>
    <div className='grid grid-cols-1 md:grid-cols-2 place-items-center justify-between'>
      {}
      <div className='space-y-6 mt-14 text-center'> 
        <motion.h1 variants={SlideUp(1)} 
        initial='initial'
        whileInView='animate'
        className='relative text-5xl lg:text-7xl xl:text-8xl font-serif uppercase mt-14 text-center md:text-left md:mt-0 text-red-500 '>Yummy
        <img
        src={foood} alt='' className='absolute w-[150px] top-0 right-1 '></img>
      </motion.h1>
      <motion.h1 variants={SlideUp(1)}
       initial='initial'
       whileInView='animate'
       className=' relative text-5xl lg:text-7xl xl:text-8xl font-serif uppercase text-red-900'>
        BREAKFAST
      </motion.h1>
      <motion.p variants={SlideUp(2)}
      initial='initial'
      whileInView='animate'
      className='text-small'>This is the sample text that depicts the description to the above. To check the alignment </motion.p>
      <motion.button variants={SlideUp(2)}
      initial='initial'
      whileInView='animate'
      whileHover={{scale:1.2}}
      className='btn-primary outline-dotted text-white bg-red-900 rounded-full  hover:scale-110 py-2 px-3 font-semibold '>
      <FaCartShopping className='inline mr-2'/>
      Order Now !!
      </motion.button>
      </div>
      {}
      <div>
      <motion.img variants={SlideUp(1)}
        initial={ {opacity :0, rotate:20, x:100, y:200}}
        whileInView={ {opacity :1, rotate:0, x:0, y:0}}
        whileHover={{scale:1.1, opacity:0.7}}
        transition={{delay:0.5, duration:0.8}}
        src={Food} alt='' className='w-[450px]  shadow-2xl bg-transparent rounded-3xl'>

        </motion.img>
      
   
      
      </div>
      </div>

      
    </div>
    <div className='relative'>
    
    </div>
    </main>
  )
}

export default hero
