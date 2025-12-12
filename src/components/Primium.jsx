import React, { useState } from "react";
import { Link } from "react-router-dom";

const whatsappNumber = "919876543210";

const Premium = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <style>{`
        .premium-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 3rem 1rem;
        }

        .premium-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .premium-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (max-width: 480px) {
          .premium-grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }

        .image-wrapper img {
          width: 100%;
          height: 16rem;
          object-fit: cover;
        }

        .hover-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.5);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
        }

        .category-text {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          z-index: 2;
          text-align: center;
        }

        .category-text h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: white;
        }

        .category-text p {
          font-size: 1rem;
          font-weight: 500;
          color: #CE9233;
        }

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
          box-shadow: inset 0 0 0 2px white, 0 0 0 4px white;
        }

        /* ---------------- NEW Mobile Fixes ---------------- */

        @media (max-width: 768px) {
          .hero-title {
            font-size: 22px !important;
            text-align: center;
          }

          .hero-desc {
            font-size: 14px !important;
            text-align: center;
          }

          .content-box {
            padding: 12px !important;
          }

          .content-box p,
          .content-box li,
          .content-box h6 {
            font-size: 15px !important;
          }

          h1 {
            font-size: 32px !important;
            text-align: center;
            margin-top: 25px !important;
          }

          .btn-row {
            display: flex;
            flex-direction: column;
            gap: 12px;
            width: 100%;
          }

          .btn-row a {
            width: 100%;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          div[style*="height: 500px"] {
            height: 260px !important;
          }

          .hero-title {
            font-size: 20px !important;
          }

          h1 {
            font-size: 26px !important;
          }
        }

      `}</style>

      {/* Hero Section */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          height: "500px",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src="/img/primium.jpg"
          alt="Background"
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            objectFit: "cover",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.4s ease",
          }}
        />

        <div
          style={{
            position: "absolute",
            padding: "2rem",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            gap: "1rem",
            height: "100%",
            width: "100%",
          }}
        >
          <span className="hero-title"
            style={{ fontSize: "28px", color: "#fff", fontFamily: "serif", fontWeight: "600" }}>
            PREMIUM RUDRAKSHA
          </span>

          {hovered && (
            <p className="hero-desc" style={{ color: "#fff", fontSize: "14px" }}>
              At Premium Rudraksha, we bring you the finest handpicked Rudraksha beads, sourced from authentic regions and tested for purity.
            </p>
          )}

          <Link to="/Contact" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                backgroundColor: hovered ? "#ff9800" : "#1a3a73",
                minHeight: "40px",
                minWidth: "40px",
                transition: "background 0.3s",
              }}
            />
            <h2 style={{ fontWeight: "bold", fontSize: "16px", color: "#fff" }}>Contact Us</h2>
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontFamily: "serif", fontSize: "53px", color: "#5f4e2aff" }}>Our Premium Rudraksha</h1>

        <div className="wrapper">
          <div className="divider div-transparent div-dot"></div>

          <div
            className="content-box"
            style={{
              padding: "20px",
              maxWidth: "1250px",
              margin: "auto",
              background: "#fff",
              borderRadius: "8px",
              lineHeight: "1.6",
              fontFamily: "Arial, sans-serif",
              textAlign: "left",
            }}
          >
            <p style={{ fontSize: "16px", color: "#444", marginBottom: "40px", marginTop: "25px" }}>
              The Premium Rudraksha beads are sacred seeds believed to hold divine energy, and each mukhi (face) offers specific spiritual benefits. The 1–5 Mukhi Rudraksha supports peace, focus, meditation, and wisdom, while 6–9 Mukhi enhances confidence, wealth, courage, and protection. Higher Rudrakshas from 10–14 Mukhi offer leadership, success, intuition, and strength.Special types like Gauri Shankar, Ganesh, Garbh Gauri, and Trijuti bring harmony, remove obstacles, enhance motherhood, and provide supreme blessings. Each bead is traditionally worn with its specific mantra to activate its full spiritual power.
            </p>

            <h6 style={{ marginBottom: "40px" }}>
              Before wearing a Rudraksha bead, you can follow the mantra...
            </h6>

            <ul
              style={{
                marginLeft: "20px",
                marginBottom: "20px"
              }}
            >
               <li style={{ margin: "6px 0", color: "#333" }}>
          <strong>1 Mukhi Rudraksha:</strong> Om Hrih Namah
        </li>
        <li style={{ margin: "6px 0", color: "#333" }}>
          <strong>2 Mukhi Rudraksha:</strong> Om Namah
        </li>
        <li style={{ margin: "6px 0", color: "#333" }}>
          <strong>3 Mukhi Rudraksha:</strong> Om Klih Namah
        </li>
        <li style={{ margin: "6px 0", color: "#333" }}>
          <strong>4 Mukhi Rudraksha:</strong>Om Hrih Namah
        </li>
        <li style={{ margin: "6px 0", color: "#333" }}>
          <strong>5 Mukhi Rudraksha:</strong>Om Hrih Namah
        </li>
         <li style={{ margin: "6px 0", color: "#333" }}>
          <strong>6 Mukhi Rudraksha:</strong>Om Hrih Huh Namah
        </li>
         <li style={{ margin: "6px 0", color: "#333" }}>
          <strong>7 Mukhi Rudraksha:</strong>Om Huh Namah
        </li>
         <li style={{ margin: "6px 0", color: "#333" }}>
          <strong>8 Mukhi Rudraksha:</strong>Om Huh Namah
        </li>
         <li style={{ margin: "6px 0", color: "#333" }}>
          <strong>9 Mukhi Rudraksha:</strong>Om Hrih Huh Namah
        </li>
         <li style={{ margin: "6px 0", color: "#333" }}>
          <strong>10 Mukhi Rudraksha:</strong>Om Hrih Namah
        </li>
         <li style={{ margin: "6px 0", color: "#333" }}>
          <strong>11 Mukhi Rudraksha:</strong>Om Hrih Huh Namah
        </li>
         <li style={{ margin: "6px 0", color: "#333" }}>
          <strong>12 Mukhi Rudraksha:</strong>Om Krau Kshau Rauh Namah
        </li>
         <li style={{ margin: "6px 0", color: "#333" }}>
          <strong>13 Mukhi Rudraksha:</strong>Om Hrih Namah
        </li>
         <li style={{ margin: "6px 0", color: "#333" }}>
          <strong>14 Mukhi Rudraksha:</strong>Om Namah
        </li>
         <li style={{ margin: "6px 0", color: "#333" }}>
          <strong>Gauri Shankar Rudraksha:</strong>Om Gauri Shankaraya Namah
        </li>
        <li style={{ margin: "6px 0", color: "#333" }}>
          <strong>Trijuti Rudraksha:</strong>Om Trimurti Namah
        </li>
         </ul>

              <h6 style={{ fontSize: "16px", color: "black" }}>
              Regarding premium Rudraksha prices and details, please contact us via WhatsApp or Call.
            </h6>

            {/* WhatsApp & Contact Buttons */}
            <div className="btn-row">
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp</a>
              <Link to="/Contact" className="btn-contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Premium;
