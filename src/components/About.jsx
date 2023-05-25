
import { ComputersCanvas } from "./canvas";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const About = () => {
    return (
      <>
       <div className="flex flex-col lg:pl-40 min-h-screen lg:pr-40">
       <div data-aos="fade-left"
     data-aos-easing="linear"
     className="text-5xl md:text-6xl lg:text-7xl mt-20 font-mono font-bold">ABOUT ME</div>

       <div className="grid 2xl:grid-cols-2 xl:grid-cols-1  min-h-screen min-w-screen">
       <div data-aos="fade-left"
     data-aos-easing="linear" className=" h-[20rem] w-[320px] p-2 md:h-full font-mono pt-3">I have experience 
     in <span className="text-cyan-400"> frontend development , backend api's & databases as well as AWS.</span> I like to learn things by building projects.
      I’m always down for hearing 
         about new projects, so feel free to drop me a line.
         <div className="col-span-1 font-mono justify-self-end mt-10 text-3xl leading-[2.5rem] pt-3">TECHSTACKS/TOOLS <span className="text-lg">
      REACTJS REDUX NODEJS EXPRESSJS MONGODB MYSQL
      FIGMA VSCODE  JUPITER-NOTEBOOK LINUX CL/CLI POSTMAN RAPID-API </span>
      </div> 
         </div>  
         <div className="w-[320px] md:w-full ">
         <ComputersCanvas/>
         </div>
         
            
    
         
</div>
      
      
    
      
        </div>     
           </>
    );
}

export default About;
