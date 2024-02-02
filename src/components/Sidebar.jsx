// Import Logo
import LogoDMT from "../assets/Logo-DMT.png";

// React Icons
import { FaXmark } from "react-icons/fa6";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";

const Sidebar = ({ isOpenSidebar, setIsOpenSidebar }) => {
  return (
    <div
      className="sidebar"
      style={
        isOpenSidebar
          ? { transform: "translateX(0%)" }
          : { transform: "translateX(-100%)" }
      }
    >
      {/* Sidebar Header */}
      <div className="sidebarHeader">
        <div className="headerLeft">
          <img src={LogoDMT} alt="Logo" />
        </div>
        <div className="headerRight">
          <button className="closeSidebarBtn" onClick={() => setIsOpenSidebar(false)}>
            <FaXmark className="xmarkIcon" />
          </button>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <nav className="sidebarNavigation">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact Me</a>
          </li>
        </ul>
      </nav>

      {/* Sidebar Footer */}
      <footer className="sidebarFooter">
        <a href="#">
          <PiGithubLogoFill className="footerIcons" />
        </a>

        <a href="#">
          <FaLinkedinIn className="footerIcons" />
        </a>
      </footer>
    </div>
  );
};

export default Sidebar;
