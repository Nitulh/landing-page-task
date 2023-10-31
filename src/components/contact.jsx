// Import necessary styles and components for the 'contact' section
import "../styles/contact.css";
import { BiGlobe, BiPhone, BiEnvelope } from "react-icons/bi";
const Contact = () => {
  return (
    <section id="contact" className="section-bg-contact">
      <div className="container" data-aos="fade-up">
        <div className="section-header-contact">
          <h3>Contact Us</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit <br />
            voluptatem accusantium doloremque
          </p>
        </div>
        <div className="row-info">
          <div className=" contact-info">
            <div className="col-md-4">
              <div className="contact-address">
                <i>
                  <BiGlobe />
                </i>

                <h3>Address</h3>
                <address> xyz, Dhanmondi, 1207, Bangladesh </address>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-phone">
                <i>
                  <BiPhone />
                </i>

                <h3>Phone Number</h3>
                <p>
                  <a href="tel:+155895548855">+1 1111 11111 11</a>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-email">
                <i>
                  <BiEnvelope />
                </i>
                <h3>Email</h3>
                <p>
                  <a href="mailto:info@example.com">info@example.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="form">
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="row">
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
