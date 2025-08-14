// Skills.jsx
export default function Skills() {
    const skills = [
        { name: "Docker", level: "Expert" },
        { name: "Kubernetes", level: "Advanced" },
        { name: "AWS", level: "Advanced" },
        { name: "Azure", level: "Intermediate" },
        { name: "Terraform", level: "Advanced" },
        { name: "GitHub Actions", level: "Advanced" },
        { name: "Ansible", level: "Intermediate" },
        { name: "Prometheus & Grafana", level: "Intermediate" },
    ];

    return (
        <section
            id="skills"
            className="bg-gray-900 text-white py-16 px-6 sm:px-12 lg:px-24"
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-8">
                    Skills
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition duration-200"
                        >
                            <p className="font-semibold text-white mb-1">{skill.name}</p>
                            <p className="text-sm text-gray-400">{skill.level}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
