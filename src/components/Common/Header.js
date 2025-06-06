import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header className="masthead" style={{ backgroundImage: `url(${this.props.image})` }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="masthead-subheading">{this.props.title}</div>
                    <div className="masthead-heading text-uppercase">{this.props.subtitle}</div>
                    {this.props.showButton ?
                        <div className="masthead-button">
                            <Link className="btn btn-primary btn-xl text-uppercase" to={this.props.link}>{this.props.buttonText}</Link>
                        </div>
                        : null}
                </div>
            </header>
        );
    }
}
export default Header;