import React, { useRef } from "react";
import links from "../../Utils/links";
import Resumebutton from "./Resumebutton";
import { Link } from "react-router-dom";

export default function Links({ setfunction, linkactive, devicesmall ,sliderisopen}) {
  function pastelinks() {
    if (devicesmall) {
      return (
        <>
          {links.map((link) => {
            return (
              <li
                id="links"
                key={link.Title}
                data-key={link.Title}
                className={`${
                  linkactive === link.Title ? "text-white " : "text-zinc-500"
                }  hover:text-slate-300
                                    transition ease-linear delay-150 z-[30] h-fit w-fit items-start `}
              >
                <Link
                  to={`${link.link}`}
                  className=" text-[3rem] md:text-[100px]  w-fit h-fit p-2 z-[40] text-left" onClick={()=>sliderisopen(false)}
                >
                  {link.Title}
                </Link>
              </li>
            );
          })}
          <Resumebutton />
        </>
      );
    }


    return (
      <>
        {links.map((link) => {
          return (
            <li
              id="links"
              key={link.Title}
              data-key={link.Title}
              className={`${
                linkactive === link.Title
                  ? " text-white scale-125"
                  : "text-zinc-500"
              } hover:text-slate-300
                            transition ease-linear delay-150 z-[30] w-fit`}
            >
              <Link to={`${link.link}`} className="  w-full h-full p-1 z-[40] text-[12px] lg:text-[20px]">
                {link.Title}
              </Link>
            </li>
          );
        })}
        <Resumebutton />
      </>
    );
  }

  return devicesmall ? (
    <ul
      className=" relative text-white flex flex-col gap-y-[10%] h-screen w-full  z-20 py-[30%] px-10%]"
      onClick={(event) =>
        setfunction(event.target.closest("li").getAttribute("data-key"))
      }
    >
      {" "}
      {pastelinks(devicesmall)}
    </ul>
  ) : (
    <ul
      className=" text-white md:flex hidden flex-row xl:gap-x-[4rem] gap-x-4 justify-around w-fit h-fit items-center"
      onClick={(event) =>
        setfunction(event.target.closest("li").getAttribute("data-key"))
      }
    >
      {pastelinks(devicesmall)}
    </ul>
  );
}
