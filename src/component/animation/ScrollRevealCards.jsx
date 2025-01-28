import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function ScrollRevealCards({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { threshold: 0.1 });

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Variants pour l'animation des cartes
    const cardVariants = {
        hidden: { opacity: 0, y: 50, },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                // stiffness: 300,
                stiffness: randomNumberInRange(100,400),
                damping: 7,
            },
        },
    };

    return (
        <div ref={ref}>
            {React.Children.map(children, (child, index) => (
                <motion.div
                    key={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {child}
                </motion.div>
            ))}
        </div>
    );
}

export default ScrollRevealCards;
