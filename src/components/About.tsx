const About = () => {
  return (
    <div className='bg-white dark:bg-card rounded-[2rem] shadow-lg border border-gray-200 p-8 h-full'>
      <div className='flex justify-between items-center mb-8'>
        <h2 className='text-3xl font-bold'>
          <span className='text-primary'>About</span>
        </h2>
        <div className='flex gap-6 text-xl'>
          <a href="#" className='hover:text-primary transition-colors'>Resume</a>
          <a href="#" className='hover:text-primary transition-colors'>Projects</a>
        </div>
      </div>
      
      <p className='text-lg text-gray-600 dark:text-gray-400 mb-8'>
      I am a skilled software developer with over 3+ year of valuable experience, currently employed at GeekyAnts. My expertise primarily lies in React, SwiftUI and React-Native. I am committed to delivering high-quality software solutions and thrive in collaborative, innovative environments.
      </p>

      {/* What I am doing section */}
      <h3 className='text-2xl font-semibold mb-8'>What I am doing</h3>
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* Frontend Development */}
        <div className='bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl hover:shadow-md transition-shadow'>
          <div className='flex gap-4'>
            <span className='text-primary text-3xl'>💻</span>
            <div>
              <h4 className='text-xl font-medium mb-2'>Frontend Development</h4>
              <p className='text-gray-600 dark:text-gray-400'>
              Building responsive Single-Page-Apps (SPA) & PWA in React.js. 
              Experienced with modern tools like Next.js, Tailwind, and TypeScript.
              </p>
            </div>
          </div>
        </div>

        {/* Backend Development */}
        <div className='bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl hover:shadow-md transition-shadow'>
          <div className='flex gap-4'>
            <span className='text-primary text-3xl'>🔋</span>
            <div>
              <h4 className='text-xl font-medium mb-2'>Backend Development</h4>
              <p className='text-gray-600 dark:text-gray-400'>
              Handling database, server, and APIs using Node.js & Express. 
              Experience with SQL, MongoDB, and cloud platforms.
              </p>
            </div>
          </div>
        </div>

        {/* API Development */}
        <div className='bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl hover:shadow-md transition-shadow'>
          <div className='flex gap-4'>
            <span className='text-primary text-3xl'>📱</span>
            <div>
              <h4 className='text-xl font-medium mb-2'>Mobile Development</h4>
              <p className='text-gray-600 dark:text-gray-400'>
              Developing cross-platform mobile applications using React Native 
              and native Android development with Kotlin.
              </p>
            </div>
          </div>
        </div>

        {/* Competitive Coder */}
        <div className='bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl hover:shadow-md transition-shadow'>
          <div className='flex gap-4'>
            <span className='text-primary text-3xl'>🛠️</span>
            <div>
              <h4 className='text-xl font-medium mb-2'>DevOps</h4>
              <p className='text-gray-600 dark:text-gray-400'>
              Experience with CI/CD pipelines, Docker containerization, 
              and cloud services (AWS, Firebase).
              </p>
            </div>
          </div>
        </div>

        {/* UI/UX Designer */}
        {/* <div className='bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl hover:shadow-md transition-shadow'>
          <div className='flex gap-4'>
            <span className='text-primary text-3xl'>🎨</span>
            <div>
              <h4 className='text-xl font-medium mb-2'>UI/UX Designer</h4>
              <p className='text-gray-600 dark:text-gray-400'>
                stunning user interface designer using Figma and Framer
              </p>
            </div>
          </div>
        </div> */}

        {/* Whatever */}
        {/* <div className='bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl hover:shadow-md transition-shadow'>
          <div className='flex gap-4'>
            <span className='text-primary text-3xl'>📱</span>
            <div>
              <h4 className='text-xl font-medium mb-2'>Whatever</h4>
              <p className='text-gray-600 dark:text-gray-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default About; 