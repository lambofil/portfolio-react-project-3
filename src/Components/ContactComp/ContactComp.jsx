import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactComp.css";

const ContactComp = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsLoading(true);

    emailjs
      .sendForm(
        "service_00xuf1f",
        "template_ojh2tle",
        form.current,
        "8di5yLKM0CdUy-QhQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent successfully!");
          // Reset the form after successful submission
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Error sending email. Please try again.");
        }
      )
      .finally(() => {
        // Set isLoading to false regardless of success or error
        setIsLoading(false);
      });
  };

  return (
    <section className="contact">
      <div className="container">
        <div class="contact-body">
          <h2>Contact</h2>
          <p className="page-header">Lets have a talk...</p>
        </div>

        <div className="contact-flex">
          <div className="c-flex1">
            <div className="info">
              <div className="address">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <h4>Location:</h4>
                <p>
                  No. 21 Ayinde Close, Alabi-Atta Estate, Awotan Ibadan,
                  Nigeria.
                </p>
              </div>

              <div className="email">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                <h4>Email:</h4>
                <p>akintayo.ayinde@gmail.com</p>
              </div>

              <div className="phone">
                <i className="fa fa-mobile" aria-hidden="true"></i>
                <h4>Call:</h4>
                <p>+234 706 9053 540</p>
              </div>

              <div className="iframe">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63296.83431922619!2d3.8007661767214587!3d7.459483742695292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039f394e876782b%3A0x54adc6c910a78864!2sAtaa%20Estate%20Awotan%20Apete%20Ibadan!5e0!3m2!1sen!2sng!4v1669548644365!5m2!1sen!2sng"
                  width="300px"
                  height="255px"
                  style={{ border: 0 }}
                  title="myFrame"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="c-flex2">
            <form
              action="/"
              ref={form}
              onSubmit={sendEmail}
              className="email-form"
            >
              <div className="form-flex">
                <div className="form-group col-6">
                  <label for="name">Your Name</label>
                  <br />
                  <br />
                  <input type="text" size={36} name="name" id="name" required />
                </div>

                <div className="form-group col-6">
                  <label for="name">Your Email</label>
                  <br />
                  <br />
                  <input
                    type="email"
                    size={36}
                    name="email"
                    id="email"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label for="name">Subject</label>
                <br />
                <br />
                <input
                  type="text"
                  size={82}
                  name="subject"
                  id="subject"
                  required
                />
              </div>

              <div className="form-group ">
                <label for="name">Message</label>
                <br />
                <br />
                <textarea name="message" id="" cols="71" rows="10"></textarea>
              </div>

              <div className="text-center">
                <button type="submit">
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComp;
