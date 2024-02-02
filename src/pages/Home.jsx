// Components
import About from "../components/About";
import Hero from "../components/Hero";

const Home = ({ isDarkTheme }) => {
  return (
    <div id="homeContainer">
      <Hero isDarkTheme={isDarkTheme} />

      <About />
    </div>
  );
};

export default Home;
