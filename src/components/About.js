import React from "react";

const About = () => {
    return (
        <section id="about">
            <div className="container mx-auto px-10 py-20 md:flex flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-41 text-3xl mb-4 font-medium text-white">
                        Hi, I'm Carlos
                        <br className="hidden lg:inline-block" /> I enjoy building apps.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I am passionate about programming and learning about data structures/algorithms.
                        Learning and improving are what I set out to do everyday. My goal is to be the best programmer I can be.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                        >
                            Connect with me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
                        >
                            See My Projects
                        </a>
                    </div>
                    <div className="mt-4 lg:max-w-lg lg:w-full">
                        <img
                            className="object-cover object-center rounded-full"
                            alt="carlos escamilla"
                            src="./linkedin.jpeg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;