import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-wrapper">
        <div className="figure" />
        <Hero />
        <hr className="hr" />
        <About />
        <hr className="hr" />
        <Portfolio />
        <hr className="hr" />
        <Resume />
        <hr className="hr" />
        <Contact />
        <hr className="hr" />
        <p>© 2021 Alexander Stiles</p>
      </div>
    </div>
  );
}

export default App;
