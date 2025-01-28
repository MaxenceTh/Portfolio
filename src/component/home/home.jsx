import { useState } from 'react'
import LetterByLetter from '../animation/LetterByLetter';

function Home() {


    return (

        <>

            {/* <div className="bg-[url('./assets/fond.jpg')] bg-cover bg-center h-screen flex items-center justify-center text-white"></div>

        <h1 className='text-center text-9xl font-extrabold'> Portfolio </h1> */}

            <section
                className="bg-[url('./assets/fond.jpg')] bg-cover bg-center h-screen relative"
            >


                {/* Texte à gauche */}
                <div
                    className="absolute left-1/2 top-[30%] transform -translate-x-1/2 -translate-y-1/2 
             md:left-72 md:translate-x-0 bg bg-opacity-50 backdrop-blur-sm p-6 
             rounded-lg text-white text-center md:text-left"
                >
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Recherche d'emploi</h1>
                    <p className="mt-2 text-base md:text-lg">d'une première expérience</p>
                </div>

                {/* Texte à droite */}
                <div
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
             md:right-72 md:left-auto md:translate-x-0 text-center md:text-right 
             bg bg-opacity-50 backdrop-blur-sm p-6 rounded-lg text-white"
                >
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Développeur junior</h1>
                    <p className="mt-2 text-base md:text-lg">web / logiciel / full-stack</p>
                </div>

                {/* Texte en bas */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                    <h1 className="text-center font-extrabold text-customeBlue 
                  text-4xl sm:text-6xl md:text-8xl lg:text-9xl">
                        <LetterByLetter />
                    </h1>
                </div>
            </section>


        </>
    );

};

export default Home;
