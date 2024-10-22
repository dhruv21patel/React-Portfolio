import { useEffect, useState } from "react";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./navigation.css";
import Links from "./Links";
import menu from "../../assets/sidebar.png";
import close from "../../assets/delete.png";

export default function Navigation() {
  const [Active, setActive] = useState("Dhruv");
  const [slider, setSlider] = useState(false);

  function handleslider(event) {
    // event.target.classList.contains('rotate')?event.target.classList.remove('rotate'):event.target.classList.add('rotate');
    event.target.classList.add("rotate");
    setSlider((slider) => !slider);
    setTimeout(() => {
      event.target.classList.remove("rotate");
    }, 2000);
  }

  // const circle =  document.getElementsByClassName('circle');

  //mavgation animation
  function mousein(event) {
    let target = "";

    if (event.target.tagName == "A") {
      target = event.target;

      if (event.target.id !== "Name") {
        if (!target?.classList.contains("hover-border")) {
          target.classList.add("hover-border");
          //  circle[0].style.borderColor= 'transparent';
        }
      }
    }
  }

  function mouseout(event) {
    const target = event.target;

    // Remove the active border class when mouse leaves the element
    target.classList.remove("hover-border");
  }

  return (
    <motion.div
      className=" static w-full h-fit py-[.5rem] flex z-50 bg-transparent"
      onMouseOver={mousein}
      onMouseOut={mouseout}
    >
      <nav
        id="nav"
        className="relative flex flex-row  w-full h-fit justify-between px-[2rem] lg:px-[4rem] items-center z-50 "
      >
        <div className="relative pr-4 md:pd-0 w-fit h-fit z-50">
          <motion.div
            initial={{
              color: "white",
              background: "transparent",
              borderColor: "white",
              scale: 1,
            }}
            whileHover={{
              color: "purple",
              background: "white",
              borderColor: "purple",
              scale: 1.2,
              transition: {
                duration: 0.3,
                delay: 0,
              },
            }}
            className=" w-fit h-fit text-[1.7rem] border-2 md:px-6 md:py-2 px-4 py-2 rounded-full"
          >
            <Link
              to="/"
              id="Name"
              className=""
              onClick={() => {
                setActive("");
                setSlider(() => false);
                window.scrollTo(0, 0);
              }}
            >
              Dhruv Patel
            </Link>
          </motion.div>
        </div>

        {!slider ? (
          <Links
            setfunction={setActive}
            linkactive={Active}
            devicesmall={false}
          />
        ) : (
          ""
        )}

        <div
          id="menu"
          className=" md:hidden place-self-center r-0 flex justify-end w-fit items-center"
        >
          <img
            src={slider ? close : menu}
            onClick={() => handleslider(event)}
            alt="menu"
            className="contain w-10 h-10 z-50"
          />
          <div
            id="slider"
            className={`${
              slider ? "block" : "hidden"
            } absolute  p-5 top-0 left-0 bg-black h-screen w-screen z-10 flex items-center`}
          >
            <Links
              setfunction={setActive}
              linkactive={Active}
              sliderisopen={setSlider}
              devicesmall={true}
            />
          </div>
        </div>
      </nav>
    </motion.div>
  );
}
