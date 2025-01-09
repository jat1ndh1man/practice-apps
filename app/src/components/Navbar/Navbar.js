import React from 'react'
import Logo from '../../assets/logo.png'; 
import { FaCartShopping } from "react-icons/fa6";
import {  motion } from "framer-motion";
const NavMenu = [
    {
        id: 1,
        title: 'Home',
        path: "/"
        
    },
     {
        id: 2,
        title: 'About',
        path: "/about"
        
    },
    {
        id: 3,
        title: 'Menu',
        path: "/menu"
        
    },
    {
        id: 4,
        title: 'Delivery',
        path: "/delivery"
        
    }
]
   const SlideDown = (delay ) => {
    return{
      initial:{y:-100 , opacity:0,
    },
    animate: {y:0, opacity:100, transition:{ duration:0.8,
      delay:delay}
}
}
}
const navbar = () => {
  return (
    <nav>
    <div>
      <div className='container  gap-12 flex justify-center items-center font-serif  bg-red-300'>
        { /*image*/}

          <motion.img 
        initial ={{ opacity :0}}
        animate ={{opacity :1}}
        whileHover={{scale:1.1}}
        transition ={{duration:0.8, delay:0.5}}
        src={Logo} alt='' className='w-30 h-20 rounded-full shadow-xl border-red-300'/>

        {    /*menu*/    }
        <div className='flex justify-center'>
            <ul className='flex gap-6 text-red-900 text-3xl' >{
            NavMenu.map((menu)=> {
return(
    <motion.li variants={
      SlideDown(menu.delay)}
      initial='initial'
      animate='animate'
      whileHover={{scale:1.2}}
      key={menu.id} 
      className='nav-menu'
      data-delay={'menu.delay'}>
      
    <a href={menu.path} className='inline-block px-2 py-2 text-2xl'>{menu.title}</a>
</motion.li>
    
);
            } ) }

            </ul>
        </div>
        {    /*button*/   }
        <motion.div variants={SlideDown(0.5)}
        initial='initial' 
        animate='animate'
        whileHover={{scale:1.2}}>
        
           <button className='h-10 w-10 grid place-items-center rounded-full text-white bg-black'> <FaCartShopping/></button>
</motion.div>
      </div>
      </div>
    </nav>
  )
}

export default navbar
