import { useEffect, useState } from 'react';
import '../styles/nav.css';
import { BiLogoReact } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
    return (
      <nav className={`navbar ${showMenu ? 'open' : ''} ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <BiLogoReact size={30} />

         <button className="button" data-text="Awesome">
  <span className="actual-text">&nbsp;YLP&nbsp;</span>
  <span aria-hidden="true" className="hover-text">&nbsp;YLP&nbsp;</span>
</button>

        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          {showMenu ? <GiHamburgerMenu class="rotate-hamburger" /> : <GiHamburgerMenu/>}
        </button>
        <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
          <li>
            <a href="#section1">Home</a>
          </li>
          <li>
            <a href="#section2">About</a>
          </li>
          <li>
            <a href="#section3">Features</a>
          </li>
          <li>
            <a href="#section4">Testimonials</a>
          </li>
          <li>
            <a href="#section5">Products</a>
          </li>
          <li>
            <a href="#section6">Pricing</a>
          </li>
          <li>
            <a href="#section7">Contact</a>
          </li>
          <li>
            <a href="#section8">Subscribe</a>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navigation;
