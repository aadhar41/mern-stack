import React, { Component } from "react";
import Footer from "./Common/Footer";
import { Link } from "react-router-dom";
// import Header from "./Common/Header";

class PageWrapper extends Component {
    render() {
        return (
            <div className="page-wrapper">
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                    <div className="container">
                        <Link className="navbar-brand" to="/"><img src="assets/img/navbar-logo.png" alt="..." /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i className="fas fa-bars ms-1"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                                <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/team">Team</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default PageWrapper;