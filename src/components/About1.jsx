import React from "react";
import Seo from "./Seo";

const About1 = () => {
  return (
    <>
     <style>{`
       .wrapper {
          padding-bottom: 90px;
          margin-top: -50px;
        }
        .divider {
          position: relative;
          margin-top: 90px;
          height: 1px;
        }
        .div-transparent:before {
          content: "";
          position: absolute;
          top: 0;
          left: 5%;
          right: 5%;
          width: 90%;
          height: 1px;
          background-image: linear-gradient(to right, transparent, rgb(48,49,51), transparent);
        }
        .div-dot:after {
          content: "";
          position: absolute;
          z-index: 1;
          top: -9px;
          left: calc(50% - 9px);
          width: 18px;
          height: 18px;
          background-color: goldenrod;
          border: 1px solid rgb(48,49,51);
          border-radius: 50%;
          box-shadow: inset 0 0 0 2px white,
                      0 0 0 4px white;
        }
      `}</style>
      <Seo title="Home Page" description="This is the about1 page"/>
      {/* About Start */}
      <div className="container-fluid pt-6 pb-6">
        <div className="container">
          <div className="row g-5">
            {/* Image */}
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img">
                <img className="img-fluid w-100" src="img/mala.jpg" alt="Rudraksha Mala" />
              </div>
            </div>

            {/* Content */}
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="fs-3 text-uppercase mb-4">
                Nepal Rudraksha Centre — Genuine Rudraksha, Spiritual Well-being
              </h1>
              <p className="mb-4">
                Nepal Rudraksha Centre offers authentic Rudraksha beads and malas sourced from the foothills of the Himalayas.
                Each bead is hand-selected, tested for authenticity, and crafted into malas and jewellery that preserve
                traditional spiritual value while matching modern aesthetics.
              </p>

              

              <p><i className="fa fa-check-square text-primary me-3"></i>Genuine Nepalese Rudraksha beads graded by certified experts.</p>
              <p><i className="fa fa-check-square text-primary me-3"></i>Wide range: 1-Mukhi to 21-Mukhi, malas, bracelets and pendants.</p>
              <p><i className="fa fa-check-square text-primary me-3"></i>Detailed care instructions and spiritual guidance with every purchase.</p>

              <div className="border border-5 border-primary p-4 text-center mt-4">
                <h4 className="lh-base text-uppercase mb-0">Purity, Tradition & Blessing — Genuine Rudraksha from Nepal</h4>
                <p className="mb-0 mt-2">Visit our store or contact us for custom malas, puja-ready sets, and certificate details.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

 <div className="wrapper">
          <div className="divider div-transparent div-dot"></div>
        </div>

       {/* About Start */}
      <div className="container-fluid pt-6 pb-6">
        <div className="container">
          <div className="row g-5">
            {/* Image */}
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div >
                <img className="img-fluid w-100" src="img/certified1.jpg" alt="Rudraksha Mala" />
              </div>
            </div>

            {/* Content */}
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="fs-3 text-uppercase mb-4">
               International Gemological Laboratory Certified Teasted
              </h1>
              <p className="mb-4">
                Nepal Rudraksha Centre offers authentic Rudraksha beads and malas sourced from the foothills of the Himalayas.
                Each bead is hand-selected, tested for authenticity, and crafted into malas and jewellery that preserve
                traditional spiritual value while matching modern aesthetics.
              </p>

              <div className="row g-5 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 btn-xl-square bg-light me-3">
                      <i className="fa fa-certificate fa-2x text-primary"></i>
                    </div>
                    <h5 className="lh-base text-uppercase mb-0">Authenticity Certified</h5>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 btn-xl-square bg-light me-3">
                      <i className="fa fa-hand-holding-heart fa-2x text-primary"></i>
                    </div>
                    <h5 className="lh-base text-uppercase mb-0">Handmade & Ethically Sourced</h5>
                  </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>


   <div className="wrapper">
          <div className="divider div-transparent div-dot"></div>
        </div>

      {/* Features Start */}
      <div className="container-fluid pt-6 pb-6">
        <div className="container pt-4">
          <div className="row g-0 feature-row wow fadeIn" data-wow-delay="0.1s">

            {/* Feature 1 */}
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
  <div className="feature-item border h-100">
    <div className="feature-icon btn-xxl-square bg-primary mb-4 mt-n4">
      <i className="fa fa-seedling fa-2x text-white"></i>
    </div>
    <div className="p-5 pt-0">
      <h5 className="text-uppercase mb-3">Authentic Rudraksha</h5>
      <p>We provide 100% genuine Nepal Rudraksha beads with proper origin verification.</p>
      <a
        className="position-relative text-body text-uppercase small d-flex justify-content-between"
        href="#"
      >
        <b className="bg-white pe-3">Read More</b>
        <i className="bi bi-arrow-right bg-white ps-3"></i>
      </a>
    </div>
  </div>
</div>


            {/* Feature 2 */}
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.4s">
              <div className="feature-item border h-100">
                <div className="feature-icon btn-xxl-square bg-primary mb-4 mt-n4">
                  <i className="fa fa-certificate fa-2x text-white"></i>
                </div>
                <div className="p-5 pt-0">
                  <h5 className="text-uppercase">Certified & Lab Tested</h5>
                  <p>Each Rudraksha comes with a trusted certificate of authenticity and lab test reports.</p>
                  <a className="position-relative text-body text-uppercase small d-flex justify-content-between" href="#">
                    <b className="bg-white pe-3">Read More</b>
                    <i className="bi bi-arrow-right bg-white ps-3"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <div className="feature-item border h-100">
                <div className="feature-icon btn-xxl-square bg-primary mb-4 mt-n4">
                  <i className="fa fa-hand-holding-heart fa-2x text-white"></i>
                </div>
                <div className="p-5 pt-0">
                  <h5 className="text-uppercase">Spiritual Benefits</h5>
                  <p>Our Rudraksha malas are blessed and energised for maximum spiritual & healing benefits.</p>
                  <a className="position-relative text-body text-uppercase small d-flex justify-content-between" href="#">
                    <b className="bg-white pe-3">Read More</b>
                    <i className="bi bi-arrow-right bg-white ps-3"></i>
                  </a>
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
        Take the first step toward achieving your goals free
        consultation now and get expert advice.
      </p>
      <a
        className="position-relative text-body text-uppercase small d-flex justify-content-between"
        href="#"
      >
        <b className="bg-white pe-3">Read More</b>
        <i className="bi bi-arrow-right bg-white ps-3"></i>
      </a>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
      {/* Features End */}

    

     
    </>
  );
};

export default About1;
