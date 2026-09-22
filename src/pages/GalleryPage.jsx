import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Camera,
  ArrowRight,
  X
} from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/academyData';
import PageBanner from '../components/common/PageBanner';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeItem, setActiveItem] = useState(null);

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

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
        <div className="gallery-filter-wrapper gallery-filters">
          <div className="gallery-filter-container" role="tablist" aria-label="Gallery Categories">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
                className={`gallery-filter-btn gallery-filter ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </PageBanner>

      {/* Main Gallery Pinterest Masonry */}
      <section className="section section-gallery">
        <div className="gallery-container">
          <div className="gallery-header-row">
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--charcoal-dark)' }}>
              Showing {filteredItems.length} Gallery Photographs ({selectedCategory})
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.9rem', color: 'var(--charcoal-muted)' }}>
              <Camera size={16} style={{ color: 'var(--primary-coral)' }} />
              <span>Real moments of learning, individual attention &amp; student engagement.</span>
            </div>
          </div>

          <div className={`gallery-masonry gallery-grid count-${filteredItems.length}`}>
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="gallery-item"
                onClick={() => setActiveItem(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveItem(item);
                  }
                }}
                aria-label={`View photo: ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Lightbox / Preview Modal */}
          {activeItem && (
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(32, 36, 58, 0.78)',
                backdropFilter: 'blur(6px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
                padding: '1.25rem'
              }}
              role="dialog"
              aria-modal="true"
              onClick={() => setActiveItem(null)}
            >
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  maxWidth: '640px',
                  width: '100%',
                  boxShadow: 'var(--shadow-xl)',
                  border: '2px solid var(--primary-coral-border)',
                  position: 'relative',
                  maxHeight: '92vh',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setActiveItem(null)}
                  aria-label="Close modal"
                  style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(32, 36, 58, 0.75)',
                    color: '#ffffff',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 20,
                    transition: 'background 0.2s ease'
                  }}
                >
                  <X size={20} />
                </button>

                {/* Modal Image */}
                <div style={{
                  maxHeight: '440px',
                  overflow: 'hidden',
                  backgroundColor: '#151828',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    style={{
                      width: '100%',
                      maxHeight: '440px',
                      objectFit: 'contain'
                    }}
                  />
                </div>

                {/* Modal Content */}
                <div style={{ padding: '1.75rem 2rem' }}>
                  <div style={{ marginBottom: '0.45rem' }}>
                    <span className="section-badge section-badge-coral" style={{ margin: 0, fontSize: '0.78rem' }}>
                      {activeItem.category}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--charcoal-dark)', marginBottom: '0.6rem' }}>
                    {activeItem.title}
                  </h3>

                  <p style={{ fontSize: '0.98rem', color: 'var(--charcoal-muted)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                    {activeItem.description}
                  </p>

                  <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      onClick={() => setActiveItem(null)}
                      className="btn btn-secondary btn-sm"
                    >
                      Close Preview
                    </button>
                    <Link to="/enquire" className="btn btn-primary btn-sm">
                      <span>Enquire for Admission</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
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
