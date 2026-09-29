function Hero() {
    return (
        <section id="hero" className="portfolio-hero">
            <div className="portfolio-container portfolio-hero__inner">
                <div className="portfolio-hero__content">
                    <p className="portfolio-hero__eyebrow">
                        IT Support • Web Development
                    </p>
                    <h1 className="portfolio-hero__headline">
                        I build digital systems that help people work better.
                    </h1>
                    <p className="portfolio-hero__text">
                        I’m Fhel Jhon Feliciano, a web developer and IT support
                        specialist focused on dependable systems, practical
                        tools, and user-friendly digital experiences that
                        support real work.
                    </p>

                    <div className="portfolio-hero__actions">
                        <a
                            href="#projects"
                            className="portfolio-cta portfolio-hero__primary"
                        >
                            View projects
                        </a>
                        <a
                            href="#contact"
                            className="portfolio-hero__secondary"
                        >
                            Contact me
                        </a>
                    </div>

                    <div
                        className="portfolio-hero__meta"
                        aria-label="Core focus areas"
                    >
                        <span>Web apps</span>
                        <span>IT support</span>
                        <span>System reliability</span>
                    </div>
                </div>

                <div
                    className="portfolio-hero__panel"
                    aria-label="Professional strengths"
                >
                    <div className="portfolio-hero__panel-card">
                        <span className="portfolio-hero__panel-label">
                            Core focus
                        </span>
                        <strong>Web development</strong>
                    </div>
                    <div className="portfolio-hero__panel-card">
                        <span className="portfolio-hero__panel-label">
                            Operations
                        </span>
                        <strong>System support</strong>
                    </div>
                    <div className="portfolio-hero__panel-card">
                        <span className="portfolio-hero__panel-label">
                            Approach
                        </span>
                        <strong>Practical solutions</strong>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
