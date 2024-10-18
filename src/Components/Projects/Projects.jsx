import {motion, useAnimationControls} from "framer-motion";
import Projectcard from "./Projectcard";
import projects from "../../Utils/project.js";
import { useState } from "react";
import Imagescontainer from "./Imagescontainer.jsx";

function Textspan({idx,children}){

    const [animestate,setanimeState] = useState(false);
    const controller = useAnimationControls();


    function handleprojectanimation()
    {
        if(!animestate){controller.start( {transform:[
            "scale3d(.75,1.25,1)",
            "scale3d(1.32,0.82,1)",
            "scale3d(1,1,1)",
            "scale3d(.9,1.10,1)",
            "scale3d(1.12,0.88,1)",
            "scale3d(1,1,1)"],color:"rgb(45 212 191)",
            });
        setanimeState((prev)=>true);}
        else{
            controller.start({color:"white"});
            setanimeState((prev)=>false);
        }
        
    }
    return <motion.p initial={{
                        y:-100,
                        opacity:0,
                        color:"white",
                        
                     }}
                    
                     whileInView={{
                        y:0,
                        opacity:1,
                        transition:{
                        delay:idx*.1,
                        type:"spring"
                        }
                    }}
                     animate={controller}
                onHoverStart={handleprojectanimation}
                onHoverEnd={handleprojectanimation}
                className="h-fit w-fit">{children}
                </motion.p>
}

export default function Projects(params) {

    
    const [hovered,setIsHovered] = useState(false);
    const [hoveredindex,setHoveredindex] = useState(null);
    return <div className="w-full h-full flex flex-col items-start justify-center">
        <div className="text-white text-[3rem] md:text-[100px] w-full h-fit text-left pl-[4vw] ">
            <div className="flex">
                {
                    Array.from("PROJECT").map((w,idx)=>
                    {
                        return <Textspan key={idx} idx={idx}>{w}</Textspan>
                    })
                }
            </div>
        </div>
           <div className="w-full h-fit flex justify-between">
           <motion.div className=" w-[50%] h-fit p-[2rem]"
            initial={{opacity:0}} whileInView={{opacity:1,transition:{
                type:"easeOut",
                duration:1.5,
                delay:0
            }}}>
                {projects.map((project,index)=>{
                    return <Projectcard key={index} ishovered={setIsHovered} currenthoveredindex = {setHoveredindex} id={index} name={project.name} link={project.link}/>
                })}
            </motion.div>
            {/* {hovered&&<Imagescontainer index={hoveredindex}/>} */}
            <Imagescontainer index={hoveredindex} ishover = {hovered}/>
           </div>
    </div>
};
