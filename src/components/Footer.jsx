
function Footer() {
    return (
        <footer className="bg-dark-gray border mt-32 sm:mt-10 pt-10">
            <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">About</div>
                    <p className="my-3 block text-gray-300 text-sm font-medium">We are a team of professionals who strive to provide high-quality digital products to our customers.</p>
                </div>

                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">Quick Links</div>
                    <ul className="my-3">
                        <li><a href="#" className="text-gray-300 text-sm hover:text-gray-500">Home</a></li>
                        <li><a href="#" className="text-gray-300 text-sm hover:text-gray-500">About Us</a></li>
                        <li><a href="#" className="text-gray-300 text-sm hover:text-gray-500">Services</a></li>
                        <li><a href="#" className="text-gray-300 text-sm hover:text-gray-500">Contact</a></li>
                    </ul>
                </div>

                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">Follow Us</div>
                    <div className="flex mb-4">
                        <a href="#" className="text-gray-300 hover:text-gray-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                className="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    d="M21.3 6.5c-.3-.3-.7-.4-1.1-.2-2.3.9-4.9.9-7.2 0-.4-.2-.8-.1-1.1.2l-2.7 2.7c-.3.3-.4.7-.2 1 .9 2.3.9 4.8 0 7.1-.2.3-.1.7.2 1l2.7 2.7c.3.3.7.4 1.1.2 2.3-.9 4.9-.9 7.2 0 .4.2.8.1 1.1-.2l2.7-2.7c.3-.3.4-.7.2-1-.9-2.3-.9-4.9 0-7.2.3-.4.2-.8-.2-1l-2.8-2.8z">
                                </path>
                            </svg>
                        </a>
                        <a href="#" className="ml-4 text-gray-300 hover:text-gray-500">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round"
                                strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z">
                                </path>
                                <circle cx="12" cy="12" r="9"></circle>
                                <line x1="9" y1="12" x2="15" y2="12"></line>
                                <line x1="9" y1="12" x2="15" y2="12"></line>
                                <line x1="12" y1="9" x2="12" y2="15"></line>
                            </svg>
                        </a>
                        <a href="#" className="ml-4 text-gray-300 hover:text-gray-500">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round"
                                strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z">
                                </path>
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <line x1="16" y1="11" x2="16" y2="11"></line>
                                <line x1="16" y1="15" x2="16" y2="15"></line>
                                <line x1="12" y1="13" x2="12" y2="13"></line>
                                <line x1="12" y1="11" x2="12" y2="11"></line>
                                <line x1="12" y1="15" x2="12" y2="15"></line>
                                <line x1="8" y1="11" x2="8" y2="11"></line>
                                <line x1="8" y1="15" x2="8" y2="15"></line>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="pt-2">
                <div className="flex pb-5 px-3 m-auto pt-5
                    border-t border-gray-500 text-gray-400 text-sm
                    flex-col md:flex-row max-w-6xl">
                    <div className="mt-2">
                        © {new Date().getFullYear()} DigitalStore Inc. All rights reserved.
                    </div>

                    <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                        <a href="#" className="w-6 mx-1">
                            <i className="uil uil-facebook-f"></i>
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <i className="uil uil-twitter-alt"></i>
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <i className="uil uil-youtube"></i>
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <i className="uil uil-linkedin"></i>
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <i className="uil uil-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
