import React from 'react';
import { Phone } from 'lucide-react';
import { ACADEMY_INFO } from '../../data/academyData';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingActions() {
  return (
    <aside className="floating-actions" aria-label="Quick Contact Actions">
      {/* WhatsApp Action */}
      <a
        href={ACADEMY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-whatsapp"
        title="Chat on WhatsApp (72008 59336)"
        aria-label="Chat with us on WhatsApp"
      >
        <WhatsAppIcon size={28} color="#ffffff" />
      </a>

      {/* Direct Call Action */}
      <a
        href={ACADEMY_INFO.phoneTel}
        className="floating-btn floating-call"
        title="Call Now (72008 59336)"
        aria-label="Call Happy StarZ Academy"
      >
        <Phone size={24} color="#ffffff" />
      </a>
    </aside>
  );
}
