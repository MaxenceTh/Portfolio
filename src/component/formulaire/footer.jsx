import React, { useState } from "react";

function Footer() {



    return (
        <>
            <div className="bg-black mb-2" id="contact">
                {/* <img src="/src/assets/joueur-de-badminton.jpg" alt="" /> */}
                <div className="max-w-md mx-auto  shadow-md p-6 ">
                    <h2 className="text-2xl text-center font-bold mb-4 text-customYellow">Contactez-moi</h2>
                    <p className="text-center text-customeBlue">thomas.maxence141v2@gmail.com</p>
                </div>
                <div className="flex justify-center items-center gap-4">
                    <a href="https://www.linkedin.com/in/maxence-thomas-a03b57298/" target="_blank" rel="noopener noreferrer">
                        <img src="./assets/icone/logo-linkedin.webp" alt="" className="w-32 h-32 object-contain" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Footer;