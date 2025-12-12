import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  { path: "/OneMukhiMala", img: "/img/8mm.jpg", name: "JAPA MALA" },
  { path: "/TwoMukhiMala", img: "/img/cust.webp", name: "CUSTOMIZE MALA" },
]; 


const Rudrakshamala = () => {

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
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            EXPLORE OUR RUDRAKSHA MALA'S
          </h1>

          <p
            className="text-lg leading-relaxed px-2 md:px-0"
            style={{ color: "#d6ae58" }}
          >
            Rudraksha malas are sacred beads used for meditation, prayer, and
            spiritual growth. They bring peace, focus, and positive energy.
          </p>
        </div>
      </section>

      {/* Title + Divider */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1
          style={{
            fontFamily: "serif",
            fontSize: "38px",
            color: "#5f4e2aff",
          }}
        >
          REAL RUDRAKSHAMALA'S
        </h1>

        <div className="wrapper">
         
        </div>

        <h4
          style={{
            marginTop: "-40px",
            marginBottom: "40px",
            color: "#745316ff",
            fontFamily: "Times New Roman",
            fontSize: "17px",
          }}
        >
          Harness Spiritual Power with Our Premium Rudraksha Collections.
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

export default Rudrakshamala;
