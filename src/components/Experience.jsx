// Experience.jsx
export default function Experience() {
    const experienceData = [
        {
            title: "DevOps Engineer",
            company: "Tech Solutions Pvt Ltd",
            period: "Jan 2023 – Present",
            details: [
                "Implemented CI/CD pipelines using GitHub Actions, reducing deployment time by 40%.",
                "Managed Kubernetes clusters on AWS EKS with automated scaling and monitoring.",
                "Created Infrastructure as Code with Terraform for multi-cloud deployments."
            ],
        },
        {
            title: "Cloud & Infrastructure Intern",
            company: "CloudX Labs",
            period: "Aug 2022 – Dec 2022",
            details: [
                "Worked on containerizing microservices using Docker.",
                "Automated server provisioning using Ansible.",
                "Monitored systems with Prometheus and Grafana."
            ],
        },
        {
            title: "Freelance DevOps Consultant",
            company: "Self-Employed",
            period: "2021 – 2022",
            details: [
                "Helped small businesses migrate workloads to AWS and Azure.",
                "Set up secure CI/CD pipelines for web applications.",
                "Optimized cloud infrastructure costs by 25%."
            ],
        },
    ];

    return (
        <section
            id="experience"
            className="bg-gray-900 text-white py-16 px-6 sm:px-12 lg:px-24"
        >
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-8">
                    Experience
                </h2>

                <div className="relative border-l-2 border-cyan-500 pl-6 space-y-10">
                    {experienceData.map((exp, index) => (
                        <div key={index} className="relative">
                            {/* Timeline Dot */}
                            <span className="absolute -left-3 top-1 w-5 h-5 bg-cyan-500 rounded-full border-2 border-gray-900"></span>

                            {/* Experience Card */}
                            <div className="bg-gray-800 p-5 rounded-lg shadow hover:shadow-lg transition">
                                <h3 className="text-xl font-semibold text-white">
                                    {exp.title}
                                </h3>
                                <p className="text-sm text-cyan-400">{exp.company}</p>
                                <p className="text-xs text-gray-400 mb-3">{exp.period}</p>
                                <ul className="list-disc list-inside text-gray-300 space-y-1">
                                    {exp.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
