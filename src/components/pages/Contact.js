import React, { Component } from 'react';
import img from '../assets/img/map-image.png';
import Field from '../common/Field';
import {withFormik} from 'formik';
import * as Yup from 'yup';

const fields = {
    sections: [
        [
            {name: 'name', elementName: 'input', type: 'text', placeholder: 'Your name'},
            {name: 'email', elementName: 'input', type: 'text', placeholder: 'Your email'},
            {name: 'phone', elementName: 'input', type: 'text', placeholder: 'Your phone'},
        ],
        [
            {name: 'message', elementName: 'textarea', type: 'text', placeholder: 'Type your message'}
        ]
    ]
}

class Contact extends Component {

    render() {
        return (
            <section className="page-section" id="contact" style={{backgroundImage: `url(${img})`}} >
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <form name="sentMessage" novalidate="novalidate" onSubmit={this.props.handleSubmit}>
                        <div className="row align-items-stretch mb-5">
                           {fields.sections.map((section, sectionIndex) =>{
                               console.log("Rendering section ", sectionIndex, "with", section);
                               return(
                                   <div className="col-md-6" key={sectionIndex}>
                                       {section.map((field, i) =>{
                                           return <Field 
                                                        {...field} 
                                                        key={i}
                                                        value={this.props.values[field.name]}
                                                        name = {field.name}
                                                        onChange = {this.props.handleChange}
                                                        onBlur = {this.props.handleBlur}
                                                        touched = {(this.props.touched[field.name])}
                                                        errors = {this.props.errors[field.name]}
                                                        />
                                       })}
                                   </div>
                               )
                           })}
                        </div>
                        <div className="text-center">
                            <div id="success"></div>
                            <button 
                                className="btn btn-primary btn-xl text-uppercase"
                                type="submit"
                            >Send Message</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}
export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: ''
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, 'Come on bro, your name is longer than that!.').required('You must give us your name !.'),
        email: Yup.string().email('You must give us valid email').required('Give your email'),
        phone: Yup.string()
            .min(10, 'Please provide your 10 digit phone number')
            .max(15, 'Your number is too long')
            .required('We need your number to reach you at.'),
        message: Yup.string().min(20, 'You need to provide us more detailed informataion')
            .required('Message is required')
    }),

    handleSubmit: (values, {setSubmitting}) => {
        console.log("Values", values)
        alert("You've submited the form", JSON.stringify(values))
    }
})(Contact);