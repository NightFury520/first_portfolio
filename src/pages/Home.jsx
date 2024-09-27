import React from 'react';
import Typewriter from "typewriter-effect";
import CursorTrail from '../components/CursorTrail';
// import Resume from '../assets/'
import Mine from '../assets/Mine.jpeg'


const Home = () => {
  return (
    <section className="flex flex-col bg-navy md:h-screen md:grid md:grid-cols-2 md:justify-center md:content-center md:pl-10" id='home'>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <CursorTrail />
      </div>
      <div className='h-screen flex flex-col justify-evenly items-center order-last md:order-first md:justify-center md:mb-20'>
        <div className='w-1/2 lg:w-2/5 rounded-3xl' style={{ background: "linear-gradient(45deg, transparent, #63ecb5, transparent)" }}>
          <img src={Mine} alt="Henry Kelvis" className="rounded-3xl overflow-hidden -rotate-12 hover:rotate-0" style={{ transition: 'all 400ms ease' }} />
        </div>
        <h1 className='md:hidden px-[5%] text-center text-2xl text-lightest-slate'>Building the web, one pixel at a time.</h1>
      </div>
      <div className="flex flex-col h-screen text-center justify-evenly">
        <div className=''>
          <h1 className="my-1 md:my-2 lg:my-3 text-2xl  md:text-3xl  lg:text-4xl text-lightest-slate">Hey there!</h1>
          <h1 className="my-1 md:my-2 lg:my-3 text-2xl md:text-3xl lg:text-4xl text-lightest-slate">I'm Brown Jack,</h1>
          <h1 className="my-1 md:my-2 lg:my-3 text-3xl md:text-4xl lg:text-5xl">
            <span className="typewriter inline-block text-green">
              <Typewriter
                options={{
                  strings: ['Backend', 'Frontend', 'Designer', 'Software'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            <span className="inline-block ml-1 text-lightest-slate">Developer</span>
          </h1>
        </div>
        <div className='space-y-9 flex flex-col items-center md:flex md:flex-row md:justify-evenly md:space-y-0'>
          {/* <button type="button" className="lg:px-4 lg:text-xl py-2 px-4 md:px-2 w-fit text-lg text-green border border-green rounded-md hover:text-green hover:bg-lightest-navy transition-all ease-in-out duration-200 cursor-pointer text-center"
            onClick={() => window.open(Resume, "_blank")}>
            Resume
          </button> */}
          <button
            type="button"
            className="lg:px-4 lg:text-xl py-2 px-4 w-fit md:px-2 text-lg text-green border border-green rounded-md hover:text-green hover:bg-lightest-navy transition-all ease-in-out duration-200 cursor-pointer text-center"
            onClick={() => window.location.href = "#contact"}
          >
            Let's talk!
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home