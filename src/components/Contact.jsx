// Contact.jsx
export default function Contact() {
    return (
        <section
            id="contact"
            className="bg-gray-900 text-white py-16 px-6 sm:px-12 lg:px-24"
        >
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-4">
                    Contact Me
                </h2>
                <p className="text-gray-300 mb-8">
                    Have a project in mind, want to collaborate, or just say hello?
                    Fill out the form below or reach me through my socials.
                </p>

                {/* Contact Form */}
                <form
                    action="https://formspree.io/f/yourFormID" // Replace with your Formspree or backend endpoint
                    method="POST"
                    className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-xl mx-auto"
                >
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            required
                            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition duration-200"
                    >
                        Send Message
                    </button>
                </form>

                {/* Social Links */}
                <div className="mt-8 flex justify-center space-x-6">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400"
                    >
                        <i className="fab fa-github text-2xl"></i>
                    </a>
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400"
                    >
                        <i className="fab fa-linkedin text-2xl"></i>
                    </a>
                    <a
                        href="mailto:your@email.com"
                        className="hover:text-cyan-400"
                    >
                        <i className="fas fa-envelope text-2xl"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}
