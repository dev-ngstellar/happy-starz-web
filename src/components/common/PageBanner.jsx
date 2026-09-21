import React from 'react';

export default function PageBanner({
  image = '',
  badge = '',
  badgeColor = 'coral',
  title = '',
  description = '',
  minHeight = '420px',
  overlay = '',
  contentMaxWidth = '680px',
  children
}) {
  const badgeClasses = {
    coral: 'section-badge',
    yellow: 'section-badge section-badge-yellow',
    green: 'section-badge section-badge-green',
    orange: 'section-badge section-badge-orange',
    charcoal: 'section-badge section-badge-charcoal'
  };

  const defaultOverlay = 'linear-gradient(90deg, rgba(255, 249, 241, 0.96) 0%, rgba(255, 249, 241, 0.88) 45%, rgba(255, 249, 241, 0.35) 80%, rgba(255, 249, 241, 0.15) 100%)';

  return (
    <section
      className="page-banner"
      style={{
        position: 'relative',
        minHeight: minHeight,
        backgroundImage: image ? `url('${image}')` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1.5px solid var(--border-warm)',
        overflow: 'hidden'
      }}
      aria-label={`${title} Page Banner`}
    >
      {/* Readability Overlay */}
      <div
        className="page-banner-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          background: overlay || defaultOverlay,
          zIndex: 1
        }}
      />

      {/* Banner Content (Safe Text Area on the left) */}
      <div className="container" style={{ position: 'relative', zIndex: 2, padding: '3.5rem 1.5rem' }}>
        <div style={{ maxWidth: contentMaxWidth }}>
          {badge && (
            <span className={badgeClasses[badgeColor] || badgeClasses.coral} style={{ marginBottom: '1rem' }}>
              {badge}
            </span>
          )}

          {title && (
            <h1 style={{
              fontSize: '2.9rem',
              fontWeight: 800,
              color: 'var(--charcoal-dark)',
              lineHeight: 1.18,
              marginBottom: '1rem',
              letterSpacing: '-0.015em'
            }}>
              {title}
            </h1>
          )}

          {description && (
            <p style={{
              fontSize: '1.14rem',
              lineHeight: 1.75,
              color: 'var(--charcoal-muted)',
              marginBottom: children ? '1.75rem' : '0'
            }}>
              {description}
            </p>
          )}

          {children && (
            <div style={{ marginTop: '1.5rem' }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
