// CSS
import "./Project.css";

// Hooks
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Data
import projects from "../../data";

interface Project {
  id: number;
  title: string;
  tags: string;
  image: string;
  github: string | null;
}

const Project = () => {
  const [project, setProject] = useState<Project | null>(null);

  const { id } = useParams();  

  useEffect(() => {
    if(projects && id) {
      const project = projects.find((item) => item.id === parseInt(id));
      if (project) setProject(project);
    }
  }, [])
  

  return (
    <div className="project-main-container">
      <div className="project-title-container">
        <h1 className="h1 primary-text-color">{ project?.title }</h1>
      </div>
    </div>
  )
}

export default Project