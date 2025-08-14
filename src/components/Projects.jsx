// Projects.jsx
export default function Projects() {
    const projects = [
        {
            name: "Automated Parking System",
            description:
                "Built a cloud-connected IoT parking system using FastAPI, ESP32, and Kubernetes with automated scaling and monitoring.",
            tech: ["FastAPI", "ESP32", "Kubernetes", "Docker"],
            github: "https://github.com/mmsalmanfaris/Automated-Parking-System",
            live: "#",
        },
        {
            name: "CI/CD Pipeline Setup",
            description:
                "Designed and implemented a complete CI/CD pipeline using GitHub Actions and Terraform for a multi-service application.",
            tech: ["GitHub Actions", "Terraform", "Docker", "AWS"],
            github: "https://github.com/mmsalmanfaris/CI-CD-Pipeline",
            live: "#",
        },
        {
            name: "Cloud Resource Monitor",
            description:
                "Developed a full-stack system monitoring tool with FastAPI backend and React frontend for real-time system metrics visualization.",
            tech: ["FastAPI", "React", "Tailwind CSS", "Prometheus"],
            github: "https://github.com/mmsalmanfaris/System-Monitor",
            live: "#",
        },
    ];

    return (
        <section
            id="projects"
            className="bg-gray-900 text-white py-16 px-6 sm:px-12 lg:px-24"
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-8">
                    Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-200 flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {project.name}
                                </h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-gray-700 px-2 py-1 rounded text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-between mt-auto">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-400 hover:underline text-sm"
                                >
                                    GitHub
                                </a>
                                {project.live !== "#" && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-cyan-400 hover:underline text-sm"
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
