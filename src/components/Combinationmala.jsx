import React from "react";
import { Link } from "react-router-dom";

const products = [
  { path: "/combination1", img: "/img/combination-1.webp", name: "Combinationmala 1" },
];

const Combinationmala = () => {
  return (
    <>
      {/* GLOBAL RESPONSIVE CSS */}
      <style>{`
        /* Responsive Hero Section */
        .hero {
          background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/img/pri.jpg');
          background-size: cover;
          background-position: center;
          height: 350px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
          color:white;
        }

        /* Responsive Section Wrapper */
        .section-wrapper {
          max-width: 1200px;
          margin: auto;
          padding: 20px;
        }

        /* Responsive Grid for Images */
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 25px;
          padding: 20px;
        }

        .product-card {
          background: white;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: 0.3s ease;
          overflow: hidden;
          text-align: center;
        }

        .product-card img {
          width: 100%;
          height: 350px;
          object-fit: cover;
        }

        .product-card h4 {
          color: #5f4e2a;
          font-weight: bold;
          margin: 15px 0;
        }

        .btn-green {
          border: 2px solid #25D366;
          padding: 10px 20px;
          background: transparent;
          color: #25D366;
          border-radius: 6px;
          transition: 0.3s ease;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 20px;
        }

        .btn-green:hover {
          background: #25D366;
          color: white;
        }

        /* Full-width gradient strip */
        .mini-banner {
          background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(173, 124, 33, 0.79)), url('/img/pri.jpg');
          background-size: cover;
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
        }

        /* Heading Responsive */
        h1, h2 {
          text-align: center;
          color: #5f4e2a;
          font-family: serif;
          line-height: 1.3;
        }

        h1 {
          font-size: clamp(28px, 4vw, 50px);
        }

        h2 {
          font-size: clamp(24px, 3vw, 40px);
        }

        /* Paragraphs */
        p {
          font-size: clamp(15px, 1.3vw, 18px);
          color: #444;
          line-height: 1.7;
        }

        ul li {
          font-size: 16px;
          margin-bottom: 5px;
        }

        /* Buttons */
        .btn-main {
          padding: 10px 20px;
          background: #ce9233;
          color: white;
          border-radius: 6px;
          font-weight: 600;
          display: inline-block;
          transition: 0.3s ease;
          text-decoration: none;
        }

        .btn-main:hover {
          background: #a56f26;
        }

        /* Back Button Wrapper */
        .back-container {
          display: flex;
          justify-content: flex-end;
          padding-right: 20px;
          margin-top: 20px;
        }

        @media (max-width: 480px) {
          .hero { height: 270px; }
          .mini-banner { height: 130px; }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="hero">
        <div style={{ maxWidth: "700px" }}>
          <h1 style={{color:"#faeabde5"}}>“HARMONY OF DIVINE ENERGIES.”</h1>
          <p style={{ color: "#d6ae58" }}>
            A Combination Mala brings together powerful Rudraksha energies for complete mind–body–spirit balance.
          </p>
        </div>
      </section>

      {/* MAIN TITLE */}
      <div className="section-wrapper">
        <h1>OUR EXCLUSIVE COMBINATION MALA'S</h1>
        <p style={{ textAlign: "center", marginTop: "-10px", color: "#745316", marginBottom: "30px" }}>
          Designed to balance energies, enhance spiritual growth & bring peace & prosperity.
        </p>
      </div>

      {/* MINI BANNER STRIP */}
      <section className="mini-banner">
        <p style={{ color: "#d6ae58", fontSize: "22px" }}>
          “Powerful Rudraksha Combination for Complete Life Transformation”
        </p>
      </section>

      {/* INFO SECTION */}
      <div className="section-wrapper">
        <h1>What Is a Rudraksha Combination Mala?</h1>

        <p>
          A <strong>combination mala</strong> is made by mixing different mukhi (faces) of Rudraksha beads.  
          Each mukhi has its own deity, planet, energy vibration & healing frequency.
        </p>

        <h3 style={{ marginTop: "25px" }}>When combined in a mala, they provide:</h3>

        <ul>
          <li><strong>Energies multiply</strong></li>
          <li><strong>Weaknesses of one bead are compensated by another</strong></li>
          <li><strong>Planetary imbalances get corrected</strong></li>
          <li><strong>Aura becomes stronger</strong></li>
          <li><strong>Faster spiritual growth</strong></li>
        </ul>
      </div>

      {/* NEXT PAGE BUTTON */}
      <div className="section-wrapper" style={{ textAlign: "left" }}>
        <Link to="/Combination2" className="btn-main">
          For More Click Me
        </Link>
      </div>

     
    </>
  );
};

export default Combinationmala;
