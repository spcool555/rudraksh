import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <>
      {/* Features Start - Light Section */}
      <div className="container-fluid pt-6 pb-6">
        <div className="container">
          <div className="row g-4">
            {/* Feature 1 */}
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <div className="feature-item border h-100">
                <div className="feature-icon btn-xxl-square bg-primary mb-4 mt-n4">
                  <i className="fa fa-seedling fa-2x text-white"></i>
                </div>
                <div className="p-5 pt-0">
                  <h5 className="text-uppercase mb-3">Authentic Rudraksha</h5>
                  <p>
                    We provide 100% genuine Nepal Rudraksha beads with proper
                    origin verification.
                  </p>
                  <Link
                    className="position-relative text-body text-uppercase small d-flex justify-content-between"
                    to="#"
                  >
                    <b className="bg-white pe-3">Read More</b>
                    <i className="bi bi-arrow-right bg-white ps-3"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.4s">
              <div className="feature-item border h-100">
                <div className="feature-icon btn-xxl-square bg-primary mb-4 mt-n4">
                  <i className="fa fa-certificate fa-2x text-white" />
                </div>
                <div className="p-5 pt-0">
                  <h5 className="text-uppercase">Certified & Lab Tested</h5>
                  <p>
                    Each Rudraksha comes with a trusted certificate of
                    authenticity and lab test reports.
                  </p>
                  <Link
                    className="position-relative text-body text-uppercase small d-flex justify-content-between"
                    to="#"
                  >
                    <b className="bg-white pe-3">Read More</b>
                    <i className="bi bi-arrow-right bg-white ps-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <div className="feature-item border h-100">
                <div className="feature-icon btn-xxl-square bg-primary mb-4 mt-n4">
                  <i className="fa fa-hand-holding-heart fa-2x text-white" />
                </div>
                <div className="p-5 pt-0">
                  <h5 className="text-uppercase">Spiritual Benefits</h5>
                  <p>
                    Our Rudraksha malas are blessed and energised for maximum
                    spiritual & healing benefits.
                  </p>
                  <Link
                    className="position-relative text-body text-uppercase small d-flex justify-content-between"
                    to="#"
                  >
                    <b className="bg-white pe-3">Read More</b>
                    <i className="bi bi-arrow-right bg-white ps-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.6s">
  <div className="feature-item border h-100">
    <div className="feature-icon btn-xxl-square bg-primary mb-4 mt-n4">
      <i className="fa fa-handshake fa-2x text-white"></i>
    </div>
    <div className="p-5 pt-0">
      <h5 className="text-uppercase">Free Consultation</h5>
      <p>
        Take first achieving your goals free
        consultation now and get expert advice.
      </p>
      <Link
        className="position-relative text-body text-uppercase small d-flex justify-content-between"
        to="#"
      >
        <b className="bg-white pe-3">Read More</b>
        <i className="bi bi-arrow-right bg-white ps-3"></i>
      </Link>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>

      {/* Features Start - Dark Section */}
      <div
        className="container-fluid feature mt-6 mb-6 wow fadeIn bg-dark"
        data-wow-delay="0.1s"
        style={{ minHeight: "100vh" }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-end">
            {/* Right Side Content */}
            <div className="col-lg-6 text-lg-start">
              {/* Title */}
              <h1
                className="display-6 text-white text-uppercase mb-4 wow fadeIn"
                data-wow-delay="0.3s"
                style={{ marginTop: "20%" }}
              >
                Why Choose Our Original Rudraksha
              </h1>
              <p
                className="text-light mb-5 wow fadeIn"
                data-wow-delay="0.4s"
              >
                We provide 100% authentic, lab-tested, and certified Rudraksha
                beads directly sourced from Nepal and Indonesia. Each bead is
                blessed and energized to bring peace, health, and spiritual
                growth in your life.
              </p>

              {/* Features Grid */}
              <div className="row g-4">
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                  <div className="d-flex align-items-center border border-2 border-primary p-3 rounded bg-dark h-100">
                    <i className="fa fa-certificate fa-2x text-primary me-3" />
                    <h6 className="text-white mb-0">
                      Certified & Lab Tested
                    </h6>
                  </div>
                </div>

                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.6s">
                  <div className="d-flex align-items-center border border-2 border-primary p-3 rounded bg-dark h-100">
                    <i className="fa fa-leaf fa-2x text-primary me-3" />
                    <h6 className="text-white mb-0">100% Natural Beads</h6>
                  </div>
                </div>

                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                  <div className="d-flex align-items-center border border-2 border-primary p-3 rounded bg-dark h-100">
                    <i className="fa fa-hand-holding-heart fa-2x text-primary me-3" />
                    <h6 className="text-white mb-0">Blessed & Energized</h6>
                  </div>
                </div>

                

                {/* New Consultation Feature */}
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.9s">
                  <div className="d-flex align-items-center border border-2 border-primary p-3 rounded bg-dark h-100">
                    <i className="fa fa-comments fa-2x text-primary me-3" />
                    <h6 className="text-white mb-0">Free Consultation</h6>
                  </div>
                </div>
              </div>
              {/* End Features Grid */}
            </div>
          </div>
        </div>
      </div>
      {/* Features End */}
    </>
  );
};

export default Features;
