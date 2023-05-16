import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toogleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="qualification">
      <h1 className="section_title">Qualification</h1>
      <span className="section_subtitle">My Learning Journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button qualification_active button--flex"
            }
            onClick={() => toogleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button qualification_active button--flex"
            }
            onClick={() => toogleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification_section">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content "
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  The Times International College
                </h3>
                <span className="qualification_subtitle">
                  Bachelor's in Computer Application
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt">2018 - Present</i>
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Web Development</h3>
                <span className="qualification_subtitle">
                  Venture Four Technology
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt">2022 - Present</i>
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Graphic Designing</h3>
                <span className="qualification_subtitle">Dibyanshree Tech</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt">2023 - Present</i>
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">CMS tools</h3>
                <span className="qualification_subtitle">Dibyanshree Tech</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt">2023 - Present</i>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content "
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Development</h3>
                <span className="qualification_subtitle">College Projects</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt">2018 - Present</i>
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Frontend Developer</h3>
                <span className="qualification_subtitle">
                  Venture Four Technology
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt">2022 - Present</i>
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">UI/UX Design</h3>
                <span className="qualification_subtitle">Dibyanshree Tech</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt">2023 - Present</i>
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
