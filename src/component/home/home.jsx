import { useState } from 'react'
import LetterByLetter from '../animation/LetterByLetter';

function Home() {


    return (

        <>

            <section className="bg-[url('./assets/fond2.png')] bg-cover bg-center h-screen relative text-white">
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
      bg-[#0f0f1a]/80 backdrop-blur-sm p-6 sm:p-10 rounded-2xl text-center 
      w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] max-w-xl shadow-[0_0_30px_#00FFF7] border border-customBlue"
                >
                    <h1 className="text-3xl sm:text-4xl font-bold text-customBlue">Ingénieur full stack</h1>
                    <p className="text-base sm:text-lg text-gray-300 mt-2">
                         Actuellement en {" "}
                         <span className="underline underline-offset-4 decoration-cyan-400 font-semibold">
                           recherche active d'un poste
                        </span>, je continue à développer mes compétences à travers des projets personnels.
                        Passionné de sport, et plus particulièrement de badminton, j’aime créer des projets en lien avec mes centres d’intérêt.

                    </p>

                    <div className="flex items-center justify-center gap-2 mt-6">
                        <a
                            href="https://github.com/MaxenceTh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-[#1f1f2e] text-customPink px-4 py-2 rounded-full hover:bg-[#2c2c3f] transition shadow-md"
                        >
                            <img src="./assets/icone/github-mark-white.png" alt="GitHub" className="w-6 h-6" />
                            <span className="font-medium">Mon GitHub</span>
                        </a>
                    </div>
                </div>

                {/* Texte en bas */}
                {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                    <h1 className="text-center font-extrabold text-[#FF00F7] drop-shadow-[0_0_10px_#FF00F7] text-4xl sm:text-6xl md:text-8xl lg:text-9xl">
                        <LetterByLetter />
                    </h1>
                </div> */}

            </section>



        </>
    );

};

export default Home;
