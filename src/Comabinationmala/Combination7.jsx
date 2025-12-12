import React from "react";
import { useNavigate } from "react-router-dom";

const Combination7 = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Internal CSS */}
      <style>{`
        .about-section {
          min-height: 100vh;
          color: white;
          padding: 4rem 2rem;
          display: flex;
          align-items: center;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }

        .back-btn {
          display: inline-block;
          margin-top: 1.5rem;
          padding: 0.5rem 1rem;
          background: #ce9233;
          color: white;
          border-radius: 0.5rem;
          text-decoration: none;
          font-weight: 600;
          transition: background 0.3s ease;
        }

        .back-btn:hover {
          background: #a56f26;
        }

        /* Image Card */
        .about-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .about-image img {
          width: 340px;
          height: 420px;
          object-fit: cover;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        /* Text Section */
        .about-text {
          text-align: center;
          position: relative;
        }

        .about-text h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1.3;
          color: #e2b44c;
        }

        .about-text p {
          color: black;
          font-size: 1rem;
          line-height: 1.8;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Buttons */
        .btn-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
        }

        .btn-primary {
          background: linear-gradient(90deg, #ce9233, #e2b44c);
          color: white;
          font-weight: 600;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          text-decoration: none;
          border: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(206, 146, 51, 0.4);
          color: black;
        }

        .btn-outline {
          background: #25d366;
          border: 2px solid #25d366;
          color: white;
          font-weight: 600;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          text-decoration: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease, color 0.3s ease, background 0.3s ease;
        }

        .btn-outline:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(37, 211, 102, 0.4);
          color: black;
          background: #1ebe5d;
        }

        .back-btn-wrapper {
          text-align: right;
        }

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
          .back-btn-wrapper {
            text-align: right;
          }
        }
      `}</style>

      <section className="about-section">
        <div className="about-container">
          {/* Left Side: Image */}
          <div className="about-image">
            <img src="/img/combination3.jpg" alt="Combination 3" />
          </div>

          {/* Right Side: Text */}
          <div className="about-text">
            <h2>Combination 7</h2>
            <p>
              Combination 3 is a divine set of Rudrakshas crafted for deeper 
              meditation and spiritual awakening. It helps balance emotions, 
              improves clarity of mind, and enhances inner strength.
            </p>
            <p>
              <strong>Benefits:</strong> Boosts confidence, removes negativity, 
              supports mental peace, and attracts abundance in life.
            </p>
            <p>
              <strong>Price:</strong> ₹35,500
            </p>

            {/* Buttons */}
            <div className="btn-group">
              <a href="tel:+919834432773" className="btn-primary">
                Call Now
              </a>
              <a
                href="https://wa.me/919834432773?text=Hello! I am interested in Combination 3."
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
      <a
                href="/Combinationmala"
                className="btn btn-primary py-3 px-4 animated zoomIn"
                style={{marginTop:'-5%',marginLeft:'92%'}}
              >
                Back
              </a>

    </>
  );
};

export default Combination7;
