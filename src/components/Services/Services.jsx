import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const [toggleState1, setToggleState1] = useState(0);
  const [toggleState2, setToggleState2] = useState(0);

  const toogleTab = (index) => {
    setToggleState(index);
  };
  const toogleTab1 = (index) => {
    setToggleState1(index);
  };
  const toogleTab2 = (index) => {
    setToggleState2(index);
  };
  return (
    <section className="service section" id="service">
      <h1 className="section_title">Services</h1>
      <span className="section_subtitle">May I offer you something!</span>

      <div className="services_container container grid">
        <div className="services_content">
          <div>
            <i className="uil uil-web-grid services_icon"></i>
            <h3 className="services_title">
              Product <br /> Designer
            </h3>
          </div>

          <span className="services_button" onClick={() => toogleTab(1)}>
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services_model active-model"
                : "services_model"
            }
          >
            <div className="services_model-content">
              <i
                onClick={() => toogleTab(0)}
                className="uil uil-times services_model-close"
              ></i>
              <h3 className="services_model-title">Product Designer</h3>
              <p className="services_model-description">
                You will never regreat it. I can ensure you that.
              </p>

              <ul className="services_model-services grid">
                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">I Develop UI.</p>
                </li>

                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">Web page Development.</p>
                </li>

                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    Graphic designing contents.
                  </p>
                </li>

                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    Help you position your brand.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i className="uil uil-arrow services_icon"></i>
            <h3 className="services_title">
              UI/UX <br /> Designer
            </h3>
          </div>

          <span className="services_button" onClick={() => toogleTab1(1)}>
            View More <i class="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div
            className={
              toggleState1 === 1
                ? "services_model active-model"
                : "services_model"
            }
          >
            <div className="services_model-content">
              <i
                onClick={() => toogleTab1(0)}
                className="uil uil-times services_model-close"
              ></i>
              <h3 className="services_model-title">UI/UX Designer</h3>
              <p className="services_model-description">
                You will never regreat it. I can ensure it that.
              </p>

              <ul className="services_model-services grid">
                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">I Develop UI.</p>
                </li>

                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">Web page Development.</p>
                </li>

                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    Graphic designing contents.
                  </p>
                </li>

                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    Help you position your brand.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i className="uil uil-edit services_icon"></i>
            <h3 className="services_title">
              Visual <br /> Designer
            </h3>
          </div>

          <span className="services_button" onClick={() => toogleTab2(1)}>
            View More <i class="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div
            className={
              toggleState2 === 1
                ? "services_model active-model"
                : "services_model"
            }
          >
            <div className="services_model-content">
              <i
                onClick={() => toogleTab2(0)}
                className="uil uil-times services_model-close"
              ></i>
              <h3 className="services_model-title">Visual Designer</h3>
              <p className="services_model-description">
                You will never regreat it. I can ensure it that.
              </p>

              <ul className="services_model-services grid">
                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">I Develop UI.</p>
                </li>

                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">Web page Development.</p>
                </li>

                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    Graphic designing contents.
                  </p>
                </li>

                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    Help you position your brand.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
