// src/components/Footer.jsx
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Footer Start */}
      <div className="container-fluid footer py-5" style={{ backgroundColor: "   #0d2731ff" }}>
        <div className="container py-5">
          <div className="row g-5">
            {/* Our Office */}
            <div className="col-lg-4 col-md-6">
              <h5 className="text-uppercase text-light mb-4">Our Office</h5>
              <p className="mb-2 d-flex align-items-center">
                <FaMapMarkerAlt className="text-primary me-2" />
                Nagpur
              </p>
              <p className="mb-2 d-flex align-items-center">
                <FaPhoneAlt className="text-primary me-2" />
                +91-9834432773
              </p>
              <p className="mb-2 d-flex align-items-center">
                <FaEnvelope className="text-primary me-2" />
                nepalrudrakshacentre@gmail.com
              </p>
              <div className="d-flex pt-3">
                <a className="btn btn-square btn-light me-2" href="#"><FaTwitter /></a>
                <a className="btn btn-square btn-light me-2" href="#"><FaFacebookF /></a>
                <a className="btn btn-square btn-light me-2" href="#"><FaYoutube /></a>
                <a className="btn btn-square btn-light me-2" href="#"><FaLinkedinIn /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-4 col-md-6">
              <h5 className="text-uppercase text-light mb-4">Quick Links</h5>
              <div className="d-flex flex-column gap-2">
                <a className="btn btn-link text-light ps-0" href="/">Home</a>
                <a className="btn btn-link text-light ps-0" href="/Primium">Premium Quality Rudraksha</a>
                <a className="btn btn-link text-light ps-0" href="/Rudraksha">Rudraksha</a>
                <a className="btn btn-link text-light ps-0" href="/Rudrakshamala">Rudraksha Mala</a>
                <a className="btn btn-link text-light ps-0" href="/Siddhamala">Siddha Mala</a>
                <a className="btn btn-link text-light ps-0" href="/Combinationmala">Combination Mala</a>
                <a className="btn btn-link text-light ps-0" href="/Consultation">Rudraksha Consultation</a>
                 <a className="btn btn-link text-light ps-0" href="/About1">About Us</a>
                <a className="btn btn-link text-light ps-0" href="/Contact">Contact Us</a>
              </div>
            </div>

            {/* Gallery */}
            <div className="col-lg-4 col-md-12">
              <h4 className="text-uppercase text-light mb-4" >Gallery</h4>
              <div className="row g-1">
                <a href="/Gallary" className="col-4"><img className="img-fluid" src="/img/10-mukhi.webp" alt=""style={{height:'110px'}} /></a>
                <a href="/Gallary" className="col-4"><img className="img-fluid" src="/img/Rudraksga.jpg" alt="" style={{height:'110px'}} /></a>
                <a href="/Gallary" className="col-4"><img className="img-fluid" src="/img/combination.jpg" alt="" /></a>
                <a href="/Gallary" className="col-4"><img className="img-fluid" src="/img/bracelet.webp" alt="" /></a>
                <a href="/Gallary" className="col-4"><img className="img-fluid" src="/img/custom-mala.webp" alt="" /></a>
                <a href="/Gallary" className="col-4"><img className="img-fluid" src="/img/ru.jpg" alt="" style={{height:'110px'}}/></a>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Copyright Start */}
      <div className="container-fluid text-body copyright py-4" style={{ backgroundColor: "#07171fff" }}>
        <div className="container">
         
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0 text-light"> All Right Reserved by |
              &copy; <a className="fw-semi-bold text-light" href="#">Copyright 2026 Nepal Rudraksha Center</a>
            </div>
            
          </div>
        </div>
      
      {/* Copyright End */}
    </>
  );
};

export default Footer;
