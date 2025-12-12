import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  { path: '/SiddhaMala1', img: '/img/sidhha-mala.jpg', name:'SILVER COATED SIDDHA MALA' },
  { path: '/SiddhaMala2', img: '/img/siddha_mala1.jpg', name:'THREAD COATED SIDDHA MALA' },
];

const Siddhamala = () => {

  const heroStyle = {
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/img/ru.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    minHeight: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    padding: "40px 15px",
    boxSizing: "border-box",
  };

  const styles = {
    card: {
      backgroundColor: "white",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      overflow: "hidden",
      textAlign: "center",
      paddingBottom: "20px",
      cursor: "pointer",
      width: "90%",
      maxWidth: "300px",
      margin: "0 auto",
      boxSizing: "border-box",
    },
    cardImage: {
      width: "100%",
      height: "250px",
      objectFit: "cover",
      borderBottom: "1px solid #eee",
    },
    cardBody: { padding: "12px" },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } }, // Mobile
    ],
  };

  return (
    <>
      <style>{`
        .wrapper { padding-bottom: 70px; margin-top: -40px; position: relative; }
        .div-transparent:before {
          content: "";
          position: absolute;
          left: 5%;
          right: 5%;
          width: 90%;
          height: 1px;
          top: 0;
          background-image: linear-gradient(to right, transparent, #303133, transparent);
        }
        .div-dot:after {
          content: "";
          position: absolute;
          top: -9px;
          left: calc(50% - 9px);
          width: 18px;
          height: 18px;
          background-color: goldenrod;
          border-radius: 50%;
        }
        .hero-title { font-size: 2rem; font-weight: 600; }
        .hero-text { font-size: 1.1rem; color: #d6ae58; }
        .card-hover:hover { transform: scale(1.05); box-shadow: 0 8px 20px rgba(0,0,0,0.2); }

        @media (max-width: 768px) {
          .hero-title { font-size: 1.6rem; }
          .hero-text { font-size: 0.95rem; }
          .card-image { height: 200px !important; }
          .wrapper{display:hidden;}
        }

        @media (max-width: 480px) {
          .hero-title { font-size: 1.4rem; }
          .hero-text { font-size: 0.9rem; }
          .card-image { height: 180px !important; }
        }
      `}</style>

      {/* Hero Section */}
      <section style={heroStyle}>
        <div style={{ maxWidth: "900px", width: "100%" }}>
          <h1 className="hero-title mb-4" style={{color:"white"}}>
            “DIVINE POWER, INNER PEACE”
          </h1>
          <p className="hero-text leading-relaxed mb-6">
            The Siddha Mala is one of the most powerful and sacred malas in
            Rudraksha tradition — a divine combination of energies that brings
            protection, prosperity, and spiritual upliftment.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontFamily: "serif", fontSize: "40px", margin: "50px 0 25px", color: "#5f4e2aff" }}>
          OUR SIDDHA MALA'S
        </h1>
        <div className="wrapper">
          
        </div>
        <h4 style={{ marginTop: "-30px", marginBottom: "4%", color: "#745316ff", fontFamily: "Times New Roman", fontSize: "17px", padding: "0 10px" }}>
          Each bead in the Siddha Mala brings prosperity, wisdom, inner peace,
          protection, and spiritual growth.
        </h4>
      </div>

      {/* Carousel */}
      <div className="max-w-5xl mx-auto px-4 mb-16">
        <Slider {...settings}>
          {products.map((product, idx) => (
            <div key={idx}>
              <div style={styles.card} className="card-hover">
                <Link to={product.path} style={{ textDecoration: "none", color: "inherit" }}>
                  <img src={product.img} alt={product.name} style={styles.cardImage} className="card-image"/>
                  <div style={styles.cardBody}>
                    <h3 style={{ fontSize: "18px", color: "#5f4e2aff", margin: "10px 0" }}>
                      {product.name}
                    </h3>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Siddhamala;
