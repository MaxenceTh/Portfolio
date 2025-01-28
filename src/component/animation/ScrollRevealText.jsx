import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function ScrollRevealText({ text }) {
  const letters = text.split(""); // Diviser le texte en lettres
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 }); // Observer l'élément

  // Variants pour l'animation
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Animation progressive des lettres
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 100 }, // Augmentation du déplacement vertical
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="">
      <motion.div
        ref={ref}
        className=""
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Animation déclenchée par la visibilité
      >
        {letters.map((letter, index) => (
          <motion.span key={index} variants={child}>
            {letter === " " ? "\u00A0" : letter} {/* Gestion des espaces */}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

export default ScrollRevealText;
