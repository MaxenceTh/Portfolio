import React from "react";
import { motion } from "framer-motion";

function MovingLetters() {
  const text = "Bienvenue"; // Texte à animer
  const letters = text.split(""); // Diviser le texte en lettres

  return (
    <div className="flex space-x-2 text-4xl font-bold">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          animate={{
            y: [0, -10, 10, 0], // Mouvement haut-bas
          }}
          transition={{
            duration: 1.5, // Durée d'une oscillation
            repeat: Infinity, // Répète à l'infini
            delay: index * 0.1, // Décalage pour chaque lettre
          }}
        >
          {letter === " " ? "\u00A0" : letter} {/* Gestion des espaces */}
        </motion.span>
      ))}
    </div>
  );
}

export default MovingLetters;
