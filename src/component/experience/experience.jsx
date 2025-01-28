import ScrollRevealText from "../animation/ScrollRevealText";
import ScrollRevealCards from "../animation/ScrollRevealCards";

function Experience() {
    const ExperienceCard = ({ title, company, description, date, vid }) => {
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
            </div>
            </ScrollRevealCards>
        );
    };

    const experiences = [
        {
            title: 'Développeur Fullstack',
            company: 'Finistère Assurance',
            description: `Intégration d'outils de correction d'adresses postales et géolocalisation dans une application.`,
            date: 'Avril 2024 - Juin 2024',
            vid: "./assets/FI_vid.mp4",
        },
        {
            title: 'Développeur IA',
            company: 'MerConcept',
            description: 'Estimation de la hauteur du trimaran SVR Lazartigue par réseau de neurones.',
            date: 'Décembre 2023 - Avril 2024',
            vid: "./assets/merConcept_vid.mp4"
        },
        {
            title: `Développeur d'application`,
            company: 'UBO',
            description: `Ajout de fonctionnalité d'aide à la décision pour le routage en mer.`,
            date: 'Mai 2023 - Juin 2023',
            vid: "./assets/Routage_dev.mp4"
        },
    ];

    return (
        <section className="bg-gradient-to-b from-customYellow via-black to-black py-12">
            <div className="container mx-auto px-6">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Mes Expériences</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    );
}

export default Experience;
