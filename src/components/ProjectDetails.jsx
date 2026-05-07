import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function ProjectDetails({
  titleKey,
  companyKey,
  statusKey,
  link,
  img,
  stack,
  descriptionKeys,
  closeModal,
}) {
  const { t } = useTranslation();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/80 backdrop-blur-md p-4"
      onClick={closeModal}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="
          relative w-full max-w-3xl
          max-h-[90vh]
          rounded-[2.5rem]
          bg-orange-50
          border-4 border-orange-600
          /* Ombre portée massive style BD */
          shadow-[16px_16px_0px_0px_rgba(234,88,12,1)]
          overflow-hidden flex flex-col
        "
        initial={{ opacity: 0, scale: 0.8, y: 100, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 100 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {/* HEADER : IMAGE + CLOSE BUTTON */}
        <div className="relative h-48 sm:h-72 shrink-0 overflow-hidden">
          <img
            src={img}
            alt={t(titleKey)}
            className="w-full h-full object-cover border-b-4 border-orange-600"
          />
          
          {/* Overlay dégradé pour la lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent" />

          {/* Bouton fermer stylisé "Gaming" */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center rounded-2xl bg-orange-50 border-4 border-orange-600 text-orange-600 font-black text-xl shadow-[4px_4px_0px_0px_rgba(234,88,12,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* CONTENU PRINCIPAL */}
        <div className="p-8 sm:p-10 overflow-y-auto custom-scrollbar flex-1">
          
          {/* TITRE ET STATUS */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-orange-600 font-black uppercase text-sm tracking-widest mb-2 block">
                {t(companyKey)}
              </span>
              <h5 className="text-4xl sm:text-5xl font-black text-zinc-900 leading-none uppercase tracking-tighter">
                {t(titleKey)}
              </h5>
            </div>
            <span className="shrink-0 px-4 py-2 bg-zinc-900 text-orange-50 rounded-xl font-bold text-xs uppercase tracking-widest border-2 border-zinc-900 shadow-[4px_4px_0px_0px_rgba(234,88,12,1)]">
              {t(statusKey)}
            </span>
          </div>

          {/* LISTE DES MISSIONS */}
          <div className="space-y-6">
            <h6 className="flex items-center gap-3 text-sm uppercase font-black tracking-widest text-orange-600">
              <span className="h-1 w-10 bg-orange-600 rounded-full" />
              {t("whatIdid")}
            </h6>

            <ul className="grid gap-4">
              {descriptionKeys.map((key, index) => (
                <li key={index} className="flex gap-4 group items-start bg-white/50 p-4 rounded-2xl border-2 border-transparent hover:border-orange-200 transition-colors">
                  <div className="mt-1.5 h-4 w-4 rounded-md bg-orange-600 border-2 border-zinc-900 rotate-45 shrink-0 group-hover:rotate-180 transition-transform duration-500" />
                  <span className="text-zinc-800 font-bold leading-relaxed">
                    {t(key)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* TECH STACK */}
          <div className="mt-10 flex flex-wrap gap-2">
            {stack.map((tech, index) => (
              <span 
                key={index} 
                className="bg-orange-100 border-2 border-orange-600 px-3 py-1 rounded-lg text-[10px] font-black text-orange-700 uppercase tracking-tight"
              >
                #{tech}
              </span>
            ))}
          </div>
        </div>

        {/* FOOTER : CTA */}
        <div className="p-8 bg-orange-100 border-t-4 border-orange-600 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest"> {t("finDeLaTransmission")}_</p>
          <a 
            href={link} 
            target="_blank" 
            className="w-full sm:w-auto text-center bg-orange-600 text-white font-black px-8 py-4 rounded-2xl border-2 border-zinc-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            {t("visitProject")} ↗
          </a>
        </div>
      </motion.div>
    </div>
  );
}