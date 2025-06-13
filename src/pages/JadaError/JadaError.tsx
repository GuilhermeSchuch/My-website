// CSS
import "./JadaError.css";

// Hooks
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

interface Error {
  code: string;
  title: string;
  content: string[];
}

const JadaError = () => {
  const [errorData, setErrorData] = useState<Error | null>(null);

  const { code } = useParams();

  useEffect(() => {
    switch (code) {
      case "1202":
        setErrorData({
          code,
          title: "Error launching game",
          content: [
            "This error occurs due Jada not being able to find the path of the .exe provided. Try checking out if the path of the game was changed or if it was not correctly registered when adding the game."
          ]
        })
        break;

      case "0121":
        setErrorData({
          code,
          title: "Error launching game",
          content: [
            "This is a generic error that occurs when trying to launch a game, if this error persists, try to contact me through the options button."
          ]
        })
        break;
    
      default:
        break;
    }
  }, [code])

  return (
    <div className="jada-error-main-container">
      {errorData ? (
        <>
          <div className="jada-error-top-container">
            <h1>{ errorData.title }</h1>
            <h2>Error { code }</h2>
          </div>

          <div className="jada-error-content-container">
            {errorData.content.map((item: string) => (
              <p>{ item }</p>
            ))}
          </div>
        </>
      ) : (
        <div className="not-found-container">
          <p>Error code not found.</p>
        </div>
      )}      
    </div>
  )
}

export default JadaError