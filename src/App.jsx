import SideNav from "./components/SideNav"
import Home from "./components/Home"
import { StarsCanvas } from "./components"
import Projects from "./components/Projects"
import Project from "./components/Project"
import About from "./components/About"
import Contact from "./components/Contact"
// import Experience from "./components/Experience"
import { Link,BrowserRouter,Routes,Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="">
     <div className="fixed z-10 -left-72 top-72 invisible md:visible">
     <div className="flex -rotate-90 gap-10 opacity-75 text-base p-12 tracking-widest font-mono font-bold">
          <div className="flex gap-5 p-4 ">
         

          <a href="https://www.linkedin.com/in/uditi-d-20573b200/">
            <i className="fa-brands rotate-90 fa-linkedin fa-lg cursor-pointer hover:duration-700 hover:text-cyan-400"></i>
            </a>
          <a href="https://github.com/warriorBunny013">
            <i className="fa-brands rotate-90 fa-github fa-lg  cursor-pointer hover:duration-700 hover:text-cyan-400"></i>
             </a>
             <a href="https://www.instagram.com/artme_empire/"><i className="fa-brands rotate-90 fa-instagram fa-lg cursor-pointer hover:duration-700 hover:text-cyan-400"></i></a>
          </div>
           <a href="#contact"><div className="hover:line-through hover:animate-pulse cursor-pointer hover:duration-700 hover:text-cyan-400">Contact</div></a>
           <a href="#about"><div className="hover:line-through hover:animate-pulse cursor-pointer hover:duration-700 hover:text-cyan-400">About</div></a>
           <a href="#skill"><div className="hover:line-through hover:animate-pulse cursor-pointer hover:duration-700 hover:text-cyan-400">Skills</div></a>
           <a href="#projects"><div className="hover:line-through hover:animate-pulse cursor-pointer hover:duration-700 hover:text-cyan-400">Projects</div></a>
        </div>
     </div>
     <div className="w-screen relative z-0">
     <Home/>
     <StarsCanvas/>
     </div>
     <div id="about">
     <About/>
     </div>
    <div id="projects">
    <Projects/>
    </div>
    <div id="skill">
    <Project/>
    </div>
    <div id="contact">
    <Contact/>
    </div>
    
   

      <Routes>  
              <Route exact path='/about' element={<About/>}></Route>  
                 <Route exact path='/projects' element={<Projects/>}></Route>  
                 <Route exact path='/contact' element={< Contact />}></Route>  
          </Routes>  
    </div>
    </BrowserRouter>
  )
}

export default App
