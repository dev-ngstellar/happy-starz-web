import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { ACADEMY_INFO } from '../../data/academyData';
import WhatsAppIcon from '../common/WhatsAppIcon';

export default function HeroSection() {
  return (
    <section className="hero-exact-container" aria-label="Hero Section - Happy StarZ Academy">
      {/* =========================================================================
          BACKGROUND DECORATIVE DOODLES & ORGANIC SHAPES (EXACT TO REFERENCE)
          ========================================================================= */}
      {/* Top Left Pink Shape */}
      <div className="hero-shape-top-left" aria-hidden="true" />

      {/* Bottom Right Yellow/Gold Hill Shape */}
      <div className="hero-shape-bottom-right-yellow" aria-hidden="true" />

      {/* Bottom Right Soft Pink Corner */}
      <div className="hero-shape-bottom-right-pink" aria-hidden="true" />

      {/* Top Left Paper Airplane & Flight Trail SVG */}


      {/* Sun Doodle */}
      <svg className="hero-doodle-sun" viewBox="0 0 60 60" fill="none" aria-hidden="true">
        <circle cx="30" cy="30" r="10" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 3" />
        <line x1="30" y1="12" x2="30" y2="6" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        <line x1="30" y1="48" x2="30" y2="54" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="30" x2="6" y2="30" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        <line x1="48" y1="30" x2="54" y2="30" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        <line x1="17" y1="17" x2="13" y2="13" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        <line x1="43" y1="43" x2="47" y2="47" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        <line x1="17" y1="43" x2="13" y2="47" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        <line x1="43" y1="17" x2="47" y2="13" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
      </svg>

      {/* Star Outline Doodle */}
      <svg className="hero-doodle-star" viewBox="0 0 30 30" fill="none" aria-hidden="true">
        <path
          d="M15,2 L18.5,10.5 L28,11.5 L21,18 L23,27 L15,22.5 L7,27 L9,18 L2,11.5 L11.5,10.5 Z"
          stroke="#34D399"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>

      {/* ABC Card Sketch */}
      <div className="hero-doodle-abc" aria-hidden="true">
        <span>A</span>
        <span>B</span>
      </div>

      {/* 1 2 3 Sketch */}
      <div className="hero-doodle-numbers" aria-hidden="true">
        1 2 3
      </div>

      {/* Lightbulb Sketch */}
      <svg className="hero-doodle-bulb-sketch" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path
          d="M20,8 C14,8 10,12 10,18 C10,22 13,24 15,26 L15,29 L25,29 L25,26 C27,24 30,22 30,18 C30,12 26,8 20,8 Z"
          stroke="#CBD5E1"
          strokeWidth="1.5"
          strokeDasharray="2 2"
        />
        <line x1="16" y1="32" x2="24" y2="32" stroke="#CBD5E1" strokeWidth="1.5" />
      </svg>

      {/* Bottom Left Green Leafy Branch */}
<svg
  className="hero-doodle-leaf"
  viewBox="0 0 100 100"
  fill="none"
  aria-hidden="true"
>
  {/* Leaf */}
  <path
    d="M18 82C18 52 35 22 82 14C84 48 67 76 18 82Z"
    fill="#4ADE80"
    fillOpacity="0.4"
  />

  {/* Leaf inner highlight */}
  <path
    d="M25 75C42 58 57 40 78 20"
    stroke="#86EFAC"
    strokeWidth="3"
    strokeLinecap="round"
    strokeOpacity="0.7"
  />

  {/* Main leaf vein */}
  <path
    d="M18 82C38 64 58 43 82 14"
    stroke="#15803D"
    strokeWidth="2.5"
    strokeLinecap="round"
  />

  {/* Small veins */}
  <path
    d="M34 67L31 52
       M45 57L42 43
       M56 46L54 33
       M67 34L65 24"
    stroke="#15803D"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeOpacity="0.7"
  />
</svg>

      {/* Top Right Dot Grid */}
      <div className="hero-dot-grid" aria-hidden="true" />

      {/* =========================================================================
          HERO MAIN CONTENT GRID - WIDE CONTAINER & BALANCED GAP
          ========================================================================= */}
      <div className="container hero-container-wide" style={{ position: 'relative', zIndex: 5 }}>
        <div className="hero-exact-grid">

          {/* =========================================================================
              LEFT COLUMN: LARGE HEADLINE, EXPANDED DESCRIPTION & CTA PILL BUTTONS
              ========================================================================= */}
          <div className="hero-exact-left">
            <h1 className="hero-exact-heading">
              <span className="hero-title-dark">Building</span>
              <span className="hero-title-coral-line">
                <span className="hero-title-coral">Strong Foundations</span>{' '}
                <span className="hero-title-amp">&amp;</span>
              </span>
              <span className="hero-title-yellow">Confident Learners</span>
            </h1>

            <p className="hero-exact-desc">
              Welcome to <span className="hero-highlight-coral">
                Happy StarZ Academy</span>. We offer exclusive
                 CBSE tuition along with structured <span className="hero-highlight-bold">online </span>  
                 and <span className="hero-highlight-bold">offline </span>learning programmes designed to help every child understand concepts clearly and progress step by step.
            </p>

            {/* CTA BUTTONS */}
            <div className="hero-exact-buttons">
              {/* Button 1: Enquire Now */}
              <Link to="/enquire" className="hero-btn-pill hero-btn-coral">
                <span>Enquire Now</span>
                <ArrowRight size={17} />
              </Link>

              {/* Button 2: WhatsApp */}
              <a
                href={ACADEMY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn-pill hero-btn-whatsapp"
                aria-label="Chat with Happy StarZ Academy on WhatsApp"
              >
                <WhatsAppIcon size={18} color="#ffffff" />
                <span>WhatsApp</span>
              </a>

              {/* Button 3: Call Now */}
              <a
                href={ACADEMY_INFO.phoneTel}
                className="hero-btn-pill hero-btn-charcoal"
                aria-label="Call Happy StarZ Academy"
              >
                <Phone size={16} />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: TRANSPARENT CHILDREN ILLUSTRATION
              ========================================================================= */}
          <div className="hero-exact-right">
            <div className="hero-artwork-wrapper">
              <img
                src="/images/hero/happy-starz-hero-children.webp"
                alt="Confident students happily learning at Happy StarZ Academy"
                className="hero-exact-illustration"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
