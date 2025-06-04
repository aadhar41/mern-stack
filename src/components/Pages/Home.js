import React, { Component } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import image from "../assets/img/header-bg.jpg"; // Adjust the import path as necessary
import Services from "../Common/Services";
import Portfolio from "../Common/Portfolio";
import Timeline from "../Common/Timeline";
import Contact from "../Pages/Contact";
// import About from "../Pages/About";

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Header
                    image={image}
                    title="Hi, I'm Aadhar gaur."
                    subtitle="Full Stack Developer | JavaScript/PHP Enthusiast"
                    showButton={true}
                    link="/portfolio"
                    buttonText="View My Work"
                />
                <Services />
                <Portfolio />
                <section className="about" style={{ padding: "2rem 0", textAlign: "center" }}>
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="section-heading text-uppercase">About Me</h2>
                            <p className="section-subheading text-muted">I'm a passionate developer specializing in building modern web applications using the MERN stack.
                                I love solving complex problems and creating seamless user experiences.</p>
                        </div>
                        <Timeline />
                    </div>
                </section>
                <Contact />


                <section className="contact" style={{ padding: "2rem 0", textAlign: "center" }}>
                    <h2>Contact</h2>
                    <p>
                        Interested in working together or have a question? <a href="mailto:your.email@example.com">Email me</a>.
                    </p>
                </section>
            </div>
        );
    }
}

export default Home;