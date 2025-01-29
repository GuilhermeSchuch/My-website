// CSS
import "./HomePage.css";

// Icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Components
import Career from "@components/Career";
import ReactTypingEffect from 'react-typing-effect';

const HomePage = () => {
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
              displayTextRenderer={(text: string, index: number) => {
                return (
                  <span className="secundary-text-color">
                    {text.split('').map((char, index) => {
                      const key = `${index}`;
                      return (
                        <span
                          key={key}
                        >{char}</span>
                      );
                    })}
                  </span>
                );
              }}
            />
          </h2>
        </div>

        <div className="top-site-image-container">

        </div>

        <div className="top-site-see-projects-button">
          <button className="cleared-button">
            <span>See projects</span>
            <KeyboardArrowDownIcon fontSize="large"/>
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
    </div>
  )
}

export default HomePage