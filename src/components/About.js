import React from "react";

const About = () => {
    return (
        <section id="about" className="rounded-b-sm bg-gray-900">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="z-1 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        About Me
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I'm currently a computer science major at Cal State East Bay learning C++ and Python. I decided to pursue a degree in computer science shortly after
                        I completed a coding bootcamp at FullStack Academy. I learned Javascript and Javascript technologies like React, Node, Express, as well
                        as PSQL.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                            Contact Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Projects
                        </a>
                    </div>
                </div>
                <div className="z-1 md:w-2/5 w-1/2">
                    <img
                        className="object-cover object-center rounded-full"
                        alt="carlos escamilla"
                        src="./linkedin.jpeg"
                    />
                </div>
            </div>
        </section>
    )
}

export default About;