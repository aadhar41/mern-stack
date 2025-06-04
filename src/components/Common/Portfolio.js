import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Common/Header";

import PortfolioItem from "../Common/PortfolioItem";
// Importing images for portfolio items
import threadsImg from "../assets/img/portfolio/1.jpg";
import exploreImg from "../assets/img/portfolio/2.jpg";
import finishImg from "../assets/img/portfolio/3.jpg";
import linesImg from "../assets/img/portfolio/4.jpg";
import southwestImg from "../assets/img/portfolio/5.jpg";
import windowImg from "../assets/img/portfolio/6.jpg";
import headerImage from "../assets/img/portfolio/med-badr-chemmaoui-ZSPBhokqDMc-unsplash.jpg";

const portfolio = {
    title: "Portfolio",
    subtitle: "Explore our work",
    items: [
        {
            title: "Threads",
            subtitle: "Illustration",
            image: threadsImg,
            link: "/portfolio/project-one"
        },
        {
            title: "Explore",
            subtitle: "Graphic Design",
            image: exploreImg,
            link: "/portfolio/project-two"
        },
        {
            title: "Finish",
            subtitle: "Identity",
            image: finishImg,
            link: "/portfolio/project-three"
        },
        {
            title: "Lines",
            subtitle: "Branding",
            image: linesImg,
            link: "/portfolio/project-one"
        },
        {
            title: "Southwest",
            subtitle: "Website Design",
            image: southwestImg,
            link: "/portfolio/project-two"
        },
        {
            title: "Window",
            subtitle: "Photography",
            image: windowImg,
            link: "/portfolio/project-two"
        }
    ]
};

class Portfolio extends Component {
    render() {
        const isPortfolioRoute = this.props.location && this.props.location.pathname === "/portfolio";
        return (
            <>
                {isPortfolioRoute &&
                    <Header
                        image={headerImage}
                        title={portfolio.title}
                        subtitle={portfolio.subtitle}
                        showButton={true}
                        link="/portfolio"
                        buttonText="Our Work"
                    />
                }
                <section className="page-section bg-light" id="portfolio">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">{portfolio.title}</h2>
                            <h3 className="section-subheading text-muted">{portfolio.subtitle}</h3>
                        </div>
                        <div className="row">
                            {portfolio.items.map((item, index) => (
                                <PortfolioItem
                                    key={index}
                                    {...item}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

function PortfolioWithLocation(props) {
    const location = useLocation();
    return <Portfolio {...props} location={location} />;
}

export default PortfolioWithLocation;