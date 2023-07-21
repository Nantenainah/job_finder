import { faFacebook, faGithub, faInstagram, faSpotify, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";

export const Footer: FunctionComponent = () => {
    return <>
    <hr className="hr" />
    <footer className="footer">
      <div className="footer-links">
        <p>Nous retrouver</p>
        <a href="https://github.com"><FontAwesomeIcon icon={faGithub} className="icons" /></a>
        <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} className="icons" /></a>
        <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} className="icons" /></a>
        <a href="https://spotify.com"><FontAwesomeIcon icon={faSpotify} className="icons" /></a>
        <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} className="icons" /></a>
      </div>
      <div className="footer-description">
        <p>Job Finder is a platform to connect job seekers with employers.</p>
        <p>Contact us at info@jobfinder.com for any inquiries.</p>
        <p>Copyright &copy; </p>
      </div>
      <div className="footer-other">
        
      </div>
    </footer>    
    </>
}