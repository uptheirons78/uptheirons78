import React from "react";
import MdMail from "react-ionicons/lib/MdMail";
import LogoGithub from "react-ionicons/lib/LogoGithub";
import LogoTwitter from "react-ionicons/lib/LogoTwitter";
import LogoLinkedin from "react-ionicons/lib/LogoLinkedin";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-brand">
        <p>
          <span>© {currentYear} </span>
          Mauro Bono
        </p>
      </div>
      <div className="footer-social">
        <a href="/">
          <MdMail fontSize="2.2rem" className="social-icon" />
        </a>
        <a href="/">
          <LogoGithub
            color="#03afc2"
            fontSize="2.2rem"
            className="social-icon"
          />
        </a>
        <a href="/">
          <LogoTwitter
            color="#03afc2"
            fontSize="2.2rem"
            className="social-icon"
          />
        </a>
        <a href="/">
          <LogoLinkedin
            color="#03afc2"
            fontSize="2.2rem"
            className="social-icon"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
