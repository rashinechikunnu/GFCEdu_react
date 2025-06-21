// import React from "react";/*  */
import "./Footer.css";
import footer from "../../assets/img/footer.png";
import { Link } from "react-router-dom";
function Footer() {
  const handclick = () => {
    window.scrollTo(0.0)
  }
  
  return (
    <div>
      <footer className="footer">
        <div className="conatiner">
          <div className="footer_wrapper">
            <div className="footer_box">
              <div className="logo">
                <div className="logo-img">
                  <img src={footer} alt="" />
                </div>
                <h2>GFC Edu</h2>
              </div>
              <p>
                embrace the future o f innovation and technology with our
                cutting-edge tech business solution
              </p>
            </div>

            <div className="footer_box">
              <h4 className="footer_titles">Company</h4>
              <ul className="footer_links">
                <li><a href="/courses">our programs</a></li>
                <li><a href="/services">our plan</a></li>
              </ul>
            </div>

            <div className="footer_box">
              <h4 className="footer_titles">Quick Link</h4>
              <ul className="footer_links">
                <li><a href="/About" onClick={handclick}>About Us</a></li>
                <li><Link to='/Contact' onClick={handclick}>Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
