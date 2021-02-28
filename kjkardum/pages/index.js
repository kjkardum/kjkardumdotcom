import Head from 'next/head'
import React from "react";
import styles from '../styles/Home.module.css'

import { Row, Col } from 'react-bootstrap';

import Project from '../components/project.js';
import SmallProject from '../components/smallproject.js';
import NavBar from '../components/navbar.js';

import SEO from '../components/seo.js';

import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce
} from "react-particle-image";

const particleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 15 || pixel.g > 15 || pixel.r > 15;
  },
  color: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    return "#"+pixel.r.toString(16)+pixel.g.toString(16)+pixel.b.toString(16);

  },
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 40,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  }
};

const motionForce = (x, y) => {
  return forces.disturbance(x, y, 5);
};

export default function Home(props) {
  const [piIndex, setpiIndex] = React.useState(Math.floor(Math.random() * props.particleImages.length));
  /*[Math.floor(Math.random() * props.particleImages.length)]*/
  return (
    <div className="bodydiv">
      <SEO {...props.seo}></SEO>

      <main className="main">
        <NavBar></NavBar>
        <section id="start" className="semiCircle shadow1">
          <div className="homesection">
            <h1>Karlo Josip Kardum</h1>
            <h3>kjkardum@gmail.com</h3>
          </div>
        </section>
        <section style={{height:"1000px"}} className="lrsection">
          <div className="aboutsection">
            <Row>
              <Col md={6}>
                <h2>I'm a web software developer!</h2>
                <div>
                  <a target="_blank" href="https://github.com/kjkardum/"><img src="/github.png" alt="Github Logo" className="logomd" /></a>
                  <a target="_blank" href="https://www.linkedin.com/in/kjkardum"><img src="/linkedin.png" alt="LinkedIn Logo" className="logomd" /></a>
                </div>
                <h3>Scroll down to see my projects</h3>
              </Col>
              <Col md={6}>
                <ParticleImage
                  className="particle-image"
                  src={props.particleImages[piIndex]}
                  scale={0.75}
                  entropy={20}
                  maxParticles={4000}
                  particleOptions={particleOptions}
                  mouseMoveForce={motionForce}
                  touchMoveForce={motionForce}
                  backgroundColor="#2c3e50"
                  onClick={() => setpiIndex((piIndex+1)%props.particleImages.length)}
                />
              </Col>
          </Row>
          </div>
          <div className="lineright shadow1">
          </div>
        </section>
        <section id="projects"  className="leftcontainer">
          <div className="project-section afterlr">
            <Project {...props.projects.ferkaton}></Project>
          </div>
          <div className="waveleft"></div>
        </section>
        <section className="rightcontainer">
          <div className="project-section">
            <Project {...props.projects.sprintshop} reverse={true}></Project>
          </div>
          <div className="waveright"></div>
        </section>
        <section className="spcontainer" id="smallprojects">
          <div className="smallproject-section">
            <h3>My other projects</h3>
            <p className="description">
              These are some of my older or smaller project I've worked on.<br/>
              Click on project to expand it
            </p>
            <Row>
              {props.smallprojects.map((project,i)=>(
                <SmallProject {...project} key={i}></SmallProject>
              ))}
            </Row>
          </div>
          <div className="lineleft">
          </div>
        </section>

        <footer className="footer">
          &copy; {new Date().getFullYear()} kjkardum.com
        </footer>
      </main>
    </div>
  )
}


