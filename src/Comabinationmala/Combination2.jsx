import React from "react";
import { Link } from "react-router-dom";

const Combination2 = () => {
  return (
    <>
      <style>{`
        /* Main Wrapper */
        .main {
          max-width: 1100px;
          margin: auto;
          padding: 20px;
        }

        /* Text Section */
        .about-text {
          text-align: center;
          padding: 0 10px;
        }

        .about-text h2 {
          font-size: 2rem;
          font-weight: 800;
          color: #d4a73e;
          margin-bottom: 1rem;
          margin-top: 2rem;
        }

        .about-text p {
          color: #000;
          font-size: 1rem;
          line-height: 1.8;
          margin-bottom: 1.2rem;
        }

        /* List Styling */
        .list-box {
          text-align: left;
          max-width: 900px;
          margin: auto;
          background: #f8f8f5ff;
          padding: 15px 20px;
          border-radius: 10px;
          margin-bottom: 1.5rem;
        }

        .list-box strong {
          font-size: 1.1rem;
        }

        .list-box ul {
          margin-top: 10px;
          padding-left: 20px;
        }

        /* Buttons */
        .btn-group {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .btn-primary {
          background: linear-gradient(90deg, #ce9233, #e2b44c);
          color: white;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          display: inline-block;
        }

        .btn-outline {
          background: #25d366;
          color: #0c0c0cff;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          display: inline-block;
        }

        /* Back Button */
        .back-btn {
          display: block;
          margin: 40px auto 40px auto;
          background: #ce9233;
          color: white;
          padding: 10px 20px;
          border-radius: 8px;
          width: fit-content;
          font-weight: 600;
          text-decoration: none;
        }

        /* RESPONSIVE SCREENS */
        @media (min-width: 768px) {
          .about-text h2 {
            font-size: 2.5rem;
          }

          .btn-group {
            flex-direction: row;
            justify-content: center;
          }
        }

        @media (min-width: 1024px) {
          .about-text h2 {
            font-size: 3rem;
          }
          .about-text p {
            font-size: 1.1rem;
          }
        }
      `}</style>

      <div className="main">
        <div className="about-text">
          
          {/* Heading */}
          <h2>Why Use a Combination Mala?</h2>

          <p><strong>Holistic Healing:</strong> One mukhi gives specific benefits, but combinations give total balance.</p>
          <p><strong>Planetary Dosha Removal:</strong> Different mukhis correct different planets.</p>
          <p><strong>Faster Results:</strong> Combined energy = quicker spiritual & emotional growth.</p>
          <p><strong>Multipurpose Protection:</strong> Protects against negativity and mental stress.</p>

          {/* Divider */}
          <h2>Popular Combination Rudraksha Mala's</h2>

          {/* List Box 1 */}
          <div className="list-box">
            <strong>1. 1 Mukhi + 5 Mukhi (Shiva Mala)</strong>
            <ul>
              <li><strong>Purpose:</strong> Enlightenment, peace</li>
              <li><strong>Deity:</strong> Lord Shiva</li>
              <li><strong>Best for:</strong> Meditators, yogis</li>
            </ul>
          </div>

          {/* List Box 2 */}
          <div className="list-box">
            <strong>2. 2 Mukhi + 3 Mukhi + 5 Mukhi</strong>
            <ul>
              <li>Balances relationships</li>
              <li>Removes past karma</li>
              <li>Mental clarity</li>
            </ul>
          </div>

          {/* List Box 3 */}
          <div className="list-box">
            <strong>4. 7 + 8 + 9 Mukhi (Wealth + Success + Protection)</strong>
            <ul>
              <li>7 Mukhi: Wealth (Lakshmi)</li>
              <li>8 Mukhi: Removes obstacles (Ganesha)</li>
              <li>9 Mukhi: Protection (Durga)</li>
            </ul>
          </div>

          {/* List Box 4 */}
          <div className="list-box">
            <strong>5. Nav Graha Mala</strong>
            <ul>
              <li>Balances all 9 planets</li>
              <li>Includes selected mukhis based on horoscope</li>
            </ul>
          </div>

          <p><strong>For more information, kindly contact us 🙏😊</strong></p>

          {/* Buttons */}
          <div className="btn-group">
            <a href="tel:+919834432773" className="btn-primary">Call Now</a>

            <a
              href="https://wa.me/919834432773?text=Hello! I am interested in Combination 2."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <Link to="/Combinationmala" className="back-btn">Back</Link>
    </>
  );
};

export default Combination2;
