import About from "../About/About";
import Contactus from "../Contactus/Contactus";
import Intro from "../Intro/Intro";
import Experience from "../Experience/Experience";
import Terms from "../Terms/Terms";
import Projects from "../Projects/Projects";

export default function Frontpage(params) {
  return (
    <div className="flex flex-col flex-grow gap-[1rem] lg:gap-[15rem] h-auto w-full justify-between">
      <About />
      <Intro />
      <Experience />
      <Projects />
      <Terms />
      <Contactus />
    </div>
  );
}
