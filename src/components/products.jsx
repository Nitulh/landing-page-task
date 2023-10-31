// Import necessary styles, images, and components for the 'Portfolio' section
import "../styles/products.css"; // Import CSS styles
import One from "/images/1.avif";// Import image One
import Two from "/images/2.avif"; // Import image Two
import Three from "/images/3.avif";// Import image Three
import { Fade } from "react-reveal"; // Import the 'Fade' component from 'react-reveal' for animations


// Define the 'Portfolio' component
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
        // Create a section with the ID 'portfolio' and a background color
    <section id="portfolio" className="section-bg">
      <div className="container" data-aos="fade-up">
           {/* Header for the 'Portfolio' section */}
        <header className="section-header">
          <h3 className="product-title">Our Products</h3>
        </header>
     {/* Filter options for product categories */}
        <ul id="portfolio-flters">
          <li data-filter="*" className="filter-active">
            All
          </li>
          <li data-filter=".filter-app">App</li>
          <li data-filter=".filter-web">Web</li>
          {/* Add more filter categories if needed */}
        </ul>
     {/* Display product items in a grid layout */}
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
                      <i className="bi bi-plus"></i>{/* Display a plus icon for image preview */}
                    </a>
                    <a
                      href="portfolio-details.html"
                      className="link-details"
                      title="More Details"
                    >
                      <i className="bi bi-link"></i>{/* Display a link icon for more details */}
                    </a>
                  </figure>
   {/* Information about the product */}
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

// Export the 'Portfolio' component
export default Portfolio;
