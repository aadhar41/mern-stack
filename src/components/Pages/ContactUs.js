import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Common/Header";
import image from "../assets/img/contactus.jpg"; // Adjust the import path as necessary

class ContactUs extends Component {
    render() {
        const isContactRoute = this.props.location && this.props.location.pathname === "/contact";
        return (
            <div className="about-wrapper">
                {isContactRoute && (
                    <Header
                        image={image}
                        title="Contact Us"
                        subtitle="We'd love to hear from you"
                        showButton={false}
                        link="/contact"
                        buttonText="Contact Us"
                    />
                )}
                <section className="page-section" id="contact">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Get In Touch</h2>
                            <h3 className="section-subheading text-muted">
                                Have questions, feedback, or want to work with us? Fill out the form below and our team will get back to you as soon as possible.
                            </h3>
                        </div>

                        <form id="contactForm">
                            <div className="row align-items-stretch mb-5">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input className="form-control" id="name" type="text" placeholder="Your Name *" required />
                                        <div className="invalid-feedback">A name is required.</div>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" id="email" type="email" placeholder="Your Email *" required />
                                        <div className="invalid-feedback">A valid email is required.</div>
                                    </div>
                                    <div className="form-group mb-md-0">
                                        <input className="form-control" id="phone" type="tel" placeholder="Your Phone" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group form-group-textarea mb-md-0">
                                        <textarea className="form-control" id="message" placeholder="Your Message *" required></textarea>
                                        <div className="invalid-feedback">A message is required.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-primary btn-xl text-uppercase" id="submitButton" type="submit">
                                    Send Message
                                </button>
                            </div>
                        </form>
                        <div className="contact-details mt-5 text-center">
                            <h4>Contact Information</h4>
                            <p>
                                Email: <a href="mailto:info@example.com">info@example.com</a><br />
                                Phone: <a href="tel:+1234567890">+1 (234) 567-890</a><br />
                                Address: 123 Main Street, City, Country
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

function ContactUsWithLocation(props) {
    const location = useLocation();
    return <ContactUs {...props} location={location} />;
}

export default ContactUsWithLocation;
