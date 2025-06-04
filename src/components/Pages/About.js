import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Common/Header";
import Timeline from "../Common/Timeline";
import image from "../assets/img/about/about.jpg"; // Adjust the import path as necessary

class About extends Component {
    render() {
        return (
            <div className="about-wrapper">
                <Header
                    image={image}
                    title="Welcome to Our Website"
                    subtitle="Your success is our priority"
                    showButton={true}
                    link="/services"
                    buttonText="Explore Services"
                />
                <div className="about">
                    <section className="page-section" id="about" style={{ padding: "2rem 0", textAlign: "center" }}>
                        <div className="container">
                            <div className="text-center mb-5">
                                <h2 className="section-heading text-uppercase">About Me</h2>
                                <p className="section-subheading text-muted">I'm a passionate developer specializing in building modern web applications using the MERN stack.
                                    I love solving complex problems and creating seamless user experiences.</p>
                            </div>
                            <Timeline />
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default About;
