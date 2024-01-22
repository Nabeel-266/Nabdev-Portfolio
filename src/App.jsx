import "./styles/app.scss";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div id="app">
      {/* Navbar */}
      <Navbar />

      <Home />
    </div>
  );
}

export default App;
