import "./Footer.scss";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="redes">
                <Link to="https://www.facebook.com/" className="link1"> Facebook </Link>
                <Link to="https://www.instagram.com/" className="link2"> Instagram  </Link>
                <Link to="https://www.twitch.tv/" className="link3"> Twitch </Link> 
        </div>
          <div>
            <p>Todos los derechos reservados a CatNip S.A</p>
          </div>
      </div>
    </footer>
  );
};
