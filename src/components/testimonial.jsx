// Import the necessary components and styles for the testimonial section
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/testimonials.css";
// Import avatar images for the testimonials
import One from "/images/1.avif";
import Two from "/images/2.avif";
import Three from "/images/3.avif";

// Define the Testimonial component
const Testimonial = () => {
  return (
      // Create a testimonial section with an ID and class
    <section id="testimonials" className="testimonial-section">
      <div className="">
        <h2 className="section-title-test">Testimonials</h2>
          {/* Create a responsive Carousel component for displaying testimonials */}
        <Carousel
              showThumbs={false}      // Disable thumbnail images
              infiniteLoop={true}     // Enable infinite looping
              autoPlay={true}         // Automatically play the carousel
              interval={5000}         // Auto-play interval in milliseconds (5 seconds)
              transitionTime={500}   // Transition time in milliseconds (0.5 seconds)
              emulateTouch={true}    // Emulate touch interactions
        >
               {/* Testimonial 1 */}
          <div className="testimonial">
            <img src={One} alt="Person 1" />
                     {/* Testimonial text for Person 1 */}
            <p className="testimonial-text">
              &quot;I had a great experience with this app. <br />
              It&apos;s user-friendly and has all the features I need. Highly
              recommended!&quot;
            </p>
            <p className="testimonial-author">- John Doe, App User</p>
          </div>
          <div className="testimonial">
            <img src={Two} alt="Person 2" />
            <p className="testimonial-text">
              &quot;This website design is outstanding. <br />
              It exceeded my expectations, and I&apos;m really impressed with
              the quality of work.&quot;
            </p>
            <p className="testimonial-author">- Jane Smith, Web Developer</p>
          </div>
          <div className="testimonial">
            <img src={Three} alt="Person 3" />
            <p className="testimonial-text">
              &quot;I can&apos;t believe how easy and efficient this app is.{" "}
              <br />
              It has simplified my tasks and saved me a lot of time.&quot;
            </p>
            <p className="testimonial-author">- Alice Johnson, App User</p>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
