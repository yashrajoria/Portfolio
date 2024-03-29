import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : " ",
        color: darkMode ? "white" : " ",
      }}
    >
      <Navbar></Navbar>
      <Intro></Intro>
      <Services></Services>
      <Experience></Experience>
      <Works></Works>
      <Portfolio></Portfolio>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer />
    </div>
  );
}

export default App;
