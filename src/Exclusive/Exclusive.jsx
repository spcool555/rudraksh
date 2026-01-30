import React from 'react'
import { Link } from 'react-router-dom'

const exclusive = () => {
const products = [
  { img: '/img/1mukhi.jpg', name: '1 Mukhi Rudraksha', price: '₹12,000' },
  { img: '/img/2-Mukhi-Rudraksha-Mala.jpg', name: '2 Mukhi Rudraksha Mala', price: '₹1,500' },
  { img: '/img/3mukhi-ruksha-mala.webp', name: '3 Mukhi Rudraksha Mala', price: '₹1,800' },
  
]


  const styles = {
    cardGrid: {
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px', margin: '50px auto', maxWidth: '1200px', padding: '0 20px',
    },
    card: {
      backgroundColor: 'white', borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)', overflow: 'hidden',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease', textAlign: 'center',
      paddingBottom: '20px',
    },
    cardImage: { width: '100%', height: '300px', objectFit: 'cover' },
    cardBody: { padding: '15px' },
    cardTitle: { fontSize: '18px', fontWeight: 'bold', margin: '10px 0', color: '#5f4e2aff' },
    cardPrice: { fontSize: '16px', fontWeight: '600', color: '#d6ae58ff' },
    button: {
      marginTop: '12px', padding: '10px 20px',
      border: '2px solid #d6ae58ff', borderRadius: '6px',
      background: 'transparent', color: '#d6ae58ff',
      fontWeight: '600', cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
  }
  return (
<>
 <style>
        {`
        
     

 
        `}
      </style>

      
      

    

   

    <section class="section__container showcase__container" id="package">
      <div class="showcase__image" style={{width:'60%'}}>
        <img src="img/1mukhi.jpg" alt="showcase" style={{width:'400px'}}/>
      </div>
      <div class="showcase__content" style={{    margin: '10px 100% 80px 65px'}}>
        <h4 style={{marginLeft:'17%'}}>ONE MUKHI RUDRAKSHA</h4>
        <p>
               PRICE : 1500 /-  (Only)
        </p>
        <p>
          One Mukhi Rudraksha is known as 1 Face Rudraksha and Ek Mukhi Rudraksha. One Mukhi Rudraksha present one natural line on Rudraksha Bead so it is known as One Mukhi Rudraksha. One Mukhi Rudraksha symbolize to the God Shiva (destroyer of ignorance) and Goddess Parvati(wife of god Shiva and goddess of power). One Mukhi Rudraksha also symbol to Goddess Laxmi (goddess of wealth). God Shiva (God Shankar) is also known as Para Brahma(Farthest creator). And those who wear 1 Mukhi rudraksha attain Para Brahma.<h6 style={{
            color:'gray'
          }}>(For more such Details Please Contact us)
      
        </h6></p>
        
        <div class="showcase__btn" style={{marginRight:'40%',marginTop:'-8%',marginLeft:'-20%'}}>
          <button class="btn">
            contact us
            <span><i class="ri-arrow-right-line"></i></span>
          </button>
        </div>
      </div>
    </section>
  
      
    <div className="container-fluid pt-6 pb-6">
        <div className="container pt-4">
          <div className="row g-0 feature-row wow fadeIn" data-wow-delay="0.1s">
            {/* Feature 1 */}
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <div className="feature-item border h-100">
                <div className="feature-icon btn-xxl-square bg-primary mb-4 mt-n4">
                  <i className="fa fa-gem fa-2x text-white" />
                </div>
                <div className="p-5 pt-0">
                  <h5 className="text-uppercase mb-3">Authentic Rudraksha</h5>
                  <p>
                    We provide 100% genuine Nepal Rudraksha beads with proper
                    origin verification.
                  </p>
                  <a
                    className="position-relative text-body text-uppercase small d-flex justify-content-between"
                    href="#"
                  >
                    <b className="bg-white pe-3">Read More</b>
                    <i className="bi bi-arrow-right bg-white ps-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.4s">
              <div className="feature-item border h-100">
                <div className="feature-icon btn-xxl-square bg-primary mb-4 mt-n4">
                  <i className="fa fa-certificate fa-2x text-white" />
                </div>
                <div className="p-5 pt-0">
                  <h5 className="text-uppercase">Certified & Lab Tested</h5>
                  <p>
                    Each Rudraksha comes with a trusted certificate of
                    authenticity and lab test reports.
                  </p>
                  <a
                    className="position-relative text-body text-uppercase small d-flex justify-content-between"
                    href="#"
                  >
                    <b className="bg-white pe-3">Read More</b>
                    <i className="bi bi-arrow-right bg-white ps-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <div className="feature-item border h-100">
                <div className="feature-icon btn-xxl-square bg-primary mb-4 mt-n4">
                  <i className="fa fa-hand-holding-heart fa-2x text-white" />
                </div>
                <div className="p-5 pt-0">
                  <h5 className="text-uppercase">Spiritual Benefits</h5>
                  <p>
                    Our Rudraksha malas are blessed and energised for maximum
                    spiritual & healing benefits.
                  </p>
                  <a
                    className="position-relative text-body text-uppercase small d-flex justify-content-between"
                    href="#"
                  >
                    <b className="bg-white pe-3">Read More</b>
                    <i className="bi bi-arrow-right bg-white ps-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.6s">
              <div className="feature-item border h-100">
                <div className="feature-icon btn-xxl-square bg-primary mb-4 mt-n4">
                  <i className="fa fa-shipping-fast fa-2x text-white" />
                </div>
                <div className="p-5 pt-0">
                  <h5 className="text-uppercase">Free Consultation</h5>
                  <p>
                    Take the first step toward achieving your goals – claim your free consultation now and get expert advice.
                  </p>
                  <a
                    className="position-relative text-body text-uppercase small d-flex justify-content-between"
                    href="#"
                  >
                    <b className="bg-white pe-3">Read More</b>
                    <i className="bi bi-arrow-right bg-white ps-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Start - Dark Section */}
      <div
        className="container-fluid feature mt-6 mb-6 wow fadeIn bg-dark"
        data-wow-delay="0.1s"
        style={{ minHeight: "100vh" }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-end">
            {/* Right Side Content */}
            <div className="col-lg-6 text-lg-start">
              {/* Title */}
              <h1
                className="display-6 text-white text-uppercase mb-4 wow fadeIn"
                data-wow-delay="0.3s" style={{marginTop:'20%'}}
              >
                Why Choose Our Original Rudraksha
              </h1>
              <p
                className="text-light mb-5 wow fadeIn"
                data-wow-delay="0.4s"
              >
                We provide 100% authentic, lab-tested, and certified Rudraksha
                beads directly sourced from Nepal and Indonesia. Each bead is
                blessed and energized to bring peace, health, and spiritual
                growth in your life.
              </p>

              {/* Features Grid */}
              <div className="row g-4">
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                  <div className="d-flex align-items-center border border-2 border-primary p-3 rounded bg-dark h-100">
                    <i className="fa fa-certificate fa-2x text-primary me-3" />
                    <h6 className="text-white mb-0">Certified & Lab Tested</h6>
                  </div>
                </div>

                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.6s">
                  <div className="d-flex align-items-center border border-2 border-primary p-3 rounded bg-dark h-100">
                    <i className="fa fa-leaf fa-2x text-primary me-3" />
                    <h6 className="text-white mb-0">100% Natural Beads</h6>
                  </div>
                </div>

                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                  <div className="d-flex align-items-center border border-2 border-primary p-3 rounded bg-dark h-100">
                    <i className="fa fa-hand-holding-heart fa-2x text-primary me-3" />
                    <h6 className="text-white mb-0">Blessed & Energized</h6>
                  </div>
                </div>

                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.8s">
                  <div className="d-flex align-items-center border border-2 border-primary p-3 rounded bg-dark h-100">
                    <i className="fa fa-headset fa-2x text-primary me-3" />
                    <h6 className="text-white mb-0">24/7 Customer Support</h6>
                  </div>
                </div>
              </div>
              {/* End Features Grid */}
            </div>
          </div>
        </div>
      </div>
       <Link
                to="/Rudraksha"
                className="btn btn-primary py-3 px-4 animated zoomIn"
                style={{marginTop:'-5%',marginLeft:'92%'}}
              >
                Back
              </Link>
     <hr style={{ border: '2px solid #d6ae58ff', borderRadius: '6px', color:'#f0a70aff',marginTop:'-1%',marginBottom:'30px'}}></hr>
    
      </>
  )
}
export default exclusive