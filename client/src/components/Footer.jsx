// src/components/Footer.js
import React from 'react';
import './footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
<div className='footer'>


    <div className="bg-dark text-white   text-center">
      <div className="container1">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-white">Who we are</a></li>
              <li><a href="/team" className="text-white">Our team</a></li>
              <li><a href="/careers" className="text-white">Careers</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li><a href="/services" className="text-white">What we offer</a></li>
              <li><a href="/support" className="text-white">Support</a></li>
              <li><a href="/contact" className="text-white">Contact us</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://facebook.com" className="text-white">Facebook</a></li>
              <li><a href="https://twitter.com" className="text-white">Twitter</a></li>
              <li><a href="https://instagram.com" className="text-white">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div id='foot' className="col-12 mt-3" style={{color:'white'}}>
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
      
    </div>
    
    </div>
 
  );
};

export default Footer;
