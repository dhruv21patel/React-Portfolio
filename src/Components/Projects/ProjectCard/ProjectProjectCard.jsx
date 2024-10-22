import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../../../Utils/project";
import { div } from "framer-motion/client";

export default function ProjectProjectCard() {
  const { id } = useParams();
  const current_project = projects[id];

  const topRef = useRef(null);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "instant" });
    }
  }, []);

  return (
    <div ref={topRef} className="h-auto flex flex-grow flex-col justify-center">
      <div className="h-auto flex justify-center ">
        <div className="relative w-[60dvh] aspect-square flex items-center justify-center">
          <motion.div
            className="absolute min-w-full h-full flex items-center backdrop-brightness-50 overflow-hidden"
            initial={{
              height: "0%",
            }}
            animate={{
              height: "100%",
              transition: {
                delay: 0.5,
                duration: 1,
              },
            }}
          >
            <div className="relative h-full flex flex-grow justify-center items-center">
              <img
                src={current_project.backgroundImage}
                alt=""
                className="object-contain"
              />
              <h1
                className="absolute inset-auto h-full w-full backdrop-brightness-50 text-center text-[3rem] flex items-center justify-center"
                style={{ fontWeight: "600" }}
              >
                {current_project.name}
              </h1>
            </div>
          </motion.div>
        </div>
      </div>

      {/* project information details */}
      <div className="h-fit flex justify-center items-center">
        <div className="flex flex-col gap-[10px] justify-center items-center">
          <div className="container flex flex-col gap-[2rem]">

            <h1 className="text-[1.5rem] lg:text-[3rem] text-blue-200">OVERVIEW</h1>

            <p className="text-[1rem] lg:text-[1.5rem] px-[4%]"
              style={{ fontFamily: "var(--para)", fontWeight: "200" }}> { current_project.infromation } </p>

          </div>

          <div className="container lg:border-b-2 lg:border-b-white w-[100%] text-center  py-[1.5rem] px-[1rem] lg:p-[3rem] flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-[1.5rem] lg:text-[2.5rem] text-nowrap w-full md:w-[40%] ">
              Technologies
            </h1>
            <ul
              className="text-[1rem] lg:text-[2rem] w-full p-4 flex h-auto justify-evenly flex-wrap gap-[3px]"
              style={{ fontFamily: "var(--primary)" }}
            >
              {current_project.Technologies.map((tech, idx) => (
                <li key={idx} className="text-[12px] lg:text-[20px] w-fit text-teal-300">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="container lg:border-b-2 lg:border-b-white w-fit lg:w-[100%] py-[1.5rem] px-[1rem] lg:p-[3rem] flex flex-col md:flex-row justify-between items-center ">
            <h1 className="text-[1.5rem] lg:text-[2.5rem] text-center text-nowrap w-full md:w-[40%] ">
              GOAL
            </h1>
            <ul
              className="text-[1rem] lg:text-[2rem] text-start p-[2rem] flex flex-col gap-[1rem] w-full "
              style={{ fontFamily: "var(--primary)" }}
            >
              {current_project.Goals.map((goal, idx) => (
                <li key={idx}>
                  {/* Add a unique key for each item */}
                  <p className="font-bold text-[12px] lg:text-[20px] text-blue-500">
                    {goal[0]}
                  </p>
                  <p className="font-light indent-6 text-[12px] lg:text-[20px]">
                    {goal[1]}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full h-auto flex justify-center">
        <div className="container flex flex-col lg:flex-row flex-wrap items-center justify-center gap-[1rem] h-fit">
          {current_project.images.map((img, idx) => {
            return (
              <div
                key={idx}
                className="w-[60%] aspect-square flex items-center"
              >
                <img src={img} className="object-cover h-auto" alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
