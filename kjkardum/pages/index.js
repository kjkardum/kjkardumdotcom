import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Project from '../components/project.js';
import ProjectCarousel from '../components/project_carousel';

export default function Home(props) {
  return (
    <div className="bodydiv">
      <Head>
        <title>kjkardum.com</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
      </Head>

      <main className="main">
        <section className="semiCircle shadow1">
          <div className="homesection">
            <h1>Karlo Josip Kardum</h1>
            <h3>kjkardum@gmail.com</h3>
          </div>
        </section>
        <section style={{height:"1100px"}} className="lrsection">
          <div className="aboutsection">
            <h2>I'm a web software developer!</h2>
            <div>
              <a target="_blank" href="https://github.com/kjkardum/"><img src="/github.png" alt="Github Logo" className="logomd" /></a>
              <a target="_blank" href="https://www.linkedin.com/in/kjkardum"><img src="/linkedin.png" alt="LinkedIn Logo" className="logomd" /></a>
            </div>
            <h3>Scroll down to see my projects</h3>
          </div>
          <div className="lineright shadow1">
          </div>
        </section>
        <section className="leftcontainer" style={{height:"900px"}}>
          <div className="project-section afterlr">
            <Project {...props.projects.ferkaton}></Project>
          </div>
          <div className="waveleft"></div>
        </section>
        <section className="rightcontainer" style={{height:"800px"}}>
          <div className="project-section">
            <Project {...props.projects.sprintshop} reverse={true}></Project>
          </div>
          <div className="waveright"></div>
        </section>
        <section style={{height:"1100px"}}>
          <div className="lineleft">
          </div>
        </section>

        <footer className="footer">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className="logoimg" />
          </a>
        </footer>
      </main>
    </div>
  )
}


Home.getInitialProps = async (ctx) => {
  let props={
    projects:{
      ferkaton: {
        title:"Ferkaton",
        icons:[
          {file:'nodejs.png', name:'Node JS'},
          {file:'ts.png', name:'TypeScript'},
          {file:'nextjs.png', name:'NextJS'},
          {file:'react.png', name:'ReactJS'},
          {file:'firestore.png', name:'Cloud Firestore'},
          {file:'gcp.png', name:'Google Cloud Platform'}
        ],
        description:[
          "is a coding event hosting application inspired by AdventOfCode.",
          "It's built using modern technologies like React, NextJS and Firestore database.",
          "The app allows users to host coding events, where users can either participants their solutions or give answer based on their input depending on an event.",
          "The project was made for hosting coding events for FER ZG University students.",
          "",
          "Part of this project is also a discord bot. Because Discord is primary communication method for most of us students on FER University, finding shared "+
          "class materials is not easy.",
          "Using discord api I created a discord bot which would make it easy to transfer files uploaded to discord to this website as well, where they would be "+
          "automatically organized and easy to find."
        ],
        imagesfolder:"/ferkaton/",
        images:['fertranet.png','leaderboard.png','erebor.png'],
        reverse:false,
      },
      sprintshop: {
        title:"Sprint shop",
        icons:[
          {file:'python.png', name:'Python'},
          {file:'flask.png', name:'Flask'},
          {file:'mysql.png', name:'MySQL'},
          {file:'eracuni.png', name:'E-Računi integration'},
          {file:'paypal.png', name:'PayPal integration'}
        ],
        description:[
          "is a custom modern e-commerce platform customized for client's needs.",
          "The shop offers customers easy navigation and checkout process while giving them many options. "+
          "There is also option for creating quotes instead of standard purchases which eliminates the need to use email for every quotation request.",
          "",
          "Admin panel offers many options to customize products, prices, purchase flow and design of the site. You can also link your paypal merchant account to "+
          "let buyers use it as their payment option. There is also support for synchronisation with E-računi, an accounting software used for tracking warehouse and purchases.",
          "If what is offered isn't enough for your site, each webshop is made custom for client's needs and client specific features can easily be added."
        ],
        imagesfolder:"/sprintshop/",
        images:['homepage.png','adminsettings.png','purchases.png'],
        reverse:false,
      }
    }
  }
  return props
}