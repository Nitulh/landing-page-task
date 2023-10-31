import { Fade } from "react-reveal"; // Import the Fade component
import "../styles/callToAction.css";

const CallToAction = () => {
  return (
    <section id="call-to-action">
      <div className="container text-center" data-aos="zoom-in">
        <Fade bottom>
          {/* Wrap the content you want to animate with the Fade component */}
          <h3>Call To Action</h3>
        </Fade>
        <Fade bottom delay={200}>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </Fade>
        <Fade bottom delay={400}>
          <a className="cta-btn" href="#">
            Call To Action
          </a>
        </Fade>
      </div>
    </section>
  );
};

export default CallToAction;
