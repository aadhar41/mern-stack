import React, { Component } from "react";

class SingleService extends Component {
    render() {
        return (
            <div className="col-md-4">
                <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                    <i className={`fas ${this.props.icon || "fa-question"} fa-stack-1x fa-inverse`}></i>
                </span>
                <h4 className="my-3">{this.props.title || "Service Title"}</h4>
                <p className="text-muted">{this.props.description || "Service description not available."}</p>
            </div>
        );
    }
}
export default SingleService;