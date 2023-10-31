import "../styles/pricing.css";
import Hexa from "./hexa";

const pricingData = [
  {
    plan: "Basic Plan",
    price: "$19",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    plan: "Pro Plan",
    price: "$39",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  {
    plan: "Premium Plan",
    price: "$79",
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
        <div className="pricing-container">
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
        </div>
      </div>
    </section>
  );
};

export default Pricing;
