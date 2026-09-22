import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  Phone,
  Clock,
  MapPin,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';
import { ACADEMY_INFO } from '../../data/academyData';
import WhatsAppIcon from './WhatsAppIcon';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/courses', label: 'Courses & Programmes' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/contact', label: 'Contact Us' }
  ];

  return (
    <header className="site-header">
      {/* Top Utility Bar - Warm Charcoal */}
      <div className="topbar">
        <div className="container topbar-content">
          <div className="topbar-items">
            <span className="topbar-item">
              <MapPin size={14} style={{ color: 'var(--secondary-yellow)' }} />
              <span>Komarapalayam, Tamil Nadu - 638183</span>
            </span>
            <span className="topbar-item">
              <Clock size={14} style={{ color: 'var(--secondary-yellow)' }} />
              <span>Hours: {ACADEMY_INFO.workingHours}</span>
            </span>
          </div>
          <div className="topbar-items">
            <a href={ACADEMY_INFO.phoneTel} className="topbar-item" aria-label="Call Happy StarZ Academy">
              <Phone size={14} style={{ color: 'var(--primary-coral)' }} />
              <span>{ACADEMY_INFO.phone}</span>
            </a>
            <a
              href={ACADEMY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="topbar-item"
              style={{ color: '#86efac', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600 }}
              aria-label="Chat with us on WhatsApp"
            >
              <WhatsAppIcon size={15} color="#86efac" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Warm Cream */}
      <nav className="navbar" aria-label="Main Navigation">
        <div className="container navbar-container">
          {/* Brand Logo */}
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu} aria-label="Happy StarZ Academy Home">
            <img
              src="/logo.png"
              alt="Happy StarZ Academy"
              className="logo-img"
              style={{ height: '60px', width: 'auto', borderRadius: '10px', objectFit: 'contain' }}
            />
          </Link>

          {/* Desktop Nav Links */}
          <ul className={`nav-menu ${mobileMenuOpen ? 'is-open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            {mobileMenuOpen && (
              <li style={{ width: '100%', marginTop: '0.75rem' }}>
                <Link
                  to="/enquire"
                  className="btn btn-primary btn-block"
                  onClick={closeMobileMenu}
                >
                  <span>Enquire Now</span>
                  <ArrowRight size={16} />
                </Link>
              </li>
            )}
          </ul>

          {/* Nav Actions / CTA */}
          <div className="nav-actions">
            <Link to="/enquire" className="btn btn-primary btn-sm header-enquire-btn">
              <span>Enquire Now</span>
              <ArrowRight size={15} />
            </Link>
            <button
              className="mobile-toggle-btn"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
