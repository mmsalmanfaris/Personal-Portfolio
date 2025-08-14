// About.jsx
export default function About() {
    return (
        <section
            id="about"
            className="bg-gray-900 text-white py-16 px-6 sm:px-12 lg:px-24"
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                    <img
                        src="/profile.jpg" // replace with your image path
                        alt="Salman Faris"
                        className="w-48 h-48 rounded-full border-4 border-cyan-400 shadow-lg object-cover"
                    />
                </div>

                {/* Text Content */}
                <div className="flex-1">
                    <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-4">
                        About Me
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        I’m <span className="text-white font-semibold">Salman Faris</span>,
                        a passionate <span className="text-cyan-400">DevOps Engineer & SRE</span>
                        who loves building scalable, automated, and resilient systems.
                        My expertise includes cloud infrastructure, CI/CD pipelines,
                        container orchestration, and monitoring solutions.
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        I enjoy turning complex infrastructure problems into elegant
                        automated workflows, enabling faster deployments and more
                        reliable systems for businesses.
                    </p>

                    {/* Quick Facts */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">
                            <p className="text-2xl font-bold text-cyan-400">3+</p>
                            <p className="text-sm text-gray-400">Years Experience</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">
                            <p className="text-2xl font-bold text-cyan-400">10+</p>
                            <p className="text-sm text-gray-400">Projects Completed</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">
                            <p className="text-2xl font-bold text-cyan-400">5+</p>
                            <p className="text-sm text-gray-400">Certifications</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
