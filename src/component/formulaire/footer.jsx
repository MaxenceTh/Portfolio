import React, { useState } from "react";

function Footer() {



    return (
        <>
            <div className="bg-black w-full py-16" id="contact">
                <div className="max-w-4xl mx-auto px-6 bg-gradient-to-br rounded-lg ">
                    <h2 className="text-4xl font-extrabold text-center mb-8 text-[#00FFF7] tracking-wide neon-text">
                        CONTACTEZ-MOI
                    </h2>
                    <p className="text-center text-customBlue text-xl font-mono mb-8 select-all cursor-pointer hover:text-customPink transition duration-300">
                        thomas.maxence141v2@gmail.com
                    </p>
                    <div className="flex justify-center items-center gap-8">
                        <a
                            href="https://www.linkedin.com/in/maxence-thomas-a03b57298/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative w-24 h-24 rounded-full bg-black/40 backdrop-blur-md flex justify-center items-center cursor-pointer transition-transform duration-300 hover:scale-110"
                        >
                            <img
                                src="./assets/icone/logo-linkedin.webp"
                                alt="LinkedIn"
                                className="w-16 h-16 object-contain filter brightness-150 transition-shadow duration-300 group-hover:drop-shadow-[0_0_10px_#00FFF7]"
                            />
                            {/* Glow fixe autour */}
                            <div className="absolute inset-0 rounded-full border border-customBlue opacity-30 animate-pulse"></div>
                        </a>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Footer;