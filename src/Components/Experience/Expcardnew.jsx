import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Expcardnew({ exp }) {
  const [isExpanded, setIsExpanded] = useState(false); // Track whether the card is expanded

  const handleslider = () => {
    setIsExpanded(!isExpanded); // Toggle the expanded state
  };

  return (
    <motion.div
      className={`relative transition-all duration-500 ease-in-out
        ${isExpanded?" w-[80vw]":" w-[80vw] lg:w-[30vw]"} bg-white p-[5px] flex lg:flex-row flex-col justify-between items-center h-fit gap-4 over`}
    >
      <div
        className={`flex flex-col ${isExpanded?" w-[100%]  lg:w-[40%] shadow-lg shadow-black":"w-[100%]"} aspect-square  rounded-xl  `}
      >
        <div className="rounded-xl h-[75%] text-black flex flex-start items-center" style={{backgroundColor:exp.bcolor}}>
          <div
            className=" w-[60%] h-fit text-left p-[10px] flex flex-col"
            style={{ fontFamily: "var(--primary)" }}
          >
            <span className="text-[2em]">{exp.role}</span>
            <span className="text-[1em]">{exp.date}</span>
          </div>
        </div>

        <div className="w-full h-[25%] flex flex-grow justify-between items-center py-[1em] px-[1.1em]">
          <img
            src={exp.logo}
            alt="logo"
            className="object-contain w-[15%] lg:w-[15%]"
          />

          <div className="flex flex-grow h-fit justify-between items-center px-[1em]">
            <h1
              className="text-black h-fit w-fit break-words  md:text-[1.2em] text-left text-balance font-medium"
              style={{ fontFamily: "var(--secondary)" }}
            >
              {exp.company}
            </h1>
          </div>

          <button
            className="bg-black text-white py-[2%] px-[4%] rounded-full w-fit h-fit"
            onClick={handleslider}
          >
            {isExpanded ? "Close" : "View"} {/* Toggle button text */}
          </button>
        </div>
      </div>

      {/* Conditionally render additional content when expanded */}
      {isExpanded && (
        <div className={`bg-gray-100  rounded-xl shadow-lg ${isExpanded?" h-auto":"h-auto"} w-auto lg:w-[60%]  flex items-center justify-center p-4`}>
          <div className="h-fit w-auto flex flex-col gap-4 text-black ">
            <div className="container w-full gap-[1em]">
              <h1 className="h-fit text-[1.6em]">Responsibility</h1>
              <ul className=" list-disc">
                {exp.description.map((infomation, index) => (
                  <li
                    key={`info-${index}`}
                    className="px-[1rem] text-wrap text-start w-auto text-[12px] lg:text-[20px]"
                  >
                    {infomation}
                  </li>
                ))}
              </ul>
            </div>
            <div className="container w-auto px-4 flex flex-col gap-4">
              <h1 className="h-fit text-[1.5em]">Technologies</h1>
              <ul className=" list-none flex flex-wrap ">
                {exp.Technologies.map((infomation, index) => (
                  <li
                    key={`info-${index}`}
                    className="px-[1rem]  text-start w-auto text-[1em]"
                  >
                    {infomation}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
