import projects from "../../Utils/project.js";
import {motion} from "framer-motion"


export default function Imagescontainer({index,ishover}) {
    
    let imagemotion = {
        initial:{
            opacity:0,
            x:1000,
            originX:0,
            },
    };

    const project = index !== null && projects[index];

    // Safely log the backgroundImage if it exists
    // console.log(project?.backgroundImage);


    
    return<motion.div className="relative w-[50%] hidden lg:flex h-auto  justify-center items-center">
        {/* initial={{x:100}}
        animate={{x:0,
            transition:{
                duration:1
            }
        }} */}
    {
        ishover&&project && project.backgroundImage && project.backgroundImage.map((bg,index)=>(<motion.img 
                                            varients={imagemotion}
                                            initial={imagemotion.initial}
                                            animate={ishover?{
                                                opacity:1,
                                                x:index*40,
                                                rotate:index*10
                                                }:imagemotion.initial}
                                            key={index} 
                                            className="absolute brightness-50 rounded-xl object-cover h-[300px] w-[500px] z-5" 
                                            src={bg} 
                                            alt={"name"}/>))
        }
        </motion.div>
};
