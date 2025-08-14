// Education.jsx
export default function Education() {
    const educationData = [
        {
            title: "BSc in Computer Science",
            institution: "University of Colombo",
            year: "2020 - 2023",
            details: [
                "Focused on Cloud Computing, DevOps, and Software Engineering",
                "Graduated with First Class Honors",
            ],
        },
        {
            title: "Certified Kubernetes Administrator (CKA)",
            institution: "The Linux Foundation",
            year: "2024",
            details: ["Hands-on expertise in Kubernetes deployment, scaling, and security"],
        },
        {
            title: "AWS Certified Solutions Architect – Associate",
            institution: "Amazon Web Services",
            year: "2023",
            details: ["Specialized in designing highly available, cost-efficient cloud architectures"],
        },
        {
            title: "Azure Fundamentals (AZ-900)",
            institution: "Microsoft",
            year: "2023",
            details: ["Strong foundation in Azure services, governance, and cost management"],
        },
    ];

    return (
        <section
            id="education"
            className="bg-gray-900 text-white py-16 px-6 sm:px-12 lg:px-24"
        >
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-8">
                    Education & Certifications
                </h2>

                <div className="relative border-l-2 border-cyan-500 pl-6 space-y-10">
                    {educationData.map((edu, index) => (
                        <div key={index} className="relative">
                            {/* Dot */}
                            <span className="absolute -left-3 top-1 w-5 h-5 bg-cyan-500 rounded-full border-2 border-gray-900"></span>

                            {/* Content */}
                            <div className="bg-gray-800 p-5 rounded-lg shadow hover:shadow-lg transition">
                                <h3 className="text-xl font-semibold text-white">
                                    {edu.title}
                                </h3>
                                <p className="text-sm text-cyan-400">{edu.institution}</p>
                                <p className="text-xs text-gray-400 mb-3">{edu.year}</p>
                                <ul className="list-disc list-inside text-gray-300 space-y-1">
                                    {edu.details.map((detail, i) => (
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
