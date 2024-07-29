
function Inicio (){


    return(
        <>
            <main className=" bg-fondo">
                <header className=" ">
                    <div className=" w-[100vw] aspect-video">
                        <img src="./images/inicio.jpg" alt="" />
                    </div>
                    <div className=" bg-rojo w-full h-[50vh]">
                        <div className=" mx-auto content-center w-[50vw] -mt-10">
                            <img src="./images/cande+adri.svg" alt="" />
                        </div>
                        <div className=" mx-auto w-[40vw]">
                            <img src="./images/nos_casamos.svg" alt="" />
                        </div>
                        <div className=" mx-auto w-[60vw] mt-2">
                            <img src="./images/fecha.svg" alt="" />
                        </div>
                        <section className=" mx-auto p-10  ">
                            <h1 className="font-serif text-xl text-center  text-fondo">Faltan</h1>
                            <ul className="mx-auto flex justify-around w-[60%] ">
                                <li className="fecha ">
                                    <h1 className="text-4xl">202</h1>
                                    <h1 className="font-serif font-thin">Dias</h1>
                                </li>
                                <li className="fecha pt-2 place-self-start">
                                    <h1>:</h1>
                                </li>
                                <li className="fecha">
                                    <h1 className="text-4xl ">10</h1>
                                    <h1 className="font-serif font-thin">Hs</h1>
                                </li>
                                <li className="fecha pt-2 place-self-start">
                                    <h1>:</h1>
                                </li>
                                <li className="fecha">
                                    <h1 className="text-4xl">32</h1>
                                    <h1 className="font-serif font-thin">Min</h1>
                                </li>
                            </ul>
                        </section>
                    </div>
                </header>
                <section>
                    <div className=" mx-auto -mt-5 w-[70vw]">
                        <img src="./images/nuestra_historia.svg" alt="" />
                    </div>
                    <ul className=" grid grid-cols-3 mx-auto w-[90vw] h-[10vh]">
                        
                        <il className="foto-forma h-full">
                            <img className="aspect-square" src="./images/Foto2.svg" alt="" />
                        </il>
                        <il className="foto-forma h-full">
                            <img className="aspect-square" src="./images/Foto3.svg" alt="" />
                        </il>
                        <il className="  foto-forma  h-[95%] flex flex-col justify-center ">
                            <img className=" aspect-square" src="./images/Foto4.svg" alt="" />
                        </il>
                    </ul>
                </section>
            </main>
        </>
    )
}

export default Inicio