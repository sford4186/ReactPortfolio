import React, { Component } from "react";




class About extends Component {
  render() {

    return (
      <div id="about" className="mt-5">
        <div className="container">
          <h1 className="heading">About Me</h1>
          <div className="row">
          <div className="col-lg-3">

          <img src="../images/ShawandaPic.jpg" alt="pic" width="100%"  className="p-2"/>
        </div>
        <div className="col-lg-9">
          <p >Greetings! My name is Shawanda Ford. I earned a degree in Management Information Systems from UNCC and I am
          currently attending their Full Stack Web Development Bootcamp to be completed in January 2021. I have a
          passion for problem-solving and goal completion. Looking
          forward to learning, growing, and applying my new found skills! Cheers
          to the moving into the next chapter of my career!
                </p>
                <p><strong>Technical Skills:</strong>
                
                  HTML, CSS, Jascript, Jquery, Visual Basic, MySQL, MongoDB, Sequelize, Web APIs, Microsoft Office, Power BI, Oracle E-Business SUite, Git Bash, Heroku, AJAX, Node.JS, React, Express.js, Command Line Interface (CLI), ORM, MERN
                
                </p>
          </div>

          </div>

        </div>
      </div>
    );
  }
}




export default About;