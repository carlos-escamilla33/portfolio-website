import React from 'react';
import { FlagIcon } from '@heroicons/react/solid';
import { achievements } from '../data';

const Timeline = () => {
    return (
        <section id="timeline">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <FlagIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        My Journey into Programming
                    </h1>
                </div>
                <ol className="relative border-l border-gray-200 dark:border-gray-700 container px-5 py-10 mx-auto">
                    {
                        achievements.map((achievements) => (
                            <li className="mb-10 ml-5" key={achievements.date}>
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{achievements.date}</time>
                                <h3 className="text-lg font-semibold text-gray-600 dark:text-white">{achievements.subtitle}</h3>
                                <p className="mb-4 text-base font-normal text-gray-700 dark:text-gray-400">{achievements.description}</p>
                            </li>
                        ))
                    }
                </ol>
            </div>
        </section>
    )
}

export default Timeline;