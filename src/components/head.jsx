// Import necessary styles and components for the 'hero section' section
import "../styles/head.css";

const Head = () => {
  const scrollToSection = () => {
    const targetElement = document.querySelector('#section2'); // Replace with the target section's ID
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth', // Make the scrolling smooth
      });
    }
  };
  return (
    <div className="hhead">
      <header className="header">
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Your Page</span>
            <span className="heading-primary--sub">is where it lands</span>
          </h1>
          <a href="#" onClick={scrollToSection} className="btn btn--white">
            burst to happen
          </a>
          
        </div>
      </header>
    </div>
  );
};

export default Head;
