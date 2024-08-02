import { useInterval } from "usehooks-ts";
import { useState } from "react";

import { timeLeft } from "../utils/utils";
import { Reproductor } from "../components/Reproductor";

import { motion } from "framer-motion"
// import { useScroll } from "framer-motion"

function Inicio (){
    const [time, setTimer] = useState(timeLeft());

    // const { scrollYProgress } = useScroll();

    useInterval(() => {
        setTimer(timeLeft());
    }, 1000);



    return(
        <>
            <main className=" bg-fondo">
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
                            className=" mx-auto content-center w-[50vw] sm:w-[30%]  ">
                            <img className="-mt-10 sm:-mt-20" src="./images/carteles/cande+adri_1.svg" alt="" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                ease: "easeInOut",
                                duration: 2,
                            }}
                            className=" mx-auto w-[40vw] sm:w-80">
                            <img src="./images/frases/nosCasamos.svg" alt="" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                ease: "easeInOut",
                                duration: 2.2,
                            }}
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
                                duration: 1,
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
                    <ul className=" mt-6 grid grid-cols-3 mx-auto w-[90vw]  ">
                        
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
                <section className="bg-fondoForma bg-repeat-y bg-cover 
                 object-fill w-full pb-20 sm:text-xl sm:pb-80">
                    <motion.section
                        
                        className="mx-auto w-[80vw] font-cormorant space-y-5 pb-5 sm:w-[40vw] ">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={
                                {
                                    ease: "easeIn",
                                    duration: 1
                                }
                            }
                        >
                            Una noche de domingo, un niño de 9 años asistió a una clase de escuelita bíblica sin darse cuenta de que ese día iba a conocer a la persona que le robaría el corazón para siempre. Entró y la vio, lo más lindo que sus ojos habían visto: una nena de remera rosa, con una personalidad única y algo tan especial que era imposible que pasara desapercibida.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={
                                {
                                    ease: "easeIn",
                                    duration: 1
                                }
                            }
                        >
                            Sin entender mucho lo que estaba sintiendo ni lo que le pasaba en su corazón, lo único que tenía claro era que, cuando fuera grande, se iba a casar con ella y ese se convirtió en su mayor sueño.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={
                                {
                                    ease: "easeIn",
                                    duration: 1
                                }
                            }
                        >
                            Por coincidencia, o por esas formas especiales en las que Dios hace las cosas, esos dos niños compartieron toda su infancia entre escuelita bíblica, campamentos, comidas y, aun, los años de escuela secundaria. Lo que sentía ese nene, lejos de apagarse, creció hasta un punto en que, como suele pasar en estas cosas, todos a su alrededor se daban cuenta de lo que pasaba... menos ella.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={
                                {
                                    ease: "easeIn",
                                    duration: 1
                                }
                            }
                        >
                            Durante su adolescencia, ese nene juntó fuerzas para empezar a hacerle notar sus sentimientos. Obviamente, sus primeros intentos fueron choques contra una pared. Tanto así que la primera canción que él le dedicó decía que <q>es más fácil llegar al sol que a su corazón</q>, y no estaba tan alejado de la realidad.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={
                                {
                                    ease: "easeIn",
                                    duration: 1
                                }
                            }
                        >
                            Entre idas y vueltas, la relación empezó a tomar otro color; comenzaron a conocerse y a nacer otros sentimientos.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={
                                {
                                    ease: "easeIn",
                                    duration: 1
                                }
                            }
                        >
                            El tiempo fue pasando y, junto con la inmadurez de la edad, se sumaron malas decisiones, por lo que esos dos se tuvieron que distanciar. Lejos de hacer morir lo que sentían, el tiempo hizo madurar sus sentimientos.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={
                                {
                                    ease: "easeIn",
                                    duration: 1
                                }
                            }
                        >
                            Un día, en un evento, se volvieron a cruzar. Los sentimientos que tenían empezaron a gritar con fuerza desde su interior, hasta que se hicieron imposibles de disimular.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={
                                {
                                    ease: "easeIn",
                                    duration: 1
                                }
                            }
                        >
                            Se animaron a acercarse otra vez, y fue la mejor decisión de sus vidas. Bah, la segunda mejor, porque la mejor decisión es la que vamos a tomar el 15 de febrero, y queremos que nos acompañes...
                        </motion.p>
                    </motion.section>
                </section>
                <div className="w-[100vw] -mt-20  bg-fotoFondo h-[60vh] sm:h-[140vh] md:h-[170vh]bg-no-repeat bg-cover">
                    {/* <img className="w-[100vw]" src="./images/fotos/fotoFondo.svg" alt="" /> */}
                </div>
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
                                        <img className="icono_info h-[80%]" src="./images/acta.svg" alt="" />
                                        <div className="pr-5 font-serif">
                                            <img className="h-[50%]"  src="./images/frases/civil.svg" alt="" />
                                            <p className="-mt-5">14 de febrero del 2025</p>
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
                <section className="w-[100vw] mt-20 bg-fondoForma bg-repeat-y bg-cover object-fill pb-20 ">
                    <ul >
                        <li className="conteiner_info_col" >
                                <img className="h-20 sm:h-32" src="./images/iconos/sobre.svg" alt="" />
                            
                            <div className=" flex justify-center mt-2">
                                <img className="h-14 my-4 sm:h-28" src="./images/frases/valor.svg" alt="" />
                            </div>
                            <div className=" text-xl sm:text-3xl font-serif text-center -mt-5" >
                                <p>
                                    $35.000 - adultos
                                </p>
                                <p>
                                    $8.000 - de 3 a 8 años
                                </p>
                                <p className=" font-cormorant">
                                    Hasta el xx/xx<br />
                                    Alias: candeyadri
                                </p>
                            </div>
                            <div className=" mt-5 w-[100%] flex justify-center">
                                <a className="w-[100%] flex justify-center" href="https://www.paypal.com/paypalme/candeyadri">
                                    <img className="w-[80%] sm:w-[40%]" src="./images/botones/botonPagar.svg" alt="" />
                                </a>
                            </div>
                        </li>
                        <li className="conteiner_info_col " >
                                <img className="h-20 sm:h-32" src="./images/iconos/musica_icono.svg" alt="" />
                            
                            <div className=" flex justify-center mt-2">
                                <img className="h-14 my-4 sm:h-28" src="./images/frases/musica.svg" alt="" />
                            </div>
                            <div className=" text-xl sm:text-3xl font-serif text-center -mt-5" >
                                <p>
                                    ¡Queremos saber tu opinión!
                                </p>
                                <p className=" font-cormorant">
                                    ¿Qué temas no pueden faltar?
                                </p>
                            </div>
                            <div className=" mt-5 w-[100%] flex justify-center">
                                <a className="w-[100%] flex justify-center" href="https://docs.google.com/forms/d/e/1FAIpQLSdpwI7_JPUZuVsdb7eA7HQ2dzN50QHLXbQJzLPEnrN4DHBjVA/viewform?usp=sf_link">
                                    <img className="w-[80%] sm:w-[40%] " src="./images/botones/botonDecinos.svg" alt="" />
                                </a>
                            </div>
                        </li>
                        <li className="conteiner_info_col" >
                                <img className="h-20 sm:h-32" src="./images/iconos/foto_icono.svg" alt="" />
                            
                            <div className=" flex justify-center mt-2">
                                <img className="h-14 my-4 sm:h-28" src="./images/frases/fotos.svg" alt="" />
                            </div>
                            <div className=" text-xl sm:text-3xl font-serif text-center -mt-5" >
                                <p>
                                ¡Queremos verte
                                </p>
                                <p>
                                mientras te preparas!
                                </p>
                                <p className=" font-cormorant">
                                    Subi tu foto o video de la previa<br />
                                    asi los novios se entretienen<br />
                                    durante la espera.
                                </p>
                            </div>
                            <div className=" mt-5 w-[100%] flex justify-center">
                                <a className="w-[100%] flex justify-center" href="https://www.paypal.com/paypalme/candeyadri">
                                    <img className="w-[80%] sm:w-[40%]" src="./images/botones/botonSubir.svg" alt="" />
                                </a>
                            </div>
                        </li>
                    </ul>
                    <section className="grid grid-cols-3 gap-2 mx-4 mb-5">
                        <div className="fotos_grid">
                            <img src="./images/fotos/foto1.jpg" alt="" />
                        </div>
                        <div className="fotos_grid">
                            <img src="./images/fotos/foto2.jpg" alt="" />
                        </div>
                        <div className="fotos_grid">
                            <img src="./images/fotos/foto3.jpg" alt="" />
                        </div>
                    </section>
                </section>
                <div className="conteiner_info_col" >
                                <img className="h-20 sm:h-40" src="./images/iconos/regalo_icono.svg" alt="" />
                            
                            <div className=" flex justify-center mt-2">
                                <img className=" h-14 my-4 sm:h-28" src="./images/frases/regalos.svg" alt="" />
                            </div>
                            <div className=" text-xl sm:text-3xl font-serif text-center -mt-5" >
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
                            </div>
                            <div className=" mt-5 w-[100%] flex justify-center mb-16">
                                <a className="w-[100%] flex justify-center" href="https://www.paypal.com/paypalme/candeyadri">
                                    <img className="w-[80%] sm:w-[40%]" src="./images/botones/link_mercado.svg" alt="" />
                                </a>
                            </div>
                </div>
                <section className=" mt-10 relative ">
                            <div className="-mt-20 absolute z-10">

                                <div className="  mt-2 w-[100vw] h-[20vh] sm:h-[10vh] relative flex flex-col items-center">
                                    <img className="w-[100vw] " src="./images/fondoRojo.svg" alt="" />
                                    <img className="  w-[60%] mx-auto items-center mt-8 sm:mt-24 absolute " src="./images/carteles/teEsperamos.svg" alt="" />
                                    <img className="w-[60vw] sm:w-[40vw]  -mt-5 sm:-mt-20" src="./images/carteles/cande+adri_1.svg" alt="" />
                                </div>
                            </div>
                            <div className="">
                                <img className="grayscale" src="./images/fotos/fotoFin.jpg" alt="" />
                            </div>
                </section>
            </main>
        </>
    )
}

export default Inicio