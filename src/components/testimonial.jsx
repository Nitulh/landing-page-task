
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/testimonials.css'; 
import One from "/images/1.avif";
import Two from "/images/2.avif";
import Three from "/images/3.avif";

const Testimonial = () => {
  return (
    <section id="testimonials" className="testimonial-section">
      <div className="">
        <h2 className="section-title">Testimonials</h2>
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000} // Auto-play interval in milliseconds
          transitionTime={500} // Transition time in milliseconds
          emulateTouch={true}
        >
          <div className="testimonial">
            <img src={One} alt="Person 1" />
            <p className="testimonial-text">
            &quot;I had a great experience with this app. It&apos;s user-friendly and has all the features I need. Highly recommended!&quot;
            </p>
            <p className="testimonial-author">- John Doe, App User</p>
          </div>
          <div className="testimonial">
            <img src={Two} alt="Person 2" />
            <p className="testimonial-text">
            &quot;This website design is outstanding. It exceeded my expectations, and I&apos;m really impressed with the quality of work.&quot;
            </p>
            <p className="testimonial-author">- Jane Smith, Web Developer</p>
          </div>
          <div className="testimonial">
            <img src={Three} alt="Person 3" />
            <p className="testimonial-text">
            &quot;I can&apos;t believe how easy and efficient this app is. It has simplified my tasks and saved me a lot of time.&quot;
            </p>
            <p className="testimonial-author">- Alice Johnson, App User</p>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
