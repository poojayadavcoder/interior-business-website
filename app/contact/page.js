"use client";
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { 
  RiMailLine, 
  RiPhoneLine, 
  RiMapPinLine, 
  RiTimeLine,
  RiSendPlaneFill,
  RiWhatsappLine,
  RiCheckboxCircleLine
} from 'react-icons/ri';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });
    
    const result = await response.json();
    if (result.success) {
      setIsSubmitted(true);
    } else {
      console.log("Error", result);
      alert("Something went wrong. Please try again or message via WhatsApp.");
    }
    
    setIsSubmitting(false);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const contactInfo = [
    { 
      title: 'Email Us', 
      desc: 'puneet12agrawal@gmail.com', 
      icon: <RiMailLine />,
      link: 'mailto:puneet12agrawal@gmail.com'
    },
    { 
      title: 'Call Us', 
      desc: '+91 82998 44XXX', // Masked placeholder based on standard Indian format
      icon: <RiPhoneLine />,
      link: 'tel:+918299844XXX'
    },
    { 
      title: 'Our Studio', 
      desc: 'SAMS Campus, Varanasi\nUttar Pradesh 221001', 
      icon: <RiMapPinLine />,
      link: 'https://maps.google.com'
    },
    { 
      title: 'Consultation Hours', 
      desc: 'Mon - Sat: 10:00 AM - 7:00 PM\nSunday: By Appointment', 
      icon: <RiTimeLine />,
      link: null
    }
  ];

  return (
    <div className="contact-page">
      {/* Contact Hero */}
      <section className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop')" }}>
        <motion.div 
          className="container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* <div className="breadcrumb">Home / <span>Get In Touch</span></div> */}
          <h1>Let's Create Your Dream Space</h1>
          <p>Whether it's a modular kitchen or a full home transformation, we're here to bring your vision to life.</p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info Sidebar */}
            <motion.div 
              className="contact-info-wrap"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="subtitle" style={{ color: 'var(--primary)', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '15px' }}>Connect</span>
              <h2 className="contact-title">Contact Details</h2>
              
              <div className="info-list">
                {contactInfo.map((info, i) => (
                  <div key={i} className="info-card-item">
                    <div className="info-icon">
                      {info.icon}
                    </div>
                    <div>
                      <h4 style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', color: 'var(--text-muted)', marginBottom: '5px' }}>{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} className="info-link">{info.desc}</a>
                      ) : (
                        <p style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--secondary)', whiteSpace: 'pre-line' }}>{info.desc}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick WhatsApp CTA */}
              <div className="whatsapp-cta">
                <h4>Instant Consultation</h4>
                <p>Message us on WhatsApp for a quick response.</p>
                <a href="https://wa.me/918299844XXX" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  <RiWhatsappLine /> Available for Chat
                </a>
              </div>
            </motion.div>

            {/* Contact Form Container */}
            <motion.div 
              className="contact-form-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {!isSubmitted ? (
                <>
                  <h3 className="form-title">Send An Inquiry</h3>
                  <p className="form-desc">Fill out the form below and Puneet will get back to you within 24 hours.</p>

                  <form 
                    className="contact-form" 
                    onSubmit={handleSubmit} 
                  >
                    {/* Web3Forms Access Key - You get this from web3forms.com */}
                    <input type="hidden" name="access_key" value="432a9896-160c-46c6-bbb4-f39374c65cb9" />
                    <input type="hidden" name="subject" value="New Portfolio Inquiry" />
                    <input type="hidden" name="from_name" value="Puneet Portfolio" />

                    <div className="form-group">
                      <label>Your Name</label>
                      <input name="name" type="text" placeholder="Enter full name" required />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input name="email" type="email" placeholder="email@example.com" required />
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input name="phone" type="tel" placeholder="+91" />
                    </div>
                    <div className="form-group">
                      <label>Service Type</label>
                      <select name="service">
                        <option>Interior Consultation</option>
                        <option>Modular Kitchen</option>
                        <option>Wardrobe Solutions</option>
                        <option>Commercial Project</option>
                      </select>
                    </div>
                    <div className="form-group full" style={{ gridColumn: 'span 2' }}>
                      <label>How can we help?</label>
                      <textarea name="message" rows="5" placeholder="Share your project details, dimensions, or vision..." required></textarea>
                    </div>
                    <div className="form-group full">
                      <button 
                        type="submit" 
                        className="btn btn-primary btn-submit" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending Request...' : 'Send Message'} <RiSendPlaneFill />
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <motion.div 
                  className="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '40px 0' }}
                >
                  <RiCheckboxCircleLine style={{ fontSize: '5rem', color: '#25D366', marginBottom: '20px' }} />
                  <h3 style={{ fontSize: '2rem', marginBottom: '10px' }}>Inquiry Sent Successfully!</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>Thank you for reaching out, Puneet. I have received your message and will get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="btn-outline"
                    style={{ padding: '12px 30px', borderRadius: '50px' }}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="google-map-section">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14426.37554526649!2d82.98404245!3d25.3176452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db77d13e33f%3A0xe5398d363765108!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1709653638241!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
 </section>
    </div>
  );
}
