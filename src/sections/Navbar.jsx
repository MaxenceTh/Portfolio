import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react"; // Ajout de AnimatePresence pour l'exit animation
import { useTranslation } from "react-i18next";

function Navigation({ onLinkClick }) {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { id: "#home", label: t("home") },
    { id: "#about", label: t("about") },
    { id: "#work", label: t("work") },
    { id: "#contact", label: t("contact") },
  ];

  return (
    <>
      <ul className="flex flex-col justify-center items-center gap-6">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.id}
              className="text-4xl md:text-5xl font-black text-zinc-900 uppercase tracking-tighter hover:text-white transition-colors"
              onClick={onLinkClick}
            >
              {link.label}
            </a>
          </li>
        ))}
        
        {/* BOUTON LANGUE BRUTALISTE */}
        <li className="mt-4">
          <button
            onClick={toggleLanguage}
            className="p-2 bg-zinc-900 border-4 border-white rounded-xl shadow-[4px_4px_0px_0px_#fff] active:translate-y-1 active:shadow-none transition-all"
          >
            <img
              src={
                i18n.language === "fr"
                  ? `${import.meta.env.BASE_URL}assets/flags/royaume-uni.png`
                  : `${import.meta.env.BASE_URL}assets/flags/france.png`
              }
              alt="Language flag"
              className="w-10 h-10 object-contain"
            />
          </button>
        </li>
      </ul>

      {/* Section Réseaux Sociaux */}
      <div className="mt-16 flex flex-col items-center gap-6">
        <p className="bg-zinc-900 text-white px-4 py-1 text-xs font-black uppercase tracking-[0.2em]">
          {t("social")}
        </p>
        <div className="flex gap-8">
          <a
            href="https://www.linkedin.com/in/maxence-thomas-a03b57298/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-black text-zinc-900 border-b-4 border-zinc-900 hover:text-white hover:border-white transition-all"
          >
            LINKEDIN
          </a>
          <a
            href="https://github.com/MaxenceTh"
            target="_blank"
            rel="noopener noreferrer"
            className="font-black text-zinc-900 border-b-4 border-zinc-900 hover:text-white hover:border-white transition-all"
          >
            GITHUB
          </a>
        </div>
      </div>
    </>
  );
}

const Navbar = ({ setCamTarget, defaultCam, menuCam }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkZone, setIsDarkZone] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Ici, si la section est bg-orange-50 (claire), on veut un bouton qui ressorte
            const isLight = entry.target.classList.contains("bg-orange-50");
            setIsDarkZone(!isLight);
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => {
    setCamTarget(isOpen ? defaultCam : menuCam);
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setCamTarget(defaultCam);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full z-[100]">
      {/* BOUTON BURGER STYLE NEO-BRUTALISTE */}
      <button
        onClick={toggleMenu}
        className={`fixed top-6 right-6 z-[110]
          flex items-center justify-center
          rounded-2xl w-16 h-16
          transition-all duration-200
          border-4 border-zinc-900
          ${isOpen 
            ? "bg-white shadow-none translate-x-1 translate-y-1" 
            : "bg-orange-600 shadow-[6px_6px_0px_0px_#18181b] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#18181b]"
          }`}
      >
        <img
          src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
          className="w-10 h-10"
          alt="toggle"
          style={{ filter: "brightness(0)" }} // Force l'icône en noir pour le style brut
        />
      </button>

      {/* SIDEBAR */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 h-full bg-orange-600 
                       border-l-8 border-zinc-900 w-full sm:w-[400px]
                       flex justify-center items-center z-[100] shadow-[-20px_0px_0px_0px_rgba(0,0,0,0.1)]"
          >
            <nav className="text-center p-8">
              <Navigation onLinkClick={closeMenu} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;