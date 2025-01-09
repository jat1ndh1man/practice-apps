import React from 'react'
import { motion } from "framer-motion";
import dessert1 from '../../assets/dessert1.jpeg'
import dessert2 from '../../assets/dessert2.jpeg'
import dessert3 from '../../assets/dessert3.jpeg'

const SlideUpp = (delay = 0) => ({
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  });
const HotDessertsData = [
    {
        id:1,
        name:'Hot Dessert1',
        img: dessert1,
        price: '$6.00',
        delay: '0.4'
},
{
    id:1,
    name:'Hot Dessert2',
    img: dessert2,
    price: '$4.00',
    delay: '0.4'
},
{
    id:1,
    name:'Hot Dessert3',
    img: dessert3,
    price: '$2.00',
    delay: '0.4'
}
]

const HotDesserts = () => {
  return (
    <section>
    <div className='container py-10 px-8 bg-red-300'>
    <motion.h3 variants={SlideUpp(1)}
    initial='hidden'
    whileInView='show'
 
    className='text-3xl font-bold text-red-900'>Hot Desserts</motion.h3>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:grid-cols-2 '>
{HotDessertsData.map((item)=>{
 return (
    
    <motion.div variants={SlideUpp(1)}
    initial='hidden'
    whileInView='show'
    whileHover={{scale:1.1}}
    className='group bg-red-200 shadow-xl rounded-3xl flex items-center gap-3 p-3'>
<motion.img 
whileHover={{scale:1.3 }}
src={item.img} alt='' 
className=' rounded-full shadow-lg w-24 group-hover:scale-120 duration-10 transition-all rotate-45'></motion.img>
    <div>
    <motion.h3 variants={SlideUpp(1)}
    initial='hidden'
    whileInView='show'
    whileHover={{scale:1.2}}
    className='text-xl font-semibold text-red-950'>{item.name}</motion.h3>
    <motion.p variants={SlideUpp(1)}
    initial='hidden'
    whileInView='show'
     className='text-xl text-red-800'>{item.price}</motion.p>
    </div>
    </motion.div>

)
} ) }
        </div>


    </div>
    </section>
  )
}

export default HotDesserts
