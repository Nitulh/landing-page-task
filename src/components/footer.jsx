import "../styles/footer.css"; 
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        <div className="social-icons">
          <a href="#" className="icon">
            <BsFacebook />
          </a>
          <a href="#" className="icon">
            <BsTwitter />
          </a>
          <a href="#" className="icon">
            <BsInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
