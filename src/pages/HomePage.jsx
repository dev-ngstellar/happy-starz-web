import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Phone,
  GraduationCap,
  Users
} from 'lucide-react';
import {
  ACADEMY_INFO,
  ACADEMY_INTRO
} from '../data/academyData';
import WhatsAppIcon from '../components/common/WhatsAppIcon';
import HeroSection from '../components/home/HeroSection';

const WHY_CHOOSE_POINTS = [
  {
    title: "Strong Foundations",
    description: "Building clear and strong basics."
  },
  {
    title: "Individual Attention",
    description: "Understanding each child’s learning needs."
  },
  {
    title: "Step-by-Step Learning",
    description: "Helping children understand concepts clearly."
  },
  {
    title: "Online & Offline Classes",
    description: "Flexible learning options for children."
  },
  {
    title: "Child-Centred Learning",
    description: "Creating a supportive environment where children learn with confidence."
  }
];

export default function HomePage() {
  return (
    <div>
      {/* 1. HERO SECTION (COMPACT TWO-COLUMN WITH TRANSPARENT ARTWORK) */}
      <HeroSection />

      {/* =========================================================================
          2. ACADEMY INTRODUCTION BANNER (CONCISE & ENGAGING)
          ========================================================================= */}
      <section className="section-sm section-cream" style={{ borderBottom: '1.5px solid var(--border-warm)' }}>
        <div className="container">
          <div className="app-card app-card-coral" style={{ padding: '2.75rem 2rem', background: 'linear-gradient(180deg, #FFFFFF 0%, var(--bg-cream) 100%)' }}>
            <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
              <span className="section-badge section-badge-yellow">About the Academy</span>
              <h2 style={{ fontSize: '2.15rem', fontWeight: 800, color: 'var(--charcoal-dark)', marginBottom: '1rem', lineHeight: 1.25 }}>
                {ACADEMY_INTRO.headline}
              </h2>
              <p style={{ fontSize: '1.08rem', lineHeight: 1.75, color: 'var(--charcoal-muted)', marginBottom: '1.75rem' }}>
                {ACADEMY_INTRO.text}
              </p>
              <div>
                <Link to="/about" className="btn btn-secondary btn-sm">
                  <span>Discover Our Academy &amp; Story</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. WHAT WE OFFER (TEXT ON LEFT, IMAGE ON RIGHT)
          ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>

            {/* Left Content */}
            <div>
              <span className="section-badge section-badge-green">Foundation &amp; Academic Focus</span>
              <h2 className="section-title" style={{ fontSize: '2.4rem', marginBottom: '1rem' }}>
                What We Offer
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.75, color: 'var(--charcoal-muted)', marginBottom: '1.75rem' }}>
                At Happy StarZ Academy, we offer structured academic support and language foundation programmes designed to help every child understand concepts clearly and progress step by step.
              </p>

              {/* Academic Highlights List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--primary-coral-light)',
                    color: 'var(--primary-coral)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '0.1rem'
                  }}>
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--charcoal-dark)', fontSize: '1rem', fontWeight: 800, display: 'block' }}>
                      Exclusive CBSE Tuition
                    </strong>
                    <span style={{ fontSize: '0.94rem', color: 'var(--charcoal-muted)' }}>
                      Personalised academic support ensuring subject clarity and strong conceptual grasp.
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--secondary-yellow-light)',
                    color: 'var(--secondary-yellow-text)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '0.1rem'
                  }}>
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--charcoal-dark)', fontSize: '1rem', fontWeight: 800, display: 'block' }}>
                      Skill &amp; Language Foundation Programmes
                    </strong>
                    <span style={{ fontSize: '0.94rem', color: 'var(--charcoal-muted)' }}>
                      Phonics, Spoken English, Tamil Basics, Hindi Basics, Abacus, Vedic Maths and Handwriting Improvement.
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--supporting-green-light)',
                    color: 'var(--supporting-green-hover)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '0.1rem'
                  }}>
                    <Users size={18} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--charcoal-dark)', fontSize: '1rem', fontWeight: 800, display: 'block' }}>
                      Flexible In-Academy &amp; Virtual Modes
                    </strong>
                    <span style={{ fontSize: '0.94rem', color: 'var(--charcoal-muted)' }}>
                      Interactive offline classroom sessions and live virtual learning classes.
                    </span>
                  </div>
                </div>
              </div>

              {/* Single Clear CTA Button */}
              <div>
                <Link to="/courses" className="btn btn-primary btn-lg">
                  <span>Explore Our Programmes</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Right Visual Illustration */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {/* Subtle background glow */}
              <div style={{
                position: 'absolute',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255, 200, 61, 0.25) 0%, rgba(255, 200, 61, 0) 70%)',
                zIndex: 1,
                pointerEvents: 'none'
              }} />

              {/* Floating SVGs */}
              <img
                src="/images/education/education-pencil.svg"
                alt=""
                style={{ position: 'absolute', top: '-10px', right: '20px', width: '42px', height: '42px', zIndex: 3, animation: 'floatGentle 3.5s ease-in-out infinite' }}
                aria-hidden="true"
              />
              <img
                src="/images/education/education-stars.svg"
                alt=""
                style={{ position: 'absolute', bottom: '10px', left: '10px', width: '38px', height: '38px', zIndex: 3, animation: 'floatSlow 4s ease-in-out infinite' }}
                aria-hidden="true"
              />

              {/* Transparent Learning Kit Artwork */}
              <img
                src="/images/education/learning-programmes-art.webp"
                alt="Educational learning tools at Happy StarZ Academy"
                style={{
                  width: '100%',
                  maxWidth: '420px',
                  height: 'auto',
                  objectFit: 'contain',
                  position: 'relative',
                  zIndex: 2,
                  filter: 'drop-shadow(0 12px 24px rgba(32, 36, 58, 0.12))'
                }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          4. WHY HAPPY STARZ ACADEMY? (STORYTELLING 2-COLUMN LAYOUT)
          ========================================================================= */}
      <section className="section section-cream" style={{ borderTop: '1.5px solid var(--border-warm)', borderBottom: '1.5px solid var(--border-warm)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>

            {/* Left Column: Educational Storytelling Artwork */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', order: 1 }}>
              {/* Subtle background glow */}
              <div style={{
                position: 'absolute',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(232, 62, 114, 0.18) 0%, rgba(232, 62, 114, 0) 70%)',
                zIndex: 1,
                pointerEvents: 'none'
              }} />

              {/* Floating SVGs */}
            
        
              {/* Transparent Child Learning Artwork */}
              <img
                src="/images/education/why-happy-starz-art.webp"
                alt="Child discovering concepts happily at Happy StarZ Academy"
                style={{
                  width: '100%',
                  maxWidth: '420px',
                  height: 'auto',
                  objectFit: 'contain',
                  position: 'relative',
                  zIndex: 2,
                  filter: 'drop-shadow(0 12px 24px rgba(32, 36, 58, 0.12))'
                }}
              />
            </div>

            {/* Right Column: 5 Core Learning Principles */}
            <div style={{ order: 2 }}>
              <span className="section-badge section-badge-orange">Our Learning Approach</span>
              <h2 className="section-title" style={{ fontSize: '2.4rem', marginBottom: '0.85rem' }}>
                Why Choose Happy StarZ Academy?
              </h2>
              <p style={{ fontSize: '1.08rem', lineHeight: 1.7, color: 'var(--charcoal-muted)', marginBottom: '1.75rem' }}>
                At Happy StarZ Academy, understanding the concept always comes before completing academic work. We identify learning gaps early and guide every child at their own natural pace.
              </p>

              {/* 5 Why Choose Highlights */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                {WHY_CHOOSE_POINTS.map((point, idx) => (
                  <div key={point.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--primary-coral)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      flexShrink: 0,
                      marginTop: '0.15rem'
                    }}>
                      0{idx + 1}
                    </div>
                    <div>
                      <strong style={{ color: 'var(--charcoal-dark)', fontSize: '0.98rem', fontWeight: 800 }}>
                        {point.title} –{' '}
                      </strong>
                      <span style={{ fontSize: '0.92rem', color: 'var(--charcoal-muted)', lineHeight: 1.55 }}>
                        {point.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn btn-secondary btn-sm">
                  <span>Learn More About Us</span>
                  <ArrowRight size={15} />
                </Link>
                <Link to="/enquire" className="btn btn-primary btn-sm">
                  <span>Enquire Now</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          5. HIGH-CONVERSION FINAL CTA BANNER
          ========================================================================= */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>
            <span className="section-badge section-badge-yellow">
              Take the First Step
            </span>
            <h2 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#ffffff', marginTop: '0.75rem', marginBottom: '1.15rem' }}>
              Give Your Child the Foundation They Deserve
            </h2>
            <p style={{ fontSize: '1.12rem', color: '#D1D5E2', lineHeight: 1.75, marginBottom: '2.25rem' }}>
              Reach out via WhatsApp, direct phone call, or our dedicated enquiry page. We are here to guide you to the perfect programme for your child.
            </p>

            <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/enquire" className="btn btn-primary btn-lg">
                <span>Enquire Now</span>
                <ArrowRight size={17} />
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                <span>Contact Us</span>
              </Link>
              <a
                href={ACADEMY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
                aria-label="Chat with Happy StarZ Academy on WhatsApp"
              >
                <WhatsAppIcon size={19} color="#ffffff" />
                <span>WhatsApp: {ACADEMY_INFO.whatsapp}</span>
              </a>
              <a href={ACADEMY_INFO.phoneTel} className="btn btn-charcoal btn-lg" aria-label="Call Happy StarZ Academy">
                <Phone size={17} />
                <span>Call {ACADEMY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
