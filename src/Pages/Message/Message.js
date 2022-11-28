import React from 'react';
import useTitle from '../../hooks/useTitle';

const Message = () => {

    useTitle("Send Message")
    return (
        <div>
            <section className="p-6 dark:text-gray-100">
                <form novalidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900 ng-untouched ng-pristine ng-valid">
                    <h2 className="w-full text-3xl font-bold leading-tight text-center">Send Message</h2>
                    <div>
                        <label for="name" className="block mb-1 ml-1">Name</label>
                        <input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
                    </div>
                    <div>
                        <label for="email" className="block mb-1 ml-1">Email</label>
                        <input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
                    </div>
                    <div>
                        <label for="message" className="block mb-1 ml-1">Message</label>
                        <textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow hover:bg-slate-600 hover:text-white bg-slate-300 dark:text-gray-900">Send</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Message;