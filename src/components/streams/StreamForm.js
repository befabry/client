import React from "react";
import { Field, reduxForm } from "redux-form";

import {isBlank} from "../../helpers/predicate"

class StreamForm extends React.Component {
    onSubmit = (formValues) => {
        //Not needed, handleSubmit from redux takes care of this
        //event.preventDefault();

        //The parent passes down a callback
        this.props.onSubmit(formValues);
    };

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="error">{error}</div>
                </div>
            );
        }

        return null;
    }

    renderInput = ({ input, label, meta, type }) => {
        const className = `field ${meta.error && meta.touched ? "error" : ""}`;

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" type={type} />
                {this.renderError(meta)}
            </div>
        );
    };

    render() {
        return (
            <form
                className="ui form error"
                onSubmit={this.props.handleSubmit(this.onSubmit)}
            >
                <Field
                    name="title"
                    component={this.renderInput}
                    label="Enter Title"
                    type="text"
                />
                <Field
                    name="description"
                    component={this.renderInput}
                    label="Enter Description"
                    type="text"
                />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title || isBlank(formValues.title)) {
        errors.title = "You must enter a valid title";
    }

    if (!formValues.description || isBlank(formValues.description)) {
        errors.description = "You must enter a valid description";
    }

    return errors;
};

const formWrapped = reduxForm({
    form: "streamForm",
    validate
})(StreamForm);

export default formWrapped;
