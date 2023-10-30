import { useEffect, useState } from "react";
import "../styles/empty.css";

const Empty = () => {
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Define your desired scroll range values (adjust as needed)
      const startRange = 1800;
      const endRange = 2000;

      if (scrollPosition >= startRange && scrollPosition <= endRange) {
        const rangePercentage = (scrollPosition - startRange) / (endRange - startRange);
        setScrollRange(rangePercentage);
      } else if (scrollPosition < startRange) {
        setScrollRange(0);
      } else if (scrollPosition > endRange) {
        setScrollRange(1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section id="about">
    <div className="container">
      <header className="section-header">
        <h3>About Us</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </header>
      <div className="row about-cols">
        <div className="col-md-4 about-col" style={{ opacity: scrollRange }}>
          <div className="img">
            <img src="assets/img/about-mission.jpg" alt="" className="img-fluid" />
            <div className="icon">
              <i className="bi bi-bar-chart"></i>
            </div>
          </div>
          <h2 className="title">
            <a href="#">Our Mission</a>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="col-md-4 about-col" style={{ opacity: scrollRange }}>
          <div className="img">
            <img src="assets/img/about-plan.jpg" alt="" className="img-fluid" />
            <div className="icon">
              <i className="bi bi-brightness-high"></i>
            </div>
          </div>
          <h2 className="title">
            <a href="#">Our Plan</a>
          </h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
        <div className="col-md-4 about-col" style={{ opacity: scrollRange }}>
          <div className="img">
            <img src="assets/img/about-vision.jpg" alt="" className="img-fluid" />
            <div className="icon">
              <i className="bi bi-calendar4-week"></i>
            </div>
          </div>
          <h2 className="title">
            <a href="#">Our Vision</a>
          </h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  </section>

  );
};

export default Empty;
