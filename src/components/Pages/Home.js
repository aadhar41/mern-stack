import React, { Component } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import image from "../assets/img/header-bg.jpg"; // Adjust the import path as necessary
import Services from "../Common/Services";
import Portfolio from "../Common/Portfolio";

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
                <section className="about" style={{ padding: "2rem 0", textAlign: "center" }}>
                    <h2>About Me</h2>
                    <p>
                        I'm a passionate developer specializing in building modern web applications using the MERN stack.
                        I love solving complex problems and creating seamless user experiences.
                    </p>
                </section>
                <Services />
                <Portfolio />
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