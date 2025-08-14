function Cv() {

    return (
        <>
            <div className="h-[4px] bg-gradient-to-r from-customBlue via-customPink to-customBlue animate-pulse shadow-[0_0_10px_#FF00F7]" />


            <div className="relative h-screen overflow-hidden">
                {/* Vidéo de fond */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover brightness-[0.6] contrast-125"
                    src="./assets/cv_vid.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 flex flex-col items-center justify-center">
                    {/* Conteneur du texte */}
                    {/* <div className="text-center text-white z-10">
                        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
                            Bonjour,
                        </h1>
                        <p className="text-lg text-gray-300 m:text-xl mb-8 max-w-3xl mx-auto">
                            je suis ingénieur logiciel full stack, prêt à relever de nouveaux défis. 
                            Actuellement en recherche d’opportunités professionnelles, je continue à développer mes compétences à travers des projets personnels. 
                            Passionné de sport, et plus particulièrement de badminton, j’aime créer des projets en lien avec mes centres d’intérêt.
                        </p>
                    </div> */}


                    {/* Bouton CV */}
                    <a
                        href="./assets/cv.pdf"
                        download="Mon_CV.pdf"
                        className="relative px-8 py-4 text-customBlue text-lg sm:text-xl font-bold rounded-full border-2 border-customBlue
        hover:text-customPink hover:border-customPink transition duration-300
        shadow-[0_0_20px_#00FFF7] hover:shadow-[0_0_30px_#FF00F7]"
                    >
                        <span className="z-10 relative tracking-wide uppercase">
                            Curriculum vitæ
                        </span>
                        {/* Glow animation (optionnelle) */}
                        <span className="absolute inset-0 animate-pulse bg-[#00FFF7]/10 rounded-full blur-sm"></span>
                    </a>
                </div>
            </div>

        </>
    );
};

export default Cv;