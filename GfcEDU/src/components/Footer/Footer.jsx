// import React from "react";/*  */
import "./Footer.css";
import footer from "../../assets/img/footer.png";
function Footer() {
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
                <li><a href="">our programs</a></li>
                <li><a href="">our plan</a></li>
                <li><a href="">become member</a></li>
              </ul>
            </div>

            <div className="footer_box">
              <h4 className="footer_titles">Quick Link</h4>
              <ul className="footer_links">
                <li><a href="">About Us</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">Support</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
