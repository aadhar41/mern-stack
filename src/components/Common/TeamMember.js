import React, { Component } from "react";

class TeamMember extends Component {
    render() {
        return (
            <div className="col-lg-4">
                <div className="team-member">
                    <img className="mx-auto rounded-circle" src={this.props.image} alt={this.props.image} />
                    <h4>{this.props.name}</h4>
                    <p className="text-muted">{this.props.designation}</p>
                    <a className="btn btn-dark btn-social mx-2" href="#!" aria-label={`${this.props.name} Twitter Profile`}><i className={`fab ${this.props.icon1}`}></i></a>
                    <a className="btn btn-dark btn-social mx-2" href="#!" aria-label={`${this.props.name} Facebook Profile`}><i className={`fab ${this.props.icon2}`}></i></a>
                    <a className="btn btn-dark btn-social mx-2" href="#!" aria-label={`${this.props.name} LinkedIn Profile`}><i className={`fab ${this.props.icon3}`}></i></a>
                </div>
            </div>
        );
    }
}

export default TeamMember;