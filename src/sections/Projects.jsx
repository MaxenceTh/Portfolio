import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useInView } from "motion/react";
import HorizontalScrollCards from "../components/HorizontalScrollCards";
import { useTranslation } from "react-i18next";
import ProjectGrid from "../components/ProjectGrid";


const Projects = () => {

  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const parentVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Délai entre chaque carte
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  const { t } = useTranslation();

  return (
    <section
      className=" section-spacing bg-orange-50"
      id="work"
    >
      <div className="container mx-auto max-w-7xl c-space">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={parentVariant}
          className="mb-16 px-4 md:px-0"
        >
          <motion.h2
            variants={itemVariant}
            className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-black"
          >
            {t("my")} <span className="text-orange-600">{t("experience")}</span>
          </motion.h2>

          <motion.p
            variants={itemVariant}
            className="text-zinc-400 mt-4 text-lg font-medium max-w-2xl"
          >
            {t("expereienceDetails")}
          </motion.p>
        </motion.div>
      </div>

      {/* <motion.div
        ref={ref}
        variants={parentVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col items-start md:items-end px-2 py-2 md:px-0 mr-5">
        <p className="text-2xl font-bold">
          <span className="text-orange">1 {t("an")} </span> {t("experiencePro")}
        </p>
        <p className="text-xl">
          <span className="text-orange">1 {t("an")} </span>{t("experiencePerso")}
        </p>
      </motion.div> */}

      {/* <HorizontalScrollCards /> */}
      <ProjectGrid />


    </section >
  );
};

export default Projects;
