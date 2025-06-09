import React, { useState } from 'react';
import Selecting from './Selecting';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleLoginClick = () => {
        navigate('/login'); // Navigate to the Login component
    };

    return (
        <nav className="border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                <Link to="/" className="flex items-center rtl:space-x-reverse">
                    <img src="logo.png" alt="Logo" style={{ height: "80px", width: "100px" }} />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">Cater Ease</span>
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse text-white bg-black rounded-2xl">
                    <button
                        type="button"
                        onClick={handleLoginClick} // Navigate to Login
                        className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
                    >
                        Log In
                    </button>
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-cta"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`items-center justify-between ${isMenuOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`}
                    id="navbar-cta"
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <Link
                                to="/"
                                className="block py-2 px-3 my-1.5 md:p-0 text-gray-900 rounded-sm"
                                aria-current="page"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="block py-2 px-3 my-1.5 md:p-0 text-gray-900 rounded-sm"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services"
                                className="block py-2 my-1.5 px-3 md:p-0 text-gray-900 rounded-sm"
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link

                                className="block py-2 px-3 md:p-0 text-slate-100 bg-transparent rounded-sm"
                            >
                                <Selecting />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;