import React from 'react';
import Kaleidoscope from '../components/Kaleidoscope';
import { SiVite, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiReact, SiNpm, SiNodedotjs, SiNodemon, SiP5Dotjs, SiTailwindcss, SiExpress, SiMongodb, SiOpenapiinitiative, SiGit, SiGithub, SiBootstrap, SiJquery, SiSass, SiRedux, SiD3Dotjs, SiGnubash, SiPostgresql, SiMysql, SiIonic } from 'react-icons/si'
import { useEffect } from 'react';
import $ from 'jquery';

const Skills = () => {

  useEffect(() => {
    $('.icon').hover(function () {
      $('.icon').not(this).addClass('blur');
    }, function () {
      $('.icon').removeClass('blur');
    });
  }, []);

  return (
    <section id='skills' className='bg-navy lg:pl-[5%] lg:h-screen flex flex-col lg:flex-row lg:items-center lg:pt-12'>
      <div className=' order-2 lg:order-1 h-screen lg:w-1/2 flex justify-center items-center'>
        <Kaleidoscope />
      </div>
      <div className='order-1 lg:order-2 h-screen lg:w-1/2 flex flex-col lg:justify-center justify-evenly items-center lg:mr-10 lg:pr-10 lg:-mt-10'>
        <h1 className='lg:-mt-10 lg:mb-8 text-3xl lg:text-center text-lightest-slate'>Toolkit</h1>
        <div className='grid grid-cols-5 gap-10 md:gap-12 lg:gap-10'>
          <a href='https://www.javascript.com/' target="_blank" rel="noreferrer" data-hover="JavaScript" className="hovertext icon hover:scale-125"><SiJavascript className='text-green text-4xl ' /></a>
          <a href='https://html.com/' data-hover="HTML" className="hovertext icon hover:scale-125"><SiHtml5 className='text-green text-4xl ' /></a>
          <a href='https://www.w3.org/Style/CSS/Overview.en.html' data-hover="CSS" className="hovertext icon hover:scale-125"><SiCss3 className='text-green text-4xl ' /></a>
          <a href='https://reactjs.org/' data-hover="React" className="hovertext icon hover:scale-125"><SiReact className='text-green text-4xl ' /></a>
          <a href='https://www.npmjs.com/' data-hover="npm" className="hoverleft icon hover:scale-125"><SiNpm className='text-green text-4xl ' /></a>
          <a href='https://nodejs.org/en/' data-hover="Node.js" className="hovertext icon hover:scale-125"><SiNodedotjs className='text-green text-4xl ' /></a>
          <a href='https://nodemon.io/' data-hover="nodemon" className="hovertext icon hover:scale-125"><SiNodemon className='text-green text-4xl ' /></a>
          <a href='https://p5js.org/' data-hover="p5.js" className="hovertext icon hover:scale-125"><SiP5Dotjs className='text-green text-4xl ' /></a>
          <a href='https://tailwindcss.com/' data-hover="Tailwind" className="hovertext icon hover:scale-125"><SiTailwindcss className='text-green text-4xl ' /></a>
          <a href='https://expressjs.com/' data-hover="Express" className="hoverleft icon hover:scale-125"><SiExpress className='text-green text-4xl ' /></a>
          <a href='https://www.mongodb.com/' data-hover="MongoDB" className="hovertext icon hover:scale-125"><SiMongodb className='text-green text-4xl ' /></a>
          <a href='https://www.openapis.org/' data-hover="OpenApi" className="hovertext icon hover:scale-125"><SiOpenapiinitiative className='text-green text-4xl ' /></a>
          <a href='https://git-scm.com/' data-hover="Git" className="hovertext icon hover:scale-125"><SiGit className='text-green text-4xl ' /></a>
          <a href='https://github.com/' data-hover="GitHub" className="hovertext icon hover:scale-125"><SiGithub className='text-green text-4xl ' /></a>
          <a href='https://getbootstrap.com/' data-hover="Bootstrap" className="hoverleft icon hover:scale-125"><SiBootstrap className='text-green text-4xl ' /></a>
          <a href='https://jquery.com/' data-hover="JQuery" className="hovertext icon hover:scale-125"><SiJquery className='text-green text-4xl ' /></a>
          <a href='https://sass-lang.com/' data-hover="Sass" className="hovertext icon hover:scale-125"><SiSass className='text-green text-4xl ' /></a>
          <a href='https://redux.js.org/' data-hover="Redux" className="hovertext icon hover:scale-125"><SiRedux className='text-green text-4xl ' /></a>
          <a href='https://d3js.org/' data-hover="D3.js" className="hovertext icon hover:scale-125"><SiD3Dotjs className='text-green text-4xl ' /></a>
          <a href='https://devdocs.io/bash/' data-hover="BASH" className="hoverleft icon hover:scale-125"><SiGnubash className='text-green text-4xl ' /></a>
          <a href='https://www.postgresql.org/' data-hover="PostgreSQL" className="hovertext icon hover:scale-125"><SiPostgresql className='text-green text-4xl ' /></a>
          <a href='https://www.mysql.com/' data-hover="MySQL" className="hovertext icon hover:scale-125"><SiMysql className='text-green text-4xl ' /></a>
          <a href='https://vitejs.dev/' data-hover="Vite" className="hovertext icon hover:scale-125"><SiVite className='text-green text-4xl ' /></a>
          <a href='https://ionicframework.com/' data-hover="Ionic" className="hovertext icon hover:scale-125"><SiIonic className='text-green text-4xl ' /></a>
          <a href='https://www.typescriptlang.org/' data-hover="TypeScript" className="hovertext icon hover:scale-125"><SiTypescript className='text-green text-4xl ' /></a>
        </div>
        <h1 className='lg:hidden text-xl text-lightest-slate px-[5%] md:px-[10%] text-center'>Experience some of these skills in action through an interactive display, just a scroll away.</h1>
      </div>
    </section>
  )
}

export default Skills