
import  useMeasure  from "react-use-measure";
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import {motion} from "framer-motion";


export default function Terms(){

    const terms = [
        "HELLO THERE !",
        "WANT TO CONNECT ? ",
        "LEAVE A MESSAGE",
    ];
    let [ref,{width}] = useMeasure();
    const xTranslation =  useMotionValue(0);

    useEffect(()=>{
        let controls;
        let finalposition = -width/2 - 8;
        controls = animate(xTranslation,[0,finalposition],{
            ease : "linear",
            duration: 25,
            repeat:Infinity,
            repeatType:"loop",
            repeatDelay:0,
            delay:3,
        })

        return controls.stop;
    },[width,xTranslation]);
    
    return <div className=" w-full h-fit p-[10px] overflow-hidden " >
                <motion.div className="w-fit flex overflow-hidden gap-4" ref={ref} style={{x:xTranslation}}
                initial={{
                    y:100,
                    opacity:0
                }}

                whileInView={{
                    y:0,
                    opacity:1,
                    transition:{
                        ease:"easeOut",
                        delay:0.2,
                        duration:1.2,
                    }
                }}>
                    {
                        [...terms,...terms].map((t,idx)=>{
                        return <h3 key={idx} className="w-fit text-nowrap text-[4rem] md:text-[100px] font-bold text-white mr-[40px]">
                            {t}
                            </h3>})
                    }
                </motion.div>
                  
                </div>

}