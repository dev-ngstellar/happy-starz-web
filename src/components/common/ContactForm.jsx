import React, { useState } from 'react';
import { Send, CheckCircle, XCircle } from 'lucide-react';
import { ACADEMY_INFO } from '../../data/academyData';
import WhatsAppIcon from './WhatsAppIcon';
import { sendContactEmail } from '../../services/email';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredContact: 'WhatsApp'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) {
      setErrorMessage('');
    }
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    } else if (!/^[0-9+\s-]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message or query.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const text = `*New Contact Message - Happy StarZ Academy*
---------------------------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone}
${formData.email ? `*Email:* ${formData.email}\n` : ''}*Preferred Contact:* ${formData.preferredContact}
*Message:* ${formData.message}
---------------------------------------
Sent via Happy StarZ Academy Contact Page`;

    const url = `https://wa.me/${ACADEMY_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsSuccess(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!validate()) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      await sendContactEmail({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email ? formData.email.trim() : '',
        preferredContact: formData.preferredContact,
        message: formData.message.trim(),
      });

      setIsSuccess(true);
    } catch (error) {
      console.error('Happy StarZ Academy contact submission failed:', error);
      setErrorMessage(
        'Unable to send your message right now. Please try again or contact us through WhatsApp or phone.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: '',
      preferredContact: 'WhatsApp'
    });
    setErrors({});
    setErrorMessage('');
    setIsSuccess(false);
  };

  return (
    <div className="app-card app-card-yellow" style={{ padding: '2.5rem' }}>
      <div style={{ marginBottom: '1.75rem', borderBottom: '1.5px solid var(--border-warm)', paddingBottom: '1.25rem' }}>
        <span className="section-badge section-badge-yellow">Send a Message</span>
        <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--charcoal-dark)', marginTop: '0.4rem', marginBottom: '0.35rem' }}>
          Contact the Academy
        </h3>
        <p style={{ fontSize: '0.96rem', color: 'var(--charcoal-muted)', margin: 0, lineHeight: 1.6 }}>
          Send us your questions, schedule a visit, or request guidance regarding admission.
        </p>
      </div>

      {isSuccess ? (
        <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
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
          <h4 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--charcoal-dark)', marginBottom: '0.5rem' }}>
            Message Sent Successfully!
          </h4>
          <p style={{ fontSize: '0.98rem', color: 'var(--charcoal-muted)', marginBottom: '1.75rem', lineHeight: 1.65 }}>
            Thank you, <strong>{formData.name}</strong>. Our team will get back to you via <strong>{formData.preferredContact}</strong> ({formData.phone}) during working hours ({ACADEMY_INFO.workingHours}).
          </p>
          <button type="button" onClick={resetForm} className="btn btn-primary btn-sm">
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label className="form-label" htmlFor="contactName">
              Your Name <span style={{ color: 'var(--primary-coral)' }}>*</span>
            </label>
            <input
              type="text"
              id="contactName"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Ramesh Kumar"
              className={`form-input ${errors.name ? 'is-invalid' : ''}`}
            />
            {errors.name && <div className="form-error">{errors.name}</div>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="contactPhone">
              Phone Number <span style={{ color: 'var(--primary-coral)' }}>*</span>
            </label>
            <input
              type="tel"
              id="contactPhone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 72008 59336"
              className={`form-input ${errors.phone ? 'is-invalid' : ''}`}
            />
            {errors.phone && <div className="form-error">{errors.phone}</div>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="contactEmail">
              Email Address (Optional)
            </label>
            <input
              type="email"
              id="contactEmail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. parent@example.com"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Preferred Contact Method <span style={{ color: 'var(--primary-coral)' }}>*</span>
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
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
                <span>WhatsApp</span>
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
                <span style={{ color: formData.preferredContact === 'Phone Call' ? 'var(--primary-coral)' : 'inherit' }}>Phone Call</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="contactMessage">
              Your Message / Query <span style={{ color: 'var(--primary-coral)' }}>*</span>
            </label>
            <textarea
              id="contactMessage"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message, question, or preferred visit timings..."
              className={`form-textarea ${errors.message ? 'is-invalid' : ''}`}
            ></textarea>
            {errors.message && <div className="form-error">{errors.message}</div>}
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div style={{ padding: '0.85rem 1rem', backgroundColor: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 'var(--radius-md)', color: '#B91C1C', fontSize: '0.9rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <XCircle size={18} style={{ flexShrink: 0 }} />
              <span>{errorMessage}</span>
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '0.85rem', marginTop: '1.5rem' }}>
            <button
              type="button"
              onClick={handleWhatsAppSend}
              className="btn btn-whatsapp btn-block"
              title="Instant WhatsApp Message"
              aria-label="Send message on WhatsApp"
            >
              <WhatsAppIcon size={18} color="#ffffff" />
              <span>Send on WhatsApp</span>
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary btn-block"
            >
              <Send size={18} />
              <span>
                {isSubmitting
                  ? 'Sending Message...'
                  : isSuccess
                    ? 'Message Sent'
                    : 'Submit Message'}
              </span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
