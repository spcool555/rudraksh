import React from 'react'
import { Link } from 'react-router-dom'

const Rudraksha = () => {
  return (
     <>
      <style>{`
        .hr-text {
          border: 0;
          line-height: 1em;
          position: relative;
          text-align: center;
          height: 1.5em;
          font-size: 20px;
          margin: 30px 15px;
        }
        .hr-text::before {
          content: "";
          background: linear-gradient(to right, transparent, #d6ae58ff, transparent);
          position: absolute;
          left: 0;
          top: 50%;
          width: 90%;
          height: 4px;
        }
        .hr-text::after {
          content: attr(data-content);
          position: relative;
          padding: 0 7px;
          line-height: 1.5em;
          background: #faf7f7ff;
          color: black;
        }
        .divider.light {
          background: #fff;
          background: -webkit-linear-gradient(left, rgb(90,90,90) 0%, rgb(255,255,255) 50%, rgb(90,90,90) 100%);
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
          box-shadow: inset 0 0 0 2px white,
                      0 0 0 4px white;
        }
      `}</style>
     <div className="carousel-item active">
            <img
              className="w-100"
              src="img/ru1.jpg"
              alt="Rudraksha"
              style={{boxShadow:' rgba(0,0,0,0.3)',height:'600px'}}
            />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center text-center h-100">
              <h1 className="display-4 text-uppercase text-white mb-3 animated fadeInDown">
                Sacred Bead of Shiva
              </h1>
              <p
                className="lead text-white mb-4 animated fadeInUp"
                style={{
                  maxWidth: "600px",
                  textAlign: "center",
                  whiteSpace: "normal",
                  wordWrap: "break-word",
                 
                }}
              >
                Known as the ‘Tears of Lord Shiva’, Rudraksha beads are revered
                for their spiritual and healing powers. They bring peace of
                mind, enhance concentration, reduce stress, and provide
                protection against negative energies.
              </p>
              <Link
                to="/Primium"
                className="btn btn-primary py-3 px-4 animated zoomIn"
              >
                Explore More
              </Link>
            </div>
          </div>

    
    
    
     <div className="container-fluid service pt-6 pb-6" style={{marginTop:'53%'
     }}>
      <div className="container">
        
        {/* Section Title */}
        <div
          className="text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "700px" ,marginTop:'-150px'}}
        >
          
          <h1 className="display-6 text-uppercase mb-5">
             Shop by Category
          </h1>
          <div className="wrapper">
   
        </div>
           
          <p className="mb-4 text-muted" style={{marginTop:'-6%'}}>
           Find the perfect Rudraksha bead or mala from our carefully curated collections.
          </p>
        </div>

        <div className="row g-4">
          {/* Service 1 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" style={{display:'flex'}}>
            <div className="service-item h-100">
              <div className="service-inner pb-5" style={{marginTop:'1px'}}>
                <img
                  className="img-fluid w-100"
                  src="/img/1_MUKHI_RUDRA.webp"
                  alt="Rudraksha Mala - Traditional"
                />
                <div className="service-text px-4 pt-4">
                  <h5 className="text-uppercase">1 Mukhi </h5>
                  <p>
                    A rare and powerful sacred bead symbolizing Lord Shiva, consciousness, and enlightenment. </p>
                </div>
                <Link className="btn btn-light px-3" to="/onemukhi">
                  Read More <i className="bi bi-chevron-double-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="service-item h-100">
              <div className="service-inner pb-5">
                <img
                  className="img-fluid w-100"
                  src="/img/2mukhi.webp"
                  alt="Rudraksha Bracelet"
                  style={{height:'310px'}}
                />
                <div className="service-text px-4 pt-4">
                  <h5 className="text-uppercase">2 Mukhi</h5>
                  <p>
                    Two mukhi a sacred bead with two natural lines or "mukhis" on its surface, symbolizing the divine union of Shiva and Parvati as Ardhanareeshwara.
                  </p>
                </div>
                <Link className="btn btn-light px-3" to="/twomukhi">
                  Read More <i className="bi bi-chevron-double-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item h-100">
              <div className="service-inner pb-5">
                <img
                  className="img-fluid w-100"
                  src="/img/3mukhi.avif"
                  alt="Rudraksha Pendant"
                />
                <div className="service-text px-4 pt-4">
                  <h5 className="text-uppercase">3 Mukhi</h5>
                  <p>
                     Three mukhi  representing the Hindu trinity of Brahma, Vishnu, and Mahesh (Shiva). 
                  </p>
                </div>
                <Link className="btn btn-light px-3" to="/Threemukhi">
                  Read More <i className="bi bi-chevron-double-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Service 4 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
            <div className="service-item h-100">
              <div className="service-inner pb-5">
                <img
                  className="img-fluid w-100"
                  src="/img/4mukhi.webp"
                  alt="Rudraksha Mukhi Beads"
                />
                <div className="service-text px-4 pt-4">
                  <h5 className="text-uppercase">4 Mukhi</h5>
                  <p>
                    Four mukhi Lord Brahma, the creator of knowledge, and the planet Mercury, and is believed to enhance intellectual capacity, concentration, communication, and creativity, as well as calm stress and anxiety.
                  </p>
                </div>
                <Link className="btn btn-light px-3" to="/Fourmukhi">
                  Read More <i className="bi bi-chevron-double-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Service 5 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item h-100">
              <div className="service-inner pb-5">
                <img
                  className="img-fluid w-100"
                  src="/img/5mukhi.webp"
                  alt="Custom Rudraksha Mala"
                />
                <div className="service-text px-4 pt-4">
                  <h5 className="text-uppercase">5 Mukhi</h5>
                  <p>
                    Wearing the 5 Mukhi Rudraksha enhances focus and concentration during spiritual practices such as meditation, prayer, and mantra chanting.
                  </p>
                </div>
                <Link className="btn btn-light px-3" to="/Fivemukhi">
                  Read More <i className="bi bi-chevron-double-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Service 6 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
            <div className="service-item h-100">
              <div className="service-inner pb-5">
                <img
                  className="img-fluid w-100"
                  src="/img/6mukhi.webp"
                  alt="Rudraksha Certification"
                />
                <div className="service-text px-4 pt-4">
                  <h5 className="text-uppercase">6 Mukhi</h5>
                  <p>
                    Wearing the 6 Mukhi Rudraksha enhances focus and concentration during spiritual practices such as meditation, prayer, and mantra chanting.
                  </p>
                </div>
                <Link className="btn btn-light px-3" to="/Sixmukhi">
                  Read More <i className="bi bi-chevron-double-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  





      <div className="container-fluid service pt-6 pb-6">
      <div className="container">
        

        <div className="row g-4">
          {/* Service 1 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item h-100">
              <div className="service-inner pb-5" >
                <img
                  className="img-fluid w-100"
                  src="/img/7-mukhi.jpg"
                  alt="Rudraksha Mala - Traditional"
                />
                <div className="service-text px-4 pt-4">
                  <h5 className="text-uppercase">7 Mukhi</h5>
                  <p>
                    A special bead with seven facets or faces. Each face represents a different deity or energy, making it a powerful symbol in Hinduism. 
                  </p>
                </div>
                <Link className="btn btn-light px-3" to="/Sevenmukhi">
                  Read More <i className="bi bi-chevron-double-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="service-item h-100">
              <div className="service-inner pb-5">
                <img
                  className="img-fluid w-100"
                  src="/img/8mukhi.jpg"
                  alt="Rudraksha Bracelet"
                />
                <div className="service-text px-4 pt-4">
                  <h5 className="text-uppercase">8 Mukhi</h5>
                  <p>
                    The 8 Mukhi Rudraksha is highly beneficial for Virgo (Kanya) and Gemini (Mithuna) Zodiac signs, as it is associated with Lord Ganesha. 
                  </p>
                </div>
                <Link className="btn btn-light px-3" to="/Eightmukhi">
                  Read More <i className="bi bi-chevron-double-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item h-100">
              <div className="service-inner pb-5">
                <img
                  className="img-fluid w-100"
                  src="/img/9--mukhi.jpg"
                  alt="Rudraksha Pendant"
                />
                <div className="service-text px-4 pt-4">
                  <h5 className="text-uppercase">9 Mukhi</h5>
                  <p>
                   The nine forms of Goddess Durga. Ruling planets are Ketu and Rahu, but its primary spiritual aspect is the benevolent protection and strength from the Nav Durga.
                  </p>
                </div>
                <Link className="btn btn-light px-3" to="/Ninemukhi">
                  Read More <i className="bi bi-chevron-double-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Service 4 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
            <div className="service-item h-100">
              <div className="service-inner pb-5">
                <img
                  className="img-fluid w-100"
                  src="/img/10mukhi.jpg"
                  alt="Rudraksha Mukhi Beads"
                />
                <div className="service-text px-4 pt-4">
                  <h5 className="text-uppercase">10 Mukhi</h5>
                  <p>
                    characterized by ten natural lines or faces on its surface. It is a powerful spiritual tool associated with Lord Vishnu, the divine preserver and protector, providing protection from negativity, negative energy
                  </p>
                </div>
                <Link className="btn btn-light px-3" to="/Tenmukhi">
                  Read More <i className="bi bi-chevron-double-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Service 5 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item h-100">
              <div className="service-inner pb-5">
                <img
                  className="img-fluid w-100"
                  src="/img/11mukhi.jpg"
                  alt="Custom Rudraksha Mala"
                />
                <div className="service-text px-4 pt-4">
                  <h5 className="text-uppercase">11 Mukhi</h5>
                  <p>
                    The 11 Mukhi Rudraksha looks like a small, brownish seed with eleven distinct lines running from one end to the other, creating eleven faces on its surface.
                  </p>
                </div>
                <Link className="btn btn-light px-3" to="/Elevenmukhi">
                  Read More <i className="bi bi-chevron-double-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Service 6 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
            <div className="service-item h-100">
              <div className="service-inner pb-5">
                <img
                  className="img-fluid w-100"
                  src="/img/12mukhi.webp"
                  alt="Rudraksha Certification" style={{height:'285px'}}
                />
                <div className="service-text px-4 pt-4">
                  <h5 className="text-uppercase">12 Mukhi</h5>
                  <p>
                     Immense spiritual significance , offers a multitude & Enhancing inner strength and confidence to promoting physical and emotional well-being, its importance cannot be overstated.
                  </p>
                </div>
                <Link className="btn btn-light px-3" to="/Twelvemukhi">
                  Read More <i className="bi bi-chevron-double-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container-fluid service pt-6 pb-6">
      <div className="container">
        <div className="row g-4">
          {/* Service 1 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item h-100">
              <div className="service-inner pb-5" style={{marginTop:'1px'}}> 
                <img
                  className="img-fluid w-100"
                  src="/img/13mukhi.webp"
                  alt="Rudraksha Mala - Traditional"
                />
                <div className="service-text px-4 pt-4">
                  <h5 className="text-uppercase">13 Mukhi</h5>
                  <p>
                     Thirteen natural lines or "mukhis" on its surface, associated with Lord Kaamdev (God of Desire), Lord Indra (King of Gods), and Goddess Mahalaxmi (Goddess of Wealth). 
                  </p>
                </div>
                <Link className="btn btn-light px-3" to="/Thirteenmukhi">
                  Read More <i className="bi bi-chevron-double-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="service-item h-100">
              <div className="service-inner pb-5">
                <img
                  className="img-fluid w-100"
                  src="/img/14mukhi.jpg"
                  alt="Rudraksha Bracelet"
                />
                <div className="service-text px-4 pt-4">
                  <h5 className="text-uppercase">14 Mukhi</h5>
                  <p>
                    14 Mukhi Rudraksha is said to bring success, confidence, courage, and mental clarity, while also providing protection from misfortune and evil influences.
                  </p>
                </div>
                <Link className="btn btn-light px-3" to="/Fourteenmukhi">
                  Read More <i className="bi bi-chevron-double-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item h-100">
              <div className="service-inner pb-5">
                <img
                  className="img-fluid w-100"
                  src="/img/15mukhi.jpg"
                  alt="Rudraksha Pendant"
                />
                <div className="service-text px-4 pt-4">
                  <h5 className="text-uppercase">15 Mukhi</h5>
                  <p>
                  Including enhancing emotional healing, mental clarity, and intuition, promoting spiritual awareness and growth, and providing protection from negative energies.
                  </p>
                </div>
                <Link className="btn btn-light px-3" to="/Fifteenmukhi">
                  Read More <i className="bi bi-chevron-double-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Service 4 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
            <div className="service-item h-100">
              <div className="service-inner pb-5">
                <img
                  className="img-fluid w-100"
                  src="/img/16mukhi.jpg"
                  alt="Rudraksha Mukhi Beads"
                />
                <div className="service-text px-4 pt-4">
                  <h5 className="text-uppercase">16 Mukhi</h5>
                  <p>
                   Type of bead with 16 natural lines on its surface and is believed to have various benefits for the wearer. It is associated with Lord Shiva, the destroyer of evil, and Lord Ram, the ideal king and warrior.
                  </p>
                </div>
                <Link className="btn btn-light px-3" to="/Sixteenmukhi">
                  Read More <i className="bi bi-chevron-double-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Service 5 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item h-100">
              <div className="service-inner pb-5">
                <img
                  className="img-fluid w-100"
                  src="/img/gauri shankar.jpg"
                  alt="Custom Rudraksha Mala"
                  style={{height:'312px'}}
                />
                <div className="service-text px-4 pt-4">
                  <h5 className="text-uppercase">Gauri Shankar</h5>
                  <p>
                    Type of bead with 16 natural lines on its surface and is believed to have various benefits for the wearer. It is associated with Lord Shiva, the destroyer of evil, and Lord Ram, the ideal king and warrior.
                  </p>
                </div>
                <Link className="btn btn-light px-3" to="/Gaurishankar">
                  Read More <i className="bi bi-chevron-double-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Service 6 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
            <div className="service-item h-100">
              <div className="service-inner pb-5" >
                <img
                  className="img-fluid w-100"
                  src="/img/ganesh.jpg"
                  alt="Rudraksha Certification"
                />
                <div className="service-text px-4 pt-4">
                  <h5 className="text-uppercase">Ganesha</h5>
                  <p>
                   a rare and unique Rudraksha bead distinguished by a natural, trunk-like protrusion on its surface, resembling the trunk of Lord Ganesha, the Hindu deity of wisdom and the remover of obstacles
                  </p>
                </div>
                <Link className="btn btn-light px-3" to="/Ganesh">
                  Read More <i className="bi bi-chevron-double-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div className="container-fluid service pt-6 pb-6">
      <div className="container">
        <div className="row g-4">
          {/* Service 1 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" style={{display:'flex'}}>
            <div className="service-item h-100">
              <div className="service-inner pb-5" style={{marginTop:'1px'}}> 
                <img
                  className="img-fluid w-100"
                  src="/img/trijuti.webp"
                  alt="Rudraksha Mala - Traditional"
                />
                <div className="service-text px-4 pt-4">
                  <h5 className="text-uppercase">Trijuti</h5>
                  <p>
                     Thirteen natural lines or "mukhis" on its surface, associated with Lord Kaamdev (God of Desire), Lord Indra (King of Gods), and Goddess Mahalaxmi (Goddess of Wealth). 
                  </p>
                </div>
                <Link className="btn btn-light px-3" to="/Trijuti">
                  Read More <i className="bi bi-chevron-double-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="service-item h-100">
              <div className="service-inner pb-5">
                <img
                  className="img-fluid w-100"
                  src="/img/garbh.jpg"
                  alt="Rudraksha Bracelet"
                />
                <div className="service-text px-4 pt-4">
                  <h5 className="text-uppercase">Garbh Gauri</h5>
                  <p>
                    14 Mukhi Rudraksha is said to bring success, confidence, courage, and mental clarity, while also providing protection from misfortune and evil influences.
                  </p>
                </div>
                <Link className="btn btn-light px-3" to="/Garbh">
                  Read More <i className="bi bi-chevron-double-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>
         </div>
        </div></div></div>
   
          
    </>
  )
}

export default Rudraksha