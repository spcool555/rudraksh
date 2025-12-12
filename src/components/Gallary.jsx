'use client'
import React from 'react'

const products = [
  { img: 'img/n1mukhi.jpg' },
  { img: 'img/n2mukhi.webp' },
  { img: 'img/n3mukhi.jpg', },
  { img: 'img/n4mukhi.jpg'},
  { img: 'img/n5mukhi.jpg'},
  { img: 'img/n6mukhi.jpg' },
  { img: 'img/n7mukhi.jpg' },
  { img: 'img/8mukhi.jpg' },
  { img: 'img/n9mukhi.jpg' },
  { img: 'img/n10mukhi.jpg' },
  { img: 'img/n11mukhi.jpg' },
  { img: 'img/n12mukhi.jpg' },
  { img: 'img/n13mukhi.jpg' },
   { img: 'img/n14mukhi.jpg' },
    { img: 'img/15mukhi.jpg' }, 
    { img: 'img/16mukhi.jpg' },
     { img: 'img/ganesh.jpg' },
     { img: 'img/trijuti1.jpg' },
      { img: 'img/gauri shankar.jpg' },

  

]

const products1 = [

]

const products2 = [
  { img: 'img/1mukhimala.jpg' },
  { img: 'img/2-Mukhi-Rudraksha-Mala.jpg' },
  { img: 'img/malaimg.jpg', },
  { img: 'img/barac.jpg'},
  { img: 'img/b1.jpg'},
  { img: 'img/8mm.jpg' },
  { img: 'img/3mm.jpg' },
  { img: 'img/8mukhi.jpg' },
  { img: 'img/n9mukhi.jpg' },

    
     
]

const products3 = [
  { img: 'img/n1mukhi.jpg', name: 'One Mukhi Rudraksha' },
  { img: 'https://i.etsystatic.com/20315273/r/il/609052/2190347962/il_fullxfull.2190347962_r2ck.jpg', name: 'Rudraksha Pendant' },
  { img: 'https://www.ompoojashop.com/image/cache/Rudraksha/rudraksha-bracelets/14-face-nepali-rudraksha-in-silver-bracelet-1-1-1000x1000.jpg', name: '14 Face Bracelet' },
  { img: 'https://tse4.mm.bing.net/th/id/OIP.h4YKuyKzMpKWHed-xmemMwHaHa?pid=Api&P=0&h=180', name: 'Eka Mukhi Rudraksha' },
  { img: 'https://i.pinimg.com/originals/0f/92/a0/0f92a09c49563304b38b8d2aa4b0782f.jpg', name: 'Rudraksha Mala' },
  { img: 'https://www.sampige.co.za/wp-content/uploads/2022/12/c-rudraksha.jpg', name: 'Rudraksha Mala' },
]

