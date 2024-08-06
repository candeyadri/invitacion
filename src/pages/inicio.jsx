import Fotos from "../components/Fotos";
// import { motion } from "framer-motion"
import Importante from "../components/Importante";
import HistoriaConteiner from "../components/HistoriaConteiner";
import Header from "../components/Header";
import Detalles from "../components/Detalles";
// import { useScroll } from "framer-motion"

function Inicio (){




    return(
        <>
            <main className=" bg-fondo">
                <Header />
                <HistoriaConteiner />
                <div className="w-[100vw] -mt-20  bg-fotoFondo h-[60vh] sm:h-[140vh] md:h-[170vh]bg-no-repeat bg-cover">
                </div>
                <Importante />
                <Detalles />
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