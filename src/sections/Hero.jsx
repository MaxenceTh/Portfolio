import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";

import HeroText from "../components/HeroText";
import SocialMedia from "../components/SocialMedia";
import { Desktop } from "../components/Desktop";
import CameraMovement from "../components/CameraMovement";
import Loader from "../components/Loader";
import { motion } from "motion/react";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section
      className="bg-orange-50 w-screen h-screen overflow-hidden relative"
      id="home"
    >
      {/* 1. GRILLE DE FOND (DÉCO) */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ea580c 1.5px, transparent 1.5px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="w-full h-full flex items-start justify-center overflow-hidden md:items-start md:justify-start relative c-space">

        {/* 2. TEXTE HERO (Z-INDEX POUR PASSER DEVANT) */}
        <div className="relative z-20 pointer-events-none mt-10 md:mt-0">
          <HeroText />
        </div>

        {/* 3. TA FIGURE (STRICTEMENT INCHANGÉE) */}
        <figure className="absolute inset-0" style={{ width: "100%", height: "100%" }} >
          <Canvas
            className={`transition-opacity duration-700`}
          >
            <ambientLight intensity={1.5} />
            <directionalLight position={[3, 10, 7]} intensity={1.5} />

            <Suspense fallback={<Loader />}>
              <Desktop
                position={isMobile ? [-1.2, -1.2, 1.6] : [1, -1.7, 6]}
                isMobile={isMobile}
              />
              <CameraMovement
                camTarget={[-2, 0, 10]}
                camTargetMobile={[-3, 0, 4]}
              />
            </Suspense>
          </Canvas>
        </figure>

        {/* 4. BADGE "STATUS" STYLE GAMING (AJOUT DA) */}
        <motion.div
          className="absolute top-10 left-10 hidden lg:block z-20"
          initial={{ scale: 0, rotate: 20, opacity: 0 }} // Commence petit, tourné et invisible
          animate={{ scale: 1, rotate: -6, opacity: 1 }}   // Arrive à sa taille et rotation finale
          transition={{
            type: "spring",       // Effet ressort
            stiffness: 260,       // Raideur
            damping: 20,          // Rebond
            delay: 1.5            // Apparaît un peu après le reste pour attirer l'oeil
          }}
        >
          <div className="bg-zinc-900 text-orange-50 border-4 border-orange-600 px-6 py-2 font-black uppercase tracking-tighter shadow-[8px_8px_0px_0px_#ea580c] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-default">
            Open to work _
          </div>
        </motion.div>

        {/* 5. RÉSEAUX SOCIAUX */}
        <div className="absolute bottom-20 left-6 md:left-10 z-[40]">
          <SocialMedia />
        </div>

        {/* 6. BARRE DE SCROLL BAS DE PAGE (AJOUT DA) */}
        <div className="absolute bottom-0 left-0 w-full bg-orange-600 py-3 border-t-4 border-zinc-900 flex justify-center z-30">
          <p className="text-white text-[10px] font-black uppercase tracking-[0.4em] animate-pulse">
            Ready to start ? Scroll Down
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;