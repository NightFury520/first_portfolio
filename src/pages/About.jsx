import React from 'react'
import Jigsaw from '../components/Jigsaw';

const About = () => {
  return (
    <section className='bg-navy md:h-screen  md:grid md:grid-cols-2 md:justify-center md:content-center md:pl-10' id="about">
      <div className='my-[30%] md:my-0 flex flex-col h-screen text-center justify-center'>
        <div className='px-10 lg:pl-20'>
          <h1 className='text-3xl mb-10 md:mb-5 text-center text-lightest-slate flex flex-col gap-1'>About Me</h1>
          
        <p className='text-slate text-l text-left'> ●	Planned and Designed decoupled Microservice architecture with GraphQL for important features to reduce maintenance costs by 40% and enhance performance of main application.
        </p><p className='text-slate text-l text-left'>●	Employed Apollo Client and GraphQL server to consume and manipulate data from backend APIs, reducing response time and enabling seamless integration of new data sources into this portal.
        </p><p className='text-slate text-l text-left'>●	Integrated with Open APIs of Google Sheets, Microsoft 365, GPT Turbo, and CRM platforms (HubSpot, Zoho, ActiveCampaign) through Rest API, Webhooks, WebSocket or utilizing Zapier, N8N and Make.com.
        </p><p className='text-slate text-l text-left'>●	Developed scalable and responsive web applications using React.js and transitioned legacy React apps to Next.JS, writing SSR functional components with Typescript and JSX syntax, increasing page speed and SEO optimization.
        </p><p className='text-slate text-l text-left'>●	Implemented pixel-perfect from Figma and XD design, using Material-UI, and Tailwind CSS, ensuring responsive design and UX while adhering to best practices using ESLint and Prettier.
        </p><p className='text-slate text-l text-left'>●	Utilized cross-platform solution with React Native, Electron, and PWA methodologies, ensuring consistent performance and user experience across mobile devices, desktops, and web browsers.
        </p><p className='text-slate text-l text-left'>●	Introduced accessibility standards (WCAG 2.0) to ensure maximum user experience across all devices.
        </p><p className='text-slate text-l text-left'>●	Modeled various procedural objects into PostgreSQL schemas with Prisma module and migrated existing database while illustrating logical relations between, ensuring scalability.
        </p><p className='text-slate text-l text-left'>●	Utilized Express and NestJS with Cypress and Selenium to develop robust monolithic backend, ensuring seamless API integration and data retrieval in test-driven development environment.
        </p><p className='text-slate text-l text-left'>●	Applied regular Backup and Recovery Plans with Cron Jobs and implemented best practice API, with OAuth Bearer Tokens, for consumption by third-party integrators.
        </p><p className='text-slate text-l text-left'>●	Deployed and managed applications on AWS using EC2, S3, Lambda, RDS, Route 53, DynamoDB and API Gateway for optimal performance and scalability within efficient cost.
        </p><p className='text-slate text-l text-left'>●	Orchestrated containerized applications on Kubernetes Engine, utilizing Cloud Functions for serverless compute and integrating with Cloud SQL and Cloud Pub/Sub for seamless data processing within a GCP environment.
        </p></div>
        <div className='text-center'>
          <button
            type="button"
            className="text-green border border-green rounded-md text-lg md:px-3 px-5 py-2.5 hover:text-green hover:bg-lightest-navy transition-all ease-in-out duration-200 cursor-pointer text-center mt-10"
            onClick={() => window.location.href = "#contact"}
          >
            Shall we talk?
          </button>
        </div>
      </div>
      <div className='bg-navy md:-ml-10  h-screen z-9 flex justify-evenly text-center items-center flex-col'>
        <Jigsaw />
        <h1 className='px-[10%] text-center md:hidden text-2xl text-lightest-slate'>If you liked the puzzle, you'll love my other <a href='#projects' className='text-green hover:underline'>projects.</a></h1>
      </div>
    </section>
  )
}

export default About