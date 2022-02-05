import React from 'react';
import { DesktopComputerIcon } from '@heroicons/react/solid';

const Timeline = () => {
    return (
        <div className='container mx-auto px-6'>
            <div>
                <DesktopComputerIcon className="w-24 h-24 rounded-full shadow-md border-4 border-white text-white"/>
            </div>
            <div className='relative p-2'>
                <div className="absolute inset-0 left-10 h-4 w-4 transform rotate-45 bg-white" aria-hidden="true"></div>
                <div className='bg-white p-6 rounded-md shadow-md'>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                </div>
            </div>
        </div>
    )
}

export default Timeline;