import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="relative bg-blueGray-200 pt-8 pb-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap text-left lg:text-left">
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-3xl font-semibold text-blueGray-700">Stay Connected!</h4>
                            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                                Follow us on social media to stay updated with our latest catering services and events.
                            </h5>
                            <div className="mt-6 lg:mb-0 mb-6">
                                <button
                                    className="bg-white text-lightBlue-400 shadow-lg font-normal h-13 w-13 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button"
                                    onClick={() => window.open('https://twitter.com', '_blank')}
                                >
                                    <i className="fab fa-twitter"></i>
                                </button>
                                <button
                                    className="bg-white text-lightBlue-600 shadow-lg font-normal h-13 w-13 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button"
                                    onClick={() => window.open('https://facebook.com', '_blank')}
                                >
                                    <i className="fab fa-facebook-square"></i>
                                </button>
                                <button
                                    className="bg-white text-pink-400 shadow-lg font-normal h-13 w-13 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button"
                                    onClick={() => window.open('https://instagram.com', '_blank')}
                                >
                                    <i className="fab fa-instagram"></i>
                                </button>
                                <button
                                    className="bg-white text-blueGray-800 shadow-lg font-normal h-13 w-13 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button"
                                    onClick={() => window.open('https://github.com', '_blank')}
                                >
                                    <i className="fab fa-github"></i>
                                </button>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-4/12 px-4 ml-auto">
                                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Quick Links</span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                to="/about"
                                            >
                                                About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                to="/services"
                                            >
                                                Our Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                to="/about"
                                            >
                                                Contact Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                to="/about"
                                            >
                                                Testimonials
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Resources</span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                to="/about"
                                            >
                                                FAQ
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                to="/about"
                                            >
                                                Terms & Conditions
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                to="/about"
                                            >
                                                Privacy Policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                to="/about"
                                            >
                                                Support
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-blueGray-300" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-blueGray-500 font-semibold py-1">
                                Copyright © {new Date().getFullYear()} Cater Ease. All rights reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;