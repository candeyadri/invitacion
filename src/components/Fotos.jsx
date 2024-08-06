import { motion } from "framer-motion"


export default function Fotos() {
  return (
    <section className="grid grid-cols-3 gap-2 mx-4 mb-5">
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={
            {
                ease: "easeIn",
                delay: 0.4,
            }
        } className="fotos_grid">
            <img src="./images/fotos/foto1.jpg" alt="" />
        </motion.div>
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={
            {
                ease: "easeIn",
                delay: 0.8,
            }
        } className="fotos_grid">
            <img src="./images/fotos/foto2.jpg" alt="" />
        </motion.div>
        <motion.div   
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={
            {
                ease: "easeIn",
                delay: 1.2,
            }
        }
        className="fotos_grid">
            <img src="./images/fotos/foto3.jpg" alt="" />
        </motion.div>
    </section>
  )
}
