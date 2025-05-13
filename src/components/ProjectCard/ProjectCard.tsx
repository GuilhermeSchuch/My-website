// CSS
import "./ProjectCard.css";

// Hooks
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import { motion, useInView } from "framer-motion";

const ProjectCard = ({ data }: any) => {
  const navigate = useNavigate();  

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { t } = useTranslation();

  const handleLinks = (link: string, type: string) => {
    if(link !== null) {
      if(type === "github") {
        window.open(link)
      }
      else if(type === "see-more"){
        navigate(link);
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="project-container"
    >
      <div className="project-image-container">
        <img src={ data.image } alt="" />
      </div>

      <div className="project-content">
        <div className="project-content-text">
          <h3>{ t(data.title) }</h3>
          <p>{ data.tags }</p>
        </div>

        <div className="project-content-buttons">
          <motion.button
            whileHover={{ scale: 1.1, color: "#BB2BCB" }}
            whileTap={{ scale: 0.95 }}
            className="cleared-button"
            onClick={() => handleLinks(`/project/${data.url}`, "see-more")}
          >
            <ArrowOutwardIcon />
            <span>{ t("See more") }</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, color: data.github ? "#BB2BCB" : "#CB2B78" }}
            whileTap={{ scale: 0.95 }}
            className={`cleared-button ${!data.github ? "no-github" : ""}`}
            onClick={() => handleLinks(data.github, "github")}
          >
            <GitHubIcon />
            <span>Github</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
