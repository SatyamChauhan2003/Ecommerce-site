import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="container-fluid" style={{backgroundColor:"black", color:"white"}}>
      <div className="row">
        <div className="col-3">
          <h5>Sign Up Today And Get</h5>
          <h5>Rs. 200 off On Your First Order.</h5>
          <input type="text" placeholder="Enter your e-mail" />
          <br />
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="col-2">
          <h5>Collection</h5>
          <p>Clothing</p>
          <p>Tops</p>
          <p>Sweaters</p>
          <p>Shoes</p>
          <p>Dresses</p>
        </div>
        <div className="col-2">
          <h5>Career at Toppers</h5>
          <p>About Toppers</p>
          <p>Contact us</p>
          <p>Gift cards</p>
          <p>Blog</p>
        </div>
        <div className="col-2">
          <h5>Need Help</h5>
          <p>Order Status</p>
          <p>Shipping & Delivery</p>
          <p>FAQ & Helps</p>
          <p>Terms & Conditions</p>
          <p>Legal & Privacy</p>
        </div>
        <div className="col-2">
          <h5>Exclusive Services</h5>
          <p>Call us : +1236547</p>
          <p>Send us an email</p>
          <p>See our stores</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
