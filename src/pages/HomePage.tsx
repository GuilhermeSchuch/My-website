// CSS
import "./HomePage.css";

// Hooks
import { useRef } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ReactTypingEffect from "react-typing-effect";

// Components
import { Career, ProjectCard } from "@components/index";

// Data
import projects from "../data";

const HomePage = () => {  
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="main-container">
      <div className="top-site-container">
        <div className="top-site-introduction">
          <h1 className="h1 primary-text-color">Hi, I'm Guilherme Schuch</h1>
          <h2 className="primary-text-color">
            <span>I like to </span>
            <ReactTypingEffect
              text={["create stuff.", "bring ideas to life."]}
              typingDelay={1000}
              displayTextRenderer={(text: string) => (
                <span className="secundary-text-color">
                  {text.split("").map((char, index) => (
                    <span key={index}>{char}</span>
                  ))}
                </span>
              )}
            />
          </h2>
        </div>

        <div className="top-site-image-container"></div>

        <div className="top-site-see-projects-button">
          <button className="cleared-button" onClick={scrollToProjects}>
            <span>See projects</span>
            <KeyboardArrowDownIcon fontSize="large" />
          </button>
        </div>
      </div>

      <div className="my-career-container">
        <div className="my-career-title-container">
          <h1 className="h1 primary-text-color">My career</h1>
        </div>
        <div className="my-career-content-container">
          <Career />
        </div>
      </div>
      
      <div className="my-projects-container" ref={projectsRef}>
        <div className="my-projects-title-container">
          <h1 className="h1 primary-text-color">My projects</h1>
        </div>

        <div className="my-projects-content">
          {projects && projects.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
