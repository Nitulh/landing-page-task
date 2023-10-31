// Import necessary styles and components for the '3cardFeature' section
import "../styles/feature.css";
import {
  GiMushroomsCluster,
  GiNautilusShell,
  GiPterodactylus,
} from "react-icons/gi";

const Feature = () => {
  return (
    <section className="featured-services">
      <div className="services-grid">
        <div className="service box-bg">
          <GiMushroomsCluster className="icon" />
          <h4 className="title-fea">
            <a href="#">Lorem Ipsum Delino</a>
          </h4>
          <p className="description">
            Voluptatum deleniti atque corrupti quos dolores et quas molestias
            excepturi sint occaecati cupiditate non provident
          </p>
        </div>
        <div className="service box-bg">
          <GiNautilusShell className="icon" />
          <h4 className="title-fea">
            <a href="#">Dolor Sitema</a>
          </h4>
          <p className="description">
            Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat tarad limino ata
          </p>
        </div>
        <div className="service  box-bg">
          <GiPterodactylus className="icon" />
          <h4 className="title-fea">
            <a href="#">Sed ut perspiciatis</a>
          </h4>
          <p className="description">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feature;
