import React from "react";
import { Link } from "react-router-dom";

function Home() {
return (
    <>
        <section className="bg-white py-20">
            <div className="container mx-auto flex flex-col items-center justify-center text-center">
                <h1 className="text-5xl font-bold mb-4">Welcome to SkillzSyncer</h1>
                <p className="text-lg mb-8">
                    Discover SkillzSyncer: a Skill-Building and Project Collaboration Network!
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
                    Get Started
                </button>
            </div>
        </section>

        <section className="py-20">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <div className="mb-4">
                            <svg
                                className="w-16 h-16 text-blue-600 mx-auto"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2a10 10 0 11-9.95 11H2v9.87a1 1 0 001 1h18a1 1 0 001-1V13h-.05A10 10 0 0112 2zm5 17H7v-2h10v2zm0-4H7v-2h10v2zm0-4H7V9h10v2z"></path>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">User Profiles</h3>
                        <p className="text-gray-600">
                        Create and customize your profile with skills, bio, and experience to network with other hackers.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <div className="mb-4">
                            <svg
                                className="w-16 h-16 text-blue-600 mx-auto"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 3h14a1 1 0 011 1v16a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1zm3 14h8v2H8v-2zm0-4h8v2H8v-2zm0-4h8v2H8V9z"></path>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Project Listings</h3>
                        <p className="text-gray-600">
                        Post and search for projects to collaborate on.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <div className="mb-4">
                            <svg
                                className="w-16 h-16 text-blue-600 mx-auto"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2a10 10 0 11-9.95 11H2v9.87a1 1 0 001 1h18a1 1 0 001-1V13h-.05A10 10 0 0112 2zm5 17H7v-2h10v2zm0-4H7v-2h10v2zm0-4H7V9h10v2z"></path>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Matching System</h3>
                        <p className="text-gray-600">
                        Find projects that match your skills and interests.
                
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-blue-600 py-20">
            <div className="container mx-auto text-center text-white">
                <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-lg mb-8">
                    Sign up now and start your journey with SkillzSyncer.
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-100 transition duration-300">
                    Sign Up
                </button>
            </div>
        </section>

        <footer className="bg-gray-800 py-8 text-gray-400">
            <div className="container mx-auto text-center">
                <p>&copy; 2024 SkillzSyncer. All rights reserved.</p>
            </div>
        </footer>
    </>
);
}

export default Home;