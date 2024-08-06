import { Reproductor } from "./Reproductor"
import { motion } from "framer-motion"
import Historia from "./Historia"

export default function HistoriaConteiner() {
  return (
    <>
    <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        ease: "easeIn",
                        duration: 1,

                    }}
                    className="mb-10  h-full ">
                    <div className=" mx-auto mt-10 w-[70vw] sm:w-[40vw]">
                        <img src="./images/carteles/historia_1.svg" alt="" />
                    </div>
                    <ul className=" mt-6 grid grid-cols-3 mx-auto w-[90vw] sm:w-[60vw]  ">
                        
                        <il className="foto-forma h-full">
                            <img className="aspect-square" src="./images/Foto6.svg" alt="" />
                        </il>
                        <il className="foto-forma h-full">
                            <img className="aspect-square" src="./images/Foto3.svg" alt="" />
                        </il>
                        <il className="  foto-forma  h-[95%] flex flex-col justify-center ">
                            <img className=" aspect-square" src="./images/Foto4.svg" alt="" />
                        </il>
                    </ul>
        </motion.section>
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                ease: "easeInOut",
                duration: 1,

            }}
            className=" mx-auto w-[80vw] sm:w-[40vw] ">
            <Reproductor />
        </motion.div>
        <Historia />
    </>
    
  )
}
