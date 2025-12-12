import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const styles = {
    marquee: {
      width: '100%',
      height: '25px',
      backgroundColor: '#CE9233',
      color: 'white',
      fontSize: '15px',
      fontWeight: 'bold',
      padding: '0.3rem 0',
    },
  };

  return (
    <>
      {/* Top Marquee */}
      <div style={{ position: 'sticky', top: '0', zIndex: 20 }}>
        <div style={styles.marquee}>
          <marquee behavior="scroll" direction="left" scrollAmount="10">
            ૐ ALL THE IMAGES ARE FOR REFERANCE ONLY. THEIR SIZE ,COLOR AND SHAPE MAY VARY, SHOP NOW AT NEPAL RUDRAKSHA CENTER. ૐ
          </marquee>
        </div>
      </div>

      {/* Top Info Bar */}
      <div className="container-fluid bg-primary text-white py-2 d-none d-lg-block" style={{ position: 'sticky', top: '25px', zIndex: 15 }}>
        <div className="container d-flex align-items-center justify-content-between flex-wrap">
          {/* Logo + Name */}
          <div className="d-flex align-items-center">
            <img src="img/logo1.png" alt="Logo" style={{ height: '40px' }} className="me-2" />
            <h5 className="text-white m-0">
 
    NEPAL RUDRAKSHA CENTRE
  
</h5>

          </div>

     <div style={{display:'flex',gap:'1%',width:'50%'}}>
           {/* Location */}
          <div className="d-flex align-items-center">
            <i className="fa fa-map-marker-alt me-2"></i>
            <small> Nagpur</small>
          </div>

          {/* Email */}
          <div className="d-flex align-items-center">
            <i className="fa fa-envelope me-2"></i>
            <small>nepalrudrakshacentre@gmail.com</small>
          </div>

          {/* Phone */}
          <div className="d-flex align-items-center">
            <i className="fa fa-phone-alt me-2"></i>
            <small>+91-9834432773</small>
          </div>
     </div>

          {/* Social Icons */}
          
        </div>
      </div>

     {/* Navbar Start */}
      <div className="container-fluid bg-white sticky-top wow fadeIn" data-wow-delay="0.1s"   style={{ position: "sticky", top: "20px", zIndex: 13,width:'100%'}}>
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-white navbar-light p-lg-0">
            <a href="assets/index.html" className="navbar-brand d-lg-none" style={{display:'flex'}}>
            <img src="img/logo1.png" alt="Logo" style={{ height: "40px" }} className="me-2" />
              <h1 className="fw-bold m-0">Nepal Rudraksha Center </h1>
            </a>
            <button
              type="button"
              className="navbar-toggler me-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse" >
              <div className="navbar-nav" >
                
                <a href="/" className="nav-item nav-link active">Home</a>
                <a href="/About1" className="nav-item nav-link">About</a>
                
               <a href="/Rudraksha" className="nav-item nav-link">Rudraksha</a>
               <Link to="/Primium" className="nav-item nav-link">
                  Premium  Rudraksha
                </Link>
                <Link to="/Consultation" className="nav-item nav-link">
                 Rudraksha Consultation
                </Link>

                 <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    id="malaDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Mala's
                  </a>
                  <div className="dropdown-menu bg-light rounded-0 rounded-bottom m-0">
                    <Link to="/Rudrakshamala" className="dropdown-item">
                      Rudraksha Mala
                    </Link>
                    <Link to="/Siddhamala" className="dropdown-item">
                      Sidhha Mala
                    </Link>
                    <Link to="/Combinationmala" className="dropdown-item">
                      Combination
                    </Link>
                  </div>
                </div>
                <a href="/Gallary" className="nav-item nav-link">Gallary</a>
                  <a href="/Contact" className="nav-item nav-link">Contact</a>
                
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}
    </>
  );
};

export default Navbar;