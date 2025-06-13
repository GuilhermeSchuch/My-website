// CSS
import "./Project.css";

// Hooks
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

// Data
import { projects, projectsBR } from "../../data";

// Meta tags
import { Helmet } from "react-helmet-async";

// Components
import { TinyFooter, VideoPlayer } from "@components/index";

interface Tech {
  name: string;
  icon: string;
  color: string;
  link: string;
}

interface MetaTag {
  title: string;
  description: string;
  keywords: string;
}

interface Project {
  id: number;
  title: string;
  url: string;
  tags: string;
  metaTags: MetaTag;
  image: string;
  features: string[];
  techs: Tech[];
  github: string | null;
}

const Project = () => {
  const [project, setProject] = useState<Project | null>(null);

  const { title } = useParams();
  const { i18n, t } = useTranslation();

  useEffect(() => {
    if(title) {
      if(i18n.language === "pt-BR") {
        const project = projectsBR.find((item) => item.url === title);
        if (project) setProject(project);
      }
      else {
        const project = projects.find((item) => item.url === title);
        if (project) setProject(project);
      }
      window.scrollTo(0, 0);
    }
  }, [project])

  const handleLinks = (link: string) => {
    window.open(link);
  }

  return (
    <>
      <Helmet>
        <title>{ project?.metaTags.title }</title>
        <meta name="description" content={ project?.metaTags.description } />
        <meta name="keywords" content={ project?.metaTags.keywords } />
      </Helmet>

      <div className="project-main-container">
        {project ? (
          <>
            <div className="project-title-container">
              <h1 className="h1 primary-text-color">{ project?.title }</h1>
            </div>

            <div className="project-top-content-container">
              <div className="project-side-container">
                <div className="project-side-item">
                  <div className="project-side-item-title">
                    <h2 className="h2 primary-text-color">{ t("Features") }</h2>
                  </div>

                  <div className="project-side-content">
                    {project?.features.map((tag, index) => (
                      <motion.div
                        key={index}
                        className="feature-card"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          damping: 10,
                          delay: index * 0.5,
                        }}
                      >
                        <h3 className="h3">{ tag }</h3>
                      </motion.div>
                    ))}

                  </div>
                </div>
                
                <div className="project-side-item">
                  <div className="project-side-item-title">
                    <h2 className="h2 primary-text-color">{ t("Techs") }</h2>
                  </div>

                  <div className="project-side-content">
                    {project?.techs.map((tech, index) => (
                      <motion.div
                        key={index}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: tech.color,
                          color: "#0D0D0D",
                        }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          color: tech.color,
                          border: `1px solid ${tech.color}`,
                        }}
                        onClick={() => handleLinks(tech.link)}
                        className="tech-card"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          x: { type: "spring", stiffness: 100, damping: 10, delay: index * 0.5 },
                          opacity: { duration: 0.5, delay: index * 0.5 },
                        }}
                      >
                        {tech.icon === "fa-database" ? (
                          <i className={`fa-solid ${tech.icon}`} style={{ color: tech.color }}></i>
                        ) : (
                          <i className={`fa-brands ${tech.icon}`} style={{ color: tech.color }}></i>
                        )}
                        <h3 className="h3">{tech.name}</h3>
                      </motion.div>

                    ))}
                  </div>
                </div>
              </div>

              <div className="project-description-container">
                {project?.id === 1 && (
                  <>
                    <p className="tertiary-text-color">
                      { t("Jada Mod Manager is an") } <b>User-friendly</b> { t("mod manager,") } { t("but what make it") } <u>{ t("diferent from the others") }</u>? { t("Most of the mod managers will ask you to manage directories, folder strucuture and file compression/decompression while Jada") } { t("will only ask you to select the mods you want and done, mods installed, Jada did all the work.") }
                    </p>

                    <p className="tertiary-text-color mt-2 mb-1">{ t("Versions") }:</p>

                    <ul className="tertiary-text-color ms-3">
                      <li>V1 - { t("Oct 22") }, 2024</li>
                      <li>V2 - { t("In progress") }</li>
                    </ul>

                    <p className="tertiary-text-color mt-2 mb-1">{ t("Demonstration") }:</p>

                    <img src="/projects/jada.webp" alt="" width={"100%"} />
                  </>
                )}

                {project?.id === 2 && (
                  <>
                    <p className="tertiary-text-color">
                      { t("A complete") } <u>freelance</u> { t("system for a car wash made in 2023, the whole project took 3 months to finish.") }
                    </p>

                    <p className="tertiary-text-color mt-2 mb-1">{ t("Versions") }:</p>

                    <ul className="tertiary-text-color ms-3">
                      <li>V1 - { t("Sep 5") }, 2023</li>
                    </ul>

                    <p className="tertiary-text-color mt-2 mb-1">{ t("Demonstration (Pt-Br)") }:</p>
                    <VideoPlayer videoURL={"/projects/AutoLavagemWebsite.mp4"} />
                  </>
                )}

                {project?.id === 3 && (
                  <>
                    <p className="tertiary-text-color">
                      { t("This APP allows the user to create, manage and customize shopping lists and daily tasks with ease.") }
                    </p>

                    <p className="tertiary-text-color mt-2 mb-1">{ t("Versions") }:</p>

                    <ul className="tertiary-text-color ms-3">
                      <li>V1 - { t("Dec 3") }, 2023</li>
                    </ul>

                    <p className="tertiary-text-color mt-2 mb-1">{ t("Demonstration (Pt-Br)") }:</p>
                    <img src="/projects/Listinha.gif" alt="" width={"300px"} />
                  </>
                )}
              </div>
            </div>
          </>

        ) : (
          <div className="not-found-container">
            <p>Project not found</p>
          </div>
        )}
      </div>

      {project && (
        <div style={{ marginTop: "100px" }}>
          <TinyFooter />
        </div>
      )}
    </>
  )
}

export default Project