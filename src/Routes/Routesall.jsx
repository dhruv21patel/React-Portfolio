
import Contactus from "../Components/Contactus/Contactus";
import ProjectCard from "../Components/Projects/ProjectCard/ProjectProjectCard";
import Projects from "../Components/Projects/Projects";
import { Routes, Route, useLocation } from "react-router-dom";
import Frontpage from "../Components/frontpage/Frontpage";
import Intro from "../Components/Intro/Intro";

export default function Routesall(params) {


  return (
    <Routes>
      <Route path="/" element={<Frontpage />} /> {/* Default route */}
      <Route path="/about" element={<Intro />} />
      <Route path="/work" element={<Projects />} />
      <Route path="projectcard/:id" element={<ProjectCard />} />
      <Route path="/contact" element={<Contactus />} />
    </Routes>
  );
}
