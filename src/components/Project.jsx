
import { ComputersCanvas } from "./canvas";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Project = () => {
    return (
      <>
        <div className="md:pl-20 md:pr-20 pt-20 sm:pl-10 sm:pr-10 min-h-screen ">   
           <div className="flex justify-center flex-wrap gap-20">
           {/* <span className="font-bold tracking-widest">FEATURED PROJECT</span> */}
       
          <div data-aos="fade-up-right" className="max-w-sm border font-mono overflow-hidden">
  <img  className="w-full" src="https://user-images.githubusercontent.com/97738453/237886571-d9d6c585-e4c9-47ee-8c92-a2087a5c5c9b.png" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
  <div className="text-xl z-10 font-mono font-bold">02</div>
    <div className="font-bold text-3xl mb-2">DELIGHT</div>
  
   
    <p className="z-10 font-mono opacity-75">Easy ordering healthy food and convenient, with real-time delivery tracking to ensure your meals arrive fresh and on time</p>
           
  </div>
  <div className="m-2 flex gap-2 w-1/2 items-center">
           <a href="https://youtu.be/obzlaOPI8Rk"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-transparent hover:animate-pulse border-2 w-full bg-white text-black font-bold hover:text-white">Live</button></a>
        
           <a href="https://github.com/warriorBunny013/Delight"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-cyan-400 hover:animate-pulse border-2 w-full">Github</button></a>
        
           </div>
             </div>
          <div data-aos="fade-up-left" className="max-w-sm border font-mono overflow-hidden">
  <img className="w-full" src="https://user-images.githubusercontent.com/97738453/237698574-3982043c-595e-47e0-b398-78bab9b9612d.png" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
  <div className="text-xl z-10 font-mono font-bold">03</div>
    <div className="font-bold text-3xl mb-2">TRAVELEASY</div>
  
   
    <p className="z-10 font-mono opacity-75">Browse Hotels by places and Book hotels.Multipage website with user authentication.</p>
           
  </div>
  <div className="m-2 flex gap-2 w-1/2 items-center">
           <a href="https://youtu.be/-S0U_536Pdo"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-transparent hover:animate-pulse border-2 w-full bg-white text-black font-bold hover:text-white">Live</button></a>
        
           <a href="https://github.com/warriorBunny013/TravelEasy-Final"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-cyan-400 hover:animate-pulse border-2 w-full">Github</button></a>
        
           </div>
             </div>
          </div>
        
       </div>   
       
          
        <div className="md:pl-20 md:pr-20 pt-20 sm:pl-10 sm:pr-10 min-h-screen  ">   
           <div className="flex justify-center flex-wrap gap-20">
           {/* <span className="font-bold tracking-widest">FEATURED PROJECT</span> */}
       
          <div data-aos="fade-up-right" className="max-w-sm border font-mono overflow-hidden">
  <img className="w-full" src="chatify.png" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
  <div className="text-xl z-10 font-mono font-bold">04</div>
    <div className="font-bold text-3xl mb-2">CHATIFY</div>
  
   
    <p className="z-10 font-mono opacity-75">Group chating application that allows the user's socialize without the need to revealing name</p>
           
  </div>
  <div className="m-2 flex gap-2 w-1/2 items-center">
           <a href="https://chatify-app.onrender.com/"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-transparent hover:animate-pulse border-2 w-full bg-white text-black font-bold hover:text-white">Live</button></a>
        
           <a href="https://github.com/warriorBunny013/chat-app"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-cyan-400 hover:animate-pulse border-2 w-full">Github</button></a>
        
           </div>
             </div>
          <div data-aos="fade-up-left" className="max-w-sm border font-mono overflow-hidden">
  <img className="w-full" src="orchid.png" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
  <div className="text-xl z-10 font-mono font-bold">01</div>
    <div className="font-bold text-3xl mb-2">ORCHID</div>
  
   
    <p className="z-10 font-mono opacity-75">Youtube streaming application with personalised chatbot and create secret rooms to watch videos with your friends</p>
           
  </div>
  <div className="m-2 flex gap-2 w-1/2 items-center">
           <button className="cursor-pointer mt-5 px-3 py-1 hover:bg-transparent hover:animate-pulse border-2 w-full bg-white text-black font-bold hover:text-white">Live</button>
        
           <button className="cursor-pointer mt-5 px-3 py-1 hover:bg-cyan-400 hover:animate-pulse border-2 w-full">Github</button>
        
           </div>
             </div>
          </div>
        
       </div>      
        
        
           </>
    );
}

export default Project;
