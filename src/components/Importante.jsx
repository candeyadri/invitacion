import { motion } from "framer-motion"

export default function Importante() {
  return (
    <section className=" w-[100vw] h-[75vh] sm:h-[120vh]  relative bg-fondoVerde bg-cover  -mt-20 sm:-mt-32">
                        <div className="    w-[100vw] absolute z-10">
                            <motion.img
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={
                                    {
                                        ease: "easeIn",
                                        duration: 1
                                    }
                                }
                                className=" w-[75vw] sm:w-[40vw] mx-auto -mt-5" src="./images/carteles/importante.svg" alt="" />
                            <section >
                                <ul className=" space-y-3 mt-10 sm:w-[50vw] mx-auto">
                                    <motion.li
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={
                                            {
                                                ease: "easeIn",
                                                duration: 1
                                            }
                                        }
                                        className="conteiner_info">
                                        <img className="icono_info " src="./images/acta.svg" alt="" />
                                        <div className="pr-5 font-serif">
                                            <img className="h-[50%]"  src="./images/frases/civil.svg" alt="" />
                                            <p className="-mt-5">14 de febrero del 2025(a confirmar)</p>
                                            <p>09:00hs - Italia 95</p>
                                        </div>
                                    </motion.li>
                                    <motion.li
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={
                                            {
                                                ease: "easeIn",
                                                duration: 1
                                            }
                                        }
                                        className="conteiner_info">
                                        <img  className="icono_info h-[80%] sm:h-[20vh]" src="./images/iglesia.svg" alt="" />
                                        <div className="pr-5 font-serif">
                                            <img className="h-[50%]" src="./images/frases/ceremonia.svg" alt="" />
                                            <p>15 de febrero del 2025</p>
                                            <p>20:00hs - Lavalle 930</p>
                                        </div>
                                    </motion.li>
                                    
                                    <motion.li
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={
                                            {
                                                ease: "easeIn",
                                                duration: 1
                                            }
                                        }
                                        className="conteiner_info">
                                        <img className="h-[80%] icono_info" src="./images/iconos/fiesta_icono.svg" alt="" />
                                        <div className="pr-5 font-serif">
                                            <img className="h-[50%]" src="./images/frases/fiesta.svg" alt="" />
                                            <p>Al finalizar la</p>
                                            
                                            <p>ceremonia-Club Social</p>
                                            <p>Guardia Nacional 50</p>
                                        </div>
                                    </motion.li>
                                    
                                </ul>
                            </section>
                        </div>
                </section>
  )
}
