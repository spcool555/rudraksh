// src/components/Appointment.jsx
import React, { useState } from "react";
import Seo from "./Seo";

const Appointment = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    birthPlace: "",
    birthDate: "",
    birthTime: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const whatsappNumber = "919834432773"; // your WhatsApp number

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullname, email, mobile, birthPlace, birthDate, birthTime, message } = formData;

    const text = `📌 New Appointment Request
-------------------------
👤 Name: ${fullname}
📧 Email: ${email}
📱 Mobile: ${mobile}
🏡 Birth Place: ${birthPlace}
📅 Birth Date: ${birthDate}
⏰ Birth Time: ${birthTime}
💬 Message: ${message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <>
    <Seo title="Home Page" description="This is the appoiment page"/>
    <div
      className="container-fluid appointment mt-6 mb-6 py-5 wow fadeIn"
      style={{ backgroundColor: "#122717" }}
      data-wow-delay="0.1s"
    >
      <style>{`
        @media (max-width: 991px) {
          .col-lg-6 {
            padding-right: 15px !important;
            padding-left: 15px !important;
          }
        }
        @media (max-width: 767px) {
          .row.gy-5.gx-0 {
            gap: 30px 0 !important;
          }
          .form-floating input, .form-floating textarea {
            font-size: 14px !important;
          }
        }
        @media (max-width: 480px) {
          .btn.btn-success {
            font-size: 14px;
            padding: 10px 0;
          }
          .col-md-6 {
            flex: 0 0 100%;
            max-width: 100%;
          }
        }
      `}</style>
      <div className="container pt-5">
        <div className="row gy-5 gx-0">
          {/* Left Info Section */}
          <div className="col-lg-6 pe-lg-5 wow fadeIn" data-wow-delay="0.3s">
            <h1 className="display-6 text-uppercase text-white mb-4">
              Connect With Nepal Rudraksha Centre
            </h1>
            <p className="text-white mb-5 wow fadeIn" data-wow-delay="0.4s">
              We provide authentic Rudraksha products and services. Feel free
              to reach out for custom malas, bracelets, or any queries.
            </p>

            <div className="d-flex align-items-start wow fadeIn" data-wow-delay="0.5s">
              <div className="btn-lg-square bg-white">
                <i className="bi bi-geo-alt text-dark fs-3"></i>
              </div>
              <div className="ms-3">
                <h6 className="text-white text-uppercase">Office Address</h6>
                <span className="text-white">Itwari, Nagpur</span>
              </div>
            </div>

            <hr className="bg-body" />

            <div className="d-flex align-items-start wow fadeIn" data-wow-delay="0.6s">
              <div className="btn-lg-square bg-white">
                <i className="bi bi-telephone text-dark fs-3"></i>
              </div>
              <div className="ms-3">
                <h6 className="text-white text-uppercase">Mobile Number</h6>
                <span className="text-white">+91 9834432773</span>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="col-lg-6 mb-n5 wow fadeIn" data-wow-delay="0.7s">
            <div className="bg-white p-5">
              <h2 className="text-uppercase mb-4 text-center">Online Appointment</h2>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  {/* Full Name */}
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0 bg-light"
                        id="fullname"
                        value={formData.fullname}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                      />
                      <label htmlFor="fullname">Full Name</label>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control border-0 bg-light"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>

                  {/* Mobile Number */}
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0 bg-light"
                        id="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Mobile Number"
                        required
                      />
                      <label htmlFor="mobile">Mobile Number</label>
                    </div>
                  </div>

                  {/* Birth Place */}
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0 bg-light"
                        id="birthPlace"
                        value={formData.birthPlace}
                        onChange={handleChange}
                        placeholder="Birth Place"
                      />
                      <label htmlFor="birthPlace">Birth Place</label>
                    </div>
                  </div>

                  {/* Birth Date and Birth Time side by side */}
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="date"
                        className="form-control border-0 bg-light"
                        id="birthDate"
                        value={formData.birthDate}
                        onChange={handleChange}
                      />
                      <label htmlFor="birthDate">Birth Date</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="time"
                        className="form-control border-0 bg-light"
                        id="birthTime"
                        value={formData.birthTime}
                        onChange={handleChange}
                      />
                      <label htmlFor="birthTime">Birth Time</label>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control border-0 bg-light"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Leave a message here"
                        style={{ height: "130px" }}
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>

                  {/* WhatsApp Send Button */}
                  <div className="col-12 text-center">
                    <button className="btn btn-success w-100 py-3" type="submit">
                      📩 Send via WhatsApp
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* End Form */}
        </div>
      </div>
    </div>
    </>
  );
};

export default Appointment;
