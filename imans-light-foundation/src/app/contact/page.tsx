'use client';
import { useContext, useState } from 'react';
import Link from 'next/link';
import { LanguageContext } from '@/context/LanguageContext';
import styles from './contact.module.css';

export default function ContactPage() {
  const { lang } = useContext(LanguageContext);
  const isEs = lang === 'es';
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">{isEs ? 'Inicio' : 'Home'}</Link>
            <span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>{isEs ? 'Contacto' : 'Contact'}</span>
          </div>
          <span className="section-label">{isEs ? 'Contacto' : 'Contact Us'}</span>
          <h1>{isEs ? 'Estamos Aquí Para Ayudar' : "We're Here to Help"}</h1>
          <p>{isEs ? 'Ya sea que tengas una pregunta, quieras invitarnos a hablar, o necesites apoyo — no dudes en comunicarte con nosotros.' : "Whether you have a question, want to invite us to speak, or need support — don't hesitate to reach out."}</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '64px', alignItems: 'flex-start' }}>
            {/* Contact Form */}
            <div>
              <span className="section-label">{isEs ? 'Escríbenos' : 'Send a Message'}</span>
              <h2 className="section-title">{isEs ? 'Ponte en Contacto' : 'Get In Touch'}</h2>
              <div className="gold-divider" />

              {submitted ? (
                <div className={styles.successMsg}>
                  <div className={styles.successIcon}>✓</div>
                  <h3>{isEs ? '¡Mensaje Enviado!' : 'Message Sent!'}</h3>
                  <p>{isEs ? 'Gracias por contactarnos. Te responderemos en 1-2 días hábiles.' : "Thank you for reaching out. We'll respond within 1-2 business days."}</p>
                  <button className="btn btn-dark" onClick={() => setSubmitted(false)} style={{ marginTop: '16px' }}>
                    {isEs ? 'Enviar Otro' : 'Send Another'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className="form-group">
                      <label htmlFor="contact-name">{isEs ? 'Nombre Completo' : 'Full Name'} *</label>
                      <input type="text" id="contact-name" required placeholder={isEs ? 'Tu nombre' : 'Your name'} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-email">{isEs ? 'Correo Electrónico' : 'Email Address'} *</label>
                      <input type="email" id="contact-email" required placeholder={isEs ? 'tu@correo.com' : 'you@email.com'} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-phone">{isEs ? 'Teléfono' : 'Phone Number'}</label>
                    <input type="tel" id="contact-phone" placeholder={isEs ? '(786) 000-0000' : '(786) 000-0000'} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-subject">{isEs ? 'Asunto' : 'Subject'} *</label>
                    <select id="contact-subject" required>
                      <option value="">{isEs ? 'Selecciona un asunto' : 'Select a subject'}</option>
                      <option value="general">{isEs ? 'Consulta General' : 'General Inquiry'}</option>
                      <option value="workshop">{isEs ? 'Solicitar un Taller' : 'Request a Workshop'}</option>
                      <option value="volunteer">{isEs ? 'Ser Voluntario' : 'Volunteer'}</option>
                      <option value="partner">{isEs ? 'Alianzas / Patrocinios' : 'Partnerships / Sponsorships'}</option>
                      <option value="media">{isEs ? 'Prensa / Medios' : 'Press / Media'}</option>
                      <option value="support">{isEs ? 'Necesito Apoyo' : 'I Need Support'}</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-message">{isEs ? 'Mensaje' : 'Message'} *</label>
                    <textarea id="contact-message" required placeholder={isEs ? 'Cuéntanos cómo podemos ayudarte...' : 'Tell us how we can help...'} />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px' }}>
                    {isEs ? 'Enviar Mensaje' : 'Send Message'} →
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <span className="section-label">{isEs ? 'Información de Contacto' : 'Contact Information'}</span>
              <h2 className="section-title">{isEs ? 'Contacta Directamente' : 'Reach Us Directly'}</h2>
              <div className="gold-divider" />
              <div className={styles.contactCards}>
                <div className={styles.contactCard}>
                  <div className={styles.contactCardIcon}>📞</div>
                  <div>
                    <div className={styles.contactCardLabel}>{isEs ? 'Teléfono' : 'Phone'}</div>
                    <a href="tel:+17868533347" className={styles.contactCardValue}>+1 (786) 853-3347</a>
                  </div>
                </div>
                <div className={styles.contactCard}>
                  <div className={styles.contactCardIcon}>📧</div>
                  <div>
                    <div className={styles.contactCardLabel}>{isEs ? 'Correo' : 'Email'}</div>
                    <a href="mailto:imanslightfoundation@gmail.com" className={styles.contactCardValue}>imanslightfoundation@gmail.com</a>
                  </div>
                </div>
                <div className={styles.contactCard}>
                  <div className={styles.contactCardIcon}>📍</div>
                  <div>
                    <div className={styles.contactCardLabel}>{isEs ? 'Área de Servicio' : 'Service Area'}</div>
                    <div className={styles.contactCardValue}>South Florida</div>
                  </div>
                </div>
                <div className={styles.contactCard}>
                  <div className={styles.contactCardIcon}>📋</div>
                  <div>
                    <div className={styles.contactCardLabel}>EIN</div>
                    <div className={styles.contactCardValue}>93-4410846</div>
                  </div>
                </div>
              </div>

              <div className={styles.socialSection}>
                <h4 className={styles.socialTitle}>{isEs ? 'Síguenos' : 'Follow Us'}</h4>
                <div className={styles.socialLinks}>
                  <a href="https://www.instagram.com/imanslightfoundation" target="_blank" rel="noopener noreferrer" className={`btn btn-outline ${styles.socialLink}`}>
                    📷 Instagram
                  </a>
                  <a href="https://www.facebook.com/imanslightfoundation" target="_blank" rel="noopener noreferrer" className={`btn btn-outline ${styles.socialLink}`}>
                    📘 Facebook
                  </a>
                </div>
              </div>

              <div className={styles.emergencyBox}>
                <div className={styles.emergencyIcon}>🚨</div>
                <div>
                  <h4 className={styles.emergencyTitle}>{isEs ? '¿En Crisis?' : 'In Crisis?'}</h4>
                  <p className={styles.emergencyText}>
                    {isEs
                      ? 'Si tú o alguien que conoces está en crisis por sobredosis o salud mental, llama al 988 (Línea de Crisis) o 911 inmediatamente.'
                      : 'If you or someone you know is in a drug or mental health crisis, call 988 (Crisis Lifeline) or 911 immediately.'}
                  </p>
                  <a href="tel:988" className={styles.emergencyLink}>📞 {isEs ? 'Llamar al 988' : 'Call 988'}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
