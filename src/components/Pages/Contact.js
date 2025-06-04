import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Common/Header";
import image from "../assets/img/contactus.jpg"; // Adjust the import path as necessary
import Field from "../Common/Field";
import { Formik, Form } from "formik";

const fields = {
    sections: [
        [
            { label: "Name", name: "name", type: "text", elementName: "input", placeholder: "Enter Name *" },
            { label: "Email", name: "email", type: "email", elementName: "input", placeholder: "Enter Email *" },
            { label: "Phone", name: "phone", type: "tel", elementName: "input", placeholder: "Enter Phone *" },
        ],
        [
            { label: "Message", name: "message", type: "text", elementName: "textarea", placeholder: "Enter Message *" }
        ]
    ]
};

function Contact(props) {
    const isContactRoute = props.location && props.location.pathname === "/contact";

    const handleSubmit = (values, { resetForm }) => {
        console.log("Form submitted:", values);
        // Add your custom submit logic here (e.g., API call)
        resetForm();
    };

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

                    <Formik
                        initialValues={{
                            name: "",
                            email: "",
                            phone: "",
                            message: "",
                        }}
                        validate={values => {
                            const errors = {};
                            if (!values.name) {
                                errors.name = 'Required';
                            }
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                            }
                            if (!values.phone) {
                                errors.phone = 'Required';
                            } else if (!/^\+?\d{7,15}$/.test(values.phone)) {
                                errors.phone = 'Invalid phone number';
                            }
                            if (!values.message) {
                                errors.message = 'Required';
                            }
                            return errors;
                        }}
                        onSubmit={handleSubmit}
                    >
                        {({ values, handleChange, handleBlur, touched, errors }) => (
                            <Form id="contactForm">
                                <div className="row align-items-stretch mb-5">
                                    {fields.sections.map((section, sectionIdx) => (
                                        <div className="col-md-6" key={sectionIdx}>
                                            {section.map((field) => (
                                                <Field
                                                    key={field.name}
                                                    {...field}
                                                    value={values[field.name]}
                                                    name={field.name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    touched={touched && touched[field.name]}
                                                    errors={errors && errors[field.name]}
                                                />
                                            ))}
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-primary btn-xl text-uppercase" type="submit">
                                        Send Message
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
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

function ContactWithLocation(props) {
    const location = useLocation();
    return <Contact {...props} location={location} />;
}

export default ContactWithLocation;
