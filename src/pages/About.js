import React from "react";

function About() {
  return (
    <div className="about-div">
      <h1>About Me</h1>
      <div className="about-p-div">
        <p>
          Image search web application by Ricky Cheung
        </p>
        <p>
          Contact: rcheung1997@gmail.com
        </p>
        <p>
          <a href="https://github.com/mrlangloi/img-searcher" target="_blank" rel="noopener noreferrer">Github</a>
        </p>
      </div>
      <h3>Sources</h3>
      <div className="about-p-div">
        <p>
          <a href="https://www.pexels.com/api/documentation/?language=javascript#" target="_blank" rel="noopener noreferrer">Pexels Image API</a>
        </p>
      </div>
    </div>
  );
}

export default About;