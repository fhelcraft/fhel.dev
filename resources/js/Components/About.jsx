function About() {
    const highlights = [
        { value: "4+", label: "Years in IT and web work" },
        { value: "5+", label: "Systems built or improved" },
        { value: "24/7", label: "Mindset for practical support" },
    ];

    return (
        <section id="about" className="portfolio-section">
            <div className="portfolio-container">
                <div className="portfolio-intro">
                    <h1 className="portfolio-intro__name">
                        Fhel Jhon V. Feliciano
                    </h1>
                    <p className="portfolio-intro__title">
                        IT Support Specialist • Web Developer
                    </p>
                    <p className="portfolio-intro__location">
                        Cagayan de Oro, Philippines
                    </p>
                </div>

                <div className="portfolio-about__content">
                    <div>
                        <h2 className="portfolio-section__title">About Me</h2>
                        <p className="portfolio-about__text">
                            I work at the intersection of IT support and web
                            development, helping institutions and teams keep
                            their digital systems running smoothly while also
                            building practical tools that make daily work
                            easier. With almost four years of experience, I’ve
                            supported network and system operations, developed
                            web applications, and helped improve how people
                            access and use information across different
                            workflows.
                        </p>
                    </div>

                    <div
                        className="portfolio-about__highlights"
                        aria-label="Professional highlights"
                    >
                        {highlights.map((item) => (
                            <div
                                key={item.label}
                                className="portfolio-about__stat"
                            >
                                <span className="portfolio-about__value">
                                    {item.value}
                                </span>
                                <span className="portfolio-about__label">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
