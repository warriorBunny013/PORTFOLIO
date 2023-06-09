import SideNav from "./components/SideNav"
import Home from "./components/Home"
import { StarsCanvas } from "./components"
import Projects from "./components/Projects"
import Project from "./components/Project"
import About from "./components/About"
import Contact from "./components/Contact"
import AnimatedCursor from "react-animated-cursor"
// import Experience from "./components/Experience"
import { Link,BrowserRouter,Routes,Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <AnimatedCursor
  innerSize={8}
  outerSize={35}
  innerScale={1}
  outerScale={2}
  outerAlpha={0}
  hasBlendMode={true}
  innerStyle={{
    backgroundColor: 'var(--cursor-color)'
  }}
  outerStyle={{
    border: '3px solid var(--cursor-color)'
  }}
/>
    <div className="relative">
     <div className="fixed xl:top-72 xl:-left-72 md:top-56 md:-left-56 -rotate-90 z-10 pt-10 w-[100vh] invisible md:visible">
     <div className="flex md:p-10  sm:gap-10 ml-4 opacity-75 text-base px-10 tracking-widest font-mono font-bold">
          <div className="flex   gap-5 px-4">
          <a href="https://www.linkedin.com/in/uditi-d-20573b200/">
            <i className="fa-brands rotate-90 fa-linkedin fa-lg cursor-pointer hover:duration-700 hover:text-cyan-400"></i>
            </a>
          <a href="https://github.com/warriorBunny013">
            <i className="fa-brands rotate-90 fa-github fa-lg  cursor-pointer hover:duration-700 hover:text-cyan-400"></i>
             </a>
             <a href="https://www.instagram.com/artme_empire/"><i className="fa-brands rotate-90 fa-instagram fa-lg cursor-pointer hover:duration-700 hover:text-cyan-400"></i></a>
          </div>
          {/* <div> */}
          <a href="#contact"><div className=" hover:line-through hover:animate-pulse cursor-pointer hover:duration-700 hover:text-cyan-400">Contact</div></a>
           <a href="#about"><div className="hover:line-through hover:animate-pulse cursor-pointer hover:duration-700 hover:text-cyan-400">About</div></a>
           <a href="#skill"><div className=" hover:line-through hover:animate-pulse cursor-pointer hover:duration-700 hover:text-cyan-400">Skills</div></a>
           <a href="#projects"><div className="hover:line-through hover:animate-pulse cursor-pointer hover:duration-700 hover:text-cyan-400">Projects</div></a>
          {/* </div> */}
          
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
    <div>
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
    <div className="font-mono absolute right-10 text-xs pb-10">Made with ❤️ by Uditi</div>
    </BrowserRouter>
  )
}

export default App
