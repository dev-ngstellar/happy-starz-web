import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Phone } from 'lucide-react';
import WhatsAppIcon from '../components/common/WhatsAppIcon';
import { ACADEMY_INFO, ADMISSION_PROCESS } from '../data/academyData';
import EnquiryForm from '../components/common/EnquiryForm';
import PageBanner from '../components/common/PageBanner';

export default function EnquirePage() {
  const [searchParams] = useSearchParams();
  const selectedCourse = searchParams.get('course') || '';
  const selectedMode = searchParams.get('mode') || '';

  return (
    <div>
      {/* Full-Width Visual Page Banner */}
      <PageBanner
        image="/images/banners/banner-enquire.jpg"
        badge="DIRECT ADMISSIONS"
        badgeColor="orange"
        title="Programme & Admission Enquiry"
        description="Take the first step towards concept clarity and confident learning. Fill out the enquiry form or reach out directly to our academy director."
      />

      {/* Main Two-Column Section */}
      <section className="section">
        <div className="enquire-container">
          <div className="enquire-two-col-layout">
            {/* Left: Interactive 2-Column Enquiry Form */}
            <div>
              <EnquiryForm defaultCourse={selectedCourse} defaultMode={selectedMode} />
            </div>

            {/* Right: Admission Steps & Process Guide */}
            <div>
              {/* How Admission Works */}
              <div className="app-card app-card-coral" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
                <span className="section-badge section-badge-yellow">Transparent Guidance</span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--charcoal-dark)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                  {ADMISSION_PROCESS.title}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {ADMISSION_PROCESS.steps.map((step) => (
                    <div key={step.step} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <div style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--primary-coral)',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 900,
                        fontSize: '1rem',
                        flexShrink: 0,
                        boxShadow: 'var(--shadow-xs)'
                      }}>
                        {step.step}
                      </div>
                      <div>
                        <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--charcoal-dark)', margin: '0 0 0.35rem 0' }}>
                          {step.title}
                        </h4>
                        <p style={{ fontSize: '0.94rem', color: 'var(--charcoal-muted)', margin: 0, lineHeight: 1.6 }}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Help & Queries */}
              <div className="app-card" style={{ padding: '2.25rem', backgroundColor: 'var(--charcoal-dark)', color: '#ffffff', border: 'none' }}>
                <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
                  Prefer Instant Assistance?
                </h4>
                <p style={{ fontSize: '0.96rem', color: '#D1D5E2', marginBottom: '1.75rem', lineHeight: 1.65 }}>
                  Our academy director is available from <strong>{ACADEMY_INFO.workingHours}</strong> to answer any questions about our curriculum, class schedules, or fee structure.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <a
                    href={ACADEMY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-block"
                    aria-label="Chat with us on WhatsApp"
                  >
                    <WhatsAppIcon size={18} color="#ffffff" />
                    <span>WhatsApp Direct: {ACADEMY_INFO.whatsapp}</span>
                  </a>
                  <a
                    href={ACADEMY_INFO.phoneTel}
                    className="btn btn-call btn-block"
                    aria-label="Call Happy StarZ Academy"
                  >
                    <Phone size={18} />
                    <span>Call Academy: {ACADEMY_INFO.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
