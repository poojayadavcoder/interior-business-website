"use client";
import { motion } from 'framer-motion';
import { 
  RiLayoutMasonryLine, 
  RiArchiveDrawerLine, 
  RiHomeHeartLine, 
  RiBuilding2Line,
  RiHammerLine,
  RiSearchEyeLine,
  RiChatSettingsLine
} from 'react-icons/ri';

export default function Services() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    { 
      title: 'Residential Interior Design', 
      subtitle: 'Personalized Sanctuaries',
      icon: <RiHomeHeartLine />, 
      description: 'Curation of living spaces that reflect your personality while maximizing comfort and functionality.',
      list: ['Space Planning', 'Color & Material Palette', 'Lighting Design', 'Furniture Curation'] 
    },
    { 
      title: 'Modular Kitchens', 
      subtitle: 'Ergonomic Excellence',
      icon: <RiArchiveDrawerLine />, 
      description: 'Specialized modular solutions designed for the modern Indian home, focusing on durability and style.',
      list: ['L-Shaped & Island Layouts', 'Soft-close Mechanisms', 'Water-resistant Materials', 'Custom Cabinetry'] 
    },
    { 
      title: 'Smart Wardrobes', 
      subtitle: 'Organized Luxury',
      icon: <RiLayoutMasonryLine />, 
      description: 'Intelligent storage solutions that blend seamlessly with your bedroom aesthetics.',
      list: ['Sliding Door Systems', 'Walk-in Closets', 'Built-in Organizers', 'Premium PU & Laminate Finishes'] 
    },
    { 
      title: 'Commercial Spaces', 
      subtitle: 'Branded Environments',
      icon: <RiBuilding2Line />, 
      description: 'Transforming offices and retail stores into productive, brand-centric environments.',
      list: ['Ergonomic Office Layouts', 'Retail Interior Branding', 'Reception Area Design', 'Modular Workstations'] 
    }
  ];

  const processSteps = [
    { title: 'Discovery', icon: <RiSearchEyeLine />, desc: 'Understanding your vision, lifestyle, and site requirements.' },
    { title: 'Design Planning', icon: <RiChatSettingsLine />, desc: 'Technical drafting in AutoCAD and 3D visualization.' },
    { title: 'Execution', icon: <RiHammerLine />, desc: 'Modular production and precise on-site installation.' }
  ];

  return (
    <div className="services-page">
      {/* Services Hero */}
      <section className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop')" }}>
        <motion.div 
          className="container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* <div className="breadcrumb">Home / <span>Our Expertise</span></div> */}
          <h1>Technical Mastery In Design</h1>
          <p>End-to-end interior and modular solutions powered by engineering precision and creative vision.</p>
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="services-overview">
        <div className="container">
          <motion.div className="section-header" {...fadeIn}>
            <span className="subtitle" style={{ color: 'var(--primary)', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '15px' }}>Our Offerings</span>
            <h2>Comprehensive Design Services</h2>
            <div className="line"></div>
          </motion.div>

          <motion.div 
            className="services-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {services.map((service, i) => (
              <motion.div 
                key={i} 
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                style={{ background: 'white' }}
              >
                <div className="service-icon" style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '20px' }}>
                  {service.icon}
                </div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--primary)', fontWeight: 600 }}>{service.subtitle}</span>
                <h3 style={{ marginTop: '10px' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>{service.description}</p>
                <ul style={{ paddingLeft: '0', listStyle: 'none', color: 'var(--text-main)', fontSize: '0.9rem' }}>
                  {service.list.map((item, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <span style={{ color: 'var(--primary)' }}>•</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="design-process" style={{ background: 'var(--secondary)', color: 'white', padding: '100px 5%' }}>
        <div className="container">
          <motion.div className="section-header" {...fadeIn}>
            <span className="subtitle" style={{ color: 'var(--primary)', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '15px' }}>The Workflow</span>
            <h2 style={{ color: 'white' }}>How We Bring Your Vision To Life</h2>
            <div className="line"></div>
          </motion.div>

          <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginTop: '60px' }}>
            {processSteps.map((step, i) => (
              <motion.div 
                key={i} 
                className="process-item" 
                style={{ textAlign: 'center' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="process-icon" style={{ fontSize: '3.5rem', color: 'var(--primary)', marginBottom: '20px' }}>
                  {step.icon}
                </div>
                <h3 style={{ color: 'white', marginBottom: '15px' }}>0{i+1}. {step.title}</h3>
                <p style={{ opacity: 0.8 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Section - Highlighting Expertise */}
      <section className="detailed-services" style={{ padding: '120px 20px', background: 'var(--bg-offset)' }}>
        <div className="container">
          <div className="side-by-side" style={{ alignItems: 'center' }}>
            <motion.div 
              className="side-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="subtitle" style={{ color: 'var(--primary)', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600 }}>Precision Engineering</span>
              <h2 style={{ margin: '20px 0', fontSize: '3rem' }}>The Livspace Standard</h2>
              <p>As an expert at Livspace, I leverage world-class design tools and manufacturing standards to ensure every modular unit is built with 0.1mm precision.</p>
              <p style={{ marginTop: '20px' }}>We combine technical mechanical engineering principles with high-end aesthetics to create spaces that are structurally superior and visually stunning.</p>
              
              <div className="stats-grid" style={{ marginTop: '40px', gridTemplateColumns: 'repeat(2, 1fr)', textAlign: 'left' }}>
                <div className="stat-item">
                  <h2 style={{ fontSize: '2.5rem', marginBottom: '0' }}>100%</h2>
                  <p>Custom Modular Solutions</p>
                </div>
                <div className="stat-item">
                  <h2 style={{ fontSize: '2.5rem', marginBottom: '0' }}>45 Days</h2>
                  <p>Installation Timeline</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="side-img"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ borderRadius: '30px', overflow: 'hidden' }}
            >
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop" alt="High-end Interior Execution" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" style={{ background: 'white', color: 'var(--secondary)', borderTop: '1px solid var(--border)' }}>
        <motion.div className="container" {...fadeIn}>
          <h2 style={{ color: 'var(--secondary)' }}>Ready to Transform Your Space?</h2>
          <p style={{ marginBottom: '40px', opacity: '0.7', maxWidth: '600px', margin: '0 auto 40px' }}>Book a personal consultation with Puneet Agrawal and discover the potential of your home.</p>
          <a href="/contact" className="btn btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>Book Free Consultation</a>
        </motion.div>
      </section>
    </div>
  );
}
