import React, { useState } from "react"; 

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // send message to WhatsApp
  const sendToWhatsApp = (e) => {
    e.preventDefault();

    const phoneNumber = "9834432773"; // <-- change to your WhatsApp number
    const text = `Hello, I am ${form.name} (${form.email}).\nSubject: ${form.subject}\nMessage: ${form.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank"); // opens WhatsApp
  };

  // inline styles
  const styles = {
    container: {
      padding: "50px 10%",
      background: "#f5f5f5",
      fontFamily: "Arial, sans-serif",
    },
    header: { textAlign: "center", marginBottom: "40px" },
    headerTitle: {
      fontSize: "2.5rem",
      color: "#07171f", // updated
      textTransform: "uppercase",
      marginBottom: "10px",
    },
    headerText: { fontSize: "1rem", color: "#555" },
    content: {
      display: "flex",
      flexWrap: "wrap",
      gap: "40px",
      justifyContent: "space-between",
    },
    info: {
      flex: 1,
      minWidth: "280px",
      background: "#07171f", // updated
      color: "white",
      padding: "30px",
      borderRadius: "10px",
    },
    infoTitle: { color: "white", marginBottom: "20px", fontSize: "1.5rem" },
    infoText: {
      margin: "10px 0",
      fontSize: "1rem",
      display: "flex",
      alignItems: "center",
    },
    icon: { marginRight: "10px", color: "#ffd700" },
    formBox: {
      flex: 2,
      minWidth: "320px",
      background: "white",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)",
    },
    formTitle: { marginBottom: "20px", fontSize: "1.5rem", color: "#07171f" }, // updated
    form: { display: "flex", flexDirection: "column", gap: "15px" },
    input: {
      padding: "12px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      fontSize: "1rem",
      outline: "none",
    },
    textarea: {
      padding: "12px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      fontSize: "1rem",
      outline: "none",
      resize: "none",
    },
    button: {
      background: "#25D366", // WhatsApp green
      color: "white",
      border: "none",
      padding: "14px",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1rem",
      transition: "0.3s",
    },
  };

  return (
    <>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.headerTitle}>Contact Us</h1>
          <p style={styles.headerText}>
            We’d love to hear from you. Reach out anytime!
          </p>
        </div>

        {/* Content */}
        <div style={styles.content}>
          {/* Left Info */}
          <div style={styles.info}>
            <h2 style={styles.infoTitle}>Get in Touch</h2>
            <p style={styles.infoText}>
              <i className="bi bi-geo-alt-fill" style={styles.icon}></i> Itwari,
              Nagpur
            </p>
            <p style={styles.infoText}>
              <i className="bi bi-telephone-fill" style={styles.icon}></i> +91
              9876543210
            </p>
            <p style={styles.infoText}>
              <i className="bi bi-envelope-fill" style={styles.icon}></i>{" "}
              nepalrudrakshacenter@gmail.com
            </p>
          </div>

          {/* Right Form */}
          <div style={styles.formBox}>
            <h2 style={styles.formTitle}>Send a WhatsApp Message</h2>
            <form style={styles.form} onSubmit={sendToWhatsApp}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={handleChange}
                style={styles.input}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={handleChange}
                style={styles.input}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                value={form.subject}
                onChange={handleChange}
                style={styles.input}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                value={form.message}
                onChange={handleChange}
                style={styles.textarea}
              ></textarea>
              <button type="submit" style={styles.button}>
                <i className="bi bi-whatsapp"></i> Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <a
        href="/"
        className="btn btn-primary py-3 px-4 animated zoomIn"
        style={{ marginTop: "-5%", marginLeft: "92%" }}
      >
        Back
      </a>

      {/* Divider */}
      <hr
        style={{
          border: "2px solid #d6ae58ff",
          borderRadius: "6px",
          color: "#f0a70aff",
          marginTop: "-1%",
          marginBottom: "30px",
        }}
      />
    </>
  );
};

export default Contact;
