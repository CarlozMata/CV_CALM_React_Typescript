import React from "react";
import "../styles/cv.scss";
import "../styles/scssComponents/footer.scss";

const FooterComponent = () => {
  return (
    <>
      <div className="footer">
        <div className="div-footer">
          <div className="footer-left">
            <a href="https://carlozmata.com/" target="__blank">
              CarlozMata © 2022
            </a>
          </div>
          <div className="footer-right">
            <a href="https://github.com/CarlozMata" target="__blank">
              GitHub |
            </a>
            <a
              href="https://www.linkedin.com/in/carlosalbertolopezmata/"
              target="__blank"
            >
              LinkedIn |
            </a>
            <a href="https://twitter.com/CarlozMata" target="__blank">
              Twitter |
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default FooterComponent;
