import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer section">
      <div className="footer_container container">
        <h1 className="footer_title">SUJAN</h1>
        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>

          <li>
            <a href="#qualification" className="footer_link">
              Qualification
            </a>
          </li>

          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>
        </ul>
        <div className="footer_social">
          <a
            href="https://www.facebook.com/blaq.sujan.1/"
            className="footer_social-link"
            target="blank"
          >
            <i class="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/blaq_sujan/"
            className="footer_social-link"
            target="blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://github.com/blaqsujan"
            className="footer_social-link"
            target="blank"
          >
            <i class="bx bxl-github"></i>
          </a>
          <a
            href="https://gitlab.com/sujanmaharjan054"
            className="footer_social-link"
            target="blank"
          >
            <i class="bx bxl-gitlab"></i>
          </a>
        </div>

        <span className="footer_copy">
          &#169; SujanMaharjan. All rigths reserved
        </span>
      </div>
    </section>
  );
};

export default Footer;
