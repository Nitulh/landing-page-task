import "../styles/footer.css"; 

const Footer = () => {
  return (
    <footer className="footer-container">
    <div className="footer-item">
      <h3>YLP</h3>
      <p>
        Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.
      </p>
    </div>
    <div className="footer-item">
      <h4>Useful Links</h4>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Terms of service</a></li>
        <li><a href="#">Privacy policy</a></li>
      </ul>
    </div>
    <div className="footer-item">
      <h4>Contact Us</h4>
      <p>
        xyz <br />
        Dhanmondi, 1207 <br />
        Bangladesh <br />
        <strong>Phone:</strong> +1 1111 11111 11 <br />
        <strong>Email:</strong> info@example.com
      </p>
    </div>
    <div className="footer-item">
      <h4>Our Newsletter</h4>
      <p>
        Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.
      </p>
      <form action="" method="post">
        <input type="email" name="email" placeholder="Your Email" />
        <input type="submit" value="Subscribe" />
      </form>
    </div>
  </footer>
  );
};

export default Footer;
