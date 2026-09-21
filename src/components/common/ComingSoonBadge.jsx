import React from 'react';
import { Sparkles, Clock } from 'lucide-react';

export function ComingSoonBadge({ label = "Coming Soon", variant = "default", className = "" }) {
  return (
    <span className={`badge-coming-soon ${variant === 'sky' ? 'badge-sky' : ''} ${className}`}>
      <Clock size={12} className="coming-soon-icon" />
      {label}
    </span>
  );
}

export function ComingSoonBox({ title = "Content Coming Soon", description = "We are preparing this information and it will be available shortly.", icon: Icon = Sparkles }) {
  return (
    <div className="coming-soon-box">
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        backgroundColor: 'var(--primary-100)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--primary-600)'
      }}>
        <Icon size={24} />
      </div>
      <h4 style={{ fontSize: '1.1rem', color: 'var(--slate-800)', margin: 0 }}>{title}</h4>
      <p style={{ fontSize: '0.88rem', color: 'var(--slate-500)', maxWidth: '420px', margin: 0 }}>
        {description}
      </p>
      <ComingSoonBadge label="Coming Soon" variant="sky" />
    </div>
  );
}

export default ComingSoonBadge;
