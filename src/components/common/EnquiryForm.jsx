import React, { useState, useEffect } from 'react';
import { 
  Send, 
  Phone, 
  CheckCircle, 
  XCircle 
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { 
  ACADEMY_INFO, 
  ONLINE_PROGRAMMES, 
  OFFLINE_PROGRAMMES 
} from '../../data/academyData';
import { sendEnquiryEmail } from '../../services/email';

export default function EnquiryForm({ defaultCourse = '', defaultMode = 'all' }) {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childGrade: '',
    location: '',
    learningMode: defaultMode === 'online' ? 'Online' : 'Offline',
    course: defaultCourse || (defaultMode === 'online' ? (ONLINE_PROGRAMMES[0]?.name || '') : (OFFLINE_PROGRAMMES[0]?.name || '')),
    phone: '',
    whatsapp: '',
    sameAsPhone: false,
    preferredContact: 'WhatsApp'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Synchronize when defaultCourse or defaultMode changes from URL
  useEffect(() => {
    let modeToSet = null;
    if (defaultMode && defaultMode !== 'all') {
      modeToSet = defaultMode.toLowerCase() === 'online' ? 'Online' : 'Offline';
    } else if (defaultCourse) {
      const isOnline = ONLINE_PROGRAMMES.some(p => p.name.toLowerCase() === defaultCourse.toLowerCase());
      const isOffline = OFFLINE_PROGRAMMES.some(p => p.name.toLowerCase() === defaultCourse.toLowerCase());
      if (isOnline && !isOffline) modeToSet = 'Online';
      else if (isOffline && !isOnline) modeToSet = 'Offline';
    }

    setFormData(prev => ({
      ...prev,
      ...(modeToSet ? { learningMode: modeToSet } : {}),
      ...(defaultCourse ? { course: defaultCourse } : {})
    }));
  }, [defaultCourse, defaultMode]);

  // Filter available courses based on selected mode
  const filteredCourses = formData.learningMode === 'Online' ? ONLINE_PROGRAMMES : OFFLINE_PROGRAMMES;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Clear any general error message
    if (errorMessage) {
      setErrorMessage('');
    }

    if (name === 'sameAsPhone') {
      setFormData(prev => ({
        ...prev,
        sameAsPhone: checked,
        whatsapp: checked ? prev.phone : ''
      }));
      if (errors.whatsapp) {
        setErrors(prev => ({ ...prev, whatsapp: '' }));
      }
      return;
    }

    if (name === 'phone' && formData.sameAsPhone) {
      setFormData(prev => ({
        ...prev,
        phone: value,
        whatsapp: value
      }));
      if (errors.phone || errors.whatsapp) {
        setErrors(prev => ({ ...prev, phone: '', whatsapp: '' }));
      }
      return;
    }

    if (name === 'learningMode') {
      const newMode = value;
      const targetCourses = newMode === 'Online' ? ONLINE_PROGRAMMES : OFFLINE_PROGRAMMES;
      const courseStillExists = targetCourses.some(c => c.name === formData.course);
      
      setFormData(prev => ({
        ...prev,
        learningMode: newMode,
        course: courseStillExists ? prev.course : (targetCourses[0]?.name || '')
      }));
      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear field-level error
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Parent/Guardian name is required.';
    }

    if (!formData.childName.trim()) {
      newErrors.childName = "Child's name is required.";
    }

    if (!formData.childGrade.trim()) {
      newErrors.childGrade = "Child's grade/class is required.";
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location/City is required.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^[0-9+\s-]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'WhatsApp number is required.';
    } else if (!/^[0-9+\s-]{7,15}$/.test(formData.whatsapp.trim())) {
      newErrors.whatsapp = 'Please enter a valid WhatsApp number.';
    }

    if (!formData.course) {
      newErrors.course = 'Please select a course.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateWhatsAppMessage = () => {
    const text = `*New Admission / Course Enquiry - Happy StarZ Academy*
---------------------------------------
*Parent Name:* ${formData.parentName}
*Child Name:* ${formData.childName}
*Child's Grade:* ${formData.childGrade}
*Location:* ${formData.location}
*Programme:* ${formData.course} (${formData.learningMode})
*Phone:* ${formData.phone}
*WhatsApp:* ${formData.whatsapp}
*Preferred Contact:* ${formData.preferredContact}
---------------------------------------
Sent via Happy StarZ Academy Website Enquiry`;

    return encodeURIComponent(text);
  };

  const handleWhatsAppDirectSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const message = generateWhatsAppMessage();
    const url = `https://wa.me/${ACADEMY_INFO.whatsappRaw}?text=${message}`;
    window.open(url, '_blank');

    setSubmittedData({ ...formData });
    setIsSuccessModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!validate()) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      await sendEnquiryEmail({
        parentName: formData.parentName.trim(),
        childName: formData.childName.trim(),
        childGrade: formData.childGrade.trim(),
        location: formData.location.trim(),
        course: formData.course.trim(),
        learningMode: formData.learningMode,
        phone: formData.phone.trim(),
        whatsapp: formData.whatsapp.trim(),
        preferredContact: formData.preferredContact,
      });

      setSubmittedData({ ...formData });
      setIsSuccessModalOpen(true);
    } catch (error) {
      console.error('Happy StarZ Academy enquiry submission failed:', error);
      setErrorMessage(
        'Unable to submit your enquiry right now. Please try again or contact us through WhatsApp or phone.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      parentName: '',
      childName: '',
      childGrade: '',
      location: '',
      learningMode: 'Offline',
      course: OFFLINE_PROGRAMMES[0]?.name || '',
      phone: '',
      whatsapp: '',
      sameAsPhone: false,
      preferredContact: 'WhatsApp'
    });
    setErrors({});
    setErrorMessage('');
    setIsSuccessModalOpen(false);
  };

  return (
    <div className="app-card app-card-coral" style={{ padding: '2.5rem' }}>
      {/* Form Header */}
      <div style={{ marginBottom: '1.75rem', borderBottom: '1.5px solid var(--border-warm)', paddingBottom: '1.25rem' }}>
        <span className="section-badge section-badge-pink">Direct Admission Guidance</span>
        <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--charcoal-dark)', marginTop: '0.5rem', marginBottom: '0.4rem' }}>
          Enquiry Form
        </h2>
        <p style={{ fontSize: '0.96rem', color: 'var(--charcoal-muted)', margin: 0, lineHeight: 1.6 }}>
          Fill out the details below. Our academy team will connect with you directly to guide you through the process.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* TWO-COLUMN DESKTOP GRID */}
        <div className="form-row-2col">
          {/* Parent / Guardian Name */}
          <div className="form-group">
            <label className="form-label" htmlFor="parentName">
              Parent / Guardian Name <span style={{ color: 'var(--primary-coral)' }}>*</span>
            </label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              placeholder="e.g. Ramesh Kumar"
              className={`form-input ${errors.parentName ? 'is-invalid' : ''}`}
            />
            {errors.parentName && <div className="form-error">{errors.parentName}</div>}
          </div>

          {/* Child's Name */}
          <div className="form-group">
            <label className="form-label" htmlFor="childName">
              Child's Name <span style={{ color: 'var(--primary-coral)' }}>*</span>
            </label>
            <input
              type="text"
              id="childName"
              name="childName"
              value={formData.childName}
              onChange={handleChange}
              placeholder="e.g. Diya"
              className={`form-input ${errors.childName ? 'is-invalid' : ''}`}
            />
            {errors.childName && <div className="form-error">{errors.childName}</div>}
          </div>

          {/* Child's Grade */}
          <div className="form-group">
            <label className="form-label" htmlFor="childGrade">
              Child's Grade / Class <span style={{ color: 'var(--primary-coral)' }}>*</span>
            </label>
            <input
              type="text"
              id="childGrade"
              name="childGrade"
              value={formData.childGrade}
              onChange={handleChange}
              placeholder="e.g. Grade 4 / UKG / Class 8"
              className={`form-input ${errors.childGrade ? 'is-invalid' : ''}`}
            />
            {errors.childGrade && <div className="form-error">{errors.childGrade}</div>}
          </div>

          {/* Location / Area */}
          <div className="form-group">
            <label className="form-label" htmlFor="location">
              Location / Area <span style={{ color: 'var(--primary-coral)' }}>*</span>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Komarapalayam / C.N. Palayam"
              className={`form-input ${errors.location ? 'is-invalid' : ''}`}
            />
            {errors.location && <div className="form-error">{errors.location}</div>}
          </div>

          {/* Learning Mode */}
          <div className="form-group">
            <label className="form-label">
              Learning Mode <span style={{ color: 'var(--primary-coral)' }}>*</span>
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              <label style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                padding: '0.75rem 0.5rem',
                borderRadius: 'var(--radius-md)',
                border: formData.learningMode === 'Offline' ? '2px solid var(--primary-coral)' : '1.5px solid var(--border-warm)',
                backgroundColor: formData.learningMode === 'Offline' ? 'var(--primary-coral-light)' : '#ffffff',
                color: formData.learningMode === 'Offline' ? 'var(--primary-coral)' : 'var(--charcoal-dark)',
                fontWeight: 700,
                fontSize: '0.92rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}>
                <input
                  type="radio"
                  name="learningMode"
                  value="Offline"
                  checked={formData.learningMode === 'Offline'}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                />
                <span>Offline</span>
              </label>
              <label style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                padding: '0.75rem 0.5rem',
                borderRadius: 'var(--radius-md)',
                border: formData.learningMode === 'Online' ? '2px solid var(--supporting-green)' : '1.5px solid var(--border-warm)',
                backgroundColor: formData.learningMode === 'Online' ? 'var(--supporting-green-light)' : '#ffffff',
                color: formData.learningMode === 'Online' ? 'var(--supporting-green-hover)' : 'var(--charcoal-dark)',
                fontWeight: 700,
                fontSize: '0.92rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}>
                <input
                  type="radio"
                  name="learningMode"
                  value="Online"
                  checked={formData.learningMode === 'Online'}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                />
                <span>Online</span>
              </label>
            </div>
          </div>

          {/* Programme Selection */}
          <div className="form-group">
            <label className="form-label" htmlFor="course">
              Course / Programme <span style={{ color: 'var(--primary-coral)' }}>*</span>
            </label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className={`form-select ${errors.course ? 'is-invalid' : ''}`}
            >
              <option value="">-- Select a Programme --</option>
              {filteredCourses.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name} {c.isFeatured ? '★' : ''}
                </option>
              ))}
            </select>
            {errors.course && <div className="form-error">{errors.course}</div>}
          </div>

          {/* Phone Number */}
          <div className="form-group">
            <label className="form-label" htmlFor="phone">
              Phone Number <span style={{ color: 'var(--primary-coral)' }}>*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 72008 59336"
              className={`form-input ${errors.phone ? 'is-invalid' : ''}`}
            />
            {errors.phone && <div className="form-error">{errors.phone}</div>}
          </div>

          {/* WhatsApp Number with Same as Phone Checkbox */}
          <div className="form-group">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
              <label className="form-label" htmlFor="whatsapp" style={{ margin: 0 }}>
                WhatsApp Number <span style={{ color: 'var(--primary-coral)' }}>*</span>
              </label>
              <label style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--charcoal-muted)', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  name="sameAsPhone"
                  checked={formData.sameAsPhone}
                  onChange={handleChange}
                />
                <span>Same as Phone</span>
              </label>
            </div>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="e.g. 72008 59336"
              className={`form-input ${errors.whatsapp ? 'is-invalid' : ''}`}
            />
            {errors.whatsapp && <div className="form-error">{errors.whatsapp}</div>}
          </div>
        </div>

        {/* Preferred Contact Method */}
        <div className="form-group" style={{ marginTop: '0.5rem' }}>
          <label className="form-label">
            Preferred Contact Method <span style={{ color: 'var(--primary-coral)' }}>*</span>
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.8rem 1rem',
              borderRadius: 'var(--radius-md)',
              border: formData.preferredContact === 'WhatsApp' ? '2px solid var(--supporting-green)' : '1.5px solid var(--border-warm)',
              backgroundColor: formData.preferredContact === 'WhatsApp' ? 'var(--supporting-green-light)' : '#ffffff',
              color: formData.preferredContact === 'WhatsApp' ? 'var(--supporting-green-hover)' : 'var(--charcoal-dark)',
              fontWeight: 700,
              fontSize: '0.92rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}>
              <input
                type="radio"
                name="preferredContact"
                value="WhatsApp"
                checked={formData.preferredContact === 'WhatsApp'}
                onChange={handleChange}
                style={{ display: 'none' }}
              />
              <WhatsAppIcon size={18} color={formData.preferredContact === 'WhatsApp' ? 'var(--supporting-green-hover)' : '#8E94A8'} />
              <span>WhatsApp Message</span>
            </label>

            <label style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.8rem 1rem',
              borderRadius: 'var(--radius-md)',
              border: formData.preferredContact === 'Phone Call' ? '2px solid var(--primary-coral)' : '1.5px solid var(--border-warm)',
              backgroundColor: formData.preferredContact === 'Phone Call' ? 'var(--primary-coral-light)' : '#ffffff',
              color: formData.preferredContact === 'Phone Call' ? 'var(--primary-coral)' : 'var(--charcoal-dark)',
              fontWeight: 700,
              fontSize: '0.92rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}>
              <input
                type="radio"
                name="preferredContact"
                value="Phone Call"
                checked={formData.preferredContact === 'Phone Call'}
                onChange={handleChange}
                style={{ display: 'none' }}
              />
              <Phone size={16} color={formData.preferredContact === 'Phone Call' ? 'var(--primary-coral)' : '#8E94A8'} />
              <span>Direct Phone Call</span>
            </label>
          </div>
        </div>

        {/* Error message banner */}
        {errorMessage && (
          <div style={{ padding: '0.85rem 1rem', backgroundColor: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 'var(--radius-md)', color: '#B91C1C', fontSize: '0.9rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <XCircle size={18} style={{ flexShrink: 0 }} />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Action Buttons Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
          <button
            type="button"
            onClick={handleWhatsAppDirectSubmit}
            className="btn btn-whatsapp btn-lg"
            title="Instant WhatsApp Enquiry"
            aria-label="Enquire on WhatsApp"
          >
            <WhatsAppIcon size={20} color="#ffffff" />
            <span>Enquire on WhatsApp</span>
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary btn-lg"
          >
            <Send size={18} />
            <span>
              {isSubmitting
                ? 'Sending Enquiry...'
                : isSuccessModalOpen
                ? 'Enquiry Submitted'
                : 'Submit Enquiry'}
            </span>
          </button>
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--charcoal-muted)', textAlign: 'center', marginTop: '1.25rem', marginBottom: 0 }}>
          🔒 Your information is confidential and will only be used to guide you regarding Happy StarZ Academy programmes.
        </p>
      </form>

      {/* Success Confirmation Modal */}
      {isSuccessModalOpen && (
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
              backgroundColor: 'var(--supporting-green-light)',
              color: 'var(--supporting-green)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem auto'
            }}>
              <CheckCircle size={36} />
            </div>

            <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--charcoal-dark)', marginBottom: '0.5rem' }}>
              Enquiry Submitted Successfully!
            </h3>
            <p style={{ fontSize: '0.98rem', color: 'var(--charcoal-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Thank you, <strong>{submittedData?.parentName}</strong>. We have received your admission enquiry for <strong>{submittedData?.childName}</strong> regarding the <strong>{submittedData?.course} ({submittedData?.learningMode})</strong>.
            </p>

            <div style={{ backgroundColor: 'var(--bg-cream)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', textAlign: 'left', marginBottom: '1.5rem', fontSize: '0.9rem', border: '1.5px solid var(--border-warm)' }}>
              <div style={{ fontWeight: 800, color: 'var(--charcoal-dark)', marginBottom: '0.4rem' }}>Enquiry Summary:</div>
              <div>• <strong>Child:</strong> {submittedData?.childName} (Grade: {submittedData?.childGrade})</div>
              <div>• <strong>Location:</strong> {submittedData?.location}</div>
              <div>• <strong>Phone / WhatsApp:</strong> {submittedData?.phone} / {submittedData?.whatsapp}</div>
              <div>• <strong>Preferred Contact:</strong> {submittedData?.preferredContact}</div>
              <div>• <strong>Next Step:</strong> Academy Director will contact you within working hours ({ACADEMY_INFO.workingHours}).</div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={resetForm}
                className="btn btn-secondary btn-sm"
              >
                Close &amp; Submit Another
              </button>
              <a
                href={ACADEMY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
                aria-label="Open WhatsApp to chat"
              >
                <WhatsAppIcon size={16} color="#ffffff" />
                <span>Open WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
