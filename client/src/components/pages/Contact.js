import "../../assets/Contact.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")

  const [comment,setComment] = useState("")
const navigate = useNavigate()
  const handleNameChange = (event) => {
    setName(event.target.value);
  };


const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
    
      comment: comment,
    };
    console.log("Data ", data);
    try {
      const res = await axios.post("http://localhost:8000/send/email/contact",data);
      if (res.data.status === "success") {
        // console.log("Inside Successs");
        alert(
          res.data.message +
            " to the store. Reply mail will be sent soon to you from store"
        );
        navigate("/");
      } else {
        if (res.data.status === "failed") {
          // console.log("Inside Successs");
          alert(res.data.message + " to store. ");
        }
      }
    } catch (e) {
      alert(e);
    }
  };
  

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
                  <span class="material-symbols-outlined">
home
</span>
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
                  <span class="material-symbols-outlined">
phone_iphone
</span>
                  </div>
                  <div className="text">
                    <h5>Contact Us</h5>
                    <p>+91 94437 85181</p>
                  </div>
                </div>

                <div className="contact-widget-item">
                  <div className="icon">
                  <span class="material-symbols-outlined">
mail
</span>
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
                  <input type="text" placeholder="Name" value={name} onChange={handleNameChange}/>
                  <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                  <textarea placeholder="Comment" value={comment} onChange={handleCommentChange}></textarea>
                  <button type="submit" className="site-btn" onClick={handleSubmit}>
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
