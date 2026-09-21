import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { ACADEMY_INFO } from '../../data/academyData';
import { ComingSoonBadge } from './ComingSoonBadge';
import WhatsAppIcon from './WhatsAppIcon';
import FacebookIcon from './FacebookIcon';
import InstagramIcon from './InstagramIcon';

export default function Footer() {
  return (
    <footer className="footer" aria-label="Site Footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: About & Info */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <img
                src="/logo.png"
                alt="Happy StarZ Academy"
                style={{ height: '64px', width: 'auto', borderRadius: '12px', objectFit: 'contain', backgroundColor: '#ffffff', padding: '4px' }}
              />
            </div>
            <p style={{ fontSize: '0.94rem', lineHeight: 1.7, color: '#D1D5E2', marginBottom: '1.5rem' }}>
              A child-focused learning academy dedicated to building strong foundations, concept clarity, and confident independent learners.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.45rem 0.95rem', backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: 'var(--radius-full)', border: '1px solid rgba(255, 255, 255, 0.15)', fontSize: '0.84rem', color: '#FFF8DC' }}>
              <ShieldCheck size={16} style={{ color: 'var(--secondary-yellow)' }} />
              <span>Established in {ACADEMY_INFO.establishedYear} • Komarapalayam</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">
                  <ChevronRight size={14} style={{ color: 'var(--secondary-yellow)' }} />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <ChevronRight size={14} style={{ color: 'var(--secondary-yellow)' }} />
                  <span>About Us &amp; Vision</span>
                </Link>
              </li>
              <li>
                <Link to="/courses">
                  <ChevronRight size={14} style={{ color: 'var(--secondary-yellow)' }} />
                  <span>Courses &amp; Programmes</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery">
                  <ChevronRight size={14} style={{ color: 'var(--secondary-yellow)' }} />
                  <span>Gallery &amp; Activities</span>
                </Link>
              </li>
              <li>
                <Link to="/testimonials">
                  <ChevronRight size={14} style={{ color: 'var(--secondary-yellow)' }} />
                  <span>Parent Reviews</span>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <ChevronRight size={14} style={{ color: 'var(--secondary-yellow)' }} />
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link to="/enquire">
                  <ChevronRight size={14} style={{ color: 'var(--secondary-yellow)' }} />
                  <span>Online Enquiry Form</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Learning Programs */}
          <div>
            <h4 className="footer-title">Our Programmes</h4>
            <ul className="footer-links">
              <li>
                <Link to="/courses?tab=offline">Exclusive CBSE Tuition</Link>
              </li>
              <li>
                <Link to="/courses">English Basics through Phonics</Link>
              </li>
              <li>
                <Link to="/courses?tab=offline">Spoken English</Link>
              </li>
              <li>
                <Link to="/courses">Tamil Basics (Tamil Phonics)</Link>
              </li>
              <li>
                <Link to="/courses?tab=online">Hindi Basics</Link>
              </li>
              <li>
                <Link to="/courses">Abacus &amp; Vedic Maths</Link>
              </li>
              <li>
                <Link to="/courses?tab=offline">Handwriting Improvement</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Socials */}
          <div>
            <h4 className="footer-title">Academy Contact</h4>
            <div className="footer-contact-item">
              <MapPin size={18} className="footer-contact-icon" style={{ color: 'var(--secondary-yellow)' }} />
              <a href={ACADEMY_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#D1D5E2', textDecoration: 'none' }} aria-label="Open Happy StarZ Academy in Google Maps">
                {ACADEMY_INFO.address}
              </a>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} className="footer-contact-icon" style={{ color: 'var(--primary-coral)' }} />
              <a href={ACADEMY_INFO.phoneTel} style={{ color: '#ffffff', fontWeight: 700 }} aria-label="Call Happy StarZ Academy">
                {ACADEMY_INFO.phone}
              </a>
            </div>
            <div className="footer-contact-item">
              <WhatsAppIcon size={18} color="#25D366" style={{ marginTop: '0.2rem', marginRight: '0.25rem' }} />
              <a href={ACADEMY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#86efac', fontWeight: 700 }} aria-label="Chat with us on WhatsApp">
                WhatsApp: {ACADEMY_INFO.whatsapp}
              </a>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} className="footer-contact-icon" style={{ color: 'var(--secondary-yellow)' }} />
              <a href={`mailto:${ACADEMY_INFO.email}`} style={{ color: '#D1D5E2' }}>
                {ACADEMY_INFO.email}
              </a>
            </div>
            <div className="footer-contact-item">
              <Clock size={18} className="footer-contact-icon" style={{ color: 'var(--supporting-green)' }} />
              <span>Working Hours: {ACADEMY_INFO.workingHours}</span>
            </div>

            {/* Social channels */}
            <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <span style={{ fontSize: '0.82rem', color: '#A5ABC0', display: 'block', marginBottom: '0.65rem' }}>
                Follow Us on Social Media:
              </span>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <a
                  href={ACADEMY_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Happy StarZ Academy on Facebook"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.4rem 0.85rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'rgba(24, 119, 242, 0.2)',
                    color: '#93c5fd',
                    border: '1px solid rgba(147, 197, 253, 0.35)',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <FacebookIcon size={15} color="#60a5fa" />
                  <span>Facebook</span>
                </a>
                <a
                  href={ACADEMY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Happy StarZ Academy on Instagram"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.4rem 0.85rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'rgba(225, 48, 108, 0.2)',
                    color: '#f9a8d4',
                    border: '1px solid rgba(249, 168, 212, 0.35)',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <InstagramIcon size={15} color="#f472b6" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {ACADEMY_INFO.name}. All Rights Reserved.</p>
          <p style={{ fontSize: '0.84rem', color: '#A5ABC0' }}>
            Child-Focused Foundation &amp; Academic Excellence • 123 D, Perandar Kadu, C. N. Palayam, Komarapalayam - 638183
          </p>
        </div>
      </div>
    </footer>
  );
}
