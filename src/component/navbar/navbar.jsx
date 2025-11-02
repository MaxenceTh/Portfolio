import { useState } from 'react'


function Navbar() {


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#0f0f1a]/80 backdrop-blur-sm shadow-[0_0_10px_#00FFF7] fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-customPink tracking-wide">
          <a href="#">Maxence Thomas</a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-customBlue font-medium px-4 py-2 ">
          <a href="#cv" className="hover:text-customPink">Cv</a>
          <a href="#experience" className="hover:text-customPink">Expériences</a>
          <a href="#perso" className="hover:text-customPink">Projets personnels</a>
          <a href="#competence" className="hover:text-customPink">Compétences</a>
          <a href="#contact" className="hover:text-customPink">Contact</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-customBlue focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 7.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f0f1a]/90 backdrop-blur shadow-inner">
          <nav className="flex flex-col space-y-4 p-4 text-customBlue font-medium">
            <a href="#cv" className="hover:text-customPink">Cv</a>
            <a href="#experience" className="hover:text-customPink">Expériences</a>
            <a href="#perso" className="hover:text-customPink">Projets personnels</a>
            <a href="#competence" className="hover:text-customPink">Compétences</a>
            <a href="#contact" className="hover:text-customPink">Contact</a>
          </nav>
        </div>
      )}
    </header>


  );
};

export default Navbar;
