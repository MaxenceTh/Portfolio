import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useMediaQuery } from "react-responsive";

function SlideInElements({ leftElement, rightElement }) {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  // Détection si l'écran est mobile (max-width: 768px)
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  // Détection si les éléments sont visibles dans la fenêtre de défilement
  const leftInView = useInView(leftRef, { threshold: 0.2 });
  const rightInView = useInView(rightRef, { threshold: 0.2 });

  // Variants pour l'animation
  const leftVariant = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: "0%", opacity: 1, transition: { duration: 0.6 } },
  };

  const rightVariant = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: "0%", opacity: 1, transition: { duration: 0.6 } },
  };

  if (isMobile) {
    // Rendu simplifié sur mobile (pas d'animation)
    return (
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Élément gauche */}
        <div>{leftElement}</div>

        {/* Élément droit */}
        <div>{rightElement}</div>
      </div>
    );
  } else {

    return (
      <div className="">
        {/* Élément venant de la gauche */}
        <motion.div
          ref={leftRef}
          className=""
          variants={leftVariant}
          initial="hidden"
          animate={leftInView ? "visible" : "hidden"}
        >
          {leftElement}
        </motion.div>

        {/* Élément venant de la droite */}
        <motion.div
          ref={rightRef}
          className=""
          variants={rightVariant}
          initial="hidden"
          animate={rightInView ? "visible" : "hidden"}
        >
          {rightElement}
        </motion.div>
      </div>
    );
  }
}

export default SlideInElements;