const Gallary = () => {
  const styles={
    a2: {
      display: 'flex', justifyContent: 'space-between',
      margin: '60px 10% -20px 12%', gap: '2rem',
    },
    video: {
      width: '350px', height: '280px', objectFit: 'cover',
      borderRadius: '0.5rem', boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
    },
  }
  return (
    <>
      <style jsx>{`
        .divider {
          position: relative;
          margin: 40px auto;
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
          top: -7px;
          left: calc(50% - 7px);
          width: 14px;
          height: 14px;
          transform: rotate(45deg);
          background-color: white;
          border-bottom: 1px solid rgb(48,49,51);
          border-right: 1px solid rgb(48,49,51);
        }

        /* Gallery Title Animations */
        .gallery-heading {
          margin-top:40px;
          margin-bottom:-40px;
          font-size: 2.5rem;
          font-weight: bold;
          text-align: center;
          color: #2c3e50;
          margin-bottom: 10px;
          animation: fadeInDown 1.5s ease-in-out;
        }
        .gallery-subheading {
          font-size: 1.2rem;
          text-align: center;
          color: #666;
          margin-bottom: 30px;
          animation: fadeInUp 2s ease-in-out;
        }
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* Carousel */
        .carousel-container {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          gap: 20px;
          padding-bottom: 10px;
        }
        .carousel-container::-webkit-scrollbar { display: none; }

        .card {
          flex: 0 0 auto;
          margin: 10px 3px;
          scroll-snap-align: start;
          width: 200px;
          height: 200px;
          background: white;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
          border-radius: 10px;
        }
        .card:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 14px rgba(0,0,0,0.2);
        }
        .image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease, filter 0.4s ease;
        }
        .card:hover .image-wrapper img {
          transform: scale(1.05);
          filter: brightness(50%);
        }
        .card-title {
          position: absolute;
          bottom: 0;
          width: 100%;
          color: white;
          padding: 8px;
          font-size: 14px;
          text-align: center;
          font-weight: 500;
          background: rgba(0,0,0,0.5);
        }

        @media (max-width: 768px) {
          .card { width: 180px; height: 180px; }
        }
      `}</style>

      {/* Animated Gallery Title */}
      <h1 className="gallery-heading">✨ Spiritual Rudraksha Collection ✨</h1>
      <p className="gallery-subheading">Discover divine beads, malas & pendants that bring peace, prosperity, and energy.</p>

      {/* Divider */}
      <div className="divider div-transparent div-arrow-down"></div>

      {/* Why Choose Us Section */}
      <div className="container">
        <h1 style={{ marginTop: "6%", textAlign: "center", color: "#5f4e2aff" }}>
          OUR RUDRAKASHA GALLARY
        </h1>
       
      </div>

      {/* Product Carousel */}
      <div style={{ width: "100%", marginTop: "30px" }}>
        <div style={{ padding: '20px 20px 40px', background: '#f9fafb', margin: '15px auto', width: '80%' }}>
          <div className="carousel-container">
            {products.map((product, idx) => (
              <div className="card" key={idx}>
                <div className="image-wrapper">
                  <img src={product.img} alt={product.name} />
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
       <div style={{ width: "100%", marginTop: "30px" }}>
        <div style={{ padding: '20px 20px 40px', background: '#f9fafb', margin: '15px auto', width: '80%' }}>
          <div className="carousel-container">
            {products1.map((product, idx) => (
              <div className="card" key={idx}>
                <div className="image-wrapper">
                  <img src={product.img} alt={product.name} />
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>



       {/* Divider */}
      <div className="divider div-transparent div-arrow-down"></div>

      {/* Why Choose Us Section */}
      <div className="container">
        <h1 style={{ marginTop: "6%", textAlign: "center", color: "#5f4e2aff" }}>
          OUR RUDRAKASHA MALA GALLARY
        </h1>
       
      </div>

      {/* Product Carousel */}
      <div style={{ width: "100%", marginTop: "30px" }}>
        <div style={{ padding: '20px 20px 40px', background: '#f9fafb', margin: '15px auto', width: '80%' }}>
          <div className="carousel-container">
            {products2.map((product, idx) => (
              <div className="card" key={idx}>
                <div className="image-wrapper">
                  <img src={product.img} alt={product.name} />
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
       <div style={{ width: "100%", marginTop: "30px" }}>
        <div style={{ padding: '20px 20px 40px', background: '#f9fafb', margin: '15px auto', width: '80%' }}>
          <div className="carousel-container">
            {products3.map((product, idx) => (
              <div className="card" key={idx}>
                <div className="image-wrapper">
                  <img src={product.img} alt={product.name} />
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>



       {/* Divider */}
      <div className="divider div-transparent div-arrow-down"></div>

      

      {/* Why Choose Us Section */}
      <div className="container">
        <h1 style={{ marginTop: "6%", textAlign: "center", color: "#5f4e2aff" }}>
          OUR VIDEO GALLARY
        </h1>
       
      </div>

     {/* Two Videos */}
      <div style={styles.a2}>
        <video controls style={styles.video}><source src="/video/vdo1.mp4" type="video/mp4" /></video>
        <video controls style={styles.video}><source src="/video/vdo2.mp4" type="video/mp4" /></video>
        <video controls style={styles.video}><source src="/video/vdo3.mp4" type="video/mp4" /></video>
      </div>

       {/* Two Videos */}
      <div style={styles.a2}>
        <video controls style={styles.video}><source src="/video/vdo4.mp4" type="video/mp4" /></video>
        <video controls style={styles.video}><source src="/video/vdo5.mp4" type="video/mp4" /></video>
        <video controls style={styles.video}><source src="/video/vdo6.mp4" type="video/mp4" /></video>
      </div>

       <div style={styles.a2}>
        <video controls style={styles.video}><source src="/video/vdo7.mp4" type="video/mp4" /></video>
        <video controls style={styles.video}><source src="/video/vdo8.mp4" type="video/mp4" /></video>
        <video controls style={styles.video}><source src="/video/vdo9.mp4" type="video/mp4" /></video>
      </div>

     <div style={{marginTop:'80px'}}></div>

     <div className="divider div-transparent "></div>
    </>
  )
}

export default Gallary
