import React from "react";

const About = () => {
  return (
    <div className="container-fluid pt-6 pb-6 about">
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Image */}
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="about-img">
              <img
                className="img-fluid w-100"
                src="img/mala.jpg"
                alt="Rudraksha Mala"
              />
            </div>
          </div>

          {/* Content */}
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <h1 className="fs-3 text-uppercase mb-4">
              Nepal Rudraksha Centre — Genuine Rudraksha, Spiritual Well-being
            </h1>
            <p className="mb-4">
              Nepal Rudraksha Centre offers authentic Rudraksha beads and malas
              sourced from the foothills of the Himalayas. Each bead is
              hand-selected, tested for authenticity, and crafted into malas
              and jewellery that preserve traditional spiritual value while
              matching modern aesthetics.
            </p>

            <p>
              <i className="fa fa-check-square text-primary me-3"></i> Genuine
              Nepalese Rudraksha beads graded by certified experts.
            </p>
            <p>
              <i className="fa fa-check-square text-primary me-3"></i> Wide
              range: 1-Mukhi to 16-Mukhi, malas, bracelets and pendants.
            </p>
            <p>
              <i className="fa fa-check-square text-primary me-3"></i> Detailed
              care instructions and spiritual guidance with every purchase.
            </p>

            <div className="border border-5 border-primary p-4 text-center mt-4">
              <h4 className="lh-base text-uppercase mb-0">
                Purity, Tradition & Blessing — Genuine Rudraksha from Nepal
              </h4>
              <p className="mb-0 mt-2">
                Visit our store or contact us for custom malas, puja-ready
                sets, and certificate details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
