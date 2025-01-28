function Cv() {

    return (
        <>

            <div className="relative  h-screen overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    // src="/src/assets/cv_vid.mp4"
                    src= "./assets/cv_vid.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>
                {/* Optionnel : Overlay pour texte ou contenu */}
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col items-center justify-center">
                    <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">Cliquez ici</h1>
                    <a
                        href="./assets/cv.pdf" // Remplacez par le chemin réel de votre fichier PDF
                        download="Mon_CV.pdf" // Nom par défaut du fichier lors du téléchargement
                        className="bg-transparent text-white text-lg px-6 py-2 rounded border-4 border-customeBlue hover:border-customYellow"
                    >
                        Curriculum vitæ
                    </a>
                </div>

            </div>

        </>
    );
};

export default Cv;