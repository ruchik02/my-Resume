import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
// import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className='grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48'>
      <div className='grid grid-cols-12 col-span-12 gap-6'>
        {/* Sidebar */}
        <div className='col-span-12 lg:col-span-3 h-full'>
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className='col-span-12 lg:col-span-9 h-full'>
          <About />
        </div>
      </div>
    </div>
  );
}
