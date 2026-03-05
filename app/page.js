"use client";
import { motion } from 'framer-motion';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.2 }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1>Elevating Your Living Space</h1>
            <p>Bespoke interior design and modular furniture solutions crafted for the modern visionary.</p>
            <div className="hero-btns">
              <a href="#projects" className="btn btn-primary">Explore Projects</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <motion.div className="section-header" {...fadeIn}>
            <h2>Our Specialized Services</h2>
            <div className="line"></div>
          </motion.div>
          <motion.div 
            className="services-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              { id: 1, title: 'Interior Design', desc: 'Full-service aesthetic planning and execution for residential and commercial spaces.' },
              { id: 2, title: 'Modular Kitchens', desc: 'Highly functional, sleek, and durable kitchen layouts tailored to your culinary needs.' },
              { id: 3, title: 'Custom Wardrobes', desc: 'Smart storage solutions that blend perfectly with your room\'s architecture.' },
              { id: 4, title: 'Office Solutions', desc: 'Ergonomic and modern workspace designs to boost productivity and comfort.' }
            ].map(service => (
              <motion.div 
                key={service.id} 
                className="service-card"
                variants={fadeIn}
              >
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section - Redesigned */}
      <section id="projects" className="projects-home">
        <div className="container">
          <motion.div className="section-header" {...fadeIn}>
            <span>Portfolio</span>
            <h2>Our Signature Work</h2>
            <div className="line"></div>
          </motion.div>
          
          <motion.div 
            className="home-projects-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              { id: 1, title: 'Elite U-Shaped Kitchen', cat: 'Modular Kitchen Solution', img: '/elite_u_kitchen.png' },
              { id: 2, title: 'Autumn & Irish Semi-Modular', cat: 'Kitchen Design', img: '/autumn_irish_kitchen.png' },
              { id: 3, title: 'Sleek Parallel Kitchen', cat: 'Modern Furniture', img: '/parallel_sleek_kitchen.png' }
            ].map(project => (
              <motion.div 
                key={project.id} 
                className="home-project-card"
                variants={fadeIn}
              >
                <div className="card-img-wrap">
                  <img src={project.img} alt={project.title} className="project-img" />
                </div>
                <div className="card-content">
                  <span className="card-cat">{project.cat}</span>
                  <h3>{project.title}</h3>
                  <a href="/projects" className="btn-outline">View Details</a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="view-more-wrap" {...fadeIn}>
            <a href="/projects" className="btn btn-primary">View More Projects</a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <motion.div className="section-header" {...fadeIn}>
            <span>Voices</span>
            <h2>What Our Clients Say</h2>
            <div className="line"></div>
          </motion.div>
          
          <div className="testimonial-slider-container">
            <motion.div 
              className="testimonial-track"
              animate={{ x: [0, "-50%"] }}
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {[
                { name: "Rahul Sharma", company: "Homeowner", text: "The team at PA Interiors completely transformed our kitchen. The attention to detail and quality of finish is beyond what we expected." },
                { name: "Ananya Patel", company: "Villa Owner", text: "Professional, creative, and timely. They understood our vision and brought it to life with an elegant touch. Highly recommended!" },
                { name: "Vikram Singh", company: "Penthouse Resident", text: "From the first consultation to the final reveal, the process was seamless. Our modular kitchen is both beautiful and highly functional." },
                { name: "Priya Das", company: "Apartment Owner", text: "The pastel blue kitchen they designed for us in Allahabad is a dream come true. Truly world-class quality and craftsmanship." }
              ].concat([
                { name: "Rahul Sharma", company: "Homeowner", text: "The team at PA Interiors completely transformed our kitchen. The attention to detail and quality of finish is beyond what we expected." },
                { name: "Ananya Patel", company: "Villa Owner", text: "Professional, creative, and timely. They understood our vision and brought it to life with an elegant touch. Highly recommended!" },
                { name: "Vikram Singh", company: "Penthouse Resident", text: "From the first consultation to the final reveal, the process was seamless. Our modular kitchen is both beautiful and highly functional." },
                { name: "Priya Das", company: "Apartment Owner", text: "The pastel blue kitchen they designed for us in Allahabad is a dream come true. Truly world-class quality and craftsmanship." }
              ]).map((t, i) => (
                <div key={i} className="testimonial-card">
                  <div className="quote-icon">"</div>
                  <p className="testimonial-text">{t.text}</p>
                  <div className="testimonial-info">
                    <h4>{t.name}</h4>
                    <span>{t.company}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div className="container" {...fadeIn}>
          <h2>Ready to Transform Your Space?</h2>
          <a href="/contact" className="btn btn-primary">Book a Consultation</a>
        </motion.div>
      </section>
    </div>
  );
}