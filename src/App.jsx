import "./css/main.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Contacts from "./pages/Contacts.jsx";
import Project from "./pages/Project.jsx";
import ScrollToTop from "./utils/scrollToTop.js";
import Snowfall from "react-snowfall";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router basename="/danil-portfolio">
        <Snowfall flakes={10} />
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
