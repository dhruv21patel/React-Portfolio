import React, { useState, useEffect } from "react";
import { animate, color, delay, motion } from "framer-motion";
import "./Portfolio.css"; // Styles for layout
import ExpCard from "./ExpCard";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import exper from "../../Utils/Exp.js";


export default function Experience(){

    let customanimatedvariants = {
        initial:{
            opacity:0,
            x:-100
        },
        animate:{
            opacity:1,
            x:0,
            scale:1,
            transition :{
                delay:0.2,
                scale:{delay:0.4}
            }
        }
        
    }
  
  return (
    <div id="work" className="flex flex-col gap-[40px] w-full h-fit px-[0.5rem] scale-75 md:scale-100">
        <motion.div className="w-full flex items-center my-[5%]"
            variants={customanimatedvariants}
            initial={customanimatedvariants.initial}
            whileInView={customanimatedvariants.animate}
        >
            <p className="md:text-[6rem] text-[4rem] text-white w-full">Experience</p>
        </motion.div>
        <VerticalTimeline lineColor="grey">
            {
                exper.map((exp,idx)=>{
                    return (
                        <VerticalTimelineElement key={idx}
                        className="text-wrap"
                        contentStyle={{background:"#DBD7D2",color:"black",maxWidth:'90%',borderRadius:'10px',padding:"auto", boxShadow:"none", borderBottom:`4px solid ${exp["b-color"]}`}}
                        contentArrowStyle={{borderRight:"10px solid yellow"}}
                        icon={
                            <div className="w-full h-full flex items-center justify-center overflow-clip p-[10px]">
                                <img src={exp.logo} alt={exp.company} className="w-[100%] h-[100%] object-contain text-white"/> 
                            </div>
                        }
                        iconStyle={{background:'white'}}
                        date={exp.date}
                        >
                            <ExpCard key={idx} role={exp.role} company={exp.company} info={exp.description} tech={exp.Technologies}/>
                        </VerticalTimelineElement>
                    )
                })
            }

        </VerticalTimeline>

    </div>
  );
};


