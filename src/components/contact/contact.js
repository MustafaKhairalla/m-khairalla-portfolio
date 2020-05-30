import React from 'react';
import "./contact.css"

function Contact() {
    return (
        <div className="container-fluid formStyle">

            <div className="text-center">
                <h2 className="">Get in Touch</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur facere eveniet </p>
            </div>

            <form>
                <div className="form-group">
                    <label for="formGroupExampleInput" className="lable">First Name</label>
                    <input type="text" className="form-control lable" id="formGroupExampleInput" placeholder="First name"></input>
                </div>

                <div className="form-group">
                    <label for="formGroupExampleInput2">Last Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Last Name"></input>
                </div>

                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your Message"></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    );
};

export default Contact;