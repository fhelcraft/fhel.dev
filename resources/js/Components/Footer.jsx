function Footer() {
    return (
        <footer className="portfolio-footer">
            <div className="portfolio-container">
                <div className="portfolio-footer__main">
                    <div className="portfolio-footer__brand">
                        <a className="portfolio-footer__name" href="#hero">
                            Fhel Jhon Feliciano
                        </a>
                        <p>
                            System administrator and web developer building
                            dependable systems and practical digital
                            experiences.
                        </p>
                    </div>
                    <div className="portfolio-footer__column">
                        <h2 className="portfolio-footer__heading">Explore</h2>
                        <nav aria-label="Footer navigation">
                            <a href="#about">About</a>
                            <a href="#skills">Skills</a>
                            <a href="#experience">Experience</a>
                            <a href="#projects">Projects</a>
                        </nav>
                    </div>
                    <div className="portfolio-footer__column">
                        <h2 className="portfolio-footer__heading">
                            Get in touch
                        </h2>
                        <a href="mailto:fhelfelciano@gmail.com">
                            fhelfelciano@gmail.com
                        </a>
                        <a
                            className="portfolio-footer__contact-link"
                            href="#contact"
                        >
                            Contact me <span aria-hidden="true">↗</span>
                        </a>
                    </div>
                </div>
                <div className="portfolio-footer__bottom">
                    <span>
                        © {new Date().getFullYear()} Fhel Jhon Feliciano
                    </span>
                    <a href="#hero">
                        Back to top <span aria-hidden="true">↑</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
