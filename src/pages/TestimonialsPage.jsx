import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquareQuote,
  Video,
  Play,
  UserCheck,
  GraduationCap,
  ArrowRight
} from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/academyData';
import { ComingSoonBadge } from '../components/common/ComingSoonBadge';
import PageBanner from '../components/common/PageBanner';

export default function TestimonialsPage() {
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  return (
    <div>
      {/* Full-Width Visual Page Banner */}
      <PageBanner
        image="/images/banners/banner-testimonials.jpg"
        badge="AUTHENTIC EXPERIENCES"
        badgeColor="green"
        title="Parent & Student Testimonials"
        description="Real reviews and learning experiences from parents and students enrolled in Happy StarZ Academy programmes."
      />

      {/* 1. Written Parent Testimonial Section */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: 'var(--primary-coral)', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              <MessageSquareQuote size={18} />
              <span>Written Feedback</span>
            </div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--charcoal-dark)' }}>
              Parent Written Testimonials
            </h2>
          </div>

          <div className="grid-2">
            {TESTIMONIALS_DATA.written.map((item) => (
              <div key={item.id} className="app-card app-card-coral" style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span className="badge-coming-soon badge-warm-pill">
                    {item.category}
                  </span>
                  {item.clientStatus && <ComingSoonBadge label={item.clientStatus} />}
                </div>

                <div style={{ fontSize: '2.5rem', color: 'var(--primary-coral)', lineHeight: 1, marginBottom: '0.5rem', fontFamily: 'serif' }}>
                  “
                </div>

                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--charcoal-muted)', lineHeight: 1.75, marginBottom: '1.75rem', whiteSpace: 'pre-line' }}>
                  "{item.note}"
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary-coral-light)',
                    color: 'var(--primary-coral)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800
                  }}>
                    <UserCheck size={20} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--charcoal-dark)', fontSize: '1rem', fontWeight: 800 }}>
                      {item.title}
                    </strong>
                    <span style={{ fontSize: '0.86rem', color: 'var(--charcoal-muted)' }}>
                      {item.authorRole}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Parent Video Testimonials */}
      <section className="section section-cream">
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: 'var(--secondary-yellow-text)', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              <Video size={18} />
              <span>Video Reviews</span>
            </div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--charcoal-dark)' }}>
              Parent Video Testimonials
            </h2>
          </div>

          <div className="grid-2">
            {TESTIMONIALS_DATA.parentVideos.map((video) => (
              <div
                key={video.id}
                className="app-card app-card-yellow"
                style={{ cursor: 'pointer' }}
                onClick={() => setActiveVideoModal(video)}
              >
                {/* Video Card Player Slot */}
                <div style={{
                  height: '240px',
                  backgroundColor: 'var(--charcoal-dark)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.25rem',
                  color: '#ffffff',
                  position: 'relative'
                }}>
                  <div style={{
                    width: '58px',
                    height: '58px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--secondary-yellow)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--charcoal-dark)',
                    boxShadow: '0 4px 14px rgba(255, 200, 61, 0.4)'
                  }}>
                    <Play size={24} style={{ marginLeft: '3px' }} fill="var(--charcoal-dark)" />
                  </div>
                  <ComingSoonBadge label="Parent Video Coming Soon" />
                  <span style={{ fontSize: '0.82rem', color: '#D1D5E2' }}>
                    Click to view video player slot
                  </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--charcoal-dark)', margin: '0 0 0.2rem 0' }}>
                      {video.title}
                    </h3>
                    <span style={{ fontSize: '0.88rem', color: 'var(--charcoal-muted)' }}>
                      {video.speakerRole}
                    </span>
                  </div>
                  <ComingSoonBadge label="Coming Soon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Student Video Testimonial */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: 'var(--supporting-green-hover)', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              <GraduationCap size={18} />
              <span>Student Voice</span>
            </div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--charcoal-dark)' }}>
              Student Video Testimonial
            </h2>
          </div>

          <div style={{ maxWidth: '640px' }}>
            {TESTIMONIALS_DATA.studentVideos.map((video) => (
              <div
                key={video.id}
                className="app-card app-card-green"
                style={{ cursor: 'pointer' }}
                onClick={() => setActiveVideoModal(video)}
              >
                <div style={{
                  height: '260px',
                  backgroundColor: 'var(--charcoal-dark)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.25rem',
                  color: '#ffffff'
                }}>
                  <div style={{
                    width: '58px',
                    height: '58px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--supporting-green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    boxShadow: '0 4px 14px rgba(54, 184, 107, 0.4)'
                  }}>
                    <Play size={24} style={{ marginLeft: '3px' }} fill="#ffffff" />
                  </div>
                  <ComingSoonBadge label="Student Video Coming Soon" />
                  <span style={{ fontSize: '0.82rem', color: '#D1D5E2' }}>
                    Click to view video player slot
                  </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--charcoal-dark)', margin: '0 0 0.2rem 0' }}>
                      {video.title}
                    </h3>
                    <span style={{ fontSize: '0.88rem', color: 'var(--charcoal-muted)' }}>
                      {video.speakerRole}
                    </span>
                  </div>
                  <ComingSoonBadge label="Coming Soon" />
                </div>
              </div>
            ))}
          </div>

          {/* Video Player Modal */}
          {activeVideoModal && (
            <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(32, 36, 58, 0.65)',
              backdropFilter: 'blur(4px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              padding: '1.5rem'
            }} role="dialog" aria-modal="true">
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: 'var(--radius-xl)',
                padding: '2.5rem',
                maxWidth: '520px',
                width: '100%',
                boxShadow: 'var(--shadow-xl)',
                textAlign: 'center',
                border: '2px solid var(--secondary-yellow-border)'
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--secondary-yellow-light)',
                  color: 'var(--secondary-yellow-text)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem auto'
                }}>
                  <Video size={32} />
                </div>

                <span className="badge-coming-soon badge-warm-pill" style={{ marginBottom: '0.75rem' }}>
                  {activeVideoModal.category}
                </span>

                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--charcoal-dark)', marginBottom: '0.5rem' }}>
                  {activeVideoModal.title}
                </h3>

                <p style={{ fontSize: '0.96rem', color: 'var(--charcoal-muted)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                  The video recording for <strong>{activeVideoModal.title}</strong> is being formatted for streaming and will be accessible directly on this page soon.
                </p>

                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link to="/enquire" className="btn btn-primary btn-sm">
                    <span>Enquire for Courses</span>
                    <ArrowRight size={16} />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setActiveVideoModal(null)}
                    className="btn btn-secondary btn-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="section section-dark text-center">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.25rem' }}>
            Join Our Growing Family of Confident Learners
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#D1D5E2', lineHeight: 1.75, marginBottom: '2.25rem' }}>
            Discover how individual attention and concept-first learning can transform your child's academic journey.
          </p>
          <Link to="/enquire" className="btn btn-primary btn-lg">
            <span>Enquire for Your Child Today</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
