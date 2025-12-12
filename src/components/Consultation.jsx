import React, { useState } from "react";

const Consultaion = () => {
  const phoneNumber = "919876543210"; // Replace with your real phone number

  // Hero Section Styles
  const heroStyle = {
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/img/consultation.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "450px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    padding: "20px",
  };

  // Button Styles
  const buttonStyle = {
    border: "2px solid #d6ae58",
    background: "transparent",
    color: "#d6ae58",
    padding: "10px 20px",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textDecoration: "none",
    display: "inline-block",
  };

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    birthPlace: "",
    birthDate: "",
    birthTime: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const whatsappNumber = "919834432773"; // your WhatsApp number

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullname, email, mobile, birthPlace, birthDate, birthTime, message } = formData;

    const text = `📌 New Appointment Request
-------------------------
👤 Name: ${fullname}
📧 Email: ${email}
📱 Mobile: ${mobile}
🏡 Birth Place: ${birthPlace}
📅 Birth Date: ${birthDate}
⏰ Birth Time: ${birthTime}
💬 Message: ${message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <>
      <style>{`
        .wrapper {
          padding-bottom: 90px;
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

        .div-arrow-down:after {
          content: "";
          position: absolute;
          z-index: 1;
          top: -7px;
          left: calc(50% - 7px);
          width: 14px;
          height: 14px;
          transform: rotate(45deg);
          background-color: white;
          border-bottom: 1px solid rgb(48,49,51);
          border-right: 1px solid rgb(48,49,51);
        }

        .card {
          border-radius: 10px;
          filter: drop-shadow(0 5px 10px 0 #ffffff);
          width: 400px;
          height: 180px;
          background-color: #ffffff;
          padding: 20px;
          position: relative;
          z-index: 0;
          overflow: hidden;
          transition: 0.6s ease-in;
        }

        .card::before {
          content: "";
          position: absolute;
          z-index: -1;
          top: -15px;
          right: -15px;
          background: #d6ae58;
          height: 220px;
          width: 25px;
          border-radius: 32px;
          transform: scale(1);
          transform-origin: 50% 50%;
          transition: transform 0.25s ease-out;
        }

        .card:hover::before {
          transition-delay: 0.2s;
          transform: scale(40);
        }

        .card:hover {
          color: #ffffff;
        }

        .card p {
          padding: 10px 0;
        }
      `}</style>

      {/* Hero Section */}
      <section style={heroStyle}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Get Your Free Rudraksha Consultation
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#d6ae58" }}>
            Rudraksha consultation helps you choose the right Rudraksha beads
            based on your birth details and personal needs. Each Rudraksha has
            unique energies that support health, success, peace, and spiritual
            growth. With expert guidance, you can find the most suitable
            Rudraksha combination to balance your life and attract positivity.
          </p>

          <a
            href={`tel:${phoneNumber}`}
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.target.style.background = "#d6ae58";
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "#d6ae58";
            }}
          >
            Call Now
          </a>
        </div>
      </section>

     

      {/* Divider */}
      <div className="divider div-transparent div-arrow-down"></div>

      {/* Why Choose Us Section */}
      <div className="container">
        <h1 style={{ marginTop: "6%", textAlign: "center",color: "#5f4e2aff" }}>
          WHY CHOOSE US FOR RUDRAKSHA CONSULTATION?
        </h1>
        <p style={{ textAlign: "center", }}>
          We provide 100% authentic, lab-tested, and certified Rudraksha beads
          directly sourced from Nepal and Indonesia. Each bead is blessed and
          energized to bring peace, health, and spiritual growth in your life.
        </p>

        {/* Cards */}
        <div
          className="row"
          style={{
            display: "flex",
            gap: "20%",
            marginTop: "5%",
            marginBottom: "5%",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div className="card" >
           <div style={{display:'flex'}}>
             <i className="fa fa-certificate fa-2x text-primary me-3" /> 
            <h4>CERTIFIED LAB TEASTED!</h4>
           </div>
            <p>
              To ensure you receive only genuine, natural, and spiritually powerful Rudraksha, every bead we provide is IGL Certified and Lab Tested.
            </p>
          </div>

          <div className="card">
            <div style={{display:'flex'}}>
              <i className="fa fa-leaf fa-2x text-primary me-3" />
            <h4>100% NATURAL BEADS</h4>
            </div>
            <p>
              When it comes to Rudraksha, the power lies in its natural form. That’s why we proudly provide 100% Natural Beads, directly sourced from the sacred Rudraksha trees of Nepal and Indonesia, without any artificial modifications.
            </p>
          </div>
        </div>
        <div
          className="row"
          style={{
            display: "flex",
            gap: "20%",
            marginTop: "5%",
            marginBottom: "5%",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div className="card">
            <div style={{display:'flex'}}>
              <i className="fa fa-hand-holding-heart fa-2x text-primary me-3" />
            <h4>BLESSED & ENERGIZED</h4>
            </div>
            <p>
             That’s why we ensure that every Rudraksha you receive is ritually purified, blessed, and energized before it reaches you.
            </p>
          </div>

          <div className="card">
           <div style={{display:'flex'}}>
             <i className="fa fa-headset fa-2x text-primary me-3" />
            <h4>FREE CONSULTATION</h4>
           </div>
            <p>
              Take the first step toward achieving your goals free
        consultation now and get expert advice.
            </p>
          </div>
        </div>
        
      </div>

       {/* Divider */}
      <div className="divider div-transparent div-arrow-down" style={{marginBottom:'40px'}}></div>
      {/* Appointment Form Section – Light Background */}
      <div style={{    padding: "40px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{
  textTransform: "uppercase",
  textAlign: "center",
  marginBottom: "20px",
  fontFamily: "'Playfair Display', serif",
  fontSize: "2rem",
 color: "#5f4e2aff"
}}>
  Online Appointment
</h2>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="text"
                id="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="Full Name"
                required
                style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="text"
                id="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                required
                style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="text"
                id="birthPlace"
                value={formData.birthPlace}
                onChange={handleChange}
                placeholder="Birth Place"
                style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
              />
            </div>
            <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
              <input
                type="date"
                id="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                style={{ flex: 1, padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
              />
              <input
                type="time"
                id="birthTime"
                value={formData.birthTime}
                onChange={handleChange}
                style={{ flex: 1, padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Leave a message here"
                style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px", height: "120px" }}
              ></textarea>
            </div>
            <div style={{ textAlign: "center" }}>
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                📩 Send via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
      
    </>
  );
};

export default Consultaion;
