import "./styles/app.scss";
import { useState } from "react";
import useLocalStorage from "use-local-storage";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Overlay from "./components/Overlay";
import Sidebar from "./components/Sidebar";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage("isDarkTheme", false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <div id="app" data-theme={isDarkTheme ? "dark" : "light"}>
      <Overlay isOpenSidebar={isOpenSidebar} />

      <Navbar
        isDarkTheme={isDarkTheme}
        setIsDarkTheme={setIsDarkTheme}
        setIsOpenSidebar={setIsOpenSidebar}
      />

      <Sidebar isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />

      <Home isDarkTheme={isDarkTheme} />
    </div>
  );
}

export default App;
