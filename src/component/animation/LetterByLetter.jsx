import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function LetterByLetter() {
  const text = "Portfolio"; // Texte à animer
  const letters = text.split(""); // Diviser le texte en lettres
  const ref = useRef(null); // Référence pour l'élément à observer

  // Utilisation de useInView pour détecter si l'élément est visible dans la fenêtre
  const isInView = useInView(ref, { threshold: 0.2 }); // Déclenche l'animation si 20% de l'élément est visible

  // Variants pour l'animation
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Délai entre chaque lettre
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref} // Attache la référence à l'élément
      className="flex space-x-1 font-bold"
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Anime uniquement si l'élément est visible
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter} {/* Gestion des espaces */}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default LetterByLetter;
