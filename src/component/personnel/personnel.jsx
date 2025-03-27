import ScrollRevealText from "../animation/ScrollRevealText";
import ScrollRevealCards from "../animation/ScrollRevealCards";

function Personnel() {
    const ExperienceCard = ({ title, company, description, date, vid, lien }) => {
        return (
            <ScrollRevealCards>
                <div className="bg-gradient-to-b from-black via-customYellow to-customYellow py-12 shadow-lg rounded-lg p-6 border-4 border-customeBlue hover:shadow-xl transition duration-300">
                    <h2 className="text-xl font-bold text-white"> <ScrollRevealText text={title} /> </h2>
                    <p className="text-sm text-white mb-2"> {company}</p>
                    <p className="text-white">{description}</p>
                    <div className="my-4">
                        <video className="w-full h-56 object-cover rounded-lg" autoPlay muted loop>
                            {/* <source src="/src/assets/FI_vid.mp4" type="video/mp4" /> */}
                            <source src={vid} type="video/mp4" />
                            Votre navigateur ne supporte pas la lecture de vidéos.
                        </video>
                    </div>
                    <span className="text-sm text-gray-400 block mt-4">{date}</span>
                    <a
                        href={lien}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block bg-customeBlue text-white font-bold py-2 px-4 rounded-lg hover:bg-black transition duration-300"
                    >
                        Consulter
                    </a>
                </div>
            </ScrollRevealCards>
        );
    };

    const experiences = [
        {
            title: 'Développeur fullstack',
            company: '',
            description: `Géolocalisation des cinémas en France. Développement d'une API REST et gestion des coordonnées en base de données.`,
            date: 'Janvier 2025 - En cours',
            vid: "./assets/Cinema_vid.mp4",
            lien: "https://github.com/MaxenceTh/Cinema"
        },
        {
            title: 'Développeur front',
            company: '',
            description: `Petite application permettant de créer sa propre séance de musculation avec API Ninjas. Apprentissage du framework Vue.js.`,
            date: 'Mars 2025 - En cours',
            vid: "./assets/vue.mp4",
            lien: "https://github.com/MaxenceTh/Gym-Application-in-VueJs"
        },

    ];

    return (
        <section className="bg-gradient-to-b from-customYellow via-black to-black py-12">
            <div className="container mx-auto px-6">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Mes Projets personnels</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
