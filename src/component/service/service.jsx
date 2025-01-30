import ScrollRevealText from "../animation/ScrollRevealText";
import SlideInElements from "../animation/SlideInDivs";
import { useMediaQuery } from "react-responsive";

function Service() {

    // Détection si l'écran est mobile (max-width: 768px)
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    const services = [
        "Développeur Web",
        "Développeur Backend",
        "Développeur Frontend",
        "Développeur Full Stack",
    ];


    const cards = [
        { id: 1, image: "./assets/icone/react.png", title: "React" },
        { id: 2, image: "./assets/icone/angular.webp", title: "Angular" },
        { id: 3, image: "./assets/icone/VueJS.webp", title: "Vue" },
        { id: 4, image: "./assets/icone/html.webp", title: "HTML" },
        { id: 5, image: "./assets/icone/css.webp", title: "CSS" },
        { id: 6, image: "./assets/icone/Tailwind_CSS.webp", title: "Tailwind" },
        { id: 7, image: "./assets/icone/Spring_Boot.webp", title: "Spring" },
        { id: 8, image: "./assets/icone/postgresql.webp", title: "PostgreSQL" },
        { id: 9, image: "./assets/icone/postgis.png", title: "PostGIS" },
    ];


    if (!isMobile) {
        return (
            <>
                <div className="bg-customYellow">
                    <h1 className="bg-customYellow text-3xl font-bold text-center mb-8 text-gray-800">Mes Services</h1>
                    <div className="flex flex-col md:flex-row items-start justify-center px-12 py-16 max-w-full mx-auto space-y-12 md:space-y-0 md:space-x-12">
                        {/* Cards Section */}
                        <div className="flex-1">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                {cards.slice(0, 4).map((card) => (
                                    <div key={card.id} className="flex flex-col items-center space-y-4">
                                        <img src={card.image} alt={card.title} className="w-32 h-32 object-cover shadow-lg transform transition-transform duration-300 hover:scale-125" />
                                        <h2 className="text-lg font-semibold text-gray-700">{card.title}</h2>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                                {cards.slice(4, 7).map((card) => (
                                    <div key={card.id} className="flex flex-col items-center space-y-4">
                                        <img src={card.image} alt={card.title} className="w-32 h-32 object-contain rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-125 " />
                                        <h2 className="text-lg font-semibold text-gray-700">{card.title}</h2>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                                {cards.slice(7, 9).map((card) => (
                                    <div key={card.id} className="flex flex-col items-center space-y-4">
                                        <img src={card.image} alt={card.title} className="w-32 h-32 object-cover rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-125" />
                                        <h2 className="text-lg font-semibold text-gray-700">{card.title}</h2>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Timeline Section */}
                        <div className="relative flex flex-col items-center">
                            {/* Vertical Line */}
                            <div className="absolute h-full w-2 bg-customeBlue"></div>
                            {/* Timeline Points */}
                            {services.map((_, index) => (
                                <div
                                    key={index}
                                    className="w-6 h-6 bg-customeBlue rounded-full z-10 border-4 border-black my-6"
                                ></div>
                            ))}
                        </div>

                        {/* Services Section */}
                        <div className="flex-1 space-y-6 pl-8">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-black shadow-md p-6 border-2 border-customeBlue text-center"
                                >
                                    <p className="text-white font-semibold text-xl"> <ScrollRevealText text={service} />  </p>
                                    {/* <p className="text-white">toto</p> */}
                                </div>
                            ))}
                        </div>


                    </div>

                    <SlideInElements leftElement={
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

                    </SlideInElements>

                </div >

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

                <SlideInElements leftElement={
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

                </SlideInElements>

            </div >

            </>
        )

    }
}

export default Service;