
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/Footer.css';  
 

const Footer = () => {
  return (
    <div className="fb-bg">
       <div className="container footer-section">
      <div className="row">
        <div className="col-md-2">
          <h5>COMPANY INFO</h5>
          <ul className="list-unstyled">
            <li><a href="#">About</a></li>
            <li><a href="#">Social Responsibility</a></li>
            <li><a href="#">Affiliate</a></li>
            <li><a href="#">Fashion Blogger</a></li>
          </ul>
        </div>
        <div className="col-md-2">
          <h5>HELP &amp; SUPPORT</h5>
          <ul className="list-unstyled">
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">How to Order</a></li>
            <li><a href="#">How to Track</a></li>
            <li><a href="#">Size Chart</a></li>
          </ul>
        </div>
        <div className="col-md-2">
          <h5>CUSTOMER CARE</h5>
          <ul className="list-unstyled">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Payment</a></li>
            <li><a href="#">Bonus Point</a></li>
            <li><a href="#">Notices</a></li>
          </ul>
        </div>
        <div className="col-md-6">
      
        <div className="row">
                {/* Socials Section (Left) */}
                <div className="col-md-6">
                <h5>SOCIALS</h5>
                <div className="social-icons">
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-instagram"></i>
                    <i className="fa fa-tiktok"></i>
                    <i className="fa fa-snapchat"></i>
                </div>
                </div>
                <div className="col-md-6 text-end">
                <h5>PLATFORMS</h5>
      <i className="fa fa-android fa-2x"></i>
      <i className="fa fa-apple fa-2x ms-3"></i>
                </div>
         
                <div className="row mt-4">
    <div className="col-12">
      <h5 className="mt-4">SIGN UP</h5>
      <div className="subscribe-input input-group mb-3">
        <input className="form-control" placeholder="Your email" type="text" />
        <button className="btn btn-dark" type="button">SUBSCRIBE</button>
      </div>
      <p>
        By clicking the SUBSCRIBE button, you are agreeing to our <a href="#">Privacy &amp; Cookie Policy</a>
      </p>
    </div>
  </div>


        </div> 
        </div>
      
      </div>
      <div className="row mt-4">
  {/* Left Column: Footer Links */}
  <div className="col-md-6 text-start">
    <div className="footer-bottom">
      <p>©2010-2022 All Rights Reserved</p>
      <a href="#">Privacy Center</a> | 
      <a href="#">Privacy &amp; Cookie Policy</a> | 
      <a href="#">Manage Cookies</a> | 
      <a href="#">Terms &amp; Conditions</a> | 
      <a href="#">Copyright Notice</a> | 
      <a href="#">Imprint</a>
    </div>
  </div>

  {/* Right Column: WE ACCEPT */}
  <div className="col-md-6">
    <h5>WE ACCEPT</h5>
    <img
      src="..\src\image\pay.png" // Adjust the path to your image
      alt="Payment Methods"
      className="img-fluid" // Makes the image responsive
    />
  </div>
</div>



      
    </div></div>  
  );
};

export default Footer;
