'use client';
import { useContext } from 'react';
import Link from 'next/link';
import { LanguageContext } from '@/context/LanguageContext';
import { Leaf, Heart, Star, Sparkles, Gem, Trophy, Mail, RefreshCcw, Building2 } from 'lucide-react';
import styles from './donate.module.css';

const tiers = {
  en: [
    { amount: '$25', label: 'Friend', descEn: 'Provides educational materials for one student workshop.', icon: <Leaf size={32} /> },
    { amount: '$50', label: 'Supporter', descEn: 'Funds a mental health wellness resource kit for a family.', icon: <Heart size={32} /> },
    { amount: '$100', label: 'Champion', descEn: 'Sponsors one family for a complete workshop series.', icon: <Star size={32} /> },
    { amount: '$250', label: 'Advocate', descEn: 'Helps host a community fentanyl awareness event.', icon: <Sparkles size={32} />, featured: true },
    { amount: '$500', label: 'Guardian', descEn: 'Funds an entire school prevention workshop for 30+ students.', icon: <Gem size={32} /> },
    { amount: 'Custom', label: 'Legacy', descEn: 'Your custom gift makes a lasting difference at any level.', icon: <Trophy size={32} /> },
  ],
  es: [
    { amount: '$25', label: 'Amigo', descEn: 'Proporciona materiales educativos para un taller estudiantil.', icon: <Leaf size={32} /> },
    { amount: '$50', label: 'Simpatizante', descEn: 'Financia un kit de recursos de bienestar de salud mental para una familia.', icon: <Heart size={32} /> },
    { amount: '$100', label: 'Campeón', descEn: 'Patrocina a una familia para una serie completa de talleres.', icon: <Star size={32} /> },
    { amount: '$250', label: 'Defensor', descEn: 'Ayuda a organizar un evento comunitario de concientización sobre el Fentanilo.', icon: <Sparkles size={32} />, featured: true },
    { amount: '$500', label: 'Guardián', descEn: 'Financia un taller completo de prevención escolar para más de 30 estudiantes.', icon: <Gem size={32} /> },
    { amount: 'Personalizado', label: 'Legado', descEn: 'Tu donación personalizada marca una diferencia duradera.', icon: <Trophy size={32} /> },
  ],
};

