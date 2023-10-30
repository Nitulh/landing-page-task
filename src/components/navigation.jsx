import { useEffect, useState } from "react";
import "../styles/nav.css";
import { BiLogoReact } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";

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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar ${showMenu ? "open" : ""} ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="logo">
        <BiLogoReact size={30} />

        <button className="button" data-text="Awesome">
          <span className="actual-text">&nbsp;YLP&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;YLP&nbsp;
          </span>
        </button>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {showMenu ? (
          <GiHamburgerMenu class="rotate-hamburger" />
        ) : (
          <GiHamburgerMenu />
        )}
      </button>
      <ul className={`nav-links ${showMenu ? "show" : ""}`}>
        <li>
          <Link to="section1" smooth={true} duration={500} className="pointer-cursor ">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="section2"
            smooth={true}
            duration={500}
            className="pointer-cursor"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="section3"
            smooth={true}
            duration={500}
            className="pointer-cursor"
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            to="section4"
            smooth={true}
            duration={500}
            className="pointer-cursor"
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="section5"
            smooth={true}
            duration={500}
            className="pointer-cursor"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="section6"
            smooth={true}
            duration={500}
            className="pointer-cursor"
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            to="section7"
            smooth={true}
            duration={500}
            className="pointer-cursor"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="section8"
            smooth={true}
            duration={500}
            className="pointer-cursor"
          >
            Action
          </Link>
        </li>
        <li>
          <Link
            to="section9"
            smooth={true}
            duration={500}
            className="pointer-cursor"
          >
            Subscribe
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
