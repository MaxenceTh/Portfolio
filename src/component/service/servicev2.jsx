import ScrollRevealText from "../animation/ScrollRevealText";
import SlideInElements from "../animation/SlideInDivs";
import { useMediaQuery } from "react-responsive";

function Service() {

    // Détection si l'écran est mobile (max-width: 768px)
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


    if (!isMobile) {
        return (
            <>
 <div className="bg-customYellow">
    <h1 className="bg-customYellow text-3xl font-bold text-center mb-8 text-gray-800">Mes Services</h1>
    
    {/* Services 1 et 2 en ligne */}
    <div className="flex flex-row justify-center items-start gap-20 px-16">
        {/* Service 1 */}
        <div className="flex flex-col items-center w-full">
            <div className="bg-black shadow-md p-6 border-2 border-customeBlue text-center mb-4 w-full">
                <p className="text-white font-semibold text-xl"> <ScrollRevealText text={services[0]} /> </p>
            </div>
            <div className="grid grid-cols-3 gap-8 w-full">
                {cards.slice(0, 3).map((card) => (
                    <div key={card.id} className="flex flex-col items-center space-y-4">
                        <img src={card.image} alt={card.title} className="w-32 h-32 object-cover shadow-lg transform transition-transform duration-300 hover:scale-125" />
                        <h2 className="text-lg font-semibold text-gray-700">{card.title}</h2>
                    </div>
                ))}
            </div>
        </div>

        {/* Service 2 */}
        <div className="flex flex-col items-center w-full">
            <div className="bg-black shadow-md p-6 border-2 border-customeBlue text-center mb-4 w-full">
                <p className="text-white font-semibold text-xl"> <ScrollRevealText text={services[1]} /> </p>
            </div>
            <div className="grid grid-cols-3 gap-8 w-full">
                {cards.slice(3, 6).map((card) => (
                    <div key={card.id} className="flex flex-col items-center space-y-4">
                        <img src={card.image} alt={card.title} className="w-32 h-32 object-cover shadow-lg transform transition-transform duration-300 hover:scale-125" />
                        <h2 className="text-lg font-semibold text-gray-700">{card.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    </div>

    {/* Service 3 centré en dessous */}
    <div className="flex flex-col items-center mt-16">
        <div className="bg-black shadow-md p-6 border-2 border-customeBlue text-center w-full max-w-2xl">
            <p className="text-white font-semibold text-xl"> <ScrollRevealText text={services[2]} /> </p>
        </div>
        <div className="grid grid-cols-4 gap-8 mt-4">
            {cards.slice(6, 14).map((card) => (
                <div key={card.id} className="flex flex-col items-center space-y-4">
                    <img src={card.image} alt={card.title} className="w-32 h-32 object-cover shadow-lg transform transition-transform duration-300 hover:scale-125" />
                    <h2 className="text-lg font-semibold text-gray-700">{card.title}</h2>
                </div>
            ))}
        </div>
    </div>
</div>





            </>
        );
    } else {

        return (
            <>
                <div className="bg-customYellow">
                    <h1 className="bg-customYellow text-3xl font-bold text-center mb-8 text-gray-800">Mes Services</h1>
                    <div className="flex flex-col md:flex-row items-start justify-center px-12 py-16 max-w-7xl mx-auto space-y-12 md:space-y-0 md:space-x-12">



                        {/* Services Section */}
                        <div className="flex-1 space-y-6 pl-8">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-black shadow-md p-6 border-2 border-customeBlue text-center"
                                >
                                    <p className="text-white font-semibold text-xl"> <ScrollRevealText text={service} />  </p>
                                </div>
                            ))}
                        </div>


                    </div>

                    {/* <SlideInElements leftElement={
                    <p className="text-gray-700 font-semibold text-xl text-center">
                        Gestion des coordonnées géographiques
                    </p>
                }
                    rightElement={
                        <div className="w-full flex justify-center">
                            <img
                                src="./assets/map.webp"
                                alt="Illustration"
                                className="w-3/4 md:w-2/3 lg:w-1/2 h-auto max-h-96 object-cover rounded-3xl shadow-lg border-2 border-customeBlue"
                            />
                        </div>
                    }>

                </SlideInElements> */}

                </div >

            </>
        )

    }
}

export default Service;