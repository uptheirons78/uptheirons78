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
        <a
          href="mailto:maurobono@maurobono.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdMail fontSize="2.2rem" className="social-icon" />
        </a>
        <a
          href="https://github.com/uptheirons78"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoGithub
            color="#03afc2"
            fontSize="2.2rem"
            className="social-icon"
          />
        </a>
        <a
          href="https://twitter.com/UpTheIrons1978"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoTwitter
            color="#03afc2"
            fontSize="2.2rem"
            className="social-icon"
          />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
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
