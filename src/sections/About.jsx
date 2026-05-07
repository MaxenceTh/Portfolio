import { useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { ScrollVelocityContainer, ScrollVelocityRow } from "../components/ScrollVelocity";
import { stack } from "../constants";
import { motion, useInView } from "motion/react";
import { useTranslation } from "react-i18next";

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const parentVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
    <section className="section-spacing overflow-hidden" id="about">
      <div className="container mx-auto max-w-7xl c-space text-zinc-900">
        <motion.div
          ref={ref}
          variants={parentVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center md:items-start"
        >
          {/* TITRE STYLE BADGE */}
          <motion.div variants={childVariant} className="mb-8">
            <h2 className="inline-block px-6 py-2 bg-orange-600 text-white font-black uppercase tracking-tighter text-3xl md:text-5xl rounded-2xl shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]">
              {t("aboutme")}
            </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 w-full">
            <div className="flex flex-col text-center md:text-left space-y-8 max-w-4xl">
              {/* TEXTE PRINCIPAL AVEC OMBRE PORTÉE SUBTILE */}
              <motion.h3 
                className="text-pretty text-4xl md:text-6xl font-black leading-none uppercase tracking-tighter"
                variants={childVariant}
              >
                {t("aboutmetext-1")}
              </motion.h3>

              {/* BLOC DE DESCRIPTION STYLE "FOLDER" */}
              <motion.div 
                variants={childVariant}
                className="bg-zinc-900 border-4 border-orange-600 p-6 md:p-8 rounded-[2rem] shadow-[8px_8px_0px_0px_#ea580c]"
              >
                <p className="text-pretty text-xl md:text-2xl font-bold text-orange-50/90 leading-relaxed">
                  {t("aboutmetext-2")}
                </p>
              </motion.div>
            </div>

            {/* ESPACE POUR UN ÉLÉMENT VISUEL (OU SIMPLEMENT ESPACEMENT)
            <motion.div 
              variants={childVariant}
              className="hidden lg:flex shrink-0 w-64 h-64 bg-orange-600/10 border-4 border-dashed border-orange-600/30 rounded-full items-center justify-center rotate-12"
            >
               <span className="text-7xl">🕹️</span>
            </motion.div> */}
          </div>

          {/* BOUTONS ACTIONS */}
          <motion.div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mt-16 mb-12" variants={childVariant}>
            <a href="#contact">
              <button className="cursor-pointer bg-orange-600 text-white font-black uppercase tracking-widest rounded-2xl 
                    px-8 py-4 shadow-[6px_6px_0px_0px_#fff] border-2 border-white
                    hover:bg-orange-500 hover:shadow-none hover:translate-x-1 hover:translate-y-1
                    active:translate-y-2 transition-all">
                {t("talk")}
              </button>
            </a>

            <a
              href={`${import.meta.env.BASE_URL}assets/cv.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 transition-all active:translate-y-1"
            >
              <span className="absolute inset-0 translate-x-1 translate-y-1 rounded-2xl bg-orange-600/20 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></span>
              <button className="cursor-pointer relative inline-flex items-center gap-3 bg-zinc-900 text-orange-100 font-black uppercase tracking-widest rounded-2xl 
                    px-8 py-4 border-2 border-orange-600
                    group-hover:bg-orange-600/10 transition-colors">
                <span className="text-sm">{t("myresume")}</span>
                <div className="flex items-center justify-center w-6 h-6 bg-orange-600 text-white rounded-lg transition-transform group-hover:rotate-45 shadow-[2px_2px_0px_0px_#fff]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="w-3 h-3">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* SECTION STACK (SCROLL VELOCITY) AVEC BORDURES */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="md:mt-40 py-10 bg-orange-600 border-y-8 border-white -rotate-1 w-[110%] -ml-[5%]"
      >
        <ScrollVelocityContainer className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
          <ScrollVelocityRow baseVelocity={5} direction={1}>
            {stack.slice(0, stack.length / 2).map((item) => (
              <span key={item.name} className="mx-8 inline-block drop-shadow-[4px_4px_0px_rgba(0,0,0,0.3)]">
                {item.name} <span className="mx-8 opacity-30">•</span>
              </span>
            ))}
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </motion.div>
    </section>
  );
};

export default About;