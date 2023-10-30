import { useEffect, useState } from "react";
import "../styles/empty.css";
import { GiChart, GiLightBulb, GiCalendar } from 'react-icons/gi';
import One from "/images/1.avif";
import Two from "/images/2.avif";
import Three from "/images/3.avif";


const Empty = () => {
  const [scrollRanges, setScrollRanges] = useState({
    mission: 0,
    plan: 0,
    vision: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Define your desired scroll range values for each section (adjust as needed)
      // const startRangeMission = 1800;
      // const endRangeMission = 2000;
      const startRangeMission = 1400;
      const endRangeMission = 1600;
      const startRangePlan = 1600;
      const endRangePlan = 1800;
      const startRangeVision = 1800;
      const endRangeVision = 2000;

      const calculateScrollRange = (startRange, endRange) => {
        if (scrollPosition >= startRange && scrollPosition <= endRange) {
          return (scrollPosition - startRange) / (endRange - startRange);
        }
        if (scrollPosition < startRange) {
          return 0;
        }
        if (scrollPosition > endRange) {
          return 1;
        }
        return 0;
      };

      setScrollRanges({
        mission: calculateScrollRange(startRangeMission, endRangeMission),
        plan: calculateScrollRange(startRangePlan, endRangePlan),
        vision: calculateScrollRange(startRangeVision, endRangeVision),
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
        <div className="col-md-4 about-col" style={{ opacity: scrollRanges.mission }}>
          <div className="img">
            <img src={One} alt="first_image" className="img-fluid" />
            <div className="icon">
              <GiChart />
            </div>
          </div>
          <h2 className="title">
            <a href="#">Our Mission</a>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="col-md-4 about-col" style={{ opacity: scrollRanges.plan }}>
          <div className="img">
            <img src={Two} alt="second_image" className="img-fluid" />
            <div className="icon">
            <GiLightBulb/>
            </div>
          </div>
          <h2 className="title">
            <a href="#">Our Plan</a>
          </h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
        <div className="col-md-4 about-col" style={{ opacity: scrollRanges.vision }}>
          <div className="img">
            <img src={Three} alt="third_image" className="img-fluid" />
            <div className="icon">
             <GiCalendar/>
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
