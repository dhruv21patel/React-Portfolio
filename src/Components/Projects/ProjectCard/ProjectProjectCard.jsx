import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../../../Utils/project";

export default function ProjectProjectCard() {
  const { id } = useParams();
  const current_project = projects[id];

  return (
    <div className="h-auto w-full flex flex-col items-center justify-center  gap-[4rem]">
      <div className=" flex items-center justify-center ">
        <div className="container w-[60dvh] aspect-square flex items-center">
          <motion.div
            className=" relative h-[100%] object-contain flex items-center overflow-y-hidden"
            initial={{ height: "0%", originY: 0 }}
            animate={{
              height: "100%",
              transition: {
                delay: 0.5,
                duration: 1,
              },
            }}
          >
            <motion.img
              src={current_project.backgroundImage}
              className="object-contain brightness-50"
              alt=""
            />
            <h1
              className="absolute inset-auto h-fit w-full text-center text-[3rem]"
              style={{ fontWeight: "600" }}
            >
              {current_project.name}
            </h1>
          </motion.div>
        </div>
      </div>

      <div className=" h-fit flex justify-center">
        <div className="container flex flex-col gap-[1rem]">
          <h1 className="text-[2.7rem]">OVERVIEW</h1>
          <p
            className="text-[1.5rem] px-[4%]"
            style={{ fontFamily: "var(--para)", fontWeight: "200" }}
          >
            {current_project.infromation}
          </p>
        </div>
      </div>

      <div className="container flex items-center justify-center">
        <div className="container flex flex-col gap-[2rem] justify-center items-center ">
          <div className="container lg:border-b-2 lg:border-b-white w-[100%] text-start py-[1.5rem] px-[1rem] lg:p-[3rem] flex flex-col md:flex-row justify-between ">
            <h1 className="text-[2.5rem] text-nowrap w-full md:w-[40%] ">Technologies</h1>
            <ul
              className="text-[2rem] w-full px-[15%]"
              style={{ fontFamily: "var(--primary)" }}
            >
              {current_project.Technologies.map((tech,idx) => (
                <li key={idx} className="text-[1.3rem]">{tech}</li>
              ))}
            </ul>
          </div>
          <div className="container lg:border-b-2 lg:border-b-white w-[100%] text-start py-[1.5rem] px-[1rem] lg:p-[3rem] flex flex-col md:flex-row justify-between ">
            <h1 className="text-[2.5rem] text-nowrap w-full md:w-[40%] ">GOAL</h1>
            <ul
              className="text-[2rem] gap-[1rem] w-full px-[15%] "
              style={{ fontFamily: "var(--primary)" }}
            >
              {current_project.Goals.map((goal,idx) => (
                <li key={idx}>
                  {/* Add a unique key for each item */}
                  <p className="font-bold text-[1.3rem]">{goal[0]}</p>
                  <p className="font-light text-[1.3rem]">{goal[1]}</p>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="container border-b-2 border-b-white"></div> */}
        </div>
      </div>

      <div className="container flex flex-col lg:flex-row flex-wrap items-center justify-center pt-[4rem] gap-[2rem]">
        {current_project.images.map((img,idx) => {
          return (
            <div key={idx} className="w-[60%] aspect-square flex items-center">
              <img src={img} className="object-cover h-auto" alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
