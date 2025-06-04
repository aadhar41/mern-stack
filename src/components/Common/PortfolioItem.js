import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Common/Header";
import image from "../assets/img/services.jpg"; // Adjust the import path as necessary


class PortfolioItem extends Component {
    render() {
        return (
            <div className="col-lg-4 col-sm-6 mb-4">
                <div className="portfolio-item">
                    <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={this.props.image} alt={this.props.image} />
                    </a>
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-heading">{this.props.title}</div>
                        <div className="portfolio-caption-subheading text-muted">{this.props.subtitle}</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default PortfolioItem;