import "../styles/products.css";
import One from "/images/1.avif";
import Two from "/images/2.avif";
import Three from "/images/3.avif";
import { Fade } from "react-reveal";

const Portfolio = () => {
  // Dummy product data
  const products = [
    {
      id: 1,
      title: "Product 1",
      category: "App",
      image: `${One}`,
    },
    {
      id: 2,
      title: "Product 2",
      category: "Web",
      image: `${Two}`,
    },
    {
      id: 3,
      title: "Product 3",
      category: "App",
      image: `${Three}`,
    },
    {
      id: 4,
      title: "Product 4",
      category: "App",
      image: `${One}`,
    },
    {
      id: 5,
      title: "Product 5",
      category: "Web",
      image: `${Two}`,
    },
    {
      id: 6,
      title: "Product 6",
      category: "App",
      image: `${Three}`,
    },
    {
      id: 7,
      title: "Product 7",
      category: "App",
      image: `${One}`,
    },
    {
      id: 8,
      title: "Product 8",
      category: "Web",
      image: `${Two}`,
    },
    {
      id: 9,
      title: "Product 9",
      category: "App",
      image: `${Three}`,
    },
    // Add more products as needed
  ];

  return (
    <section id="portfolio" className="section-bg">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h3 className="product-title">Our Products</h3>
        </header>

        <ul id="portfolio-flters">
          <li data-filter="*" className="filter-active">
            All
          </li>
          <li data-filter=".filter-app">App</li>
          <li data-filter=".filter-web">Web</li>
          {/* Add more filter categories if needed */}
        </ul>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className={`col-lg-4 col-md-6 portfolio-item filter-${product.category}`}
            >
              <Fade bottom cascade>
                {" "}
                {/* Apply the Fade animation */}
                <div className="portfolio-wrap">
                  <figure>
                    <img
                      src={product.image}
                      className="img-fluid"
                      alt={product.title}
                    />
                    <a
                      href={product.image}
                      data-lightbox="portfolio"
                      data-title={product.title}
                      className="link-preview"
                    >
                      <i className="bi bi-plus"></i>
                    </a>
                    <a
                      href="portfolio-details.html"
                      className="link-details"
                      title="More Details"
                    >
                      <i className="bi bi-link"></i>
                    </a>
                  </figure>

                  <div className="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html">{product.title}</a>
                    </h4>
                    <p>{product.category}</p>
                  </div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
