import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  FileDown,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import {
  ONLINE_PROGRAMMES,
  OFFLINE_PROGRAMMES,
  ALL_PROGRAMMES,
  SERVICES_AND_ACTIVITIES
} from '../data/academyData';
import CourseCard from '../components/common/CourseCard';
import PageBanner from '../components/common/PageBanner';

export default function CoursesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');

  const [activeTab, setActiveTab] = useState(
    tabParam === 'online' ? 'online' : tabParam === 'offline' ? 'offline' : 'all'
  );

  useEffect(() => {
    if (tabParam === 'online' || tabParam === 'offline') {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'all') {
      searchParams.delete('tab');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ tab });
    }
  };

  return (
    <div>
      {/* Full-Width Visual Page Banner */}
      <PageBanner
        image="/images/banners/banner-courses.jpg"
        badge="STRUCTURED CURRICULUM"
        badgeColor="yellow"
        title="Courses & Learning Programmes"
        description="Comprehensive foundation and academic programmes designed for concept clarity, step-by-step learning, and individual student progress."
        minHeight="340px"
        contentMaxWidth="880px"
      >
        {/* Programme Category Switcher */}
        <div style={{ display: 'inline-flex', background: '#ffffff', padding: '0.35rem', borderRadius: 'var(--radius-full)', border: '1.5px solid var(--border-warm)', boxShadow: 'var(--shadow-sm)' }}>
          <button
            type="button"
            onClick={() => handleTabChange('all')}
            style={{
              padding: '0.55rem 1.35rem',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              background: activeTab === 'all' ? 'var(--primary-coral)' : 'transparent',
              color: activeTab === 'all' ? '#ffffff' : 'var(--charcoal-dark)',
              fontWeight: 800,
              fontSize: '0.92rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            All Programmes ({ALL_PROGRAMMES.length})
          </button>
          <button
            type="button"
            onClick={() => handleTabChange('offline')}
            style={{
              padding: '0.55rem 1.35rem',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              background: activeTab === 'offline' ? 'var(--primary-coral)' : 'transparent',
              color: activeTab === 'offline' ? '#ffffff' : 'var(--charcoal-dark)',
              fontWeight: 800,
              fontSize: '0.92rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            Offline ({OFFLINE_PROGRAMMES.length})
          </button>
          <button
            type="button"
            onClick={() => handleTabChange('online')}
            style={{
              padding: '0.55rem 1.35rem',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              background: activeTab === 'online' ? 'var(--primary-coral)' : 'transparent',
              color: activeTab === 'online' ? '#ffffff' : 'var(--charcoal-dark)',
              fontWeight: 800,
              fontSize: '0.92rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            Online ({ONLINE_PROGRAMMES.length})
          </button>
        </div>
      </PageBanner>

      {/* Main Course Listings */}
      <section className="section" style={{ padding: '2.5rem 0 3.5rem 0' }}>
        <div className="container container-wide">
          {/* OFFLINE PROGRAMMES SECTION */}
          {(activeTab === 'all' || activeTab === 'offline') && (
            <div style={{ marginBottom: activeTab === 'all' ? '3.5rem' : '0' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: 'var(--primary-coral)', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary-coral)' }}></span>
                    In-Academy Classes
                  </div>
                  <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--charcoal-dark)', margin: '0.2rem 0 0 0' }}>
                    Offline Learning Programmes
                  </h2>
                </div>
                <span className="badge-coming-soon badge-warm-pill">
                  7 Structured Courses Available
                </span>
              </div>

              <div className="courses-grid-3">
                {OFFLINE_PROGRAMMES.map((course, idx) => (
                  <CourseCard key={course.id} course={course} index={idx} />
                ))}
              </div>
            </div>
          )}

          {/* ONLINE PROGRAMMES SECTION */}
          {(activeTab === 'all' || activeTab === 'online') && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: 'var(--supporting-green-hover)', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--supporting-green)' }}></span>
                    Interactive Virtual Sessions
                  </div>
                  <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--charcoal-dark)', margin: '0.2rem 0 0 0' }}>
                    Online Learning Programmes
                  </h2>
                </div>
                <span className="badge-coming-soon" style={{ backgroundColor: 'var(--supporting-green-light)', color: 'var(--supporting-green-hover)' }}>
                  7 Structured Courses Available
                </span>
              </div>

              <div className="courses-grid-3">
                {ONLINE_PROGRAMMES.map((course, idx) => (
                  <CourseCard key={course.id} course={course} index={idx} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Services & Periodic Activities Overview */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-header">
            <span className="section-badge section-badge-pink">Academy Activities</span>
            <h2 className="section-title">Services &amp; Special Activities</h2>
            <p className="section-subtitle">
              Overview of academic support, skill development, periodic workshops and event schedules.
            </p>
          </div>

          <div className="grid-2">
            {/* Academic Programs Card */}
            <div className="app-card app-card-coral">
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--charcoal-dark)', marginBottom: '1.15rem' }}>
                {SERVICES_AND_ACTIVITIES.academicPrograms.title}
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {SERVICES_AND_ACTIVITIES.academicPrograms.items.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.96rem', color: 'var(--charcoal-muted)' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--primary-coral)', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skill Development Card */}
            <div className="app-card app-card-yellow">
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--charcoal-dark)', marginBottom: '1.15rem' }}>
                {SERVICES_AND_ACTIVITIES.skillDevelopment.title}
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {SERVICES_AND_ACTIVITIES.skillDevelopment.items.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.96rem', color: 'var(--charcoal-muted)', flexShrink: 0 }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--secondary-yellow-text)', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Workshops & Special Training */}
            <div className="app-card app-card-green">
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--charcoal-dark)', marginBottom: '0.75rem' }}>
                {SERVICES_AND_ACTIVITIES.workshops.title}
              </h3>
              <p style={{ fontSize: '0.96rem', color: 'var(--charcoal-muted)', lineHeight: 1.7, margin: 0 }}>
                {SERVICES_AND_ACTIVITIES.workshops.description}
              </p>
            </div>

            {/* Events & Competitions */}
            <div className="app-card app-card-orange">
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--charcoal-dark)', marginBottom: '0.75rem' }}>
                {SERVICES_AND_ACTIVITIES.events.title}
              </h3>
              <p style={{ fontSize: '0.96rem', color: 'var(--charcoal-muted)', lineHeight: 1.7, margin: 0 }}>
                {SERVICES_AND_ACTIVITIES.events.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brochure Section */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="app-card app-card-yellow" style={{ padding: '3.5rem 2.5rem', textAlign: 'center', maxWidth: '840px', margin: '0 auto' }}>
            <FileDown size={52} style={{ color: 'var(--primary-coral)', margin: '0 auto 1.25rem auto' }} />
            <h3 style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--charcoal-dark)', marginBottom: '0.75rem' }}>
              Academy Course Brochure
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--charcoal-muted)', marginBottom: '2rem', lineHeight: 1.65 }}>
              Our complete informational pamphlet with syllabus summaries and schedule overviews is currently being updated.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button disabled className="btn btn-secondary" style={{ opacity: 0.7, cursor: 'not-allowed' }}>
                <FileDown size={18} />
                <span>Brochure Coming Soon</span>
              </button>
              <a href="/enquire" className="btn btn-primary">
                <span>Enquire Directly With Academy</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
