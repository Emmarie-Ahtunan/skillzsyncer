import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="bg-gray-900">
                <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="md:w-1/2">
                            <h1 className="text-4xl font-bold text-white mb-4">
                                Welcome to SkillzSyncer
                            </h1>
                            <p className="text-gray-300 text-lg mb-6">
                                The ultimate platform to showcase your skills and connect with
                                like-minded professionals.
                            </p>
                            <Link
                                to="/signup"
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                            >
                                Get Started
                            </Link>
                        </div>
                        <div className="md:w-1/2">
                            <img
                                src="/path/to/hero-image.jpg"
                                alt="Hero Image"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
