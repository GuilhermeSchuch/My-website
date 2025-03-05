// CSS
import "./Footer.css";

// Icons
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import EmailIcon from '@mui/icons-material/Email';

import { forwardRef } from "react";

// Hooks
import { useNavigate } from "react-router-dom";

const Footer = forwardRef<HTMLDivElement>((props, ref) => {
  const currentYear = new Date().getFullYear();

  const navigate = useNavigate();

  const handleLinks = (link: string, type: string) => {
    if(type === "external-link") {
      window.open(link, "_blank");
    }
    else if(type === "internal-link"){
      navigate(link);
    }
  }

  const scrollToTop = () => {
    if(ref && typeof ref !== "function" && ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="footer-container">
        <div className="footer-title-container">
          <button className="cleared-button" onClick={scrollToTop}>
            <KeyboardArrowUpIcon fontSize="large" />
            <h3 className="h3 primary-text-color">To the top</h3>
          </button>
        </div>

        <div className="footer-content">
          <div className="footer-content-item">
            <div className="footer-content-item-title-container">
              <h4>About me</h4>
            </div>

            <div className="footer-content-item-content">
              <ul>
                <p>
                  A Brazilian developer who loves to create every kind of stuff.
                </p>
              </ul>
            </div>
          </div>

          <div className="footer-content-item">
            <div className="footer-content-item-title-container">
              <h4>Social</h4>
            </div>

            <div className="footer-content-item-content">
              <ul>
                <li onClick={() => handleLinks("https://www.instagram.com/guigui.schuch/", "external-link")}>
                  <InstagramIcon />
                  <span>@guigui.schuch</span>
                </li>

                <li onClick={() => handleLinks("https://www.linkedin.com/in/guilhermeschuch2005/", "external-link")}>
                  <LinkedInIcon />
                  <span>@guilhermeschuch2005</span>
                </li>

                <li onClick={() => handleLinks("https://github.com/GuilhermeSchuch", "external-link")}>
                  <GitHubIcon />
                  <span>@GuilhermeSchuch</span>
                </li>

                <li>
                  <EmailIcon />
                  <span>schuchsistemas@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-content-item">
            <div className="footer-content-item-title-container">
              <h4>Useful Links</h4>
            </div>

            <div className="footer-content-item-content">
              <ul>
                <li onClick={() => handleLinks("/project/1", "internal-link")}>
                  <LinkIcon className="flip-link-icon"/>
                  <span>My best project</span>
                </li>

                <li onClick={() => handleLinks("/blog", "internal-link")}>
                  <LinkIcon className="flip-link-icon"/>
                  <span>My Blog</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>© { currentYear } Guilherme Schuch</p>
      </div>
    </>
  )
})

export default Footer