const ARTICLES = [
    {
        title: "Iligan, Cagayan de Oro among NormInvest pilot LGUs",
        summary:
            "PIA coverage of Iligan and Cagayan de Oro joining NormInvest's pilot local government units.",
        url: "https://pia.gov.ph/news/iligan-cagayan-de-oro-among-norminvest-pilot-lgus/",
        image: "/images/projects/normin-news.png",
    },
    {
        date: "August 14, 2026",
        title: "CCCDO Researchers Clinch Major Awards at UNIFFIED International Research Conference",
        summary:
            "Named as a co-author on the award-winning climate resilience courseware study presented by the CCCDO research team.",
        url: "https://citycollegecdo.edu.ph/article/1523",
        image: "https://citycollegecdo.edu.ph/dist/img/news_images/1787561676_0.png",
    },
    {
        date: "October 16, 2025",
        title: "CCCDO Research Team Showcases Climate Resilience Courseware at PAFTE National Conference",
        summary:
            "Part of the CCCDO research team presenting its climate and disaster resilience courseware at the PAFTE convention.",
        url: "https://citycollegecdo.edu.ph/article/1160",
        image: "https://citycollegecdo.edu.ph/dist/img/news_images/1760439550_0.jpg",
    },
    {
        date: "September 18, 2025",
        title: "CCCDO Showcases Locally-Developed Courseware Application at ATECCE Workshop",
        summary:
            "Joined the TIDMAC team in demonstrating how to use the college's climate education courseware on web and mobile.",
        url: "https://citycollegecdo.edu.ph/article/1074",
        image: "https://citycollegecdo.edu.ph/dist/img/news_images/1759912968_0.jpg",
    },
    {
        date: "September 18, 2025",
        title: "CCCDO's Climate Education Research Gains Support from Japanese Universities",
        summary:
            "Contributed to a climate education courseware study selected for support by Okayama University and Miyagi University of Education.",
        url: "https://citycollegecdo.edu.ph/article/1071",
        image: "https://citycollegecdo.edu.ph/dist/img/news_images/1759912676_0.jpg",
    },
    {
        date: "September 6, 2025",
        title: "CCCDO Presents Back-to-Back Lesson Plans on Climate Change",
        summary:
            "Presented a Grade 10 climate change lesson plan with the Eco-Librium prototype game and fellow CCCDO researchers.",
        url: "https://citycollegecdo.edu.ph/article/1068",
        image: "https://citycollegecdo.edu.ph/dist/img/news_images/1759912196_0.jpg",
    },
    {
        date: "April 30, 2025",
        title: "CCCDO Researchers Join Full-Blown Proposal Development Writeshop",
        summary:
            "Represented City College of Cagayan de Oro at a writeshop supporting the development of research proposals for funding.",
        url: "https://citycollegecdo.edu.ph/article/1336",
        image: "https://citycollegecdo.edu.ph/dist/img/news_images/1770256432_0.jpg",
    },
    {
        date: "November 18, 2024",
        title: "City College of CDO Presents Community-Driven Disaster Resilience Study at ICTED 2024",
        summary:
            "Presented a community-focused disaster preparedness and resilience study with the CCCDO research team.",
        url: "https://citycollegecdo.edu.ph/article/803",
        image: "https://citycollegecdo.edu.ph/dist/img/news_images/1759452995_GMl46iTflk.jpg",
    },
    {
        date: "January 20, 2024",
        title: "DICT Region 10 Conducts Pilot Training of Microsoft Productivity Tools in Bisaya",
        summary:
            "Supported the City College CESS team during a digital skills training for local learners and communities.",
        url: "https://citycollegecdo.edu.ph/article/821",
        image: "https://citycollegecdo.edu.ph/dist/img/news_images/1759388110_CdsECWf2cf.jpg",
    },
];

function EngagementCard({ article }) {
    return (
        <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-card"
        >
            <img
                className="portfolio-card__preview"
                src={article.image}
                alt=""
                loading="lazy"
                decoding="async"
            />
            <div className="portfolio-card__body">
                {article.date && (
                    <span className="portfolio-card__role">{article.date}</span>
                )}
                <h3 className="portfolio-card__title">{article.title}</h3>
                <p className="portfolio-card__subtitle">{article.summary}</p>
                <span className="portfolio-card__link">Read article ↗</span>
            </div>
        </a>
    );
}

function Engagement() {
    return (
        <section id="engagement" className="portfolio-section">
            <div className="portfolio-container">
                <h2 className="portfolio-section__title">Engagement</h2>
                <p className="portfolio-section__lead">
                    Research, development initiatives, programs, and trainings I
                    have contributed to.
                </p>
                <div className="portfolio-projects">
                    {ARTICLES.map((article) => (
                        <EngagementCard key={article.url} article={article} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Engagement;
