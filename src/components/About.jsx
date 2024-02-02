import React, { useEffect, useState } from "react";

// Image
import ProfilePic from "../assets/profilePic.jpg";

// React Icons
import { SiNextdotjs, SiTypescript, SiDocker, SiAmazonaws } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const About = () => {
  const [isDev, setIsDev] = useState(true);

  useEffect(() => {
    if (isDev) {
      document.querySelector(".asDev").classList.add("active");
      document.querySelector(".asPer").classList.remove("active");
    } else {
      document.querySelector(".asDev").classList.remove("active");
      document.querySelector(".asPer").classList.add("active");
    }
  }, [isDev]);

  return (
    <div id="about">
      <div className="aboutWapper">
        <div className="aboutHd">
          <h1>About Me</h1>
          <span className="btLine1"></span>
          <span className="btLine2"></span>
        </div>

        <div className="aboutContentCont">
          <section className="aboutContentLeft">
            <div className="imageCont">
              <span className="imageReel"></span>
              <span className="imageClip"></span>
              <img src={ProfilePic} alt="Profile-Pic" className="profilePicture" />
            </div>
          </section>

          <section className="aboutContentRight">
            <div className="topContent">
              <h3>Who I Am ?</h3>
              <h2>I'm Muhammad Nabeel</h2>
              <h4>Full Stack Web Developer - MERN</h4>
            </div>

            <div className="bottomContent">
              <div className="options">
                <span className="asDev" onClick={() => setIsDev(true)}>
                  As a Developer
                </span>
                <span className="asPer" onClick={() => setIsDev(false)}>
                  As a Person
                </span>
              </div>

              <div className="conditionalContent">
                <p className="para01">
                  Specializing in the MERN stack, I bring expertise in crafting responsive
                  web applications with sleek design and seamless functionality.
                  Proficient in backend development, I ensure robust data management and
                  efficient server-side operations. I implement optimized database
                  structures and ensure data integrity, contributing to scalable and
                  high-performance applications.
                </p>

                <p className="para02">
                  My dedication to staying at the forefront of technological advancements
                  allows me to deliver innovative and high-quality solutions in the
                  dynamic field of web development.
                </p>

                <dl>
                  <dt>Next Goal's :</dt>
                  <dd>
                    <p>
                      My next goal's to learn more efficient about MERN tech and also
                      learned to these technologies as well.
                    </p>
                    <ul>
                      <li>
                        <SiNextdotjs className="techIcon" color="#404040" />
                        <span className="techTitle">Next Js</span>
                      </li>

                      <li>
                        <SiTypescript className="techIcon" color="#2F74C0" />
                        <span className="techTitle">TypeScript</span>
                      </li>

                      <li>
                        <GrMysql className="techIcon" color="#03536C" />
                        <span className="techTitle">MySQL</span>
                      </li>

                      <li>
                        <SiDocker className="techIcon" color="#2468EE" />
                        <span className="techTitle">Docker</span>
                      </li>

                      <li>
                        <SiAmazonaws className="techIcon" color="#FF9C08" />
                        <span className="techTitle">AWS</span>
                      </li>
                    </ul>
                  </dd>
                </dl>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
