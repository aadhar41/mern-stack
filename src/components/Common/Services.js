import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Common/Header";
// import image from "../assets/img/services.jpg"; // Adjust the import path as necessary

import SingleService from "./SingleService";
import image from "../assets/img/web-services.jpg";

const serviceData = {
    eCommerce: {
        title: "E-Commerce",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor efficitur. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        icon: "fa-shopping-cart"
    },
    responsiveDesign: {
        title: "Responsive Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor efficitur. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        icon: "fa-mobile"
    },
    webSecurity: {
        title: "Web Security",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor efficitur. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        icon: "fa-lock"
    }
};

class Services extends Component {
    render() {
        const isServicesRoute = this.props.location && this.props.location.pathname === "/services";
        return (
            <div className="services-wrapper">
                {isServicesRoute && (
                    <Header
                        image={image}
                        title="Our Services"
                        subtitle="We offer a wide range of services to help you succeed"
                        showButton={true}
                        link="/contact"
                        buttonText="Contact Us"
                    />
                )}

                <section className="page-section" id="services">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Services</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div className="row text-center">
                            {Object.values(serviceData).map((service, index) => (
                                <SingleService
                                    key={index}
                                    title={service.title}
                                    description={service.description}
                                    icon={service.icon}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

function ServicesWithLocation(props) {
    const location = useLocation();
    return <Services {...props} location={location} />;
}

export default ServicesWithLocation;