import React from "react";
import "../assets/About.css";
import Img8 from "../images/img-1.jpg";
const About = () => {
  return (
    <>
      <div className="aboutBody">
        <div className="aboutSection">
          <div className="aboutContainer">
            <div className="aboutContent-section">
              <div className="aboutTitle">About Us</div>
              <div className="aboutContent">
                <h3>Your desire,good quality.</h3>
                <p>
                  A perfect place to view the products which is in your needs .
                  We even promote discounts to the products advertised in our
                  website . People can view all the products which are necessary
                  to them . The products published in our website are readily
                  available and is in huge stock . You can contact us by
                  referring our website.{" "}
                </p>
              </div>
              <div className="aboutSocial">
                <a href="https://www.facebook.com/people/Little-Champ-Football-Academy-Erode/100086524118479/">
                  <i className="fa fa-facebook-square"></i>
                </a>
                <a href="https://www.facebook.com/people/Little-Champ-Football-Academy-Erode/100086524118479/">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="https://wa.me/917868040150?text=Hello+Little+Champ%E2%9A%BD%2C%0D%0A">
                  <i className="fa fa-whatsapp"></i>
                </a>
                <a href="https://www.youtube.com/@littlechampfootballacademy3630">
                  <i className="fa fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className="aboutImage-section">
              <img src={Img8} alt="ImageAbout"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
