import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import LogoRotating from "./components/LogoRotating";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import AmazingCursor from "./hooks/AmazingCursor";

function App() {
  return (
    <>
      <div className="cursor_dot">
        <AmazingCursor
          innerSize={13}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={4}
        />
      </div>
      <Navbar />
      <main>
        <Home />
        <About />
        <LogoRotating />
        <Skills />
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
