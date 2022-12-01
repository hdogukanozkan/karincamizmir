import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <div className="cart">
        <h2>Contact Us</h2>
        <p>+999 888 777</p>
        <div className="social">
          <BsFacebook size={35} />
          <BsInstagram size={35} />
          <BsTwitter size={35} />
        </div>
      </div>
      <div className="cart">
        <h2>Subscribe to our newsletters.</h2>
        <input type="text" placeholder="Your Email..." />
        <input type="submit" />
      </div>
      <div className="cart">
        <h2>We accept all credit cards.</h2>
        <div className="credit">
          <FaCcVisa size={35} />
          <FaCcMastercard size={35} />
          <FaCcPaypal size={35} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
