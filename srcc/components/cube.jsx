
import '../styles/socket.css';

function Cube () {
  return (
    <div className="cube">
      <header className="headercube">
        {/* <h1>Your Landing Page Headline</h1>
        <h2>Your Subheadline Goes Here</h2>
        <a href="#" className="cta-button">Get Started</a> */}
      </header>

      <section className="herocube">
        {/* <img src="your-hero-image.jpg" alt="Hero Image" /> */}
      </section>

      <section className="features">
        <h2>Features/Benefits</h2>
        <div className="feature">
          <img src="feature-image-1.jpg" alt="Feature 1" />
          <h3>Feature 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="feature">
          <img src="feature-image-2.jpg" alt="Feature 2" />
          <h3>Feature 2</h3>
          <p>
            Fusce vel dui nec eros volutpat varius.
          </p>
        </div>
        <div className="feature">
          <img src="feature-image-3.jpg" alt="Feature 3" />
          <h3>Feature 3</h3>
          <p>
            Phasellus dignissim neque id eros ultricies.
          </p>
        </div>
      </section>

      <section className="testimonials">
        <div className="testimonial">Testimonial 1</div>
        <div className="testimonial">Testimonial 2</div>
        <div className="testimonial">Testimonial 3</div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="step">Step 1: Lorem ipsum</div>
        <div className="step">Step 2: Lorem ipsum</div>
        <div className="step">Step 3: Lorem ipsum</div>
      </section>

      <section className="social-proof">
        <h2>Social Proof</h2>
        <p>Recognitions and awards go here.</p>
      </section>

      <section className="faqs">
        <h2>FAQs</h2>
        <p>FAQ content goes here.</p>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <a href="#" className="cta-button cta-button-bottom">Get Started</a>
      </section>
    </div>
  );
}

export default Cube;
