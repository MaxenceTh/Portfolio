import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useInView } from "motion/react";
import HorizontalScrollCards from "../components/HorizontalScrollCards";
import { useTranslation } from "react-i18next";


const Projects = () => {

  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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

  const { t } = useTranslation();

  return (
    <section
      className=" section-spacing bg-orange-50"
      id="work"
    >
      <div className="container mx-auto max-w-7xl c-space">
        <motion.div
          ref={ref}
          variants={parentVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="text-heading text-black px-2 md:px-0  ">
            {t("selectedProjets")} <span className="text-orange">{t("experience")}</span>
          </motion.h2>
        </motion.div>
      </div>

      <motion.div
        ref={ref}
        variants={parentVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col items-start md:items-end px-2 md:px-0 mr-5">
        <p className="text-2xl font-bold">
          <span className="text-orange">1 {t("an")} </span> {t("experiencePro")}
        </p>
        <p className="text-xl">
          <span className="text-orange">1 {t("an")} </span>{t("experiencePerso")}
        </p>
      </motion.div>

      <HorizontalScrollCards />


    </section >
  );
};

export default Projects;
