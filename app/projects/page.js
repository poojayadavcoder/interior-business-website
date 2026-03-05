"use client";
import { motion } from 'framer-motion';

export default function Projects() {
  const allProjects = [
    { id: 1, title: "Elite U-Shaped Kitchen", category: "Modular Kitchen", image: "/elite_u_kitchen.png" },
    { id: 2, title: "Autumn & Irish Semi-Modular", category: "Kitchen Design", image: "/autumn_irish_kitchen.png" },
    { id: 3, title: "Sleek Parallel Kitchen", category: "Modular Furniture", image: "/parallel_sleek_kitchen.png" },
    { id: 4, title: "Pastel Blue Acrylic U-Kitchen", category: "Luxury Interiors", image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1000&auto=format&fit=crop" },
  ];

  return (
    <div className="projects-page">
      {/* Projects Hero */}
      <section className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop')" }}>
        <motion.div 
          className="container"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* <div className="breadcrumb">Home / <span>Projects</span></div> */}
          <h1>Our Portfolio</h1>
          <p>Explore our carefully curated collection of spaces that blend aesthetics with utility.</p>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Work We're Proud Of</h2>
            <div className="line"></div>
          </motion.div>
          
          <motion.div 
            className="projects-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
          >
            {allProjects.map((project) => (
              <motion.div 
                key={project.id} 
                className="project-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div 
          className="container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Have a Project in Mind?</h2>
          <p style={{ marginBottom: '30px', opacity: '0.8' }}>Let's collaborate to build something extraordinary together.</p>
          <a href="/contact" className="btn btn-primary">Let's Discuss Your Project</a>
        </motion.div>
      </section>
    </div>
  );
}
