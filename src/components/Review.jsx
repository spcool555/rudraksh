// src/components/Reviews.jsx
import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const reviews = [
    {
      img: "/img/img5.jpg",
      name: "Anjali Sharma",
      role: "Meditation Practitioner • Jan 12, 2025",
      text: "The 5 Mukhi Rudraksha I purchased has truly enhanced my meditation sessions. I feel a deep sense of calm and energy balance every day."
    },
    {
      img: "/img/img3.jpeg",
      name: "Rohit Verma",
      role: "Yoga Instructor • Feb 05, 2025",
      text: "The Rudraksha Mala I received is of excellent quality. It helps focus my mind during yoga practice and meditation."
    },
    {
      img: "/img/img6.avif",
      name: "Meera Kapoor",
      role: "Wellness Enthusiast • Mar 15, 2025",
      text: "I love the energy and positivity I feel while wearing the Rudraksha bracelet. The craftsmanship is top-notch!"
    },
    {
      img: "/img/img1.jpg",
      name: "Sandeep Jain",
      role: "Spiritual Seeker • Apr 10, 2025",
      text: "Excellent service and authentic Rudraksha beads. I feel spiritually connected and energized every time I wear them."
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 992, settings: { slidesToShow: 1 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div style={{ backgroundColor: "#f8f8f8", padding: "60px 0" }}>
      <style>{`
        .reviews-container {
          max-width: 1100px;
          margin: auto;
        }
        .review-card {
          background: #fff;
          border-radius: 12px;
          padding: 25px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: transform 0.3s, box-shadow 0.3s;
          min-height: 220px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .review-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        }
        .review-header {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
        }
        .review-header img {
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 50%;
          margin-right: 15px;
        }
        .review-header div h6 {
          margin: 0;
          font-weight: 600;
        }
        .review-header div small {
          color: #888;
        }
        .review-stars {
          color: #de861c;
          margin-bottom: 10px;
        }
        .slick-dots li button:before {
          font-size: 12px;
          color: #de861c;
        }
        .slick-dots li.slick-active button:before {
          color: #de861c;
        }
        @media (max-width: 768px) {
          .review-card {
            padding: 20px;
          }
          .review-header img {
            width: 50px;
            height: 50px;
          }
        }
      `}</style>

      <div className="reviews-container">
        <div className="text-center mb-5">
          <h1 style={{ fontSize: "36px", fontWeight: "700", marginBottom: "10px" }}>What Our Customers Say</h1>
          <p style={{ color: "#555", fontSize: "16px", maxWidth: "600px", margin: "auto" }}>
            Our customers share their experiences with Premium Rudraksha beads.
          </p>
        </div>

        <Slider {...settings}>
          {reviews.map((r, index) => (
            <div key={index} style={{ padding: "0 10px" }}>
              <div className="review-card">
                <div className="review-header">
                  <img src={r.img} alt={r.name} />
                  <div>
                    <h6>{r.name}</h6>
                    <small>{r.role}</small>
                  </div>
                </div>
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                </div>
                <p>{r.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
