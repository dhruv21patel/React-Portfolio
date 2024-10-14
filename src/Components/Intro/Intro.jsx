import Animation from "../../Animations/Animations";
import { animate, motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import "./intro.css";

export default function Intro() {
  const { myref } = useRef < HTMLDivElement > null;

  // Get scroll data based on the target ref
  const { scrollYProgress } = useScroll({
    target: myref,
    offset: ["0 1", "1 1"], // Adjust the offset as per your need
  });

  // Using useTransform to map scroll progress to other values like scale and opacity
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  // const [animatedornot,setanimatedornot] = useState(false);

  // const introanimation = {
  //   initial:{
  //     opacity:0,
  //     scale:0
  //   },
  //   animate:{
  //     opacity:1,
  //     scale:1,
  //     transition:{
  //       duration:1,
  //     }
  //   }
  // };

  // function setanimated()
  // {
  //   setanimatedornot(()=>true);
  //   return introanimation.animate;

  // }

  return (
    <motion.div
      className="static text-white h-fit flex flex-col justify-end"
      // variants={introanimation}
      // initial={"initial"}
      // whileInView={setanimatedornot?{
      //   opacity:1,
      //   scale:1,
      //   duration:0.1,
      // }:()=>setanimated()}
      // style={animate}
      ref={myref}
      style={{
        scale: scale,
        opacity: opacity,
      }}
    >
      <div className="relative top-0 h-fit left-[50%] translate-x-[-50%] w-fit flex flex-col gap-[40px] px-[10%] md:px-[15%] py-[10%]">
        <div className="past h-fit">
          <h1 className="text-[2rem] md:text-[5em]">Find out More!</h1>
        </div>
        <div className="pastinfo h-fit">
          <p className=" text-[1.5rem] md:text-[2em] text-wrap indent-[20%]">
            "As a master's student in Computer Science at{" "}
            <b className="underline decoration-green-400">CSULB</b>, I've honed
            my skills in full-stack web development through years of hands-on
            experience. I enjoy crafting robust web applications and am
            particularly passionate about leveraging cloud platforms like{" "}
            <b className="underline decoration-sky-400">Azure</b> and{" "}
            <b className="underline decoration-violet-400">AWS</b> to enhance
            scalability and performance. My approach to development is rooted in
            a deep understanding of both front-end and back-end technologies,
            always aiming to deliver seamless user experiences. I am constantly
            exploring new tools and techniques to stay ahead in the
            ever-evolving tech landscape. Let's connect and build something
            amazing together!"
          </p>
        </div>
        <div>
          <Animation />
        </div>
      </div>
    </motion.div>
  );
}
