import React from 'react';

const Contact = () => {
    return (
        <div>
            <section className="">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Us</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
                        Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
                    </p>
                    {/* Form with mailto */}
                    <form
                        action="mailto:contactlearnersway@gmail.com"
                        method="POST"
                        encType="text/plain"
                        className="space-y-8"
                    >
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                placeholder="name@cater.com"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                                placeholder="Let us know how we can help you"
                                required
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
                                Your message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                                placeholder="Leave a comment..."
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;