export default function DonatePage() {
  const { lang } = useContext(LanguageContext);
  const isEs = lang === 'es';
  const tierList = tiers[lang];

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">{isEs ? 'Inicio' : 'Home'}</Link>
            <span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>{isEs ? 'Donar' : 'Donate'}</span>
          </div>
          <span className="section-label">{isEs ? 'Tu Donación Importa' : 'Your Gift Matters'}</span>
          <h1>{isEs ? 'Apoya la Misión de Iman\'s Light' : "Support Iman's Light Mission"}</h1>
          <p>{isEs ? 'Cada donación financia talleres de educación, recursos de salud mental y alcance comunitario que salva vidas en Florida y más allá.' : 'Every donation funds education workshops, mental health resources, and community outreach that saves lives across Florida and beyond.'}</p>
        </div>
      </div>

      {/* Donation Tiers */}
      <section className="section section-cream">
        <div className="container">
          <div className="text-center">
            <span className="section-label">{isEs ? 'Niveles de Donación' : 'Giving Levels'}</span>
            <h2 className="section-title">{isEs ? '¿Cuánto Puedes Dar?' : 'How Much Would You Like to Give?'}</h2>
            <div className="gold-divider center" />
            <p className="section-subtitle">{isEs ? 'Cada nivel de donación tiene un impacto real y medible en nuestra comunidad.' : 'Every giving level has a real, measurable impact on our community.'}</p>
          </div>
          <div className={styles.tiersGrid}>
            {tierList.map((tier, i) => (
              <div key={i} className={`card ${styles.tierCard} ${(tier as any).featured ? styles.tierFeatured : ''}`}>
                <div className={styles.tierIcon}>{tier.icon}</div>
                <div className={styles.tierAmount}>{tier.amount}</div>
                <div className={styles.tierLabel}>{tier.label}</div>
                <p className={styles.tierDesc}>{tier.descEn}</p>
                <a
                  href="https://www.imanslightfoundation.org/donations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${(tier as any).featured ? 'btn-primary' : 'btn-outline'}`}
                  style={{ marginTop: 'auto', fontSize: '0.875rem', padding: '12px 22px', textAlign: 'center' }}
                >
                  {isEs ? 'Donar' : 'Give'} {tier.amount !== 'Custom' && tier.amount !== 'Personalizado' ? tier.amount : ''} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Donate CTA */}
      <section className="section section-dark">
        <div className="container text-center">
          <div className={styles.donateBox}>
            <span className="section-label">{isEs ? 'Donar Ahora' : 'Donate Now'}</span>
            <h2 style={{ color: '#fff', marginBottom: '16px' }}>{isEs ? 'Haz tu Donación Segura' : 'Make Your Secure Donation'}</h2>
            <div className="gold-divider center" />
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '560px', margin: '0 auto 32px' }}>
              {isEs
                ? 'Iman\'s Light Foundation es una organización sin fines de lucro 501(c)(3) registrada. Tu donación es deducible de impuestos.'
                : "Iman's Light Foundation is a registered 501(c)(3) nonprofit. Your donation is tax-deductible. EIN: 93-4410846."}
            </p>
            <div className={styles.donateActions}>
              <a
                href="https://www.imanslightfoundation.org/donations"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ fontSize: '1rem', padding: '16px 40px' }}
              >
                {isEs ? 'Donar de Forma Segura' : 'Donate Securely'} →
              </a>
            </div>
            <div className={styles.trustBadges}>
              <div className={styles.badge}>🔒 {isEs ? 'Pago Seguro' : 'Secure Payment'}</div>
              <div className={styles.badge}>✅ 501(c)(3) {isEs ? 'Registrada' : 'Registered'}</div>
              <div className={styles.badge}>📋 EIN: 93-4410846</div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="section section-cream">
        <div className="container">
          <div className="text-center">
            <span className="section-label">{isEs ? 'Otras Formas de Dar' : 'Other Ways to Give'}</span>
            <h2 className="section-title">{isEs ? 'Más Opciones de Donación' : 'More Ways to Support'}</h2>
            <div className="gold-divider center" />
          </div>
          <div className="grid-3" style={{ marginTop: '48px' }}>
            {[
              {
                icon: <Mail size={40} color="var(--gold)" />,
                titleEn: 'Mail a Check',
                titleEs: 'Enviar un Cheque',
                descEn: 'Make checks payable to "Iman\'s Light Foundation" and mail to our foundation address.',
                descEs: 'Haz los cheques a nombre de "Iman\'s Light Foundation" y envíalos a nuestra dirección.',
              },
              {
                icon: <RefreshCcw size={40} color="var(--gold)" />,
                titleEn: 'Recurring Giving',
                titleEs: 'Donaciones Recurrentes',
                descEn: 'Set up monthly donations to provide sustained support for our programs year-round.',
                descEs: 'Configura donaciones mensuales para proporcionar apoyo sostenido a nuestros programas.',
              },
              {
                icon: <Building2 size={40} color="var(--gold)" />,
                titleEn: 'Corporate Sponsorship',
                titleEs: 'Patrocinio Corporativo',
                descEn: 'Partner with us as a corporate sponsor. Contact us for sponsorship packages and benefits.',
                descEs: 'Asóciate con nosotros como patrocinador corporativo. Contáctanos para paquetes y beneficios.',
              },
            ].map((way, i) => (
              <div key={i} className="card" style={{ padding: '36px 28px' }}>
                <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>{way.icon}</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>{isEs ? way.titleEs : way.titleEn}</h3>
                <div className="gold-divider" />
                <p style={{ fontSize: '0.9rem' }}>{isEs ? way.descEs : way.descEn}</p>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '48px' }}>
            <Link href="/contact" className="btn btn-dark">{isEs ? 'Contáctanos para Más Opciones' : 'Contact Us for More Options'} →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
