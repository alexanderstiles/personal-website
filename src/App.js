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
        <Hero />
        <About />
        <Portfolio />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
