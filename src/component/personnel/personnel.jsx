import ScrollRevealText from "../animation/ScrollRevealText";
import ScrollRevealCards from "../animation/ScrollRevealCards";

function Personnel() {
    const ExperienceCard = ({ title, company, description, date, vid, lien }) => {
        return (
            <ScrollRevealCards>
                <div className="bg-[#121212] border border-customPink rounded-xl p-6 shadow-[0_0_20px_#FF00F7] hover:shadow-[0_0_30px_#00FFF7] transition duration-300 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF00F7]/10 to-[#00FFF7]/5 opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl pointer-events-none" />

                    <h2 className="text-xl font-bold text-customPink mb-2">
                        <ScrollRevealText text={title} />
                    </h2>
                    {company && <p className="text-md font-semibold text-[#00FFF7] mb-3">{company}</p>}
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

                    <a
                        href={lien}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            mt-4
                            inline-block
                            bg-customPink
                            text-customBlue
                            font-bold
                            py-2 px-6
                            rounded-lg
                            border-2 border-customPink
                            hover:bg-gradient-to-r hover:from-customPink hover:to-customBlue
                            hover:text-[#000000]
                            shadow-neon-button
                            transition
                            duration-300
                            ease-in-out
                            cursor-pointer
                        "
                    >
                        Consulter
                    </a>
                </div>
            </ScrollRevealCards>
        );
    };

    const experiences = [
        {
            title: "Développeur fullstack",
            company: "",
            description:
                "Géolocalisation des cinémas en France. Développement d'une API REST et gestion des coordonnées en base de données.",
            date: "Janvier 2025 - En cours",
            vid: "./assets/Cinema_vid.mp4",
            lien: "https://github.com/MaxenceTh/Cinema",
        },
        {
            title: "Développeur front",
            company: "",
            description:
                "Petite application permettant de créer sa propre séance de musculation avec API Ninjas. Apprentissage du framework Vue.js.",
            date: "Mars 2025 - En cours",
            vid: "./assets/vue.mp4",
            lien: "https://github.com/MaxenceTh/Gym-Application-in-VueJs",
        },
        {
            title: "Développeur front",
            company: "",
            description:
                "Application web permettant de centraliser et catégoriser des vidéos d'entraînement de badminton, avec des outils d'entraînement. Apprentissage de Vue.js.",
            date: "Avril 2025 - En cours",
            vid: "./assets/badTraining.mp4",
            lien: "https://github.com/MaxenceTh/BadmintonTraining",
        },
         {
            title: "Développeur python",
            company: "",
            description:
                "Aplication présentant plusieurs algorithmes de tri en Python. Permet de visualiser le fonctionnement de chaque algorithme.",
            date: "Juillet 2025 - En cours",
            vid: "./assets/algoSorting.mp4",
            lien: "https://github.com/MaxenceTh/SortingAlgorithm",
        },
    ];

    return (
        <section className="bg-gradient-to-b from-[#0f0f1a] via-black to-black py-16 relative z-1" id="perso">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-extrabold text-center mb-12 text-customPink tracking-wide neon-text-violet">
                    MES PROJETS PERSONNELS
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
                            lien={exp.lien}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Personnel;
