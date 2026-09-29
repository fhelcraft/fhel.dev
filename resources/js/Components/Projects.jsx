const PROJECTS = [
    {
        title: "NormInvest",
        subtitle:
            "An investment portal connecting businesses with opportunities, services, incentives, and support across Northern Mindanao.",
        role: "Web App Developer",
        url: "https://norminvest.dti.gov.ph/",
        domain: "norminvest.dti.gov.ph",
        preview: "/images/norminvest.webp",
    },
    {
        title: "Island Hopper Landscape Supplies",
        subtitle:
            "A company website presenting landscape materials, product categories, and outdoor project supplies for Long Island customers.",
        role: "Web App Developer",
        url: "https://islandhopperlandscape.com/",
        domain: "islandhopperlandscape.com",
        preview: "/images/island-hopper.webp",
    },
    {
        title: "City College of Cagayan de Oro Website",
        subtitle:
            "Built the institution's official website to make academic and administrative information easier for students, faculty, and the public to access.",
        role: "Web App Developer",
        url: "https://citycollegecdo.edu.ph",
        domain: "citycollegecdo.edu.ph",
        preview: "/images/projects/city-college-home.webp",
    },
    {
        title: "SmartChive",
        subtitle:
            "Developed a centralized repository for organizing and retrieving institutional records more efficiently across departments.",
        role: "Web App Developer",
        url: "https://smartchive.citycollegecdo.edu.ph",
        domain: "smartchive.citycollegecdo.edu.ph",
        preview: "/images/projects/smartchive-home.webp",
    },
    {
        title: "Attendium",
        subtitle:
            "Created a faculty attendance system to simplify daily tracking, reporting, and administrative monitoring.",
        role: "Web App Developer",
        url: "https://attendium.citycollegecdo.edu.ph",
        domain: "attendium.citycollegecdo.edu.ph",
        preview: "/images/projects/attendium-home.webp",
    },
    {
        title: "Courseware",
        subtitle:
            "Built a learning platform that improved access to course materials and supported digital learning workflows.",
        role: "Web App Developer",
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
                    Production systems I’ve built or contributed to.
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
