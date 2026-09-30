function Experience() {
    const jobs = [
        {
            role: "System Administrator | Front-end Developer",
            org: "Department of Trade and Industry - Region 10",
            period: "March 2026 – Present",
            points: [
                "Maintain office systems, network infrastructure, servers, security devices, and endpoint computers to keep daily operations stable and secure.",
                "Build and improve responsive web interfaces and internal digital tools to support day-to-day workflows and public services.",
                "Provide technical troubleshooting, system deployment, preventive maintenance, and user support for regional office personnel.",
            ],
        },

        {
            role: "System Administrator | Web Application Developer",
            org: "City College of Cagayan de Oro",
            period: "February 2024 – March 2026",
            points: [
                "Developed and maintained institutional web applications used by students, faculty, and staff.",
                "Built and deployed several systems, including the official college website, SmartChive document repository, Attendium attendance system, and Courseware LMS platform.",
                "Improved administrative processes by creating tools that reduced repetitive work and made information easier to access.",
                "Provided troubleshooting and support for system issues, network connectivity, and printer services to maintain reliable operations.",
            ],
        },
        {
            role: "Systems Administrator",
            org: "Skunkworks PH",
            period: "August 2023 – February 2024",
            points: [
                "Managed system infrastructure to keep servers, network services, and connected devices operating reliably.",
                "Monitored infrastructure health, resolved operational issues, and supported updates and maintenance tasks to minimize downtime.",
                "Assisted in testing and deploying technology solutions in live environments to ensure they worked properly and met operational needs.",
            ],
        },
        {
            role: "Network Specialist / IT Support",
            org: "Cagayan de Oro Technival Vocational Institute",
            period: "October 2022 – August 2023",
            points: [
                "Installed and configured network access points and multi-WAN setups to improve connectivity across campus buildings.",
                "Helped design and implement college network infrastructure to support academic and administrative operations.",
                "Resolved day-to-day network and device issues while supporting faculty and staff with technical guidance.",
            ],
        },
    ];

    return (
        <section id="experience" className="portfolio-section">
            <div className="portfolio-container">
                <h2 className="portfolio-section__title">Experience</h2>
                <div className="portfolio-timeline">
                    {jobs.map((job, i) => (
                        <article key={i} className="portfolio-timeline__item">
                            <div className="portfolio-timeline__header">
                                <h3>{job.role}</h3>
                                <p className="portfolio-timeline__org">
                                    {job.org}
                                </p>
                                <p className="portfolio-timeline__period">
                                    {job.period}
                                </p>
                            </div>
                            <ul className="portfolio-timeline__points">
                                {job.points.map((point, j) => (
                                    <li key={j}>{point}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
