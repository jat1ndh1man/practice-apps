import React from 'react'
import { motion } from "framer-motion";
import dessert1 from '../../assets/dessert1.jpeg'
import dessert2 from '../../assets/dessert2.jpeg'
import dessert3 from '../../assets/dessert3.jpeg'
import dessert4 from '../../assets/dessert4.jpeg'
import dessert5 from '../../assets/dessert5.jpeg'
import dessert6 from '../../assets/dessert6.jpeg'
import { SlideUp } from '../Hero/Hero';


const PopularData =[
    {id:1,
        Name:'Hot Cake',
        img:dessert1,
        price: '$2.99',
        delay: 0.4,
    },
    {id:2,
        Name:'Hot Mousse',
        img: dessert2,
        price: '$1.99',
        delay: 0.8,
    },
    {id:3,
        Name:'Truffle',
        img: dessert3,
        price: '$3.99',
        delay: 0.16,
    },
    {id:4,
        Name:'Kesar Pista',
        img: dessert4,
        price: '$8.99',
        delay: 0.20,
    },
    {id:5,
        Name:'Vanilla',
        img: dessert5,
        price: '$7.99',
        delay: 0.24,
    },
    {id:6,
        Name:'Pudding',
        img: dessert6,
        price: '$3.99',
        delay: 0.28,
    }
]

const popular = () => {
  return (
    <div className='container py-2 px-2  justify-center  items-center bg-red-200'>
      <motion.h1 variants={SlideUp(0.1)}
      initial='hidden'
      whileInView='show'
      className='text-4xl font-bold top-0 font-serif text-center items-center align-middle text-red-900 uppercase py-8'>Our Popular</motion.h1>
    <div className='flex justify-center grid-cols-3  px-20 gap-1 place-items-centers sm:grid-cols-2 md:grid-cols-3 '>
      {PopularData.map((item)=>{return(
        <div className='group space-y-3 space-x-3 bg-white/50 shadow-xl p-2 rounded-xl mx-auto my-auto '>
        <motion.img variants={SlideUp(0)}
        initial={{opacity:0, x:-10, y:-10}}
        whileInView={{opacity:0.8, x:0, y:0}}
        whileHover={{scale:1.1, opacity:1,  translateX:10 ,translateY:-20}}
        src={item.img} alt='' className=' w-[150px] h-[150px] shadow-2xl place-items-center rounded-full'/>
        <button className='btn-primary bg-lime-700 text-white rounded-full px-3 py-2 opacity-0  
        hover:scale-110 group-hover:mb-2 mt-3
         group-hover:opacity-100 '>Buy Now!</button>
        <h1 className='text-bold text-3xl group-hover:text-4xl group-hover:font-semibold'>{item.Name}</h1>
        <p1 className='text-semibold text-2xl  text-red-900 group-hover:font-semibold'>{item.price}</p1>
        </div>
      )})
      }
    </div>
    </div>
  )
}

export default popular  
