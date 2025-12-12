import React from "react";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    // Carousel Start
    <div
      className="container-fluid p-0 mb-6 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div
        id="header-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          >
            <img
              className="img-fluid"
              src="img/rudraksha1.png"
              alt="Rudraksha"
            />
          </button>
          <button
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          >
            <img
              className="img-fluid"
              src="img/Rudraksga.jpg"
              alt="Metalcraft"
            />
          </button>
          <button
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          >
            <img
              className="img-fluid"
              src="img/rudraksh_0.png"
              alt="Rudraksha"
            />
          </button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img
              className="w-100"
              src="img/rudraksha1.png"
              alt="Rudraksha"
            />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center text-center h-100">
              <h1 className="display-4 text-uppercase text-white mb-3 animated fadeInDown">
                Sacred Rudraksha
              </h1>
              <p
                className="lead text-white mb-4 animated fadeInUp"
                style={{
                  maxWidth: "600px",
                  textAlign: "center",
                  whiteSpace: "normal",
                  wordWrap: "break-word",
                }}
              >
                Known as the ‘Tears of Lord Shiva’, Rudraksha beads are revered
                for their spiritual and healing powers. They bring peace of
                mind, enhance concentration, reduce stress, and provide
                protection against negative energies.
              </p>
              <Link
                href="/Contact"
                className="btn btn-primary py-3 px-4 animated zoomIn"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img
              className="w-100"
              src="img/Rudraksga.jpg"
              alt="Metalcraft"
            />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center text-center h-100">
              <h1 className="display-4 text-uppercase text-white mb-3 animated fadeInDown">
                Best Metalcraft Solutions
              </h1>
              <p
                className="lead text-white mb-4 animated fadeInUp"
                style={{
                  maxWidth: "600px",
                  textAlign: "center",
                  whiteSpace: "normal",
                  wordWrap: "break-word",
                }}
              >
                We provide top-quality metalcraft designs that combine
                durability, artistry, and tradition. From intricate patterns to
                modern innovations, our products are crafted to perfection.
              </p>
              <Link
                href="/Contact"
                className="btn btn-primary py-3 px-4 animated zoomIn"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img
              className="w-100"
              src="img/rudraksh_0.png"
              alt="Rudraksha"
            />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center text-center h-100">
              <h1 className="display-4 text-uppercase text-white mb-3 animated fadeInDown">
                Divine Energy Beads
              </h1>
              <p
                className="lead text-white mb-4 animated fadeInUp"
                style={{
                  maxWidth: "600px",
                  textAlign: "center",
                  whiteSpace: "normal",
                  wordWrap: "break-word",
                }}
              >
                Rudraksha beads channel positive energy, balance the chakras,
                and support meditation practices. A timeless symbol of divine
                connection and inner strength.
              </p>
              <Link
                href="/Contact"
                className="btn btn-primary py-3 px-4 animated zoomIn"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    // Carousel End
  );
};

export default Carousel;
