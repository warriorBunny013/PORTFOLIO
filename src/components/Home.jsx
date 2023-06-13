import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
const Home = () => {
    return (
      <>
        <div className=" sm:pl-40 h-screen ">
          <div className="pl-10 lg:pt-40 ">
          <div className=" lg:w-1/2 mr-10">
           <h1 className=" pt-10 text-2xl font-mono transition duration-0 cursor-pointer hover:text-cyan-400 hover:duration-700 font-semibold tracking-[0.3em] opacity-75">UDITI DAS</h1>
           <div className="relative  flex">
           <motion.div className="text-5xl  md:text-6xl lg:text-7xl z-10 font-mono font-bold"
             initial={{x:"10%",width:"100%"}}
             animate={{x:"0%",width:"0%"}}
             transition={{duration:0.6,ease:"easeInOut"}}
           
            >DEVELOPER</motion.div>
           <motion.div className='right-full z-20 bg-cyan-400'
             initial={{x:"160%",width:"100%"}}
             animate={{x:"0%",width:"0%"}}
             transition={{duration:0.6,ease:"easeInOut"}}
           >
            </motion.div>
           
            </div>
             
            <motion.div className=" pt-4 font-mono"
            initial={{ opacity: 0,x:"0%",width:"100%"}}
            animate={{x:"0%", opacity: 1,width:"100%"}}
             transition={{delay:0.8,duration:0.5,ease:"easeInOut"}}
            >
              I'm a web developer and I like to build really cool stuffs! 
              I like to design in Figma, code in Visual Studio Code, and deploy to the cloud.
              </motion.div>
              <motion.div
               initial={{ opacity: 0,x:"0%",width:"100%"}}
               animate={{x:"0%", opacity: 1,width:"100%"}}
                transition={{delay:1,duration:0.5,ease:"easeInOut"}}
                
              >
                <a href="uditi_resume.pdf" download="uditi's Resume" target='_blank'><button className=" cursor-pointer mt-5 px-3 py-1 hover:bg-cyan-400 hover:animate-pulse border-2 font-mono" >Resume</button></a></motion.div>
           </div>
          </div>
           
          
           {/* <ComputersCanvas /> */}
           </div>
           
           </>
    );
}

export default Home;
