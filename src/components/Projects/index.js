
import Project from '../Project';
import './projects.css';
const projectArr =[
  {
    name: "On Your Fit",
    image: '/images/hiking.jpg',
    description: "This application is designed to assist hikers find the best trail in a city based on 3 parameters (difficulty grade, conditional status and/or location) set by the end user.",
    deployed: "https://sford4186.github.io/onyourfit/",
    github: "https://github.com/sford4186/onyourfit",
    id:1
  },
  {
    name: "Weather Dashboard",
    image: '/images/weather.png',
    description: "This is an application that will allow the end user to enter a city and retrieve current and future weather data. The app uses HTML, CSS, JQuery and a Third Party Web API.",
    deployed: "https://sford4186.github.io/WeatherDashboard/",
    github: "https://github.com/sford4186/WeatherDashboard",
    id:2
  },
  {
    name: "Eat Da Burger",
    image: '/images/burger.png',
    description: "This is a burger logger application that will allow the user to input the names of burgers they would like eat and select a specific burger they would like to 'Devour' by cicking the 'Devour It!' button.  Technologies used: MySQL, Node, Express, Handlebars and ORM.",
    deployed: "https://young-headland-34415.herokuapp.com/",
    github: "https://github.com/sford4186/burger",
    id:3
  },
  {
    name: "Code Quiz",
    image: '/images/quiz.jpg',
    description: "This application is an interactive timed multiple-choice coding quiz using the three fundamental coding blocks - HTML, CSS, and Javascript.",
    deployed: "https://sford4186.github.io/Code-Quiz/",
    github: "https://github.com/sford4186/Code-Quiz",
    id:4
  },
  {
    name: "Code Connection",
    image: '/images/codeconnect.png',
    description: "This application is targeted toward students, recent graduates, and recruiters.  It is designed to assist students and recent graduates to find gigs based on the city and state, and will allow recruiters to find available students/recent grads for hire. Technologies used: Node.Js, JQuery, Sequelize, MySQL, Get and Post routes, APIs",
    deployed: "https://salty-reef-06215.herokuapp.com/",
    github: "https://github.com/sford4186/CodeConnection",
    id:5
  },
]
          

const Projects =()=>{
    return (
     
        <div id="projects" className="mt-5">
           <h2>Projects</h2>
         <div className="container lightGray">
          
           <div className="row">
      	    {projectArr.map(proj=><Project details={proj} key={proj.id} />)}
           </div>
         </div>
        </div>
    );

}

export default Projects;