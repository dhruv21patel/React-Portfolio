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
    <div id="work" className="flex flex-col gap-[4rem] w-full h-auto p-[2rem] ">
        
        <motion.div className="w-full flex items-center "
            variants={customanimatedvariants}
            initial={customanimatedvariants.initial}
            whileInView={customanimatedvariants.animate}>

            <p className="md:text-[6rem] text-[40px] text-white w-full">Experience</p>

        </motion.div>

        <VerticalTimeline lineColor="grey" className="w-full ">
            {
                exper.map((exp,idx)=>{
                    return (
                        <VerticalTimelineElement key={idx}
                        className="max-w-full"
                        contentStyle={{background:"#DBD7D2",color:"black",borderRadius:'10px',maxWidth:'80%',padding:"auto", boxShadow:"none", borderBottom:`4px solid ${exp["b-color"]}`}}
                        contentArrowStyle={{borderRight:"10px solid yellow"}}
                        icon={
                            <div className="w-full h-full flex items-center justify-center overflow-clip p-[10px]">
                                <img src={exp.logo} alt={exp.company} className="w-[100%] h-[100%] object-contain text-white"/> 
                            </div>
                        }
                        iconStyle={{background:'white'}}
                        
                        >
                            <ExpCard key={idx} duration={exp.date} role={exp.role} company={exp.company} info={exp.description} tech={exp.Technologies}/>
                        </VerticalTimelineElement>
                    )
                })
            }

        </VerticalTimeline>

    </div>
  );
};


