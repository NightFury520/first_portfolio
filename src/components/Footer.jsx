import React from 'react'

const Footer = () => {
  return (
    <section className='bg-navy h-auto pt-5 pb-2'>
      <p className='text-center text-sm text-lightest-slate'>
        Built with <span className="heart">&#10084;</span> by Henry Kelvis
      </p>
      <div className="text-center">
        <a target="_blank" rel="noreferrer" href='' className="text-sm px-4 text-lightest-slate hover:text-green">Source code</a>
      </div>
    </section>
  )
}

export default Footer
