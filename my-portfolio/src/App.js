import React from 'react';
import './App.css';

function App() {
  return (
    <div className="portfolio">
      <header>
        <h1>My Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>Hi, I'm [Your Name]. I'm a developer specializing in React and web development.</p>
      </section>

      <section id="projects">
        <h2>My Projects</h2>
        <ul>
          <li><strong>Project 1</strong>: Description of the project.</li>
          <li><strong>Project 2</strong>: Description of the project.</li>
          <li><strong>Project 3</strong>: Description of the project.</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>You can reach me at <a href="mailto:your.email@example.com">your.email@example.com</a>.</p>
      </section>

      <footer>
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
