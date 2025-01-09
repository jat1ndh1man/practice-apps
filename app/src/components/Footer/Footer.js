import React from 'react'
import Logo from '../../assets/logo.png'

const footer = () => {
  return (
    <footer>
    <div className='container py-12'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
    <div>
        <img src={Logo} alt='' className='w-24 px-2 py-2'></img>
        <p className='justify'>This is the information about the company that it was established today. We look forward to serve  you</p>
        <a href='yummbreakfast.com' className=' text-red-900'>contact@Yummybreakfast.com</a>
        
    </div>
    <div className='col-span-2 grid grid-cols-2 md:grid-cols-3 gap-6'>
        <div>
            <h1 className='text-xl font-semibold'>Quick Links</h1>
            <ul className='mt-3 space-y-2'>
            <li className='footer-link'>Home</li>
            <li className='footer-link'>About</li>
            <li className='footer-link'>New</li>
            <li className='footer-link'>Shop</li>
            </ul> 
            </div>
            <div>
            <h1 className='text-xl font-semibold'>Social Media</h1>
            <ul className='mt-3 space-y-2' >
            <li className='footer-link'>Instagram</li>
            <li className='footer-link'>Facebook</li>
            <li className='footer-link'>Twitter</li>
            <li className='footer-link'>Linkedin</li>
            </ul>
            </div>
        </div>

    </div>

    </div>

    
    </footer>
  )
}

export default footer
