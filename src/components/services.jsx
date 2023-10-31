// Import necessary styles and components for the 'Features' section
import "../styles/services.css"; // Import CSS styles
import {
  GiBriefcase,
  GiBinoculars,
  GiCheckedShield,
  GiSun,
  GiShop,
  GiSnowflake1,
} from "react-icons/gi"; // Import icons from the 'react-icons/gi' library
import { Fade } from "react-reveal"; // Import the 'Fade' component from 'react-reveal' for animations

// Define the 'Service' component
const Service = () => {
  return (
      // Create a section with the ID 'services'
    <section id="services">
      <div className="container" data-aos="fade-up">
               {/* Header for the 'Service' section */}
        <header className="section-header-serv wow fadeInUp">
          <h3>Features</h3>
                  {/* Description text */}
          <p>
            Laudem latine persequeris id sed, ex fabulas delectus quo.
            <br /> No vel partiendo abhorreant vituperatoribus, ad pro quaestio
            laboramus. Ei ubique vivendum pro.
            <br /> At ius nisl accusam lorenta zanos paradigno tridexa
            panatarel.
          </p>
        </header>
    {/* 'row-serv' contains service boxes */}
        <div className="row-serv">
                  {/* Left-aligned animations for service boxes */}
          <Fade left cascade>
            {" "}
            {/* Wrap your content with Fade and specify the animation */}
                        {/* Service Box 1 */}
            <div
              className="col-lg-4 col-md-6 box-serv"
              data-aos="fade-up"
              data-aos-delay="100"
            > {/* Display an icon */}
              <div className="icon-serv">
                <GiBinoculars />
              </div>
              <h4 className="title-serv">
                <a href="">Lorem Ipsum</a>{/* Service title with a link */}
              </h4>
                       {/* Service description */}
              <p className="description-serv">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi sint occaecati cupiditate non provident
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 box-serv"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon-serv">
                <GiBriefcase />
              </div>
              <h4 className="title-serv">
                <a href="">Dolor Sitema</a>
              </h4>
              <p className="description-serv">
                Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat tarad limino ata
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 box-serv"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="icon-serv">
                <GiCheckedShield />
              </div>
              <h4 className="title-serv">
                <a href="">Sed ut perspiciatis</a>
              </h4>
              <p className="description-serv">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
          </Fade>
          <Fade right cascade>
            {" "}
            {/* Wrap your content with Fade and specify the animation */}
            <div
              className="col-lg-4 col-md-6 box-serv"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon-serv">
                <GiSun />
              </div>
              <h4 className="title-serv">
                <a href="">Magni Dolores</a>
              </h4>
              <p className="description-serv">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 box-serv"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="icon-serv">
                <GiSnowflake1 />
              </div>
              <h4 className="title-serv">
                <a href="">Nemo Enim</a>
              </h4>
              <p className="description-serv">
                At vero eos et accusamus and iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 box-serv"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="icon-serv">
                <GiShop />
              </div>
              <h4 className="title-serv">
                <a href="">Eiusmod Tempor</a>
              </h4>
              <p className="description-serv">
                Et harum quidem rerum facilis est and expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Service;
