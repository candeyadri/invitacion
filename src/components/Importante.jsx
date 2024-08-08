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
                                <ul className=" space-y-6 mt-10 sm:w-[50vw] mx-auto bg-verde">
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
                                        <div className="font-serif text-right">
                                            <div className="div_img_infoImportante">

                                                <img   src="./images/frases/civil.svg" alt="" />
                                            </div>
                                            <p className="-mt-2">Posible fecha:<br />
                                            del 12 al 14 <br />
                                            de febrero del 2025</p>
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
                                        <div className="font-serif text-right">
                                            <div className="div_img_infoImportante">

                                                <img className="" src="./images/frases/ceremonia.svg" alt="" />
                                            </div>
                                            <p className="-mt-2">15 de febrero del 2025</p>
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
                                        <div className="font-serif text-right ">
                                            <div className="div_img_infoImportante">
                                                <img className="" src="./images/frases/fiesta.svg" alt="" />
                                            </div>
                                            <p className="-mt-2">Al finalizar la<br />
                                            ceremonia-Club Social<br />
                                            Guardias Nacionales 50</p>
                                        </div>
                                    </motion.li>
                                    
                                </ul>
                            </section>
                        </div>
                </section>
  )
}
