import React from 'react';
import IMG1 from '../assets/Calculator.png'
import VID1 from '../assets/Calculator.webm'
import IMG2 from '../assets/Tic-Tac-Toe.png'
import VID2 from '../assets/Tic-Tac-Toe.webm'
import IMG3 from '../assets/SQL-Tableau-Visualization.png'
import VID3 from '../assets/SQL-Tableau-Visualization.webm'
import IMG4 from '../assets/Dall-E.png'
import VID4 from '../assets/Dall-E.webm'
import IMG5 from '../assets/Hear-Hear.png'
import VID5 from '../assets/Hear-Hear.webm'
import { useState } from 'react';


import { FiGithub } from 'react-icons/fi'
import { MdOutlineOpenInNew } from 'react-icons/md'
import { MdReadMore } from 'react-icons/md'

const data = [
  {
    id: 5,
    video: VID5,
    poster: IMG5,
    title: "Music App",
    info: "The Hear, Hear! App is a dynamic platform for music discovery and listening, integrating the free Shazam API to fetch music information. With features like a music player, related songs, and songs by a particular artist, users can easily explore and enjoy their favorite music. As the developer, I leveraged my skills in API integration, database management, and full-stack web development to create a responsive and user-friendly interface, making it a comprehensive showcase of my abilities.",
    github: "",
    demo: ""
  },
  {
    id: 4,
    video: VID4,
    poster: IMG4,
    title: "AI Image Generation",
    info: "The website allows users to generate unique images based on textual descriptions, leveraging the power of DALL-E API. The user inputs are stored in a MongoDB database, and the generated images are hosted on Cloudinary for efficient management and retrieval. This project demonstrates my ability to work with AI APIs, build scalable databases, and implement efficient image management systems, providing a comprehensive showcase of my skills in full-stack web development.",
    github: "",
    demo: ""
  },
  {
    id: 3,
    video: VID3,
    poster: IMG3,
    title: "SQL Visualization",
    info: "The project involved extracting and cleaning data from a SQL database using advanced techniques, then analyzing it to generate meaningful insights. My proficiency in writing complex SQL queries and manipulating data is displayed, along with my ability to communicate these insights through Tableau visualizations. This project highlights my skills in SQL and data analysis, and my capacity to drive better business outcomes with data-driven insights.",
    github: "",
    demo: ""
  },
  {
    id: 2,
    video: VID2,
    poster: IMG2,
    title: "Tic-Tac-Toe",
    info: "A fun and interactive Tic-Tac-Toe game developed using Javascript. The game features a visually appealing and user-friendly interface, allowing players to enjoy the classic game with a modern twist. As the developer, I utilized my skills in Javascript, HTML, and CSS to create the game logic and implement user interaction for an engaging experience. The project showcases my ability to build dynamic web applications and bring traditional games to life in a digital format.",
    github: "",
    demo: ""
  },
  {
    id: 1,
    video: VID1,
    poster: IMG1,
    info: "A feature-rich calculator built using Javascript that showcases my ability to implement complex functionality using a user-friendly interface. The calculator performs basic arithmetic operations, including addition, subtraction, multiplication, and division, and is designed to be highly responsive and adaptable. It features two screens: one for making new calculations and another for displaying previous calculations. In developing this calculator, I took a user-centered approach, ensuring that the interface was easy to use and understand, and had the same familiar appeal as the physical calculator we used growing up.",
    title: "Calculator",
    github: "",
  },

  
]

const Projects = () => {
  const [showInfo, setShowInfo] = useState({});

  const handleClick = id => {
    setShowInfo({ ...showInfo, [id]: !showInfo[id] });
  };


  return (
    <section className='bg-navy lg:my-[10%] lg:px-24' id='projects'>
      {
        data.map(({ id, image, video, poster, title, github, demo, info }) => {
          return (
            <div className='h-screen flex px-auto  flex-col lg:flex-row justify-center items-center' key={id}>
              <div className='flex-col justify-center items-center text-center'>

                <h1 className='text-center text-3xl py-5 text-lightest-slate hover:text-green'><a href={demo} target="_blank" rel="noreferrer">{title}</a></h1>

                <div className='flex justify-center max-w-md xl:max-w-xl 2xl:max-w-3xl items-center bg-light-navy rounded-xl p-[5%] lg:mx-0 mx-[6%]'>
                  {showInfo[id] && showInfo[id] ? (
                    <p className='text-slate max-w-md lg:text-lg text-sm text-justify'>{info}</p>
                  ) : (
                    <>
                      {video ? (
                        <video controls poster={poster} className='rounded-xl'>
                          <source src={video} type='video/mp4' />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <a href={demo} target='_blank' rel='noreferrer'>
                          <img alt={title} src={image} className='rounded-xl' />
                        </a>
                      )}
                    </>
                  )}
                </div>

              </div>
              <div className='flex flex-row lg:flex-col p-2'>
                <a title='Source code' className="text-lightest-slate hover:text-green text-md m-2 lg:text-xl lg:m-3" href={github} target="_blank" rel="noreferrer"><FiGithub /></a>
                <a title='Live demo' className="text-lightest-slate hover:text-green text-md lg:text-xl lg:m-3 m-2" href={demo} target="_blank" rel="noreferrer"><MdOutlineOpenInNew /></a>
                <p title='Project information' className="text-lightest-slate hover:text-green text-md m-2 lg:text-2xl lg:m-2 cursor-pointer" onClick={() => handleClick(id)}><MdReadMore /></p>
              </div>
            </div>
          )
        })
      }
    </section>
  );
};

export default Projects;
