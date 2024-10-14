import { stagger, useAnimate} from "framer-motion"
import { useRef } from "react";

export default function Resumebutton(params) {
    
    const [scope, animate] = useAnimate();
    const ref = useRef(null);

    function onhovered(){
        animate([
            [".letter",{ y:-32 }, { duration:0.5,delay:stagger(0.05)}],
            [".letter",{ y:0 }, { duration:0.0001,delay:stagger(0.05),at:1}]
        ]);
    }



    function starscordinate(min,max)
    {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    function onclickedbutton(){
        
        let sparkles = Array.from({length:20});
        

        let sparkelsin = sparkles.map((_,index)=>[`.star-${index}`,{ x: starscordinate(-100,100), y: starscordinate(-100,100), z:0, scale: starscordinate(1,2), opacity:1 },{ duration: 0.3, at: '<' }]);
        let sparkelsout = sparkles.map((_,index)=>[`.star-${index}`,{ opacity:0,scale:0 },{ duration: 0.3,at:'<',delay:0.2 }]);
        let sparkelsreset = sparkles.map((_,index)=>[`.star-${index}`,{ x:0,y:0 },{ duration: 0.0001}]);


        animate([
            ...sparkelsreset,
            ["button",{scale:0.8},{duration:0.3,at:'<'}],
            ...sparkelsin,
            ["button",{scale:1},{duration:0.3}],
            ...sparkelsout
        ])

    };

    return<div ref={scope} className="h-fit w-fit">
        <button ref={ref} className="relative rounded-full border-2 border-purple-600 px-6 py-2 text-purple-600 transition-colors hover:bg-pink-100" 
            onMouseEnter={onhovered}
            onClick={onclickedbutton}>

            <span className="sr-only">RESUME</span>
            <span aria-hidden className="flex overflow-hidden items-center justify-center">
                {
                    ["R","E","S","U","M","E"].map((letter,index) =>{
                        return <span data-letter={letter} key={`${letter}-${index}`} 
                            className="letter text-[25px] inline-block relative leading-8 h-8 after:h-8 after:absolute after:left-0 after:top-full after:content-[attr(data-letter)]">
                                {letter}</span>
                    })
                }
            </span>

            <span aria-hidden className="abolsute  inset-0 block pointer-events-none -z-10">
            {
                Array.from({ length: 20 }).map((_, index) => (
                    <svg  className={`star-${index} h-fit opacity-0 w-fit absolute left-1/2 top-1/2`} key={index} width="10" height="10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                        <rect width="10" height="10" fill="none" />
                        <path
                        d="M10.9198,2.8677 C11.402,2.03987 12.598,2.03987 13.0801,2.8677 L15.8751,7.66643 L21.3027,8.84175 
                            C22.239,9.0445 22.6086,10.1819 21.9703,10.8963 L18.2701,15.0374 L18.8295,20.5625 
                            C18.926,21.5156 17.9585,22.2186 17.0818,21.8323 L12,19.5929 L6.91816,21.8323 
                            C6.04149,22.2186 5.07395,21.5156 5.17046,20.5625 L5.72987,15.0374 L2.02972,10.8963 
                            C1.3914,10.1819 1.76097,9.0445 2.69728,8.84175 L8.12484,7.66643 L10.9198,2.8677 Z"
                        fill="yellow"
                        />
                    </g>
                    </svg>
                ))
            }
            </span>

        </button>
    </div>
};
