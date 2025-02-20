import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { GiTie } from 'react-icons/gi'
import { GoLocation } from 'react-icons/go'
import { motion } from "framer-motion";

const Sidebar = () => {
  return (
    <>
  
      <img
        src=''
        alt='avatar'
        className='w-32 h-32 mx-auto border rounded-full'
      />
      <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
        <span className='text-primary'>Ruchika</span> Sharma
      </h3>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-card'>
        Full Stack Developer
      </p>

      {/* Resume */}
      <a
        href='/assets/Sumit Dey Resume.pdf'
        download='Sumit Dey Resume.pdf'
        className='flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-card gap-2'
      >
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className='flex justify-around w-9/12 mx-auto my-5 text-primary md:w-full'>
        <a href='https://www.youtube.com/channel/UClW8d1f5m0QAE_Ig024EP6A' 
           className="hover:scale-110 transition-transform">
          <AiFillYoutube className='w-8 h-8 cursor-pointer' />
        </a>
        <a href='https://www.linkedin.com/in/sumit-dey-4a04431a9/'
           className="hover:scale-110 transition-transform">
          <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
        </a>
        <a href='https://www.instagram.com/_sumax__/'
           className="hover:scale-110 transition-transform">
          <AiFillGithub className='w-8 h-8 cursor-pointer' />
        </a>
      </div>

      {/* Contacts */}
      <div
        className='py-4 my-5 bg-gray-200 dark:bg-card w-full'
      >
        <div className='flex items-center justify-center gap-2'>
          <GoLocation /> <span>Haryana,India </span>
        </div>
        <p className='my-2 text-center'>sruchika004@gmail.com</p>
        <p className='my-2 text-center'>8221820300</p>
      </div>

      {/* Action Buttons */}
      <button
        className='w-8/12 px-5 py-2 text-white bg-gradient-to-r from-primary to-blue-500 rounded-full cursor-pointer hover:scale-105 transition-transform focus:outline-none'
        // onClick={() => window.open('mailto:code.sumax@gmail.com')}
      >
        Email me
      </button>
      <button
        // onClick={() => {}}
        className='w-8/12 px-5 py-2 my-4 text-white bg-gradient-to-r from-primary to-blue-500 rounded-full cursor-pointer hover:scale-105 transition-transform focus:outline-none'
      >
        Change UI
      </button>
      </>
  )
}

export default Sidebar 