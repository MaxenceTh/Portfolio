import { useState } from 'react'


function Navbar() {

  
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
      <header className="bg-customYellow shadow-md fixed w-full z-10">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">
            <a href="#">Portfolio</a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium border border-customeBlue rounded-lg px-4 py-2 hover:bg-customeBlue">
            {/* <a href="#home" className="hover:text-blue-500">Home</a>
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a> */}
            <a href="#contact" className="hover:text-customeBlue-500">Contact</a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
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
          <div className="md:hidden bg-customYellow shadow-md">
            <nav className="flex flex-col space-y-4 p-4 text-gray-700 font-medium">
              <a href="#contact" className="hover:text-blue-500">Contact</a>
            </nav>
          </div>
        )}
      </header>
    );
  };

  export default Navbar;
