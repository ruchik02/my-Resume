import Sidebar from "@/components/Sidebar";
// import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className='grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48'>
      {/* Sidebar Column */}
      <div className='h-full col-span-12 p-4 text-base text-center bg-white dark:bg-card lg:col-span-3 rounded-2xl'>
        <Sidebar />
      </div>

      {/* Main Content Column */}
      <div className='flex flex-col col-span-12 bg-white dark:bg-card rounded-2xl lg:col-span-9'>
        {/* <Navbar /> */}
        <main className="p-8">
          {/* <p className="text-lg text-gray-600 dark:text-gray-400">
            I am currently pursuing B.Tech Degree(Final Year) in Computer Science Engineering from Academy of Technology. 
            I have 3+ years of experience in Web Development and I have a Youtube Channel where I teach Full Stack Web Development Projects
          </p> */}
          {/* Add your "What I am doing" section here */}
        </main>
      </div>
    </div>
  );
}
