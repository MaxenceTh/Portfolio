import ScrollRevealText from "../animation/ScrollRevealText";
import ScrollRevealCards from "../animation/ScrollRevealCards";

function Experience() {
  const ExperienceCard = ({ title, company, description, date, vid }) => {
    return (
      <ScrollRevealCards>
        <div className="bg-[#121212] border border-customBlue rounded-xl p-6 shadow-[0_0_20px_#00FFF7] hover:shadow-[0_0_30px_#FF00F7] transition duration-300 group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00FFF7]/10 to-[#FF00F7]/5 opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl pointer-events-none" />

          <h2 className="text-xl font-bold text-customPink mb-2">
            <ScrollRevealText text={title} />
          </h2>
          <h3 className="text-md font-semibold text-[#00FFF7] mb-3">{company}</h3>
          <p className="text-gray-300 text-sm mb-4">{description}</p>
          <p className="text-[#faff99] text-xs italic">{date}</p>

          {vid && (
            <video
              src={vid}
              autoPlay
              loop
              muted
              className="mt-4 w-full h-[300px] rounded-lg border border-customPink shadow-[0_0_10px_#FF00F7]"
            />
          )}
        </div>
      </ScrollRevealCards>
    );
  };

  const experiences = [
    {
      title: "Développeur Fullstack",
      company: "Finistère Assurance",
      description: `Intégration d'outils de correction d'adresses postales et de géolocalisation dans une application.`,
      date: "Avril 2024 - Juin 2024",
      vid: "./assets/FI_vid.mp4",
    },
    {
      title: "Développeur IA",
      company: "MerConcept",
      description: "Estimation de la hauteur du trimaran SVR Lazartigue par un réseau de neurones.",
      date: "Décembre 2023 - Avril 2024",
      vid: "./assets/merConcept_vid.mp4",
    },
    {
      title: "Développeur web",
      company: "Agence Roquette",
      description: "Développement web dans une agence axée sur l’écoconception, avec contribution au projet du site de mon club de badminton.",
      date: "Avril 2022 - Juin 2022",
      vid: "./assets/roquette_vid.mp4",
    },
    {
      title: `Développeur d'application`,
      company: "UBO",
      description: `Ajout de fonctionnalité d'aide à la décision pour le routage en mer sur une application déjà existante.`,
      date: "Mai 2023 - Juin 2023",
      vid: "./assets/Routage_dev.mp4",
    },
  ];

  return (
    <>
    <div className="w-full h-1 bg-gradient-to-r from-[#00FFF7] via-[#FF00F7] to-[#00FFF7] mb-8"></div>

    <section className="bg-gradient-to-b from-[#0f0f1a] via-black to-[#000000] py-16 relative z-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-customBlue tracking-wide neon-text">
          MES EXPÉRIENCES
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              title={exp.title}
              company={exp.company}
              description={exp.description}
              date={exp.date}
              vid={exp.vid}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default Experience;
