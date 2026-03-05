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
      <section className="contact-section" style={{ padding: '120px 20px' }}>
        <div className="container">
          <div className="contact-grid" style={{ gridTemplateColumns: '1fr 1.5fr', gap: '100px' }}>
            {/* Contact Info Sidebar */}
            <motion.div 
              className="contact-info-wrap"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="subtitle" style={{ color: 'var(--primary)', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '15px' }}>Connect</span>
              <h2 style={{ fontSize: '3rem', marginBottom: '40px' }}>Contact Details</h2>
              
              <div className="info-list" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                {contactInfo.map((info, i) => (
                  <div key={i} className="info-card-item" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                    <div className="info-icon" style={{ fontSize: '2rem', color: 'var(--primary)', background: 'var(--bg-offset)', padding: '15px', borderRadius: '15px', display: 'flex' }}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', color: 'var(--text-muted)', marginBottom: '5px' }}>{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} className="info-link" style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--secondary)', display: 'block', whiteSpace: 'pre-line' }}>{info.desc}</a>
                      ) : (
                        <p style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--secondary)', whiteSpace: 'pre-line' }}>{info.desc}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick WhatsApp CTA */}
              <div style={{ marginTop: '60px', padding: '30px', background: 'var(--secondary)', borderRadius: '24px', color: 'white' }}>
                <h4 style={{ marginBottom: '10px' }}>Instant Consultation</h4>
                <p style={{ opacity: 0.8, marginBottom: '20px', fontSize: '0.9rem' }}>Message us on WhatsApp for a quick response.</p>
                <a href="#" className="btn-whatsapp" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#25D366', fontWeight: 600, textDecoration: 'none' }}>
                  <RiWhatsappLine style={{ fontSize: '1.5rem' }} /> Available for Chat
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
              style={{ background: 'white', padding: '60px', borderRadius: '40px', border: '1px solid var(--border)', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}
            >
              {!isSubmitted ? (
                <>
                  <h3 style={{ fontSize: '2rem', marginBottom: '10px' }}>Send An Inquiry</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>Fill out the form below and Puneet will get back to you within 24 hours.</p>

                  <form 
                    className="contact-form" 
                    onSubmit={handleSubmit} 
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '25px' }}
                  >
                    {/* Web3Forms Access Key - You get this from web3forms.com */}
                    <input type="hidden" name="access_key" value="432a9896-160c-46c6-bbb4-f39374c65cb9" />
                    <input type="hidden" name="subject" value="New Portfolio Inquiry" />
                    <input type="hidden" name="from_name" value="Puneet Portfolio" />

                    <div className="form-group">
                      <label style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', display: 'block' }}>Your Name</label>
                      <input name="name" type="text" placeholder="Enter full name" style={{ width: '100%', padding: '15px 20px', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--bg-offset)', outlineColor: 'var(--primary)' }} required />
                    </div>
                    <div className="form-group">
                      <label style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', display: 'block' }}>Email Address</label>
                      <input name="email" type="email" placeholder="email@example.com" style={{ width: '100%', padding: '15px 20px', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--bg-offset)', outlineColor: 'var(--primary)' }} required />
                    </div>
                    <div className="form-group">
                      <label style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', display: 'block' }}>Phone Number</label>
                      <input name="phone" type="tel" placeholder="+91" style={{ width: '100%', padding: '15px 20px', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--bg-offset)', outlineColor: 'var(--primary)' }} />
                    </div>
                    <div className="form-group">
                      <label style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', display: 'block' }}>Service Type</label>
                      <select name="service" style={{ width: '100%', padding: '15px 20px', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--bg-offset)', outlineColor: 'var(--primary)', cursor: 'pointer' }}>
                        <option>Interior Consultation</option>
                        <option>Modular Kitchen</option>
                        <option>Wardrobe Solutions</option>
                        <option>Commercial Project</option>
                      </select>
                    </div>
                    <div className="form-group full" style={{ gridColumn: 'span 2' }}>
                      <label style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', display: 'block' }}>How can we help?</label>
                      <textarea name="message" rows="5" placeholder="Share your project details, dimensions, or vision..." style={{ width: '100%', padding: '15px 20px', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--bg-offset)', outlineColor: 'var(--primary)', resize: 'none' }} required></textarea>
                    </div>
                    <div className="form-group full" style={{ gridColumn: 'span 2' }}>
                      <button 
                        type="submit" 
                        className="btn btn-primary" 
                        disabled={isSubmitting}
                        style={{ width: '100%', padding: '18px', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', opacity: isSubmitting ? 0.7 : 1 }}
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

      {/* Google Map Section */}
     <section
       className="google-map-section"
       style={{ height: "450px", width: "100%", marginTop: "10px" }}
      >   
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
