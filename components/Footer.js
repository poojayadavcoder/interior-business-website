import Link from 'next/link';
import { RiInstagramLine, RiLinkedinLine, RiPinterestLine, RiMailLine, RiPhoneLine, RiMapPinLine } from 'react-icons/ri';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Branding Column */}
          <div className="footer-col">
            <Link href="/" className="logo">
              <span className="logo-text" style={{ color: 'white' }}>PA <span>Interiors</span></span>
            </Link>
            <p style={{ marginTop: '20px', opacity: '0.7', maxWidth: '300px', lineHeight: '1.8' }}>
              Specializing in technical precision and creative vision. From modular kitchens to full-home transformations, we craft spaces that resonate with your lifestyle.
            </p>
          </div>
          
          {/* Quick Links Column */}
          <div className="footer-col">
            <h4 style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '30px' }}>Our Expertise</h4>
            <ul className="footer-links">
              <li><Link href="/services">Interior Design</Link></li>
              <li><Link href="/services">Modular Kitchens</Link></li>
              <li><Link href="/services">Smart Wardrobes</Link></li>
              <li><Link href="/projects">Our Portfolio</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-col">
            <h4 style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '30px' }}>Get In Touch</h4>
            <ul className="footer-links">
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center', opacity: 0.8 }}>
                <RiMapPinLine style={{ color: 'var(--primary)' }} /> Varanasi, Uttar Pradesh
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center', opacity: 0.8 }}>
                <RiPhoneLine style={{ color: 'var(--primary)' }} /> +91 82998 44XXX
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center', opacity: 0.8 }}>
                <RiMailLine style={{ color: 'var(--primary)' }} /> puneet12agrawal@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Puneet Agrawal. All rights reserved.</p>
          <div className="footer-socials" style={{ display: 'flex', gap: '25px', fontSize: '1.4rem' }}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ transition: 'var(--transition)' }} className="social-icon"><RiInstagramLine /></a>
            <a href="https://www.linkedin.com/in/puneet-agrawal-446001161/" target="_blank" rel="noopener noreferrer" style={{ transition: 'var(--transition)' }} className="social-icon"><RiLinkedinLine /></a>
            {/* <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" style={{ transition: 'var(--transition)' }} className="social-icon"><RiPinterestLine /></a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
