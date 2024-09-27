import React from 'react';
import { TbBrandGithub } from 'react-icons/tb'
import { FiLinkedin } from 'react-icons/fi'
import { ImWhatsapp } from 'react-icons/im'
import { HiOutlineMail } from 'react-icons/hi'


const Socials = () => {
  return (
    <div className="hidden md:fixed md:bottom-0 md:left-0 md:p-8 md:flex md:flex-col social md:items-center">
      <a target="_blank" rel="noreferrer" href="" className="my-3">
        <TbBrandGithub className="text-xl hover:-translate-y-1 text-light-slate hover:text-green" />
      </a>
      <a target="_blank" rel="noreferrer" href="" className="my-3">
        <FiLinkedin className="text-xl hover:-translate-y-1 text-light-slate hover:text-green" />
      </a>
      <a target="_blank" rel="noreferrer" href="" className="my-3">
        <ImWhatsapp className="text-l hover:-translate-y-1 text-light-slate hover:text-green" />
      </a>
      <a href="mailto:henrykelvis904@gmail.com" className="my-3 pb-20">
        <HiOutlineMail className="text-xl hover:-translate-y-1 text-light-slate hover:text-green" />
      </a>
    </div>
  )
}

export default Socials