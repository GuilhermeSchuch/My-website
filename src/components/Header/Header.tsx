// CSS
import "./Header.css";

// Hooks
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

interface Section {
  id: string,
  name: string;
  offset: number;
  type: string;
}

const Header = () => {
  const [active, setActive] = useState<string | null>(null);

  const menus = [
    {id: "my-career", name: "My career", offset: 70, type: "internal"},
    {id: "my-projects", name: "My projects", offset: 50, type: "internal"},
    {id: "blog", name: "Blog", offset: 0, type: "external"}
  ];

  const navigate = useNavigate();

  const handleScroll = (section: Section) => {
    if(section.type === "internal") {
      if(window.location.pathname !== "/") {
        navigate("/");
        
        setTimeout(() => scrollToSection(section), 100);
      }
      else {
        scrollToSection(section);
      }
    }
    else if (section.type === "external") {
      setActive(section.id);
      navigate(`/${section.id}`);
      window.scrollTo(0, 0);
    }
  };
  

  const scrollToSection = (section: Section) => {
    const sectionElement = document.getElementById(section.id);
  
    if(sectionElement) {
      const elementPosition = sectionElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - section.offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleClick = (section: Section) => {    
    handleScroll(section);
  };

  useEffect(() => {
    const handleAutoScroll = () => {
      // console.log("active", active);
      
      let currentSection = null;

      for(const section of menus) {
        const sectionElement = document.getElementById(section.id);

        if(sectionElement) {
          const rect = sectionElement.getBoundingClientRect();

          if(rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section.id;
            break;
          }
        }
      }
      setActive(currentSection);
    };

    window.addEventListener("scroll", handleAutoScroll);
    handleAutoScroll();

    return () => {
      window.removeEventListener("scroll", handleAutoScroll);
    };
  }, [menus]);

  return (
    <header className="header-container">
      <ul>
        {menus.map((section) => (
          <li key={section.id}>
            <motion.button
              onClick={() => handleClick(section)}
              className="cleared-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}              
            >
              { section.name }
            </motion.button>
            
            {active === section.id && (
              <motion.div
                className="active-header-button"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            )}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
