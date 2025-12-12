import React from "react";
import { Link } from "react-router-dom";

const SiddhaMala2 = () => {
  return (
    <>
      {/* Internal Responsive CSS */}
      <style>{`
        .about-section {
          margin-top: 0;
          min-height: auto;
          padding: 3rem 1.5rem;
          display: flex;
          justify-content: center;
          background: #ffffff;
        }

        .about-container {
          width: 100%;
          max-width: 1200px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: center;
        }

        .about-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .about-image img {
          width: 100%;
          max-width: 340px;
          height: auto;
          object-fit: contain;
          border-radius: 10px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .about-text {
          text-align: center;
          padding: 0 1rem;
        }

        .about-text h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #e2b44c;
        }

        .about-text p {
          color: black;
          font-size: 1rem;
          line-height: 1.7;
          margin-top: 1rem;
        }

        .btn-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .btn-primary {
          background: linear-gradient(90deg, #ce9233, #e2b44c);
          color: white;
          font-weight: 600;
          padding: 0.75rem 1.6rem;
          border-radius: 0.5rem;
          text-decoration: none;
          border: none;
          text-align: center;
        }

        .btn-outline {
          background: #25d366;
          border: 2px solid #25d366;
          color: white;
          font-weight: 600;
          padding: 0.75rem 1.6rem;
          border-radius: 0.5rem;
          text-decoration: none;
          text-align: center;
        }

        .btn-primary:hover,
        .btn-outline:hover {
          transform: translateY(-3px);
          transition: 0.3s ease-in-out;
        }

        /* RESPONSIVE FOR TABLET */
        @media (min-width: 768px) {
          .about-container {
            grid-template-columns: 1fr 1fr;
          }

          .about-text {
            text-align: left;
          }

          .btn-group {
            flex-direction: row;
            justify-content: flex-start;
          }
        }

        /* LARGE SCREENS */
        @media (min-width: 1024px) {
          .about-text h2 {
            font-size: 2.5rem;
          }

          .about-text p {
            font-size: 1.1rem;
          }
        }
      `}</style>

      {/* SECTION */}
      <section className="about-section">
        <div className="about-container">
         

            {/* TEXT CONTENT */}
          <div className="about-text">
            <h2>1 to 14 Siddha Mala (Gauri Shankar & Ganesha Available)</h2>

            <h4>Customize Thread Mala Available on Demand</h4>

            <p>
              A Siddha Mala is considered the most powerful and complete mala in the Rudraksha tradition. 
              It contains rare Rudraksha beads from 1 Mukhi to 14 Mukhi and often includes Gauri Shankar 
              and Ganesh Rudraksha.
            </p>

            <p>
              <strong>Composition:</strong><br />
              Rudraksha beads from 1 Mukhi to 14 Mukhi, with optional Gauri Shankar & Ganesh Rudraksha.
            </p>

            <p>
              <strong>Benefits:</strong> Helps in spiritual growth, protection from negativity, better focus, 
              and blessings for health, wealth, and success.
            </p>

            <p>
              <strong>Price:</strong> Depends on bead size, type & customization. For details, contact us.
            </p>


            <div className="btn-group">
              <a href="tel:+919834432773" className="btn-primary">
                Call Now
              </a>

              <a
                href="https://wa.me/919834432773?text=Hello! I am interested in the Japa Mala."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BACK BUTTON */}
      <div style={{ textAlign: "right", padding: "1rem", marginTop: "-1rem" }}>
        <Link
          to="/Siddhamala"
          className="btn btn-primary"
          style={{
            padding: "10px 20px",
            background: "#ce9233",
            borderRadius: "5px",
            color: "white",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Back
        </Link>
      </div>
    </>
  );
};

export default SiddhaMala2;
