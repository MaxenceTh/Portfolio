import { useTranslation } from "react-i18next";

export default function ProjectCard({ item, openModal }) {
  const { t } = useTranslation();

  return (
    <div
      className="
        group relative flex flex-col rounded-[2rem] border-4 border-orange-600
        bg-orange-50 overflow-hidden transition-all duration-300
        shadow-[8px_8px_0px_0px_rgba(234,88,12,1)]
        hover:shadow-[12px_12px_0px_0px_rgba(234,88,12,1)]
        hover:-translate-x-1 hover:-translate-y-1
        w-full max-w-[420px] h-full min-h-[500px]
      "
    >
      {/* IMAGE - Ratio fixe pour la grille */}
      <div className="relative w-full h-56 overflow-hidden border-b-4 border-orange-600">
        <img
          src={item.img}
          alt={t(item.titleKey)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Petit badge flottant sur l'image */}
        <div className="absolute top-4 left-4">
          <span className="bg-zinc-900 text-orange-50 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-[2px_2px_0px_0px_#ea580c]">
            {t(item.statusKey)}
          </span>
        </div>
      </div>

      {/* CONTENU TEXTUEL */}
      <div className="p-6 flex flex-col flex-1">
        
        {/* TITRE & ENTREPRISE */}
        <div className="mb-4">
          <h3 className="text-2xl font-black text-zinc-900 uppercase tracking-tighter leading-none mb-1">
            {t(item.titleKey)}
          </h3>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-bold text-orange-600 hover:underline"
          >
            {t(item.companyKey)}
            <span className="text-[10px]">↗</span>
          </a>
        </div>

        {/* STACK - Tags plus compacts et stylés */}
        <div className="flex flex-wrap gap-2 mb-6">
          {item.stack.map((tech, index) => (
            <span
              key={index}
              className="bg-white border-2 border-orange-200 px-2 py-0.5 rounded-lg text-[10px] font-black text-orange-700 uppercase tracking-tight"
            >
              #{tech}
            </span>
          ))}
        </div>

        {/* BOUTON ACTION - Aligné en bas */}
        <div className="mt-auto">
          <button
            className="
              w-full cursor-pointer bg-orange-100 text-orange-700 font-black uppercase text-sm
              rounded-xl px-4 py-3 shadow-[0_4px_0_#ea580c] border-2 border-orange-600
              hover:bg-orange-200 hover:shadow-[0_2px_0_#ea580c] hover:translate-y-[2px]
              active:translate-y-[4px] active:shadow-none
              transition-all
            "
            onClick={openModal}
          >
            {t("discover")}
          </button>
        </div>
      </div>
    </div>
  );
}