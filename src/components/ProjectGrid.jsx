import { useState } from "react";
import { items } from "../constants";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";
import { motion } from "motion/react";

export default function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="container mx-auto px-4 py-20">
   

      {/* LA GRILLE */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            // Effet d'inclinaison aléatoire pour le look "fiches jetées sur la table"
            className={`flex justify-center ${
              index % 2 === 0 ? "md:rotate-1" : "md:-rotate-1"
            } hover:rotate-0 transition-transform duration-300`}
          >
            <ProjectCard
              item={item}
              openModal={() => setSelectedProject(item)}
            />
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <ProjectDetails
          {...selectedProject}
          closeModal={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}