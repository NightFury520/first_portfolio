import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z0gmua1', 'template_oqyvwap', form.current, 'POqMKaPOluIU3Yvwh')

    e.target.reset()
  };
  return (
    <section id="contact" className='md:h-[calc(100vh-160px)] h-[calc(100vh-80px)] bg-navy flex flex-col justify-center items-center '>
      <h1 className='text-3xl mb-10 text-center text-lightest-slate'>Ready to connect?</h1>
      <form ref={form} onSubmit={sendEmail} className=" lg:w-1/2 md:w-3/5 w-3/4 mx-auto flex flex-col gap-6 md:mb-10">
        <div className="flex w-full">
          <input type="text" name='name' placeholder='Your full name' required className="w-1/2 mr-3 p-3 bg-light-navy border border-slate rounded-lg text-light-slate resize-none flex-basis-49%" />
          <input type="text" name='email' placeholder='Your email' required className="w-1/2 ml-3 p-3 bg-light-navy border border-slate rounded-lg text-light-slate resize-none flex-basis-49%" />
        </div>
        <input type="text" name='subject' placeholder='The subject of the message' required className="w-full p-3 bg-light-navy border border-slate rounded-lg text-light-slate resize-none" />
        <textarea name="message" placeholder='Your message' required className="w-full p-3 bg-light-navy border border-slate rounded-lg text-light-slate resize-none"></textarea>
        <button type='submit' className="text-green border border-green rounded-md text-lg px-5 py-2.5 hover:text-green hover:bg-lightest-navy transition-all ease-in-out duration-200 cursor-pointer text-center">Send Message</button>
      </form>
    </section>
  )
}

export default Contact