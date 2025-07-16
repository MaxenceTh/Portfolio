import ScrollRevealText from "../animation/ScrollRevealText";
import ScrollRevealCards from "../animation/ScrollRevealCards";
import { useMediaQuery } from "react-responsive";

function Service() {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    const services = [
        "Développeur Backend",
        "Développeur Frontend",
        "Développeur Full Stack",
    ];

    const cards = [
        { id: 1, image: "./assets/icone/spring.png", title: "Spring" },
        { id: 2, image: "./assets/icone/php.png", title: "Php" },
        { id: 3, image: "./assets/icone/java.png", title: "Java" },
        { id: 4, image: "./assets/icone/react.png", title: "React" },
        { id: 5, image: "./assets/icone/vue.png", title: "Vue" },
        { id: 6, image: "./assets/icone/angular.png", title: "Angular" },
        { id: 7, image: "./assets/icone/tailwindcss.png", title: "Tailwind" },
        { id: 8, image: "./assets/icone/html5.png", title: "Html" },
        { id: 9, image: "./assets/icone/css.png", title: "Css" },
        { id: 10, image: "./assets/icone/javascript.png", title: "Javascript" },
        { id: 11, image: "./assets/icone/docker.png", title: "Docker" },
        { id: 12, image: "./assets/icone/gitlab.png", title: "Gitlab" },
        { id: 13, image: "./assets/icone/postman.png", title: "Postman" },
        { id: 14, image: "./assets/icone/postgresql.png", title: "PostgreSQL" },
    ];

    // Section service stylée cyberpunk
    const ServiceSection = ({ title, cards }) => (
        <section className="bg-[#0a0a12] border border-[#0ff] rounded-2xl p-8 max-w-5xl w-full mx-auto mb-20 shadow-neon">
            <h2 className="text-cyan-400 text-3xl font-extrabold text-center mb-8 tracking-wide neon-text">
                <ScrollRevealText text={title} />
            </h2>
            <div
                className={`grid gap-8 ${cards.length <= 3 ? "grid-cols-1 md:grid-cols-3" : "grid-cols-2 md:grid-cols-4"
                    }`}
            >
                {cards.map(({ id, image, title }) => (
                    <ScrollRevealCards key={id}>
                        <div className="flex flex-col items-center p-6 bg-[#111122] rounded-xl border border-[#0ff] shadow-lg hover:shadow-neon transform hover:scale-105 transition duration-300">
                            <div className="w-20 h-20 mb-4 flex justify-center items-center bg-white bg-opacity-20 rounded-md p-2 shadow-neon">
                                {/* Logo noir sur fond néon foncé, on ajoute un glow */}
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

    if (isMobile) {
        return (
            <div className="bg-gradient-to-b from-[#0f0f1a] via-[#05050a] to-[#000005] min-h-screen py-12 px-6 text-white">
                <h1 className="text-4xl font-extrabold text-center mb-12 tracking-widest neon-text">
                    Mes Services
                </h1>

                {services.map((service, index) => {
                    let cardsForService;
                    if (index === 0) cardsForService = cards.slice(0, 3);
                    else if (index === 1) cardsForService = cards.slice(3, 6);
                    else cardsForService = cards.slice(6);

                    return (
                        <ServiceSection key={index} title={service} cards={cardsForService} />
                    );
                })}
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-b from-[#0f0f1a] via-[#05050a] to-[#000005] min-h-screen py-16 px-12 flex flex-col items-center text-white">
            <h1 className="text-4xl font-extrabold text-center mb-8 text-customBlue tracking-wide neon-text">
                Mes Services
            </h1>

            {/* Backend & Frontend côte à côte */}
            <div className="flex justify-center gap-12 w-full max-w-7xl mb-20">
                <ServiceSection title={services[0]} cards={cards.slice(0, 3)} />
                <ServiceSection title={services[1]} cards={cards.slice(3, 6)} />
            </div>

            {/* Fullstack centré */}
            <ServiceSection title={services[2]} cards={cards.slice(6)} />
        </div>
    );
}

export default Service;
