import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formIsSent, setFormIsSent] = useState(false);
    const [subject, setSubject] = useState("");
    const [subjectIsTouched, setSubjectIsTouched] = useState(false);
    const enteredSubjectIsValid = subject.trim() !== "";
    const subjectInputIsValid = !enteredSubjectIsValid && subjectIsTouched;

    const [name, setName] = useState("");
    const [nameIsTouched, setNameIsTouched] = useState(false);
    const enteredNameIsValid = name.trim() !== "";
    const nameInputIsValid = !enteredNameIsValid && nameIsTouched;

    const [email, setEmail] = useState("");
    const [emailIsTouched, setEmailIsTouched] = useState(false);
    const enteredEmailIsValid = email.trim() !== "";
    const emailInputIsValid = !enteredEmailIsValid && emailIsTouched;

    const [message, setMessage] = useState("");
    const [messageIsTouched, setMessageIsTouched] = useState(false);
    const enteredMessageIsValid = message.trim() !== "";
    const messageInputIsValid = !enteredMessageIsValid && messageIsTouched;

    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const USER_ID = process.env.REACT_APP_USER_ID;

    const handleSubjectInput = (event) => {
        setSubject(event.target.value);

    }

    const subjectInputBlur = (event) => {
        setSubjectIsTouched(true);
    }

    const handleNameInput = (event) => {
        setName(event.target.value);
    }

    const nameInputBlur = (event) => {
        setNameIsTouched(true);
    }

    const handlEmailInput = (event) => {
        setEmail(event.target.value);
    }

    const emailInputBlur = (event) => {
        setEmailIsTouched(true);
    }

    const handleMessageInput = (event) => {
        setMessage(event.target.value);
    }

    const messageInputBlur = (event) => {
        setMessageIsTouched(true);
    }

    const sendEmail = (event) => {
        event.preventDefault();

        setSubjectIsTouched(true);
        setNameIsTouched(true);
        setEmailIsTouched(true);
        setMessageIsTouched(true);

        if (!enteredSubjectIsValid && !enteredNameIsValid && !enteredEmailIsValid && !enteredMessageIsValid) {
            return
        }

        emailjs.sendForm(`${SERVICE_ID}`, `${TEMPLATE_ID}`, event.target, `${USER_ID}`)
            .then((result) => {
                if (result.text === "OK") {
                }
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setSubject("");
        setName("");
        setEmail("");
        setMessage("");
        setSubjectIsTouched(false);
        setNameIsTouched(false);
        setEmailIsTouched(false);
        setMessageIsTouched(false);
    };

    let formIsValid = false;

    if (enteredSubjectIsValid && enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid) {
        formIsValid = true;
    }

    return (
        <section id="contact" className="relative">
            <form
                name="contact"
                onSubmit={sendEmail}
                className="lg:w-1/3 md:w-1/2 flex flex-col md:mx-auto w-full md:py-8 mt-8 md:mt-0">
                {formIsSent && (
                    <p className="text-md text-green-400 text-center transition delay-150 duration-300 ease-in-out">Message sent!</p>
                )}
                <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font text-center">
                    Connect With Me
                </h2>
                <p className="leading-relaxed mb-5 text-center">
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
                        onBlur={subjectInputBlur}
                    />
                    {subjectInputIsValid && (
                        <p className="text-sm text-red-400">Subject input is not valid. Subject cannot be empty.</p>
                    )}
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
                        onBlur={nameInputBlur}
                    />
                    {nameInputIsValid && (
                        <p className="text-sm text-red-400">Name input is not valid. Name cannot be empty.</p>
                    )}
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
                        onBlur={emailInputBlur}
                    />
                    {emailInputIsValid && (
                        <p className="text-sm text-red-400">Email input is not valid. Email cannot be empty.</p>
                    )}
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
                        onBlur={messageInputBlur}
                    />
                    {messageInputIsValid && (
                        <p className="text-sm text-red-400">Message input is not valid. Your message cannot be empty.</p>
                    )}
                </div>
                <button
                    type="submit"
                    disabled={!formIsValid}
                    className={!formIsValid ?
                        "text-white-800 bg-indigo-100 border-0 py-2 px-6 focus:outline-none rounded text-lg"
                        : "text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"}>
                    Submit
                </button>
            </form>
        </section>
    )
}

export default Contact;