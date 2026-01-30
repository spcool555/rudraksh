import React, { useState } from "react";
import { Link } from "react-router-dom";

const Onemukhi = () => {
  const [mainImage, setMainImage] = useState("img/n1mukhi.jpg");

  const thumbnails = ["img/n1mukhi.jpg", "img/certified3.jpeg"];

  const changeImage = (src) => setMainImage(src);

  const styles = {
    pageContainer: {
      backgroundColor: "#f3f3f3",
      padding: "2rem",
      fontFamily: "Arial, sans-serif",
    },
    productContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "2rem",
      maxWidth: "1000px",
      margin: "0 auto",
      alignItems: "center",
      justifyContent: "center",
    },
    imageSection: {
      flex: "1 1 400px",
      maxWidth: "400px",
    },
    mainImage: {
      width: "100%",
      aspectRatio: "3 / 2",
      objectFit: "contain",
      borderRadius: "0.5rem",
      marginBottom: "1rem",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    },
    thumbnailContainer: {
      display: "flex",
      gap: "0.5rem",
      overflowX: "auto",
      justifyContent: "center",
    },
    thumbnail: {
      width: "60px",
      height: "60px",
      objectFit: "cover",
      borderRadius: "0.25rem",
      cursor: "pointer",
      opacity: 0.6,
      transition: "opacity 0.3s, border 0.3s",
    },
    detailsSection: {
      flex: "1 1 400px",
      minWidth: "300px",
    },
    title: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
      color: "#CE9233",
    },
    price: {
      fontSize: "1rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    description: {
      marginBottom: "1rem",
      color: "gray",
      lineHeight: "1.5",
    },
  };

  return (
    <>
      <style jsx>{`
        .btn-group {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .btn-primary {
          background: linear-gradient(90deg, #ce9233, #e2b44c);
          color: white;
          font-weight: 600;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
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
          transition: all 0.3s ease;
        }

        .btn-outline:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(37, 211, 102, 0.4);
          color: black;
          background: #1ebe5d;
        }

        .back-btn {
          display: inline-block;
          float: right;
          background: #ce9233;
          color: #fff;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          text-decoration: none;
          font-weight: bold;
        }

        /* ✅ RESPONSIVE BACK BUTTON (NO JSX CHANGE) */
        @media (max-width: 768px) {
          .zoomIn {
            margin-top: 2% !important;
            margin-left: 75% !important;
            float: none !important;
          }
        }

        @media (max-width: 480px) {
          .zoomIn {
            margin-top: 2% !important;
            margin-left: 65% !important;
          }
        }
      `}</style>

      <div style={styles.pageContainer}>
        <div style={styles.productContainer}>
          {/* Left section - Images */}
          <div style={styles.imageSection}>
            <img src={mainImage} alt="Product" style={styles.mainImage} />
            <div style={styles.thumbnailContainer}>
              {thumbnails.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  style={{
                    ...styles.thumbnail,
                    opacity: src === mainImage ? 1 : 0.6,
                    border: src === mainImage ? "2px solid #CE9233" : "none",
                  }}
                  onClick={() => changeImage(src)}
                />
              ))}
            </div>
          </div>

          {/* Right section - Details */}
          <div style={styles.detailsSection}>
            <h2 style={styles.title}>ONE MUKHI RUDRAKSHA</h2>
            <div style={styles.price}>PRICE: ₹1500/- Only</div>

            <p style={styles.description}>
              One Mukhi Rudraksha represents Lord Shiva. It brings spiritual
              growth, clarity, confidence, and divine blessings. It helps the
              wearer attain peace and prosperity.
            </p>

            <p>
              <strong>Benefits:</strong> Supreme consciousness, abundance,
              clarity, liberation.
            </p>

            <h6 style={{ color: "#807E78" }}>
              (For more such Details Please Contact us)
            </h6>

            <div className="btn-group">
              <Link to="tel:+919834432773" className="btn-primary">
                Call Now
              </Link>

              <Link
                to="https://wa.me/919834432773?text=Hello! I am interested in One Mukhi Rudraksha."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                WhatsApp Now
              </Link>
            </div>
          </div>
        </div>

        <Link
          to="/Rudraksha"
          className="btn btn-primary py-3 px-4 animated zoomIn"
          style={{ marginTop: "-5%", marginLeft: "92%" }}
        >
          Back
        </Link>
      </div>
    </>
  );
};

export default Onemukhi;
