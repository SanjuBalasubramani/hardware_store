import "../../assets/Contact.css";
import React from "react";
const Contact = () => {
  return (
    <fragment>
      <section className="contact">
        <div className="contact-heading">
          <h2>Contact Us</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="column">
              <div className="contact-widget">
                <div className="contact-widget-item">
                  <div className="icon">
                    <i class="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="text">
                    <h5>Address</h5>
                    <p>
                      69,Kumarapuri,Arthanaipalayam,
                      Chennimalai,Erode,
                      Tamil Nadu,638051  
                      
                    </p>
                  </div>
                </div>

                <div className="contact-widget-item">
                  <div className="icon">
                    <i class="fa-solid fa-phone"></i>
                  </div>
                  <div className="text">
                    <h5>Contact Us</h5>
                    <p>+91 94437 85181</p>
                  </div>
                </div>

                <div className="contact-widget-item">
                  <div className="icon">
                    <i class="fa-regular fa-envelope"></i>
                  </div>
                  <div className="text mail-text">
                    <h5>Mail</h5>
                    <p>Dhanarajhce@gmail.com </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="contact-form">
                <form action="#">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <textarea placeholder="Comment"></textarea>
                  <button type="submit" className="site-btn">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="map-column">
              <div className="contact-map">
                
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.215562830083!2d77.6041611!3d11.171669200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba90b52e0ca5e25%3A0xa14014c6806f931!2sVetri%20VINAYAGA%20Wood%20Works!5e0!3m2!1sen!2sin!4v1679581807853!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{border:0}}
                  title="Vetri VINAYAGA"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </fragment>
  );
};
export default Contact;
