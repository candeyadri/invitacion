import {  motion } from "framer-motion"
import Fotos from "./Fotos"

export default function Detalles() {
    const copiarAlias = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText("candeyadri")
        .then(() => {
            window.open('https://852u.adj.st/home/?adj_t=mqo65e0&adj_label=nav_mp_login&adj_campaign=nav_mp_login&adj_fallback=https%3A%2F%2Fwww.mercadolibre.com%2Fjms%2Fmla%2Flgz%2Flogin%3Fplatform_id%3DMP%26go%3Dhttps%253A%252F%252Fwww.mercadopago.com.ar%252F%26loginType%3Dexplicit&adj_redirect_macos=https%3A%2F%2Fwww.mercadolibre.com%2Fjms%2Fmla%2Flgz%2Flogin%3Fplatform_id%3DMP%26go%3Dhttps%253A%252F%252Fwww.mercadopago.com.ar%252F%26loginType%3Dexplicit ')
          })
          .catch(err => {
            console.error('Error al copiar al portapapeles:', err)
          })
        
        
    }

    const variantesIcones = {
        initial:{ opacity: 0, y: 100 },
        whileInView:{opacity: 1, y:0 },       
    }
    const variantesFrases = {
        initial:{ opacity: 0, x: 100 },
        whileInView:{opacity: 1, x:0 },
        }
    const variantesBotones = {
        initial:{ opacity: 0,scale:0},
        whileInView:{opacity: 1,scale:[0,1.1,0.8,1] },
        
    }
  return (
    <section className="w-[100vw] mt-20 bg-fondoForma bg-repeat-y bg-cover object-fill pb-20 ">
                    <ul >
                        <li className="conteiner_info_col" >
                                <motion.img 
                                variants={variantesIcones}
                                initial="initial" 
                                whileInView="whileInView" 
                                transition={{
                                    ease: "easeInOut",
                                    delay: 0.2,
                                    duration: 0.5,}
                                }
                                className="h-20 sm:h-32" src="./images/iconos/sobre.svg" alt="" />
                            
                            <div className=" flex justify-center mt-2">
                                <motion.img
                                variants={variantesFrases}
                                initial="initial" 
                                whileInView="whileInView"
                                transition={{
                                    ease: "easeInOut",
                                    delay: 0.4,
                                    duration: 0.5,}
                                }
                                className="h-14 my-4 sm:h-28" src="./images/frases/valor.svg" alt="" />
                            </div>
                            <motion.div
                            initial={{ opacity: 0}}
                            whileInView={{ opacity: 1 }}
                            
                                transition={{
                                    ease: "easeInOut",
                                    delay: 0.4,
                                    duration: 0.5,}
                                }
                            className=" text-xl sm:text-3xl font-serif text-center -mt-5" >
                                <p>
                                    $35.000 - adultos
                                </p>
                                <p>
                                    $8.000 - de 3 a 8 años
                                </p>
                                <p className=" font-cormorant">
                                    Hasta el (consultar)<br />
                                    Alias: candeyadri
                                </p>
                            </motion.div>
                            <div onClick={copiarAlias} className=" mt-5 w-[100%] flex justify-center">
                                <a  className="w-[100%] flex justify-center" href="https://852u.adj.st/home/?adj_t=mqo65e0&adj_label=nav_mp_login&adj_campaign=nav_mp_login&adj_fallback=https%3A%2F%2Fwww.mercadolibre.com%2Fjms%2Fmla%2Flgz%2Flogin%3Fplatform_id%3DMP%26go%3Dhttps%253A%252F%252Fwww.mercadopago.com.ar%252F%26loginType%3Dexplicit&adj_redirect_macos=https%3A%2F%2Fwww.mercadolibre.com%2Fjms%2Fmla%2Flgz%2Flogin%3Fplatform_id%3DMP%26go%3Dhttps%253A%252F%252Fwww.mercadopago.com.ar%252F%26loginType%3Dexplicit ">
                                    <motion.img
                                    variants={variantesBotones}
                                    initial="initial" 
                                    whileInView="whileInView"
                                    transition={{
                                        ease: "easeInOut",
                                        delay: 0.5,
                                        duration: 1}
                                    }
                                    className="w-[80%] sm:w-[40%]" src="./images/botones/botonPagar.svg" alt="" />
                                </a>
                            </div>
                        </li>
                        <li className="conteiner_info_col " >
                                <motion.img 
                                variants={variantesIcones}
                                initial="initial" 
                                whileInView="whileInView" 
                                transition={{
                                    ease: "easeInOut",
                                    delay: 0.2,
                                    duration: 0.5,}
                                } className="h-20 sm:h-32" src="./images/iconos/musica_icono.svg" alt="" />
                            
                            <div className=" flex justify-center mt-2">
                                <motion.img
                                variants={variantesFrases}
                                initial="initial" 
                                whileInView="whileInView"
                                transition={{
                                    ease: "easeInOut",
                                    delay: 0.4,
                                    duration: 0.5,}
                                } className="h-14 my-4 sm:h-28" src="./images/frases/musica.svg" alt="" />
                            </div>
                            <motion.div
                            initial={{ opacity: 0}}
                            whileInView={{ opacity: 1 }}
                            
                                transition={{
                                    ease: "easeInOut",
                                    delay: 0.4,
                                    duration: 0.5,}
                                } className=" text-xl sm:text-3xl font-serif text-center -mt-5" >
                                <p>
                                    ¡Queremos saber tu opinión!
                                </p>
                                <p className=" font-cormorant">
                                    ¿Qué temas no pueden faltar?
                                </p>
                            </motion.div>
                            <div className=" mt-5 w-[100%] flex justify-center">
                                <a className="w-[100%] flex justify-center" href="https://docs.google.com/forms/d/e/1FAIpQLSdpwI7_JPUZuVsdb7eA7HQ2dzN50QHLXbQJzLPEnrN4DHBjVA/viewform?usp=sf_link">
                                    <motion.img
                                    variants={variantesBotones}
                                    initial="initial" 
                                    whileInView="whileInView"
                                    transition={{
                                        ease: "easeInOut",
                                        delay: 0.5,
                                        duration: 1}
                                    } className="w-[80%] sm:w-[40%] " src="./images/botones/botonDecinos.svg" alt="" />
                                </a>
                            </div>
                        </li>
                        <li className="conteiner_info_col" >
                                <motion.img 
                                variants={variantesIcones}
                                initial="initial" 
                                whileInView="whileInView" 
                                transition={{
                                    ease: "easeInOut",
                                    delay: 0.2,
                                    duration: 0.5,}
                                } className="h-20 sm:h-32" src="./images/iconos/foto_icono.svg" alt="" />
                            
                            <div className=" flex justify-center mt-2">
                                <motion.img
                                variants={variantesFrases}
                                initial="initial" 
                                whileInView="whileInView"
                                transition={{
                                    ease: "easeInOut",
                                    delay: 0.4,
                                    duration: 0.5,}
                                } className="h-14 my-4 sm:h-28" src="./images/frases/fotos.svg" alt="" />
                            </div>
                            <motion.div
                            initial={{ opacity: 0}}
                            whileInView={{ opacity: 1 }}
                            
                                transition={{
                                    ease: "easeInOut",
                                    delay: 0.4,
                                    duration: 0.5,}
                                }className=" text-xl sm:text-3xl font-serif text-center -mt-5" >
                                <p>
                                ¡Queremos verte
                                </p>
                                <p>
                                mientras te preparas!
                                </p>
                                <p className=" font-cormorant">
                                    Subi tu foto o video de la previa<br />
                                    asi los novios se entretienen<br />
                                    durante la espera.<br />
                                    (Tenes que descargar la app)<br />
                                    Codigo: IlOn3vv2
                                </p>
                            </motion.div>
                            <div className=" mt-5 w-[100%] flex justify-center">
                                <a className="w-[100%] flex justify-center" href="https://onelifesocial.page.link/xMwG ">
                                    <motion.img
                                    variants={variantesBotones}
                                    initial="initial" 
                                    whileInView="whileInView"
                                    transition={{
                                        ease: "easeInOut",
                                        delay: 0.5,
                                        duration: 1}
                                    } className="w-[80%] sm:w-[40%]" src="./images/botones/botonSubir.svg" alt="" />
                                </a>
                            </div>
                        </li>
                        <li className="conteiner_info_col" >
                                <motion.img 
                                variants={variantesIcones}
                                initial="initial" 
                                whileInView="whileInView" 
                                transition={{
                                    ease: "easeInOut",
                                    delay: 0.2,
                                    duration: 0.5,}
                                } className="h-20 sm:h-32" src="./images/iconos/iconoVaso.svg" alt="" />
                            
                            <div className=" flex justify-center mt-2">
                                <motion.img
                                variants={variantesFrases}
                                initial="initial" 
                                whileInView="whileInView"
                                transition={{
                                    ease: "easeInOut",
                                    delay: 0.4,
                                    duration: 0.5,}
                                } className="h-14 my-4 sm:h-28" src="./images/frases/tragos.svg" alt="" />
                            </div>
                            <motion.div
                            initial={{ opacity: 0}}
                            whileInView={{ opacity: 1 }}
                            
                                transition={{
                                    ease: "easeInOut",
                                    delay: 0.4,
                                    duration: 0.5,}
                                }className=" text-xl sm:text-3xl font-serif text-center -mt-5" >
                                <p>
                                Ayudanos a preparar la barra
                                </p>
                                <p className=" font-cormorant">
                                Contanos cual es tu  <br />
                                trago favotito y el que no puede faltar<br />
                                </p>
                            </motion.div>
                            <div className=" mt-5 w-[100%] flex justify-center">
                                <a className="w-[100%] flex justify-center" href="https://docs.google.com/forms/d/e/1FAIpQLSeCAfJbF0NhO1TQ1yHM0qCsKotizsgFBCI9kprkWkehC_tbvQ/viewform?usp=sf_link">
                                    <motion.img
                                    variants={variantesBotones}
                                    initial="initial" 
                                    whileInView="whileInView"
                                    transition={{
                                        ease: "easeInOut",
                                        delay: 0.5,
                                        duration: 1}
                                    } className="w-[80%] sm:w-[40%]" src="./images/botones/BotonContanos.svg" alt="" />
                                </a>
                            </div>
                        </li>
                    </ul>
                    
                    <Fotos />
                    <div className="conteiner_info_col" >
                                    <motion.img 
                                variants={variantesIcones}
                                initial="initial" 
                                whileInView="whileInView" 
                                transition={{
                                    ease: "easeInOut",
                                    delay: 0.2,
                                    duration: 0.5,}
                                } className="h-20 sm:h-40" src="./images/iconos/regalo_icono.svg" alt="" />
                                
                                <div className=" flex justify-center mt-2">
                                    <motion.img
                                variants={variantesFrases}
                                initial="initial" 
                                whileInView="whileInView"
                                transition={{
                                    ease: "easeInOut",
                                    delay: 0.4,
                                    duration: 0.5,}
                                } className=" h-14 my-4 sm:h-28" src="./images/frases/regalos.svg" alt="" />
                                </div>
                                <motion.div
                                initial={{ opacity: 0}}
                                whileInView={{ opacity: 1 }}
                                
                                    transition={{
                                        ease: "easeInOut",
                                        delay: 0.4,
                                        duration: 0.5,}
                                } className=" text-xl sm:text-3xl font-serif text-center -mt-5" >
                                    <p>
                                    Tu presencia en nuestra
                                    </p>
                                    <p>
                                    fiesta es lo más importante.
                                    </p>
                                    <p className=" font-cormorant">
                                        Si está a tu disposición<br />
                                        brindar una muestra de<br />
                                        cariño, estaremos muy <br />
                                        agradecidos
                                        
                                    </p>
                                </motion.div>
                                <div className=" mt-5 w-[100%] flex justify-center mb-16">
                                    <a className="w-[100%] flex justify-center" href="https://852u.adj.st/home/?adj_t=mqo65e0&adj_label=nav_mp_login&adj_campaign=nav_mp_login&adj_fallback=https%3A%2F%2Fwww.mercadolibre.com%2Fjms%2Fmla%2Flgz%2Flogin%3Fplatform_id%3DMP%26go%3Dhttps%253A%252F%252Fwww.mercadopago.com.ar%252F%26loginType%3Dexplicit&adj_redirect_macos=https%3A%2F%2Fwww.mercadolibre.com%2Fjms%2Fmla%2Flgz%2Flogin%3Fplatform_id%3DMP%26go%3Dhttps%253A%252F%252Fwww.mercadopago.com.ar%252F%26loginType%3Dexplicit ">
                                        <motion.img
                                        variants={variantesBotones}
                                        initial="initial" 
                                        whileInView="whileInView"
                                        transition={{
                                            ease: "easeInOut",
                                            delay: 0.5,
                                            duration: 1}
                                    } className="w-[80%] sm:w-[40%]" src="./images/botones/link_mercado.svg" alt="" />
                                    </a>
                                </div>
                    </div>
                </section>
  )
}
