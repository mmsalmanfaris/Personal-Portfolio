// Events.jsx
export default function Events() {
    const eventsData = [
        {
            title: "AWS Summit Colombo 2024",
            role: "Attendee",
            date: "March 2024",
            details: [
                "Participated in sessions about cloud cost optimization and serverless architectures.",
                "Networked with AWS solution architects and DevOps professionals."
            ],
        },
        {
            title: "DevOpsDays Colombo 2023",
            role: "Volunteer",
            date: "October 2023",
            details: [
                "Assisted in organizing CI/CD automation workshops.",
                "Gained insights into Kubernetes best practices."
            ],
        },
        {
            title: "Hackathon – Smart City Challenge",
            role: "Participant",
            date: "August 2023",
            details: [
                "Built a cloud-connected IoT parking system using FastAPI, ESP32, and Kubernetes.",
                "Won 2nd place in the innovation category."
            ],
        },
    ];

    return (
        <section
            id="events"
            className="bg-gray-900 text-white py-16 px-6 sm:px-12 lg:px-24"
        >
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-8">
                    Events & Participation
                </h2>

                <div className="relative border-l-2 border-cyan-500 pl-6 space-y-10">
                    {eventsData.map((event, index) => (
                        <div key={index} className="relative">
                            {/* Timeline dot */}
                            <span className="absolute -left-3 top-1 w-5 h-5 bg-cyan-500 rounded-full border-2 border-gray-900"></span>

                            {/* Event Card */}
                            <div className="bg-gray-800 p-5 rounded-lg shadow hover:shadow-lg transition">
                                <h3 className="text-xl font-semibold text-white">
                                    {event.title}
                                </h3>
                                <p className="text-sm text-cyan-400">{event.role}</p>
                                <p className="text-xs text-gray-400 mb-3">{event.date}</p>
                                <ul className="list-disc list-inside text-gray-300 space-y-1">
                                    {event.details.map((detail, i) => (
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
