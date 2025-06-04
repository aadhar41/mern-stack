import React, { Component } from "react";
import Header from "../Common/Header";
import image from "../assets/img/header-bg.jpg"; // Adjust the import path as necessary
import Services from "../Common/Services";
import Portfolio from "../Common/Portfolio";

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Header
                    image={image}
                    title="Welcome to Our Website"
                    subtitle="Your success is our priority"
                    showButton={true}
                    link="/services"
                    buttonText="Explore Services"
                />
                <Services />
                <Portfolio />
            </div>
        );
    }
}

export default Home;