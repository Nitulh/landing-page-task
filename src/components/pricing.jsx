import "../styles/pricing.css";
import Hexa from "./hexa";

const pricingData = [
  {
    plan: "Basic Plan",
    price: "19",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    plan: "Pro Plan",
    price: "39",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  {
    plan: "Premium Plan",
    price: "79",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <header className="section-header">
          <h3 className="section-title">Our Pricing</h3>
        </header>
        <div className="hexa-one">
          <Hexa />
        </div>
        <div className="hexa-two">
          <Hexa />
        </div>
        {/* 
          {pricingData.map((item, index) => (
            <div className="pricing-item" key={index}>
              <h4 className="plan">{item.plan}</h4>
              <p className="price">{item.price}/month</p>
              <ul className="features">
                {item.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className="btn-price">Get Started</button>
            </div>
          ))}
        </div> */}

        <div className="pricing-container">
          {pricingData.map((item, index) => (
            <div key={index} className="pack-container">
              <div className="header-prc">
                <p className="title-prc">{item.plan}</p>
                <div className="price-container">
                  <span>$</span>
                  {item.price}
                  <span>/mo</span>
                </div>
              </div>
              <div>
                <ul className="lists-prc">
                  {item.features.map((feature, i) => (
                    <li key={i} className="list-prc">
                      <span>
                        <svg
                          aria-hidden="true"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.5 12.75l6 6 9-13.5"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                      <p>{feature}</p>
                    </li>
                  ))}
                  {/* <li className="list-prc">
        <span>
          <svg aria-hidden="true" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
        </span>
        <p>
          100+ components
        </p>
      </li>
      <li className="list-prc">
        <span>
          <svg aria-hidden="true" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
        </span>
        <p>
          2 month free updates
        </p>
      </li>
      <li className="list-prc">
        <span>
          <svg aria-hidden="true" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
        </span>
        <p>
          Life time technical support
        </p>
      </li> */}
                </ul>
              </div>
              <div className="button-container">
                <button type="button">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
