"use client";
import { motion } from 'framer-motion';

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="about-page">
      {/* About Hero */}
      <section className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop')" }}>
        <motion.div 
          className="container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Crafting Your Vision</h1>
          <p>Discover the journey, the passion, and the people behind INTPRO's award-winning interior solutions.</p>
        </motion.div>
      </section>

      {/* Designer Profile Section */}
      <section className="designer-profile">
        <div className="container">
          <div className="profile-grid">
            <motion.div 
              className="profile-image-wrap"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                alt="Puneet Agrawal - Interior Designer" 
                className="profile-img"
              />
              <div className="experience-badge">
                <h3>2+</h3>
                <p>Years of Design Excellence</p>
              </div>
            </motion.div>

            <motion.div 
              className="profile-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="subtitle">The Visionary</span>
              <h2>Puneet Agrawal</h2>
              <p className="lead">Professional Interior Designer & Modular Furniture Specialist</p>
              
              <div className="bio-text">
                <p>Based in the historic city of Varanasi, I bring a unique blend of technical precision and creative flair to every space I design. Currently working as an **Interior Designer at Livspace**, I specialize in creating smart, stylish, and functional residential interiors that resonate with my clients' lifestyles.</p>
                <p>My journey in design is rooted in a unique intersection of disciplines: I hold a **Diploma in Interior Design** complemented by a robust **Mechanical Engineering background** from the Society of Advanced Management Studies. This dual expertise allows me to transform complex creative concepts into practical, structurally sound interior solutions.</p>
                <p>Before joining Livspace, I honed my skills at **Niva Furniture** and completed a pivotal internship at **Raven Homes**, where I gained hands-on experience in interior drafting and modular planning.</p>
              </div>

              <div className="highlights-grid">
                <div className="highlight-item">
                  <strong>Location</strong>
                  <span>Varanasi, India</span>
                </div>
                <div className="highlight-item">
                  <strong>Experience</strong>
                  <span>2+ Years in Modular Solutions</span>
                </div>
                <div className="highlight-item">
                  <strong>Specialization</strong>
                  <span>Residential & Furniture Design</span>
                </div>
                <div className="highlight-item">
                  <strong>Design Tools</strong>
                  <span>AutoCAD, Photoshop, SketchUp</span>
                </div>
              </div>

              <div className="design-philosophy">
                <h3>Design Philosophy</h3>
                <p>"I believe that a home should be a balanced ecosystem of aesthetics and ergonomics. My goal is to maximize the potential of every square inch while maintaining a premium, soulful atmosphere."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise-strip" style={{ background: 'var(--bg-offset)' }}>
        <div className="container">
          <div className="expertise-content">
            <motion.div className="expertise-text" {...fadeIn}>
              <h2>Technical Mastery Meets Creative Vision</h2>
              <p>Leveraging tools like AutoCAD and Adobe Photoshop, I provide comprehensive design services from initial space planning and drafting to final 3D visualization and modular execution.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div className="container" {...fadeIn}>
          <h2>Transform Your Space into a Work of Art</h2>
          <p style={{paddingBottom:"20px"}}>Let's collaborate to bring your vision to life with precision and style.</p>
          <a href="/contact" className="btn btn-primary">Start Your Consultation</a>
        </motion.div>
      </section>
    </div>
  );
}
