import React, { Component } from "react";
import emailjs from "emailjs-com";
import ContactBanner from "./contactBanner";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state;
    let templateParams = {
      from_name: name,
      // to_name: "<YOUR_EMAIL_ID>",
      // subject: subject,
      message: message,
      reply_to: email,
    };
    const templateID = "template_ch73sir";
    const userID = "user_MTSgkZ4SoJG7TuHXz5R8T";
    const serviceID = "service_945zmid";
    // emailjs.send(
    //   "gmail",
    //   "template_ch73sir",
    //   templateParams,
    //   "user_MTSgkZ4SoJG7TuHXz5R8T"
    // );
    
    emailjs.send(serviceID,templateID, templateParams, userID)
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
       console.log('FAILED...', err);
    });
    console.log(templateParams, "templateParams");
    // this.resetForm();
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    return (
      <div className={"contact-us"}>
        <ContactBanner />
        <section className="contact-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="contact-title">Get in Touch</h2>
              </div>
              <div className="col-lg-8">
                <form className="form-contact contact_form" id="contactForm">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          className="form-control w-100"
                          name="message"
                          id="message"
                          cols="30"
                          rows="9"
                          placeholder=" Enter Message"
                          onChange={(e) => {
                            this.handleChange("message", e);
                          }}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          className="form-control valid"
                          name="name"
                          id="name"
                          type="text"
                          placeholder="Enter your name"
                          onChange={(e) => {
                            this.handleChange("name", e);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          className="form-control valid"
                          name="email"
                          id="email"
                          type="email"
                          placeholder="Email"
                          onChange={(e) => {
                            this.handleChange("email", e);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="subject"
                          id="subject"
                          type="text"
                          placeholder="Enter Subject"
                          onChange={(e) => {
                            this.handleChange("subject", e);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <button
                      type="submit"
                      className="button button-contactForm boxed-btn"
                      onClick={(e) => {
                        this.handleSubmit(e);
                      }}
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-lg-3 offset-lg-1">
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    {/* <i className="ti-home"></i> */}
                    <i className="fa fa-home" aria-hidden="true"></i>
                  </span>
                  <div className="media-body">
                    <h3>Coimbatore</h3>
                    <p>Tamilnadu</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <i className="fa fa-mobile" aria-hidden="true"></i>
                  </span>
                  <div className="media-body">
                   
                    <a href="#"> <h3>+91 000</h3></a>
                    <p>Mon to Fri 9am to 6pm</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </span>
                  <div className="media-body">
                    <h3>info@werefer.co.in</h3>
                    <p>Send us your query anytime!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ContactUs;
