import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [subject, setSubject] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const USER_ID = process.env.REACT_APP_USER_ID;

    const handleSubjectInput = (event) => {
        setSubject(event.target.value);
    }

    const handleNameInput = (event) => {
        setName(event.target.value);
    }
    const handlEmailInput = (event) => {
        setEmail(event.target.value);
    }
    const handleMessageInput = (event) => {
        setMessage(event.target.value);
    }

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm(`${SERVICE_ID}`, `${TEMPLATE_ID}`, event.target, `${USER_ID}`)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setSubject("");
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <section id="contact" className="relative">
            <form
                netlify="true"
                name="contact"
                onSubmit={sendEmail}
                className="lg:w-1/3 md:w-1/2 flex flex-col md:mx-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                    Connect With Me
                </h2>
                <p className="leading-relaxed mb-5">
                    Connect with me to talk tech or learn more about me.
                </p>
                <div className="relative mb-4">
                    <label htmlFor="subject" className="leading-7 text-sm text-gray-400">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={handleSubjectInput}
                        value={subject}
                    />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={handleNameInput}
                        value={name}
                    />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={handlEmailInput}
                        value={email}
                    />
                </div>
                <div className="relative mb-4">
                    <label
                        htmlFor="message"
                        className="leading-7 text-sm text-gray-400">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        onChange={handleMessageInput}
                        value={message}
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Submit
                </button>
            </form>
        </section>
    )
}

export default Contact;