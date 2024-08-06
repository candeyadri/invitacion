import { motion } from "framer-motion"
import { useInterval } from "usehooks-ts";
import { useState } from "react";

import { timeLeft } from "../utils/utils";


export default function Header() {
    const [time, setTimer] = useState(timeLeft());

    // const { scrollYProgress } = useScroll();

    useInterval(() => {
        setTimer(timeLeft());
    }, 1000);
  return (
    <header className=" ">
                    <div className=" w-[100vw]  aspect-video sm:h-[50vh] overflow-hidden">
                        <img src="./images/inicio.jpg" alt="" />
                    </div>
                    <motion.div
                        initial={{ opacity: 1 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        className=" bg-rojo w-[100vw] h-[90vh] -mt-10  ">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{duration:1,ease:"easeOut",delay:0.2}}
                            className=" mx-auto content-center w-[50vw] sm:w-[30%]  ">
                            <img className="-mt-10 sm:-mt-20" src="./images/carteles/cande+adri_1.svg" alt="" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{duration:1,ease:"easeOut",delay:0.4}}
                            className=" mx-auto w-[40vw] sm:w-80">
                            <img src="./images/frases/nosCasamos.svg" alt="" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{duration:1,ease:"easeOut",delay:0.6}}
                            className=" mx-auto w-[60vw] mt-2 sm:w-[34%]">
                            <img src="./images/carteles/15febrero.svg" alt="" />
                        </motion.div>
                        <motion.section
                            initial={{ 
                                opacity: 0,
                                scale: 0 }}
                            whileInView={{ 
                                opacity: 1,
                                scale: 1 }}
                            viewport={{ once: true }}
                            animate={{ scale: [null, 100, 0] }}
                            transition={{
                                ease: "easeInOut",
                                delay: 1,
                                duration: 1
                            }}
                            className=" mx-auto p-10  ">
                            <h1 className="font-serif text-xl text-center  text-fondo">Faltan</h1>
                            
                            <ul className="mx-auto flex justify-around w-[60%] ">
                                <li className="fecha ">
                                    <h1 className="text-4xl sm:text-8xl ">{time.days}</h1>
                                    <h1 className="font-serif font-thin">Dias</h1>
                                </li>
                                <li className="fecha pt-2 place-self-start">
                                    <h1>:</h1>
                                </li>
                                <li className="fecha">
                                    <h1 className="text-4xl sm:text-8xl ">{time.hours}</h1>
                                    <h1 className="font-serif font-thin">Hs</h1>
                                </li>
                                <li className="fecha pt-2 place-self-start">
                                    <h1>:</h1>
                                </li>
                                <li className="fecha">
                                    <h1 className="text-4xl sm:text-8xl">{time.minutes.toString().length<2?`0${time.minutes}`:time.minutes}</h1>
                                    <h1 className="font-serif font-thin">Min</h1>
                                </li>
                            </ul>
                        </motion.section>
                    </motion.div>
    </header>
  )
}
