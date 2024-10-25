import Expcardnew from "./Expcardnew";
import exper from "../../Utils/Exp.js";
import { motion } from "framer-motion";

export default function Exp(params) {

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
    <div className="min-h-screen flex flex-col items-center justify-around gap-4">
        <motion.div className="w-full flex items-center "
            variants={customanimatedvariants}
            initial={customanimatedvariants.initial}
            whileInView={customanimatedvariants.animate}>

            <p className="md:text-[6rem] text-[40px] text-white w-full">Experience</p>

        </motion.div>

      <div className="max-h-fit w-full flex flex-col lg:flex-row justify-around items-center flex-grow flex-wrap gap-[3vw]">
        {exper.map((expr,index) => <Expcardnew key={index} exp={expr}/>)}
      </div>
    </div>
  );
}
