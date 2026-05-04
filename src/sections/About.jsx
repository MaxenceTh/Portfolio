import { useState, useRef } from "react";

import { useMediaQuery } from "react-responsive";

import { ScrollVelocityContainer, ScrollVelocityRow } from "../components/ScrollVelocity";
import { stack } from "../constants";
import { motion, useInView } from "motion/react";
import { useTranslation } from "react-i18next";


// Importer le bonhomme en modele 3d qui appuie sur un levier et faire tourner la roue (framework)
// https://magicui.design/docs/components/icon-cloud

const About = () => {

  const [etat, setEtat] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 853 });

  const ref = useRef();

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const parentVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,  // délai entre éléments
        delayChildren: 0.2,     // commence un peu après
      },
    },
  };

  const childVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const { t } = useTranslation();

  return (
    <section className="section-spacing" id="about">




      <div className="container mx-auto max-w-7xl c-space text-white ">

        <motion.div
          ref={ref}
          variants={parentVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >

          {/* ABOUT ME */}
          <motion.h2 className="text-heading mb-12 md:mb-8 px-2 md:px-0" variants={childVariant}>
            {t("aboutme")}
          </motion.h2>

          <div className="flex md:flex-row justify-between items-start gap-8">

            <div className="flex flex-col text-center md:text-left space-y-4">
              <motion.h3 className="text-pretty text-3xl md:text-4xl md:ml-0 md:mr-0 mr-10 ml-10" variants={childVariant}>
                {t("aboutmetext-1")}
              </motion.h3>

              <motion.p className="text-pretty text-2xl mt-15 md:mt-0 md:ml-0 md:mr-0 mr-10 ml-10" variants={childVariant}>
                {t("aboutmetext-2")}
              </motion.p>
            </div>

          </div>

          <motion.div className="flex justify-center mt-25 mb-25 md:mt-12 md:mb-12 " variants={childVariant}>
            <a href="#contact">
              <button className="cursor-pointer bg-orange-100 text-orange-700 font-bold rounded-full 
                    px-4 py-2 shadow-[0_4px_0_#ea580c] border-2 border-orange-300
                    hover:bg-orange-200 hover:shadow-[0_6px_0_#d9460f]
                    active:translate-y-1 active:shadow-[0_2px_0_#ea580c]">
                {t("talk")}
              </button>
            </a>

            <a
              href={`${import.meta.env.BASE_URL}assets/cv.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 ml-6 transition-all active:translate-y-1"
            >
              {/* Effet d'ombre en arrière-plan */}
              <span className="absolute inset-0 translate-x-1 translate-y-1 rounded-full bg-orange-700/40 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform"></span>

              {/* Corps du bouton */}
              <button className="cursor-pointer relative inline-flex items-center gap-2 bg-transparent text-orange-100 font-bold rounded-full 
                    px-5 py-2 border-2 border-orange-100/50 backdrop-blur-sm
                    group-hover:border-orange-100 group-hover:bg-orange-100/10 transition-colors">
                <span className="text-sm uppercase tracking-wider">{t("myresume")}</span>

                <div className="flex items-center justify-center w-5 h-5 bg-orange-100 text-orange-700 rounded-full transition-transform group-hover:rotate-45">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="w-3 h-3"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </button>
            </a>
          </motion.div>


        </motion.div>
      </div>



      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.45, duration: 0.4, ease: "easeOut" }}
        className="md:mt-60 text-white"
      >
        <ScrollVelocityContainer className="text-2xl md:text-4xl font-bold opacity-80">
          <ScrollVelocityRow baseVelocity={20} direction={1}>
            {stack.slice(0, stack.length / 2).map((item) => (
              <span key={item.name} className="mx-6 inline-block">
                {item.name}
              </span>
            ))}
          </ScrollVelocityRow>
          <br />
          <ScrollVelocityRow baseVelocity={20} direction={-1}>
            {stack.slice(stack.length / 2).map((item) => (
              <span key={item.name} className="mx-6 inline-block">
                {item.name}
              </span>
            ))}
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </motion.div>


    </section>




  );
};



export default About;



