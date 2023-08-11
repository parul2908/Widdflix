import logo from "./../assets/LOGO-text.png";
import photo from "../assets/portfolio.jpg"

import "./../styles/css/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="foot">
        <div className="foot-logo-con">
          <img src={logo} alt="widdfix" />
        </div>
        <div className="foot-det">
          <a
            href="https://parul2908.github.io/Responsive-Personal-Portfolio-Website/"
            target="_blank"
            className="foot-det-me"
            rel="noreferrer"
          >
            <img
              src={photo}
              alt="kushagra"
              className="foot-det-me"
            />
          </a>
          <p className="foot-det-name">Parul Gupta</p>
          <div className="foot-det-copy">
            &copy; widdflix, all rights reserved
          </div>
          <div className="foot-det-lang">english</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