Home.getInitialProps = async (ctx) => {
  let props={
    seo:{
      siteTitle:"Karlo Josip Kardum",
      title:"Portfolio",
      description:"Hi, I'm Karlo, student and web developer. Come check out my portfolio webpage."
    },
    particleImageIndex: 0,
    particleImages:['nodealt.png','reactalt.png','firebase.png','pythonalt.png','flask.png'],
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
        images:['homepage.png','adminsettings.png','purchases.png'],/*'homepage.png','adminsettings.png', */
        reverse:false,
      }
    },





    smallprojects:[
      {
          title:"Exam Calendar",
          description:[
            "is my first ever web project, made in 2015 when i was in 7th grade of middle school.",
            "At the time there were no online exam calendars, so I made mine where teachers and students could collaborate and build it.",
            "The project got first place on national software development competition. It's no longer available on the web.",
          ],
          images:{
            main:'placeholder.png',
            secondary:'placeholder.png'
          },
          skills:[
            {short:'VB',name:'Visual Basic'},
            {short:'ASP.NET',name:'ASP.NET'},
            {short:'MSSQL',name:'SQL Server'},
            {short:'Azure',name:'Microsoft Azure'},
          ],
      },
      {
        title:"Quiz Generator",
        description:[
          "is a simple app used for generating and sharing quizes.",
          "The idea was that admin would create a quiz then share it's access code to users so they can play and get their score on leaderboard.",
          "The project got fourth place on 2016 national software development competition. It's not longer available on the web",
        ],
        images:{
          main:'placeholder.png',
          secondary:'placeholder.png'
        },
        skills:[
          {short:'VB',name:'Visual Basic'},
          {short:'ASP.NET',name:'ASP.NET'},
          {short:'MSSQL',name:'SQL Server'},
          {short:'Azure',name:'Microsoft Azure'},
        ],
    },
    {
      title:"PEH",
      description:[
        "aka Personal Electricity Helper was an app for calculating monthly power usage in household.",
        "Based on given info about household appliances it would show user a graph where they are using the most electricity and how they can reduce their electric bills most effectively",
      ],
      images:{
        main:'smallprojects/peh1.png',
        secondary:'smallprojects/peh2.png'
      },
      skills:[
        {short:'C#',name:'C#'},
        {short:'ASP.NET',name:'ASP.NET MVC'},
        {short:'Azure',name:'Microsoft Azure'},
      ],
    },
    {
      title:"BestBuyPhone",
      description:[
        "is an app that helps user in choosing the next phone to buy.",
        "By asking users a few questions the app offers them the best phones by given parameters in their price range",
      ],
      images:{
        main:'smallprojects/bbp1.png',
        secondary:'smallprojects/bbp2.png'
      },
      skills:[
        {short:'C#',name:'C#'},
        {short:'ASP.NET',name:'ASP.NET MVC'},
        {short:'MSSQL',name:'SQL Server'},
        {short:'Azure',name:'Microsoft Azure'},
      ],
    },
    {
      title:"This webpage",
      description:[
        "kjkardum.com is a portfolio page built using modern technologies like next.js and react.",
      ],
      images:{
        main:'smallprojects/kjk1.png',
        secondary:'smallprojects/kjk2.png'
      },
      skills:[
        {short:'Node',name:'NodeJS'},
        {short:'Next',name:'Next.JS'},
        {short:'React',name:'ReactJS'},
        {short:'JS',name:'JavaScript'},
      ],
    },
    {
      title:"DisCode",
      description:[
        "is a code text editor made to run in discord. It's a discord bot which transforms whole server into a coding environment.",
        "Categories in discord server become folders and channels become files. Writing messages or sending images in channels writes them to these files.",
        "There is also a terminal channel where you can send terminal commands and get output in discord."
      ],
      images:{
        main:'smallprojects/dide1.png',
        secondary:'smallprojects/dide2.png'
      },
      skills:[
        {short:'Python',name:'Python'},
        {short:'Discord',name:'Discord.py'},
      ],
    },
    {
      title:"PyGames",
      description:[
        "are a group of games I made using Python. Those are: chess player vs computer, snake where either user plays or watches computer plays and tetris.",
        "All of these games were made using python GUI Module called PyGame. Chess and Tetris are written using OOP.",
      ],
      images:{
        main:'smallprojects/pygame.png',
        secondary:'smallprojects/pygame.png'
      },
      skills:[
        {short:'Python',name:'Python'},
        {short:'PyGame',name:'PyGame'},
      ],
    },
    {
      title:"Advent Of Code 2020",
      description:[
        "is a advent calendar of programming tasks. This year I was trying to code golf, write shortest codes, for answering these tasks.",
        "All my answers were Python One-line codes. I chose to do that because python is a language that uses indentation to indicate code blocks. This meant that "+
        "I had to find interesting ways to work around that limitation. For example while loops must be written as for loops or if not possible as recursion. But recursions "+
        "then must be written using lambda (anonymous) functions. It was quite a fun challenge for me."
      ],
      images:{
        main:'smallprojects/aoc1.png',
        secondary:'smallprojects/aoc2.png'
      },
      skills:[
        {short:'Python',name:'Python'},
        {short:'Code golfing',name:'Code golfing'},
      ],
    },
    ]
  }
  return props
}