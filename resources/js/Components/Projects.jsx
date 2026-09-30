const PROJECTS = [
    {
        title: "NormInvest",
        subtitle:
            "An investment portal connecting businesses with opportunities, services, incentives, and support across Northern Mindanao.",
        role: "Front end Developer",
        url: "https://norminvest.dti.gov.ph/",
        domain: "norminvest.dti.gov.ph",
        preview: "/images/norminvest.webp",
    },
    {
        title: "CRCC LMS",
        subtitle:
            "A learning management system for Christ the Rock Christian Church.",
        role: "Front end Developer",
        url: "https://demo.crccph.org/",
        domain: "demo.crccph.org",
        preview: "/images/projects/crcc-home.png",
    },
    {
        title: "Island Hopper Landscape Supplies",
        subtitle:
            "A company website presenting landscape materials, product categories, and outdoor project supplies for Long Island customers.",
        role: "Wordpress Developer",
        url: "https://islandhopperlandscape.com/",
        domain: "islandhopperlandscape.com",
        preview: "/images/island-hopper.webp",
    },
    {
        title: "City College of Cagayan de Oro Website",
        subtitle:
            "An official college website bringing academic programs, campus updates, and essential information together for students, faculty, and the community.",
        role: "Front end developer",
        url: "https://citycollegecdo.edu.ph",
        domain: "citycollegecdo.edu.ph",
        preview: "/images/projects/city-college-home.webp",
    },
    {
        title: "SmartChive",
        subtitle:
            "A digital records platform that helps college departments organize, store, and retrieve institutional documents in one centralized place.",
        role: "Full stack developer",
        url: "https://smartchive.citycollegecdo.edu.ph",
        domain: "smartchive.citycollegecdo.edu.ph",
        preview: "/images/projects/smartchive-home.webp",
    },
    {
        title: "Attendium",
        subtitle:
            "A faculty attendance platform for recording daily attendance and giving administrators a clearer view of staff attendance records.",
        role: "Front end developer",
        url: "https://attendium.citycollegecdo.edu.ph",
        domain: "attendium.citycollegecdo.edu.ph",
        preview: "/images/projects/attendium-home.webp",
    },
    {
        title: "Courseware",
        subtitle:
            "An online learning platform where students can access course materials and engage with digital learning resources.",
        role: "Front end developer",
        url: "https://courseware.citycollegecdo.edu.ph",
        domain: "courseware.citycollegecdo.edu.ph",
        preview: "/images/projects/courseware-home.webp",
    },
];

function ProjectCard({ project }) {
    return (
        <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-card"
        >
            <img
                className="portfolio-card__preview"
                src={project.preview}
                alt={`${project.title} landing page preview`}
                loading="lazy"
                decoding="async"
            />
            <div className="portfolio-card__body">
                <span className="portfolio-card__role">{project.role}</span>
                <h3 className="portfolio-card__title">{project.title}</h3>
                <p className="portfolio-card__subtitle">{project.subtitle}</p>
                <span className="portfolio-card__link">{project.domain} ↗</span>
            </div>
        </a>
    );
}

function Projects() {
    return (
        <section
            id="projects"
            className="portfolio-section portfolio-section--alt"
        >
            <div className="portfolio-container">
                <h2 className="portfolio-section__title">Projects</h2>
                <p className="portfolio-section__lead">
                    Production systems I’ve built and contributed.
                </p>
                <div className="portfolio-projects">
                    {PROJECTS.map((project, i) => (
                        <ProjectCard key={i} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
