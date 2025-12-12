// src/components/Services.jsx
import React from "react";


const Services = () => {
  return (
    <div className="container-fluid service pt-6 pb-6">
      <div className="container">
        {/* Section Title */}
        <div
          className="text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "700px" }}
        >
          <h1 className="display-6 text-uppercase mb-5">
            Authentic Rudraksha Products & Services
          </h1>
          <p className="mb-4 text-muted">
            Explore our range of genuine Nepalese Rudraksha malas, bracelets,
            pendants and value-added services — all hand-checked, certified and
            blessed.
          </p>
        </div>

        <div className="row g-4">
          {/* Service 1 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item h-100">
              <div className="service-inner pb-5" style={{marginTop:'1px'}}>
                <img
                  className="img-fluid w-100"
                  src="/img/mala-shivaling.jpg"
                  alt="Rudraksha Mala - Traditional"
                  style={{height:'315px'}}
                />
                <div className="service-text px-4 pt-4">
                  <h5 className="text-uppercase">Traditional Mala</h5>
                  <p>
                    Handstrung Nepalese malas using high-grade beads for daily
                    japa and spiritual practice.
                  </p>
                </div>
                <a className="btn btn-light px-3" href="#">
                  Read More <i className="bi bi-chevron-double-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="service-item h-100">
              <div className="service-inner pb-5">
                <img
                  className="img-fluid w-100"
                  src="/img/bracelet.webp"
                  alt="Rudraksha Bracelet"
                />
                <div className="service-text px-4 pt-4">
                  <h5 className="text-uppercase">Bracelets</h5>
                  <p>
                    Beautifully crafted bracelets for everyday wear — available
                    in multiple mukhi counts.
                  </p>
                </div>
                <a className="btn btn-light px-3" href="#">
                  Read More <i className="bi bi-chevron-double-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item h-100">
              <div className="service-inner pb-5">
                <img
                  className="img-fluid w-100"
                  src="/img/pendant.jpg"
                  alt="Rudraksha Pendant"
                />
                <div className="service-text px-4 pt-4">
                  <h5 className="text-uppercase">Pendants</h5>
                  <p>
                    Custom pendants that preserve energy while adding elegance
                    and beauty.
                  </p>
                </div>
                <a className="btn btn-light px-3" href="#">
                  Read More <i className="bi bi-chevron-double-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Service 4 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
            <div className="service-item h-100">
              <div className="service-inner pb-5">
                <img
                  className="img-fluid w-100"
                  src="/img/rudraksha1.png"
                  alt="Rudraksha Mukhi Beads"
                  style={{height:'315px'}}
                />
                <div className="service-text px-4 pt-4">
                  <h5 className="text-uppercase">Mukhi Beads</h5>
                  <p>
                    From 1-mukhi to 21-mukhi — certified beads with authenticity
                    reports.
                  </p>
                </div>
                <a className="btn btn-light px-3" href="#">
                  Read More <i className="bi bi-chevron-double-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Service 5 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item h-100">
              <div className="service-inner pb-5">
                <img
                  className="img-fluid w-100"
                  src="/img/custom-mala.webp"
                  alt="Custom Rudraksha Mala"
                />
                <div className="service-text px-4 pt-4">
                  <h5 className="text-uppercase">Custom Malas</h5>
                  <p>
                    Personalized malas — bead selection, thread, spacers and
                    length per your choice.
                  </p>
                </div>
                <a className="btn btn-light px-3" href="#">
                  Read More <i className="bi bi-chevron-double-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Service 6 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
            <div className="service-item h-100">
              <div className="service-inner pb-5">
                <img
                  className="img-fluid w-100"
                  src="/img/certified.jpeg"
                  alt="Rudraksha Certification"
                />
                <div className="service-text px-4 pt-4">
                  <h5 className="text-uppercase">Certification</h5>
                  <p>
                    Lab testing and certification services to ensure your
                    Rudraksha is authentic.
                  </p>
                </div>
                <a className="btn btn-light px-3" href="#">
                  Read More <i className="bi bi-chevron-double-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Services;
