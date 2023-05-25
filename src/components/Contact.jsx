
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Contact = () => {
    return (
      <>
        <div className="flex justify-center items-center  h-screen ">
	
	<div className="container mx-auto my-4 px-4 lg:px-40">

		<div data-aos="flip-up" data-aos-duration="700" className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-40 lg:pr-40 mr-auto  shadow-sm shadow-white ">
			<div className="flex">
				<h1 className="font-bold uppercase font-mono text-5xl">Say Hello</h1>
			</div>
	
				<input className="w-full text-cyan-400 mt-2 p-3 focus:outline-none focus:shadow-outline"
            type="email" placeholder="Email" />
				<div className="my-4">
					<textarea style={{ resize: "none"}} placeholder="Message" className="w-full h-32 text-cyan-400 mt-2 p-3  focus:outline-none focus:shadow-outline"></textarea>
				</div>
				<div className="my-2 w-1/2 lg:w-1/4">
					<button className="uppercase text-sm font-bold tracking-wide bg-white text-black hover:bg-transparent border hover:text-white p-3 w-full 
                      focus:outline-none focus:shadow-outline">
            Send Message
          </button>
				</div>
			</div>

		
    </div>
</div>    
       
        
           </>
    );
}

export default Contact;
