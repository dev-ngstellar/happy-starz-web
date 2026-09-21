import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Camera,
  Eye,
  Info,
  ArrowRight
} from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/academyData';
import { ComingSoonBadge } from '../components/common/ComingSoonBadge';
import PageBanner from '../components/common/PageBanner';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeItem, setActiveItem] = useState(null);

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const categoryAccents = ['app-card-coral', 'app-card-yellow', 'app-card-green', 'app-card-orange'];

  return (
    <div>
      {/* Full-Width Visual Page Banner */}
      <PageBanner
        image="/images/banners/banner-gallery.jpg"
        badge="VISUAL MOMENTS"
        badgeColor="pink"
        title="Academy Gallery & Activities"
        description="A glimpse into our learning environment, classroom sessions, student activities, periodic events, and milestones."
        contentMaxWidth="880px"
      >
        {/* Category Filter Tabs (Single Row Responsive Pill Control) */}
        <div className="gallery-filter-wrapper">
          <div className="gallery-filter-container" role="tablist" aria-label="Gallery Categories">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
                className={`gallery-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </PageBanner>

      {/* Main Gallery Grid */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--charcoal-dark)' }}>
              Showing {filteredItems.length} Gallery Albums ({selectedCategory})
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.9rem', color: 'var(--charcoal-muted)' }}>
              <Info size={16} style={{ color: 'var(--primary-coral)' }} />
              <span>Official academy photography will be uploaded soon.</span>
            </div>
          </div>

          <div className="grid-3">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className={`app-card ${categoryAccents[idx % categoryAccents.length]}`}
                style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                onClick={() => setActiveItem(item)}
              >
                {/* Visual Placeholder Tile */}
                <div style={{
                  height: '210px',
                  backgroundColor: 'var(--bg-cream)',
                  borderRadius: 'var(--radius-md)',
                  border: '2px dashed var(--secondary-yellow-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.25rem',
                  position: 'relative'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary-coral)',
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    <Camera size={24} />
                  </div>
                  <ComingSoonBadge label="Gallery Image Coming Soon" />
                  <span style={{ fontSize: '0.82rem', color: 'var(--charcoal-muted)', fontWeight: 600 }}>
                    Click to view preview
                  </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span className="badge-coming-soon">
                    {item.category}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--primary-coral)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Eye size={14} /> Preview
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--charcoal-dark)', margin: 0 }}>
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Lightbox / Preview Modal */}
          {activeItem && (
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
                border: '2px solid var(--primary-coral-border)'
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-coral-light)',
                  color: 'var(--primary-coral)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem auto'
                }}>
                  <Camera size={32} />
                </div>

                <span className="badge-coming-soon badge-warm-pill" style={{ marginBottom: '0.75rem' }}>
                  {activeItem.category}
                </span>

                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--charcoal-dark)', marginBottom: '0.5rem' }}>
                  {activeItem.title}
                </h3>

                <p style={{ fontSize: '0.96rem', color: 'var(--charcoal-muted)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                  High-resolution academy photographs for <strong>{activeItem.title}</strong> are being processed and will be updated in the live gallery soon.
                </p>

                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link to="/enquire" className="btn btn-primary btn-sm">
                    <span>Enquire About Academy</span>
                    <ArrowRight size={16} />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setActiveItem(null)}
                    className="btn btn-secondary btn-sm"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Gallery Callout */}
      <section className="section section-cream">
        <div className="container text-center" style={{ maxWidth: '780px' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--charcoal-dark)', marginBottom: '1rem' }}>
            Experience Our Academy Environment
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--charcoal-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
            We welcome parents to visit our academy at Komarapalayam to observe our supportive and child-focused learning environment firsthand.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">
              <span>View Academy Location &amp; Hours</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/enquire" className="btn btn-secondary">
              <span>Schedule an Enquiry</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
