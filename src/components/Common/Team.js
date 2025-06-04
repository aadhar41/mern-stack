import React, { Component } from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";

import TeamMember from "./TeamMember";
// Importing images for portfolio items
import imageOne from "../assets/img/team/1.jpg";
import imageTwo from "../assets/img/team/2.jpg";
import imageThree from "../assets/img/team/3.jpg";
import headerImage from "../assets/img/services.jpg";

const teamData = {
    eCommerce: {
        title: "E-Commerce",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor efficitur. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        icon1: "fa-twitter",
        icon2: "fa-facebook-f",
        icon3: "fa-linkedin-in",
        image: imageOne,
    },
    responsiveDesign: {
        title: "Responsive Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor efficitur. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        icon1: "fa-twitter",
        icon2: "fa-facebook-f",
        icon3: "fa-linkedin-in",
        image: imageTwo,
    },
    webSecurity: {
        title: "Web Security",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor efficitur. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        icon1: "fa-twitter",
        icon2: "fa-facebook-f",
        icon3: "fa-linkedin-in",
        image: imageThree,
    }
};

class Team extends Component {
    render() {
        const isTeamRoute = this.props.location && this.props.location.pathname === "/team";

        return (
            <>
                {isTeamRoute &&
                    <Header
                        image={headerImage}
                        title="Meet Our Team"
                        subtitle="Passionate professionals dedicated to your success"
                        showButton={true}
                        link="/team"
                        buttonText="Our Amazing Team"
                    />
                }
                <div className="services-wrapper">
                    <section className="page-section bg-light" id="team">
                        <div className="container">
                            <div className="text-center">
                                <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                                <h3 className="section-subheading text-muted">Meet the experts behind our success</h3>
                            </div>
                            <div className="row text-center">
                                {Object.values(teamData).map((member, index) => (
                                    <TeamMember
                                        key={index}
                                        name={member.title}
                                        designation={member.description}
                                        icon1={member.icon1}
                                        icon2={member.icon2}
                                        icon3={member.icon3}
                                        image={member.image}
                                    />
                                ))}
                            </div>
                            <div className="row">
                                <div className="col-lg-8 mx-auto text-center">
                                    <p className="large text-muted">
                                        Our team combines years of experience and a passion for innovation to deliver outstanding results for our clients.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        );
    }
}

function TeamWithLocation(props) {
    const location = useLocation();
    return <Team {...props} location={location} />;
}

export default TeamWithLocation;