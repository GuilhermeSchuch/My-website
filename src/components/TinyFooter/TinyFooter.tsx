// CSS
import "./TinyFooter.css";

const TinyFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-copyright">
      <p>© { currentYear } Guilherme Schuch</p>
    </div>
  )
}

export default TinyFooter