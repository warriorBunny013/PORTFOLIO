
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Contact = () => {
    return (
      <>
        <div className="flex justify-center items-center h-screen ">
	
	<div className="container mx-auto my-4 flex justify-between px-4 lg:px-40">
	
		<div data-aos="flip-up" data-aos-duration="700" className="glass-effect w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-40 lg:pr-40 mr-auto border ">
		<div className="text-4xl font-mono uppercase tracking-widest font-bold mb-10">Connect with me </div>
			<div className='flex flex-wrap xl:flex-nowrap gap-10'>
			<p className='text-2xl font-mono tracking-wide mt-4'>uditi013@proton.me</p>
			<a href = "mailto:uditi013@proton.me"><button className=" cursor-pointer mt-5 px-3 py-1 whitespace-nowrap hover:bg-cyan-400 hover:animate-pulse border-2 font-mono" >Click 📩</button></a>
			</div>
			
			

		</div>
		<div data-aos="fade-left"
     data-aos-duration="500" className="invisible md:visible">
		<lottie-player  src="https://assets9.lottiefiles.com/packages/lf20_3vbOcw.json"  background="transparent"  style={{width: "500px", height: "300px"}}   loop  autoplay></lottie-player>

		</div>
		
		
    </div>
	
</div>    

       
        
           </>
    );
}

export default Contact;
