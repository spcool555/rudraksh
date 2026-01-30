import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Seo from './Seo'

const Home = () => {
  return (
    <>
      <Seo title="Home Page" description="This is the about page"/>
      {/* Topbar Start */}
      <div className="position-sticky container-fluid bg-primary text-white py-2 d-none d-lg-block wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between flex-wrap">
            {/* Logo + Name */}
            <div className="d-flex align-items-center">
              <img src="img/logo1.png" alt="Logo" style={{ height: "40px" }} className="me-2" />
             <h5 className="text-white m-0">
  <Link to="/" style={{ color: "white", textDecoration: "none" }}>
    NEPAL RUDRAKSHA CENTRE
  </Link>
</h5>

            </div>

            {/* Location */}
            <div className="d-flex align-items-center">
              <i className="fa fa-map-marker-alt me-2"></i>
              <small>Kathmandu, Nepal</small>
            </div>

            {/* Email */}
            <div className="d-flex align-items-center">
              <i className="fa fa-envelope me-2"></i>
              <small>nepalrudrakshacentre@gmail.com</small>
            </div>

            {/* Phone */}
            <div className="d-flex align-items-center">
              <i className="fa fa-phone-alt me-2"></i>
              <small>+977-9801234567</small>
            </div>

            {/* Social Icons */}
            <div className="d-flex align-items-center">
              <a className="btn btn-sm-square btn-light text-primary ms-2" href="#"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-sm-square btn-light text-primary ms-2" href="#"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-sm-square btn-light text-primary ms-2" href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <div className="container-fluid bg-white sticky-top wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-white navbar-light p-lg-0">
            <a href="assets/index.html" className="navbar-brand d-lg-none">
              <h1 className="fw-bold m-0">WELDORK</h1>
            </a>
            <button
              type="button"
              className="navbar-toggler me-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav">
                <Link to="index.html" className="nav-item nav-link active">Home</Link>
                <Link to="about.html" className="nav-item nav-link">About</Link>
                <Link to="service.html" className="nav-item nav-link">Services</Link>

                <div className="nav-item dropdown">
                  <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                  <div className="dropdown-menu bg-light rounded-0 rounded-bottom m-0">
                    <Link to="feature.html" className="dropdown-item">Rudraksha</Link>
                    <Link to="team.html" className="dropdown-item">Exclusive</Link>
                    <Link to="testimonial.html" className="dropdown-item">Rudraksha consultation</Link>
                    <Link to="appoinment.html" className="dropdown-item">Siddha Mala</Link>
                  </div>
                </div>

                <Link to="contact.html" className="nav-item nav-link">Contact</Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}
      {/* About Start */}
      <div className="container-fluid pt-6 pb-6">
        <div className="container">
          <div className="row g-5">
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

              <div className="row g-5 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 btn-xl-square bg-light me-3">
                      <i className="fa fa-certificate fa-2x text-primary"></i>
                    </div>
                    <h5 className="lh-base text-uppercase mb-0">
                      Authenticity Certified
                    </h5>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 btn-xl-square bg-light me-3">
                      <i className="fa fa-hand-holding-heart fa-2x text-primary"></i>
                    </div>
                    <h5 className="lh-base text-uppercase mb-0">
                      Handmade & Ethically Sourced
                    </h5>
                  </div>
                </div>
              </div>

              <p>
                <i className="fa fa-check-square text-primary me-3"></i> Genuine
                Nepalese Rudraksha beads graded by certified experts.
              </p>
              <p>
                <i className="fa fa-check-square text-primary me-3"></i> Wide
                range: 1-Mukhi to 21-Mukhi, malas, bracelets and pendants.
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
      {/* About End */}
      
    </>
  )
}

export default Home