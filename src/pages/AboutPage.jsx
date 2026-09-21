import React from 'react';
import { Link } from 'react-router-dom';
import {
  Target,
  Compass,
  GraduationCap,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import {
  ABOUT_CONTENT,
  FOUNDER_INFO,
  LEARNING_APPROACH
} from '../data/academyData';
import { ComingSoonBadge, ComingSoonBox } from '../components/common/ComingSoonBadge';
import PageBanner from '../components/common/PageBanner';

export default function AboutPage() {
  return (
    <div>
      {/* Full-Width Visual Page Banner */}
      <PageBanner
        image="/images/banners/banner-about.jpg"
        badge="ABOUT US"
        badgeColor="coral"
        title="About Happy StarZ Academy"
        description="A child-focused learning academy dedicated to building strong foundations, concept clarity, and developing confident, independent learners."
      />

      {/* Main About Story & Philosophy */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
            <div>
              <span className="section-badge section-badge-yellow">Our Core Belief</span>
              <h2 style={{ fontSize: '2.3rem', fontWeight: 800, color: 'var(--charcoal-dark)', marginBottom: '1.35rem' }}>
                Strong Foundations are the Key to Confident Learning
              </h2>
              {ABOUT_CONTENT.paragraphs.map((para, index) => (
                <p key={index} style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--charcoal-muted)', marginBottom: '1.35rem' }}>
                  {para}
                </p>
              ))}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2.25rem', flexWrap: 'wrap' }}>
                <Link to="/courses" className="btn btn-primary">
                  <span>Explore Programmes</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/enquire" className="btn btn-secondary">
                  <span>Enquire for Admission</span>
                </Link>
              </div>
            </div>

            {/* Visual Box with 5 Pillars */}
            <div className="app-card app-card-coral" style={{ background: 'linear-gradient(145deg, #FFFFFF 0%, var(--bg-cream) 100%)', padding: '2.75rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--charcoal-dark)', marginBottom: '1.5rem' }}>
                Our 5 Pillars of Foundation
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {LEARNING_APPROACH.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--primary-coral)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.82rem',
                      fontWeight: 800,
                      flexShrink: 0,
                      marginTop: '0.2rem'
                    }}>
                      ✓
                    </div>
                    <div>
                      <strong style={{ display: 'block', color: 'var(--charcoal-dark)', fontSize: '1.02rem', fontWeight: 800 }}>
                        {item.title}
                      </strong>
                      <span style={{ fontSize: '0.94rem', color: 'var(--charcoal-muted)', lineHeight: 1.55 }}>
                        {item.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section section-cream">
        <div className="container">
          <div className="grid-2">
            {/* Vision Card */}
            <div className="app-card app-card-coral">
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--primary-coral-light)',
                color: 'var(--primary-coral)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <Target size={28} />
              </div>
              <h3 style={{ fontSize: '1.7rem', fontWeight: 800, color: 'var(--charcoal-dark)', marginBottom: '1rem' }}>
                {ABOUT_CONTENT.vision.title}
              </h3>
              <p style={{ fontSize: '1.12rem', lineHeight: 1.75, color: 'var(--charcoal-muted)', margin: 0 }}>
                "{ABOUT_CONTENT.vision.statement}"
              </p>
            </div>

            {/* Mission Card */}
            <div className="app-card app-card-yellow">
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--secondary-yellow-light)',
                color: 'var(--secondary-yellow-text)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <Compass size={28} />
              </div>
              <h3 style={{ fontSize: '1.7rem', fontWeight: 800, color: 'var(--charcoal-dark)', marginBottom: '1rem' }}>
                {ABOUT_CONTENT.mission.title}
              </h3>
              <p style={{ fontSize: '1.12rem', lineHeight: 1.75, color: 'var(--charcoal-muted)', margin: 0 }}>
                "{ABOUT_CONTENT.mission.statement}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder & Director Section - Dedicated Place */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge section-badge-yellow">Leadership</span>
            <h2 className="section-title">Founder &amp; Director Profile</h2>
            <p className="section-subtitle">
              Passionate educational guidance dedicated to concept clarity and step-by-step learning.
            </p>
          </div>

          <div className="app-card app-card-yellow" style={{ maxWidth: '980px', margin: '0 auto', padding: '3.5rem 3rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '3rem', alignItems: 'center' }}>
              {/* Photo Box Placeholder */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '220px',
                  height: '220px',
                  borderRadius: 'var(--radius-xl)',
                  backgroundColor: 'var(--bg-cream)',
                  border: '2px dashed var(--secondary-yellow-border)',
                  margin: '0 auto 1.25rem auto',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.65rem',
                  color: 'var(--charcoal-dark)'
                }}>
                  <GraduationCap size={52} color="var(--primary-coral)" />
                  <span style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--charcoal-dark)' }}>
                    Founder Photo
                  </span>
                  <ComingSoonBadge label="Coming Soon" />
                </div>
              </div>

              {/* Profile Text */}
              <div>
                <h3 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--charcoal-dark)', marginBottom: '0.4rem' }}>
                  {FOUNDER_INFO.name}
                </h3>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-coral)', marginBottom: '1.5rem' }}>
                  {FOUNDER_INFO.designation}
                </div>
                <blockquote style={{ fontSize: '1.08rem', lineHeight: 1.8, color: 'var(--charcoal-muted)', borderLeft: '4px solid var(--primary-coral)', paddingLeft: '1.25rem', fontStyle: 'italic', marginBottom: '1.75rem' }}>
                  "{FOUNDER_INFO.profile}"
                </blockquote>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--charcoal-muted)', fontSize: '0.94rem', fontWeight: 600 }}>
                  <ShieldCheck size={18} style={{ color: 'var(--supporting-green-hover)' }} />
                  <span>Dedicated to identifying learning gaps &amp; individual attention</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
