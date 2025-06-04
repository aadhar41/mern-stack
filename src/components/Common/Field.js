import React from "react";

function Field(props) {
    const {
        label,
        name,
        type,
        elementName,
        placeholder,
        value,
        onChange,
        onBlur,
        touched,
        errors
    } = props;

    const showError = touched && errors;

    if (elementName === "input") {
        return (
            <div className="form-group">
                <input
                    className={`form-control${showError ? " is-invalid" : ""}`}
                    name={name}
                    id={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                />
                {showError && (
                    <div className="invalid-feedback float-left">
                        {errors}
                    </div>
                )}
            </div>
        );
    } else {
        return (
            <div className="form-group form-group-textarea mb-md-0">
                <textarea
                    className={`form-control${showError ? " is-invalid" : ""}`}
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                />
                {showError && (
                    <div className="invalid-feedback">
                        {errors}
                    </div>
                )}
            </div>
        );
    }
}

export default Field;