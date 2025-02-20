import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillX, AiFillYoutube } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'


const Sidebar = () => {
  return (
    <div className="flex flex-col py-8 items-center bg-white dark:bg-card rounded-[2rem] shadow-xl border">
      <img
        src='https://avatars.githubusercontent.com/u/83516020?v=4'
        alt='avatar'
        className='w-32 h-32 mx-auto border rounded-full'
      />
      <h3 className='my-4 text-xl font-medium tracking-wider'>
        <span className='text-primary'>Ruchika</span> Sharma
      </h3>
      <p className='px-4 py-2 my-3 bg-gray-200 rounded-full dark:bg-card'>
        Full Stack Developer
      </p>

      {/* Resume */}
      <a
        href='/assets/ruchika.pdf'
        download='ruchika_sharma.pdf'
        className='flex items-center justify-center px-4 py-2 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-card gap-2'
      >
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className='flex justify-around w-9/12 mx-auto my-5 text-primary md:w-full'>
        <a href='https://x.com/RuchikaRuchikas' 
           className="hover:scale-110 transition-transform">
          <AiFillTwitterCircle className='w-8 h-8 cursor-pointer' />
        </a>
        <a href='https://www.linkedin.com/in/er-ruchika-sharma'
           className="hover:scale-110 transition-transform">
          <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
        </a>
        <a href='https://github.com/ruchik02'
           className="hover:scale-110 transition-transform">
          <AiFillGithub className='w-8 h-8 cursor-pointer' />
        </a>
      </div>

      {/* Contacts */}
      <div
        className='py-4 my-5 bg-gray-200 dark:bg-card w-full'
      >
        <div className='flex items-center justify-center gap-2'>
          <GoLocation /> <span>Remote, India </span>
        </div>
        <p className='my-2 text-center'>sruchika004@gmail.com</p>
        <p className='my-2 text-center'>8221820300</p>
      </div>

      {/* Action Buttons */}
      <button
        className='w-8/12 px-5 py-2 text-white bg-gradient-to-r from-primary to-blue-500 rounded-full cursor-pointer hover:scale-105 transition-transform focus:outline-none'
        // onClick={() => window.open('mailto:sruchika004@gmail.com')}
      >
        Email me
      </button>
      <button
        // onClick={() => {}}
        className='w-8/12 px-5 py-2 my-4 text-white bg-gradient-to-r from-primary to-blue-500 rounded-full cursor-pointer hover:scale-105 transition-transform focus:outline-none'
      >
        Change UI
      </button>
      </div>
  )
}

export default Sidebar 