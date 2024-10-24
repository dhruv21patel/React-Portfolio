import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Imagescontainer from "./Imagescontainer";
import { useNavigate } from 'react-router-dom';

export default function Projectcard({ishovered,currenthoveredindex,id,name,link}) {

    const navigate = useNavigate();
    const div = useRef();

    const handleMouseEnter = (id) => {
        ishovered(true);
        currenthoveredindex(id);
      };
    
      const handleMouseLeave = (id) => {
        ishovered(()=>false);
        currenthoveredindex(id);
      };

    const hovermotion = {
        initial:{
            originX:0,
            scale:1,
            color:'gray',
            z:10,
            letterSpacing: "0em",
        },
        animate:{
            scale:1.2,
            color:'white',
            z:20,
            letterSpacing: "0.1em",
            transition:{
                type:"easeOut"
            }
        }
    }


    //animation for images
    const imgmotion = {
        initial:{
            opacity:0,
            display:'none',
            z:0,
        },
        animate:{
            opacity:1,
            display:'block',
            z:15,
            transition:{
                type:'easeOut',
                duration:1.5,
                delay:0
            }
        }
    }
   
    // function handleredirect(link)
    // {
    //     window.open(link);
    // }

    function OpenProject(){
        // window.scrollTo(0,0);
        navigate(`/projectcard/${id}`);
    }

    return <div ref={div} className={`relative w-fit h-fit m-0 p-0 text-[2rem] md:text-[4rem] flex items-center justify-between text-nowrap px-[10%]`} 
                onMouseEnter={()=>handleMouseEnter(id)}
                onMouseLeave={()=>handleMouseLeave(id)}
                onClick={OpenProject}>
                                <motion.p 
                                variants={hovermotion} 
                                initial={hovermotion.initial}
                                whileHover={hovermotion.animate}
                                className=" relative w-fit h-fit z-10 " >{name}</motion.p>
                                
                        </div>
    
};
