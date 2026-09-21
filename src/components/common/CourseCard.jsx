import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  ArrowRight,
  Award,
  GraduationCap,
  Calculator,
  Pencil,
  Languages,
  MessageSquare
} from 'lucide-react';
import { ComingSoonBadge } from './ComingSoonBadge';

export default function CourseCard({ course, index = 0 }) {
  const {
    name,
    mode,
    category,
    description,
    duration = "Coming Soon",
    ageGroup = "Coming Soon",
    eligibility = "Coming Soon",
    fees = "Coming Soon",
    certification = "Coming Soon",
    isFeatured = false
  } = course;

  const enquireUrl = `/enquire?course=${encodeURIComponent(name)}&mode=${encodeURIComponent(mode.toLowerCase())}`;

  // Theme palettes: Coral, Yellow, Green, Orange
  const themeAccents = [
    { cardClass: 'app-card-coral', iconBg: 'var(--primary-coral-light)', iconColor: 'var(--primary-coral)' },
    { cardClass: 'app-card-yellow', iconBg: 'var(--secondary-yellow-light)', iconColor: 'var(--secondary-yellow-text)' },
    { cardClass: 'app-card-green', iconBg: 'var(--supporting-green-light)', iconColor: 'var(--supporting-green-hover)' },
    { cardClass: 'app-card-orange', iconBg: 'var(--accent-orange-light)', iconColor: 'var(--accent-orange-hover)' }
  ];

  const currentTheme = isFeatured
    ? { cardClass: 'app-card-yellow', iconBg: 'var(--secondary-yellow-light)', iconColor: 'var(--secondary-yellow-text)' }
    : themeAccents[index % themeAccents.length];

  // Subject Icons
  const getSubjectIcon = (courseName) => {
    const lower = courseName.toLowerCase();
    if (lower.includes('cbse') || lower.includes('tuition')) return <GraduationCap size={19} style={{ color: currentTheme.iconColor }} />;
    if (lower.includes('abacus') || lower.includes('math')) return <Calculator size={19} style={{ color: currentTheme.iconColor }} />;
    if (lower.includes('handwriting')) return <Pencil size={19} style={{ color: currentTheme.iconColor }} />;
    if (lower.includes('spoken')) return <MessageSquare size={19} style={{ color: currentTheme.iconColor }} />;
    if (lower.includes('tamil') || lower.includes('hindi')) return <Languages size={19} style={{ color: currentTheme.iconColor }} />;
    return <BookOpen size={19} style={{ color: currentTheme.iconColor }} />;
  };

  const isOnline = mode.toLowerCase() === 'online';

  return (
    <article className={`course-card ${currentTheme.cardClass}`}>
      {/* Header Badges & Icon */}
      <div className="course-card-header">
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <span className={`badge-mode ${isOnline ? 'badge-online' : 'badge-offline'}`}>
            {mode}
          </span>
          {category && (
            <span className="badge-coming-soon">
              {category}
            </span>
          )}
        </div>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: 'var(--radius-sm)',
          backgroundColor: currentTheme.iconBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          {getSubjectIcon(name)}
        </div>
      </div>

      {/* Course Title & Description */}
      <h3 className="course-card-title">{name}</h3>
      <p className="course-card-desc">{description}</p>

      {/* 2 x 2 Compact Metadata Grid with Coming Soon indicators */}
      <div className="course-meta-grid">
        <div className="course-meta-item">
          <span className="course-meta-label">Duration</span>
          <ComingSoonBadge label={duration} />
        </div>
        <div className="course-meta-item">
          <span className="course-meta-label">Age Group</span>
          <ComingSoonBadge label={ageGroup} />
        </div>
        <div className="course-meta-item">
          <span className="course-meta-label">Eligibility</span>
          <ComingSoonBadge label={eligibility} />
        </div>
        <div className="course-meta-item">
          <span className="course-meta-label">Course Fees</span>
          <ComingSoonBadge label={fees} />
        </div>
      </div>

      {/* Certification Note */}


      {/* Footer CTA */}
      <div className="course-card-footer">
        <Link to={enquireUrl} className="btn btn-primary btn-block btn-sm">
          <span>Enquire About This Course</span>
          <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  );
}
