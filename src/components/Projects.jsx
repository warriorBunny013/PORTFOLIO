
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Projects = () => {
    return (
      <><div className="lg:pl-60 lg:pt-60 lg:pr-60 sm:p-10 min-h-screen">
<div data-aos="flip-right"  className="max-w-sm w-full  lg:max-w-full lg:flex border">
<div className="min-h-auto min-w-48 max-w-10 overflow-hidden  text-center">
             <img src="orchid.png" alt="orchid" className="hover:scale-125 ease-in duration-150"/>
            </div>
  <div className="p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
          <div className="text-2xl z-10 font-mono font-bold">01</div>
           <div className="text-5xl z-10 font-mono font-bold pb-5">ORCHID</div>
           <p className="z-10 font-mono opacity-75">Youtube streaming application with personalised chatbot and create secret rooms to watch videos with your friends</p>
</div>
<div className=" flex gap-2 w-1/2 items-center">
           <a href='https://powerpuff-bugs-orchid-video-stream-hmgu.vercel.app/'><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-transparent hover:animate-pulse border-2 w-full bg-white text-black font-bold hover:text-white">Live</button></a>
        
           <a href='https://github.com/warriorBunny013/POWERPUFF-BUGS-ORCHID-VIDEO-STREAM'><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-cyan-400 hover:animate-pulse border-2 w-full">Github</button></a>
        
           </div>
  </div>
  
  
</div>
</div>
 
     
            
           </>
    );
}

export default Projects;
