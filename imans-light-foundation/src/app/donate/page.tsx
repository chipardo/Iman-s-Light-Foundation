'use client';
import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LanguageContext } from '@/context/LanguageContext';
import { Leaf, Heart, Star, Sparkles, Gem, Trophy, Mail, RefreshCcw, Building2 , GraduationCap, Heart, ShieldAlert, Scale } from 'lucide-react';
import styles from './donate.module.css';

const tiers = {
  en: [
    { amount: '', label: 'Platinum Sponsor', descEn: 'At the Platinum level, you become a foundational pillar of Iman’s Light, enabling sweeping organizational impact in schools.', icon: <Trophy size={32} />, featured: true },
    { amount: '', label: 'Gold Sponsor', descEn: 'Your Gold Sponsorship directly funds multiple interactive workshops and provides long-term mental wellness resources.', icon: <Gem size={32} /> },
    { amount: '', label: 'Silver Sponsor', descEn: 'A beautiful way to directly sponsor families and individuals who vitally need our Narcan kits and community support.', icon: <Star size={32} /> },
    { amount: '', label: 'Educational Silver', descEn: 'Specifically funds our critical "Truth About Drugs" school presentations, printing educational materials for teens.', icon: <Leaf size={32} /> },
  ],
  es: [
    { amount: '', label: 'Patrocinador Platino', descEn: 'En el nivel Platino, te conviertes en un pilar fundamental de la Luz de Iman, permitiendo un gran impacto en las escuelas.', icon: <Trophy size={32} />, featured: true },
    { amount: '', label: 'Patrocinador Oro', descEn: 'Tu patrocinio de Oro financia múltiples talleres interactivos y proporciona recursos de salud mental a largo plazo.', icon: <Gem size={32} /> },
    { amount: '', label: 'Patrocinador Plata', descEn: 'Una hermosa manera de patrocinar a las familias que necesitan vitalmente nuestros kits Narcan y apoyo comunitario.', icon: <Star size={32} /> },
    { amount: '', label: 'Plata Educativo', descEn: 'Financia específicamente nuestras presentaciones escolares "La Verdad Sobre las Drogas" e imprime materiales educativos.', icon: <Leaf size={32} /> },
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

      
            {/* Official Sponsors */}
      <section className="section transparent-bg">
        <div className="container text-center">
          <span className="section-label">{isEs ? 'Nuestros Socios' : 'Our Partners'}</span>
          <h2 className="section-title">{isEs ? 'Patrocinadores Actuales' : 'Current Sponsors'}</h2>
          <div className="gold-divider center" />
          <p className="section-subtitle">{isEs ? 'Agradecemos profundamente a las organizaciones que hacen posible nuestra misión.' : 'We are deeply grateful to the organizations that make our mission possible.'}</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', marginTop: '48px', alignItems: 'center' }}>
            {/* Platinum */}
            <div style={{ width: '100%' }}>
              <h4 style={{ color: 'var(--gold)', marginBottom: '16px', fontSize: '1.2rem', fontFamily: 'Playfair Display' }}>PLATINUM</h4>
              <div className={styles.sponsorLogosGrid}>
                <div className={styles.sponsorBadge}>
                  <Image src="https://static.wixstatic.com/media/56e6ee_b2c36136ad654d72a7f4de09ea17cf05~mv2.png/v1/fill/w_568,h_191,q_90,enc_avif,quality_auto/56e6ee_b2c36136ad654d72a7f4de09ea17cf05~mv2.png" alt="FGA" width={284} height={95} style={{ objectFit: 'contain' }} />
                </div>
              </div>
            </div>

            {/* Gold */}
            <div style={{ width: '100%' }}>
              <h4 style={{ color: 'var(--gold)', marginBottom: '16px', fontSize: '1.2rem', fontFamily: 'Playfair Display' }}>GOLD</h4>
              <div className={styles.sponsorLogosGrid}>
                <div className={styles.sponsorBadge}>
                  <Image src="https://static.wixstatic.com/media/56e6ee_b9e7061a12d24743b5b3fc07a74f92ed~mv2.png/v1/fill/w_201,h_194,q_90,enc_avif,quality_auto/56e6ee_b9e7061a12d24743b5b3fc07a74f92ed~mv2.png" alt="The Bridge" width={100} height={97} style={{ objectFit: 'contain' }} />
                </div>
                <div className={styles.sponsorBadge}>
                  <Image src="https://static.wixstatic.com/media/56e6ee_b29a7ddaabd3481bb888135a8da07410~mv2.png/v1/fill/w_357,h_194,q_90,enc_avif,quality_auto/56e6ee_b29a7ddaabd3481bb888135a8da07410~mv2.png" alt="Survivors Pathway" width={178} height={97} style={{ objectFit: 'contain' }} />
                </div>
                <div className={styles.sponsorBadge}>
                  <Image src="https://static.wixstatic.com/media/56e6ee_f010f8e8cccb405a8fc28f3fb2481f7e~mv2.png/v1/fill/w_233,h_183,q_90,enc_avif,quality_auto/56e6ee_f010f8e8cccb405a8fc28f3fb2481f7e~mv2.png" alt="Nicklaus Childrens" width={116} height={91} style={{ objectFit: 'contain' }} />
                </div>
              </div>
            </div>

            {/* Silver & Educational */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', justifyContent: 'center', width: '100%' }}>
              <div style={{ flex: '1 1 300px' }}>
                <h4 style={{ color: 'var(--gold)', marginBottom: '16px', fontSize: '1.2rem', fontFamily: 'Playfair Display' }}>SILVER</h4>
                <div className={styles.sponsorLogosGrid}>
                  <div className={styles.sponsorBadge}>
                    <Image src="https://static.wixstatic.com/media/56e6ee_55f0bbe459fb41e9907cd3c547b6afb5~mv2.png/v1/fill/w_371,h_268,q_90,enc_avif,quality_auto/56e6ee_55f0bbe459fb41e9907cd3c547b6afb5~mv2.png" alt="One More Child" width={135} height={97} style={{ objectFit: 'contain' }} />
                  </div>
                </div>
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <h4 style={{ color: 'var(--gold)', marginBottom: '16px', fontSize: '1.2rem', fontFamily: 'Playfair Display' }}>EDUCATIONAL SILVER</h4>
                <div className={styles.sponsorLogosGrid}>
                  <div className={styles.sponsorBadge}>
                    <Image src="https://static.wixstatic.com/media/56e6ee_0b1d1f617c3b42acbf68755c62e11afe~mv2.png/v1/fill/w_224,h_225,q_90,enc_avif,quality_auto/56e6ee_0b1d1f617c3b42acbf68755c62e11afe~mv2.png" alt="Village South" width={97} height={97} style={{ objectFit: 'contain' }} />
                  </div>
                </div>
              </div>
            </div>

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
