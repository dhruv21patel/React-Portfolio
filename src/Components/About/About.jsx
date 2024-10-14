import './about.css';
import blob from '../../assets/blob (1).svg';
import profile from '../../assets/1000017899.jpg';
import { motion } from 'framer-motion';



export default function About(){

    const devwords = ["D","E","V","E","L","O","p","E","R"];

    return <div id='about'  className="static bg-transparent h-[90dvh] md:h-auto w-full flex justify-around flex-col ">

                    {/* photo container that has full width */}
                    <div id='photocontainer' className=" w-full h-fit z-0 flex justify-end items-center overflow-hidden  px-[2px] md:px-[20%]">


                        <div className=' relative h-[500px] w-[500px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] overflow-hidden flex justify-center items-center'>
                            
                
                            {/* Profile Photo */}
                            <div className='rounded-full overflow-hidden  h-[80%] w-[80%] flex justify-center items-center p-[20px] '>
                                <div className='rounded-full w-full h-full overflow-hidden flex justify-center items-center '>
                                     <motion.img
                                        src={profile}
                                        className='object-cover h-full w-full'
                                        initial={{
                                            opacity: 0,
                                            scale:0
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale:[1,1.1],
                                            transition: {
                                            delay: 2,
                                            duration: 1,
                                            }
                                        }}
                                    />
                                </div>
                            </div>


                             {/* Blob SVG */}
                             <motion.img
                                src={blob}
                                alt='blob'
                                className=' absolute z-20 h-[95%] w-[95%] lg:h-[100%] lg:w-[100%] bg-black object-contain'
                                initial={{
                                    opacity: 0,
                                    scale: 0,
                                }}
                                animate={{ opacity: 1, scale: [.5,1], rotate: 360 }}
                                transition={{
                                    rotate: {
                                    repeat: Infinity,
                                    duration: 5,
                                    ease: "linear",
                                    delay: 2
                                    },
                                    duration: 2,
                                    type: "easeInOut",
                                }}
                            />


                        </div>
                    </div>

                <div className="h-auto w-full flex flex-col items-start text-white z-10 px-[5%]">

                    <div className=' h-fit w-full text-left gap-0'>
                        <p className="  md:text-[4rem] text-[2rem] h-fit">Heyy There, I AM</p>
                        <p className="  md:text-[6rem] text-[3rem] h-fit">DHRUV PATEL</p>
                    </div>

                </div>
                    
            </div>
}