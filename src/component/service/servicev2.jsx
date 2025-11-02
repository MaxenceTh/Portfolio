import ScrollRevealText from "../animation/ScrollRevealText";
import ScrollRevealCards from "../animation/ScrollRevealCards";
import { useMediaQuery } from "react-responsive";

function Skills() {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

   const hardSkills = [
    { id: 1, image: "./assets/icone/javascript.png", title: "Javascript" },
    { id: 2, image: "./assets/icone/java.png", title: "Java" },
    { id: 3, image: "./assets/icone/react.png", title: "React" },
    { id: 4, image: "./assets/icone/vue.png", title: "Vue" },
    { id: 5, image: "./assets/icone/angular.png", title: "Angular" },
    { id: 6, image: "./assets/icone/postgresql.png", title: "PostgreSQL" },

    { id: 7, image: "./assets/icone/spring.png", title: "Spring" },
    { id: 8, image: "./assets/icone/php.png", title: "Php" },
    // { id: 9, image: "./assets/icone/tailwindcss.png", title: "Tailwind" },

    // ↓ Compétences secondaires en dernier
    // { id: 10, image: "./assets/icone/html5.png", title: "Html" },
    // { id: 11, image: "./assets/icone/css.png", title: "Css" },
    // { id: 12, image: "./assets/icone/docker.png", title: "Docker" },
    // { id: 13, image: "./assets/icone/gitlab.png", title: "Gitlab" },
    // { id: 14, image: "./assets/icone/postman.png", title: "Postman" },
];
    const softSkills = [
        { id: 15, image: "./assets/icone/teamwork.png", title: "Travail en équipe" },
        { id: 16, image: "./assets/icone/solving.png", title: "Résolution de problèmes" },
        { id: 17, image: "./assets/icone/internal.png", title: "Communication" },
        { id: 18, image: "./assets/icone/adaptation.png", title: "Adaptabilité" },
        { id: 19, image: "./assets/icone/curiosity.png", title: "Curiosité" },
        { id: 20, image: "./assets/icone/organization.png", title: "Organisation" },
    ];

    const SkillSection = ({ title, items }) => (
        <section className="bg-[#0a0a12] border border-[#0ff] rounded-2xl p-8 w-full shadow-neon">
            <h2 className="text-cyan-400 text-3xl font-extrabold text-center mb-8 tracking-wide neon-text">
                <ScrollRevealText text={title} />
            </h2>
            <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {items.map(({ id, image, title }) => (
                    <ScrollRevealCards key={id}>
                        <div className="flex flex-col items-center p-6 bg-[#111122] rounded-xl border border-[#0ff] shadow-lg hover:shadow-neon transform hover:scale-105 transition duration-300">
                            <div className="w-20 h-20 mb-4 flex justify-center items-center bg-white bg-opacity-20 rounded-md p-2 shadow-neon">
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-full object-contain filter brightness-150"
                                    loading="lazy"
                                />
                            </div>
                            <p className="text-[#0ff] font-semibold text-lg text-center tracking-wide">{title}</p>
                        </div>
                    </ScrollRevealCards>
                ))}
            </div>
        </section>
    );

    return (
        <div className="bg-gradient-to-b from-[#0f0f1a] via-[#05050a] to-[#000005] min-h-screen py-16 px-6 text-white" id="competence">
            <h1 className="text-4xl font-extrabold text-center mb-12 text-customBlue  tracking-widest neon-text">
                Mes Compétences
            </h1>
            {isMobile ? (
                <div className="flex flex-col gap-12">
                    <SkillSection title="Hard Skills" items={hardSkills} />
                    <SkillSection title="Soft Skills" items={softSkills} />
                </div>
            ) : (
                <div className="flex flex-col gap-12 justify-center max-w-7xl mx-auto">
                    <SkillSection title="Hard Skills" items={hardSkills} />
                    <SkillSection title="Soft Skills" items={softSkills} />
                </div>
            )}
        </div>
    );
}

export default Skills;
