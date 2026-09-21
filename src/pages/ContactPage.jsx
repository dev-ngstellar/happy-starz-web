import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Compass,
  Navigation,
  ExternalLink
} from 'lucide-react';
import WhatsAppIcon from '../components/common/WhatsAppIcon';
import FacebookIcon from '../components/common/FacebookIcon';
import InstagramIcon from '../components/common/InstagramIcon';
import { ACADEMY_INFO } from '../data/academyData';
import ContactForm from '../components/common/ContactForm';
import PageBanner from '../components/common/PageBanner';

export default function ContactPage() {
  return (
    <div>
      {/* Full-Width Visual Page Banner */}
      <PageBanner
        image="/images/banners/banner-contact.jpg"
        badge="GET IN TOUCH"
        badgeColor="coral"
        title="Contact Happy StarZ Academy"
        description="Have questions regarding tuition, foundation courses, or scheduling an in-person visit? Reach out directly to our academy team."
      />

      {/* Main Two-Column Section */}
      <section className="section">
        <div className="container">
          <div className="contact-two-col-grid">
            {/* =========================================================================
                LEFT COLUMN: CONTACT INFORMATION & GOOGLE MAPS
                ========================================================================= */}
            <div className="contact-info-column">
              <div className="app-card app-card-coral" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
                <span className="section-badge section-badge-yellow">Academy Details</span>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--charcoal-dark)', marginTop: '0.4rem', marginBottom: '1.5rem' }}>
                  {ACADEMY_INFO.name}
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
                  {/* Address */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--secondary-yellow-light)',
                      color: 'var(--secondary-yellow-text)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <MapPin size={22} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--charcoal-muted)', fontWeight: 800, letterSpacing: '0.05em', display: 'block' }}>
                        Address
                      </span>
                      <p style={{ fontSize: '0.96rem', color: 'var(--charcoal-dark)', fontWeight: 600, margin: 0, lineHeight: 1.5 }}>
                        {ACADEMY_INFO.address}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--primary-coral-light)',
                      color: 'var(--primary-coral)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Phone size={22} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--charcoal-muted)', fontWeight: 800, letterSpacing: '0.05em', display: 'block' }}>
                        Phone Call (Click to Call)
                      </span>
                      <a href={ACADEMY_INFO.phoneTel} style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary-coral)' }} aria-label="Call Happy StarZ Academy">
                        {ACADEMY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--supporting-green-light)',
                      color: 'var(--supporting-green)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <WhatsAppIcon size={24} color="#25D366" />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--charcoal-muted)', fontWeight: 800, letterSpacing: '0.05em', display: 'block' }}>
                        WhatsApp (Direct Chat)
                      </span>
                      <a href={ACADEMY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', fontWeight: 800, color: '#20BA5A' }} aria-label="Chat on WhatsApp">
                        {ACADEMY_INFO.whatsapp}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--accent-orange-light)',
                      color: 'var(--accent-orange-hover)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Mail size={22} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--charcoal-muted)', fontWeight: 800, letterSpacing: '0.05em', display: 'block' }}>
                        Email Address
                      </span>
                      <a href={`mailto:${ACADEMY_INFO.email}`} style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--charcoal-dark)' }}>
                        {ACADEMY_INFO.email}
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: '#ECEEF4',
                      color: 'var(--charcoal-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Clock size={22} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--charcoal-muted)', fontWeight: 800, letterSpacing: '0.05em', display: 'block' }}>
                        Working Hours
                      </span>
                      <span style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--charcoal-dark)' }}>
                        {ACADEMY_INFO.workingHours}
                      </span>
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'rgba(24, 119, 242, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <FacebookIcon size={22} color="#1877F2" />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--charcoal-muted)', fontWeight: 800, letterSpacing: '0.05em', display: 'block' }}>
                        Facebook Page
                      </span>
                      <a href={ACADEMY_INFO.facebookUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.98rem', fontWeight: 700, color: '#1877F2' }} aria-label="Visit Facebook Page">
                        @{ACADEMY_INFO.facebookHandle}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'rgba(225, 48, 108, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <InstagramIcon size={22} color="#E1306C" />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--charcoal-muted)', fontWeight: 800, letterSpacing: '0.05em', display: 'block' }}>
                        Instagram Profile
                      </span>
                      <a href={ACADEMY_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.98rem', fontWeight: 700, color: '#E1306C' }} aria-label="Visit Instagram Profile">
                        @{ACADEMY_INFO.instagramHandle}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div style={{ display: 'flex', gap: '0.85rem', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1.5px solid var(--border-warm)', flexWrap: 'wrap' }}>
                  <a href={ACADEMY_INFO.phoneTel} className="btn btn-call btn-sm" style={{ flex: '1 1 140px' }} aria-label="Call Happy StarZ Academy">
                    <Phone size={16} />
                    <span>Call Now</span>
                  </a>
                  <a href={ACADEMY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-sm" style={{ flex: '1 1 140px' }} aria-label="Chat with us on WhatsApp">
                    <WhatsAppIcon size={16} color="#ffffff" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Google Maps Location Box */}
              <div className="app-card app-card-yellow" style={{ padding: '1.5rem', overflow: 'hidden' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--secondary-yellow-light)',
                      color: 'var(--secondary-yellow-text)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Navigation size={20} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--charcoal-dark)', margin: 0 }}>
                        Find Us on Google Maps
                      </h3>
                      <span style={{ fontSize: '0.82rem', color: 'var(--charcoal-muted)' }}>
                        Komarapalayam, Tamil Nadu
                      </span>
                    </div>
                  </div>
                  <a
                    href={ACADEMY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    style={{ padding: '0.4rem 0.85rem', fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                    aria-label="Open in Google Maps"
                  >
                    <span>Get Directions</span>
                    <ExternalLink size={14} />
                  </a>
                </div>

                {/* Embedded Interactive Map */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '280px',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  border: '1.5px solid var(--border-warm)',
                  boxShadow: 'inset 0 0 8px rgba(0, 0, 0, 0.04)'
                }}>
                  <iframe
                    src={ACADEMY_INFO.locationMapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Happy StarZ Academy Location Map"
                  />
                </div>

                <div style={{ marginTop: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--bg-cream)', padding: '0.65rem 0.95rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-warm)', fontSize: '0.86rem', color: 'var(--charcoal-dark)', fontWeight: 600 }}>
                  <MapPin size={16} style={{ color: 'var(--primary-coral)', flexShrink: 0 }} />
                  <span>{ACADEMY_INFO.address}</span>
                </div>
              </div>
            </div>

            {/* =========================================================================
                RIGHT COLUMN: CONTACT FORM
                ========================================================================= */}
            <div className="contact-form-column">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
