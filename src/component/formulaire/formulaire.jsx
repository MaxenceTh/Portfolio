import React, { useState } from "react";

function Formulaire() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data submitted:", formData);
        // Ajouter la logique pour envoyer les données à une API ou un serveur
    };

    return (
        <>
            <div className="bg-black">
                {/* <img src="/src/assets/joueur-de-badminton.jpg" alt="" /> */}
                <div className="max-w-md mx-auto  shadow-md p-6 ">
                    <h2 className="text-2xl text-center font-bold mb-4 text-customYellow">Contactez-moi</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-customYellow"
                            >
                                Nom
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="bg-transparent text-white mt-1 block w-full p-2 border-2 border-customeBlue rounded-md focus:outline-none focus:ring-blue-500 focus:border-customYellow"
                                placeholder="Entrez votre nom"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-customYellow"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="bg-transparent text-white mt-1 block w-full p-2 border-2 border-customeBlue rounded-md focus:outline-none focus:ring-blue-500 focus:border-customYellow"
                                placeholder="Entrez votre email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-customYellow"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="bg-transparent text-white mt-1 block w-full p-2 border-2 border-customeBlue rounded-md focus:outline-none focus:ring-blue-500 focus:border-customYellow"
                                placeholder="Entrez votre message"
                                rows="4"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-customYellow text-black py-2 px-4 rounded-md hover:bg-customeBlue focus:outline-none focus:ring-2 focus:border-customYellow"
                        >
                            Envoyer
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Formulaire;