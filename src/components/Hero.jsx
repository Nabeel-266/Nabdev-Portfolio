import { useEffect, useRef } from "react";
import Typed from "typed.js";
import coder from "../assets/coder.png";

// React Icons
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { FaFileDownload } from "react-icons/fa";

// Import Images
import PorfolioSloganLMT from "../assets/Side-Slogan-LMT.png";
import PorfolioSloganDMT from "../assets/Side-Slogan-DMT.png";

const Hero = ({ isDarkTheme }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Javascript",
        "React JS",
        "Tailwind CSS",
        "Node JS",
        "Express JS",
        "Firsbase",
        "Mongo Db",
        "Github",
      ],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="hero">
      <div className="sidePortfolioSlogan">
        <img src={isDarkTheme ? PorfolioSloganDMT : PorfolioSloganLMT} alt="Slogan" />
      </div>

      <div className="heroContentCont">
        {/* Left Side Content */}
        <div className="leftSideContent">
          <h5>HI THERE ,</h5>

          <h1>I Am Muhammad Nabeel</h1>

          <p>
            Passionate MERN Stack Web Developer with expertise in <br /> creating dynamic
            and responsive applications. <br /> Committed to delivering high-quality
            solutions <br /> that elevate user experiences.
          </p>

          <h3>
            My Expertise : <span ref={el} />
          </h3>

          <button className="downloadCV-Btn">
            <FaFileDownload />
            <span>Download CV</span>
          </button>

          <div className="socialLinks">
            <span>
              <a href="#">
                <FaFacebookF className="socialIcon" />
              </a>
            </span>

            <span>
              <a href="#">
                <RiInstagramFill className="socialIcon" />
              </a>
            </span>

            <span>
              <a href="#">
                <PiGithubLogoFill className="socialIcon" />
              </a>
            </span>

            <span>
              <a href="#">
                <FaLinkedinIn className="socialIcon" />
              </a>
            </span>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="rightSideContent">
          <div className="rotatingIcons">
            <span className="icon1 icon">
              <SiMongodb className="animatedIcon" />
            </span>
            <span className="icon2 icon">
              <FaReact className="animatedIcon" />
            </span>
            <span className="icon3 icon">
              <FaNodeJs className="animatedIcon" />
            </span>
            <span className="icon4 icon">
              <SiExpress className="animatedIcon" color="#666666" />
            </span>
          </div>

          <div className="centerHeroImage">
            <img src={coder} alt="coder" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
