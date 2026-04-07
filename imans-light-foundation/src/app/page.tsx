'use client';

import { useContext, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LanguageContext } from '@/context/LanguageContext';
import { BookOpen, Brain, Scale, GraduationCap, HeartPulse, ShieldPlus, Users } from 'lucide-react';
import styles from './page.module.css';

const t = {
  en: {
    heroLabel: 'Be The Light In Darkness',
    heroTitle: 'Preventing Tragedies,\nIlluminating Futures',
    heroSubtitle:
      "Iman's Light Foundation educates communities on the perils of Fentanyl, advocates for legislative change, and provides mental health support to those affected by addiction.",
    heroCta1: 'Our Mission',
    heroCta2: 'Donate',
    impactLabel: 'Our Impact',
    impactTitle: 'Every Life Matters',
    impactSub: 'Through education, advocacy, and community programs, we are changing lives across South Florida.',
    stat1: '500+',
    stat1Label: 'Lives Reached',
    stat2: '30+',
    stat2Label: 'Community Events',
    stat3: '10+',
    stat3Label: 'Partner Organizations',
    stat4: '3',
    stat4Label: 'Active Programs',
    missionLabel: 'What We Stand For',
    missionTitle: "Iman's Light Stands For Change",
    missionSub: 'We fight on three fronts to protect our communities from the devastation of Fentanyl and lethal drugs.',
    pillar1Title: 'Education & Prevention',
    pillar1Text: 'Delivering life-saving workshops to children, youth, and adults on the perils of Fentanyl, drug lacing, and grooming tactics.',
    pillar2Title: 'Mental Health & Wellness',
    pillar2Text: 'Providing workshops with strategies to address anxiety, depression, anger, and stress, key root causes of substance use.',
    pillar3Title: 'Legislative Advocacy',
    pillar3Text: 'Advocating for severe consequences for drug dealers and traffickers, and robust protections for children and communities.',
    storyLabel: "Iman's Story",
    storyTitle: 'Finding Light in the Darkest Moments',
    storyText1: "We are in the middle of a chemical warfare in the realm of drug addiction, where no infant, child, youth or adult should lose their life to Fentanyl, or any other drug.",
    storyText2: "Iman's Light Foundation was born from tragedy, and transformed into a beacon of hope, education, and change for communities across Florida and beyond.",
    storyBtn: "Read Iman's Full Story",
    programsLabel: 'Programs',
    programsTitle: 'Our Core Programs',
    programsSub: 'Comprehensive, community-centered programs designed to prevent addiction and heal those affected.',
    prog1: 'Drug Education Workshops',
    prog1Text: 'School and community workshops covering Fentanyl dangers, drug lacing, and resistance strategies.',
    prog2: 'Mental Health Wellness',
    prog2Text: 'Life-changing workshops addressing anxiety, depression, stress, and emotional self-regulation.',
    prog3: 'Saving Lives Initiative',
    prog3Text: 'Direct outreach, resource connection, and safe disposal of medical waste and drugs.',
    prog4: 'Victim & Family Support',
    prog4Text: 'Connecting grieving families to resources, counseling, and community support networks.',
    learnMore: 'Learn More',
    eventsLabel: 'Events',
    eventsTitle: 'Upcoming & Past Events',
    eventsSub: 'Join us at our community events where education meets action.',
    viewAllEvents: 'View All Events',
    ctaTitle: 'Be Part of the Solution',
    ctaText: 'Your donation funds education workshops, mental health programs, and community outreach that saves lives.',
    ctaDonate: 'Donate Today',
    ctaVolunteer: 'Volunteer With Us',
    newsletterTitle: 'Stay Informed',
    newsletterText: 'Get updates on our programs, events, and advocacy efforts.',
    newsletterPlaceholder: 'Your email address',
    newsletterBtn: 'Subscribe',
  },
  es: {
    heroLabel: 'Sé La Luz En La Oscuridad',
    heroTitle: 'Previniendo Tragedias,\nIluminando Futuros',
    heroSubtitle:
      'La Fundación Iman\'s Light educa comunidades sobre los peligros del Fentanilo, aboga por cambios legislativos y proporciona apoyo de salud mental a los afectados por la adicción.',
    heroCta1: 'Nuestra Misión',
    heroCta2: 'Donar Ahora',
    impactLabel: 'Nuestro Impacto',
    impactTitle: 'Cada Vida Importa',
    impactSub: 'A través de la educación, la abogacía y los programas comunitarios, estamos cambiando vidas en el sur de Florida.',
    stat1: '500+',
    stat1Label: 'Vidas Alcanzadas',
    stat2: '30+',
    stat2Label: 'Eventos Comunitarios',
    stat3: '10+',
    stat3Label: 'Organizaciones Aliadas',
    stat4: '3',
    stat4Label: 'Programas Activos',
    missionLabel: 'Lo Que Defendemos',
    missionTitle: 'Iman\'s Light Lucha Por El Cambio',
    missionSub: 'Luchamos en tres frentes para proteger a nuestras comunidades de la devastación del Fentanilo y las drogas letales.',
    pillar1Title: 'Educación y Prevención',
    pillar1Text: 'Talleres que salvan vidas sobre los peligros del Fentanilo, el corte de drogas y las tácticas de manipulación.',
    pillar2Title: 'Salud Mental y Bienestar',
    pillar2Text: 'Talleres con estrategias para abordar la ansiedad, la depresión, la ira y el estrés, causas raíz del consumo de sustancias.',
    pillar3Title: 'Abogacía Legislativa',
    pillar3Text: 'Abogando por consecuencias severas para traficantes de drogas y protecciones robustas para niños y comunidades.',
    storyLabel: 'La Historia de Iman',
    storyTitle: 'Encontrando Luz en los Momentos Más Oscuros',
    storyText1: 'Estamos en medio de una guerra química en el ámbito de la adicción a las drogas, donde ningún infante, niño, joven o adulto debería perder la vida por el Fentanilo.',
    storyText2: 'La Fundación Iman\'s Light nació de la tragedia, y se transformó en un faro de esperanza, educación y cambio para comunidades de toda Florida.',
    storyBtn: 'Leer la Historia Completa de Iman',
    programsLabel: 'Programas',
    programsTitle: 'Nuestros Programas Principales',
    programsSub: 'Programas integrales centrados en la comunidad para prevenir la adicción y sanar a los afectados.',
    prog1: 'Talleres de Educación sobre Drogas',
    prog1Text: 'Talleres en escuelas y comunidades sobre los peligros del Fentanilo, el corte de drogas y estrategias de resistencia.',
    prog2: 'Bienestar de Salud Mental',
    prog2Text: 'Talleres que cambian vidas abordando la ansiedad, depresión, estrés y autoregulación emocional.',
    prog3: 'Iniciativa Salvando Vidas',
    prog3Text: 'Alcance directo, conexión de recursos y eliminación segura de residuos médicos y drogas.',
    prog4: 'Apoyo a Víctimas y Familias',
    prog4Text: 'Conectamos familias en duelo con recursos, asesoramiento y redes de apoyo comunitario.',
    learnMore: 'Saber Más',
    eventsLabel: 'Eventos',
    eventsTitle: 'Eventos Próximos y Pasados',
    eventsSub: 'Únase a nuestros eventos comunitarios donde la educación se convierte en acción.',
    viewAllEvents: 'Ver Todos los Eventos',
    ctaTitle: 'Sé Parte de la Solución',
    ctaText: 'Su donación financia talleres educativos, programas de salud mental y alcance comunitario que salva vidas.',
    ctaDonate: 'Donar Hoy',
    ctaVolunteer: 'Ser Voluntario',
    newsletterTitle: 'Mantente Informado',
    newsletterText: 'Recibe actualizaciones sobre nuestros programas, eventos y esfuerzos de abogacía.',
    newsletterPlaceholder: 'Tu correo electrónico',
    newsletterBtn: 'Suscribirse',
  },
};

export default function HomePage() {
  const { lang } = useContext(LanguageContext);
  const txt = t[lang];
  const fadeRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    fadeRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addRef = (el: HTMLElement | null) => {
    if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el);
  };

  return (
    <>
      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="https://static.wixstatic.com/media/56e6ee_a50079ec691048d8bdb8696486b07456~mv2.jpg"
            alt="Iman's Light Foundation"
            fill
            priority
            className={styles.heroBgImg}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <span className={`section-label ${styles.heroLabel}`}>{txt.heroLabel}</span>
          <h1 className={styles.heroTitle}>
            {txt.heroTitle.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </h1>
          <p className={styles.heroSub}>{txt.heroSubtitle}</p>
          <div className={styles.heroBtns}>
            <Link href="/about" className="btn btn-secondary">{txt.heroCta1}</Link>
            <Link href="/donate" className="btn btn-primary">{txt.heroCta2} →</Link>
          </div>
        </div>
        <div className={styles.heroScroll}>
          <div className={styles.scrollDot} />
        </div>
      </section>

      {/* ===== IMPACT STATS ===== */}
      <section className={`section section-dark ${styles.statsSection}`}>
        <div className="container">
          <div
            ref={addRef}
            className={`fade-up ${styles.statsHeader} text-center`}
          >
            <span className="section-label">{txt.impactLabel}</span>
            <h2 className="section-title" style={{ color: '#fff' }}>{txt.impactTitle}</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 48px', color: 'rgba(255,255,255,0.6)' }}>{txt.impactSub}</p>
          </div>
          <div className={`grid-4 ${styles.statsGrid}`}>
            {[
              { num: txt.stat1, label: txt.stat1Label },
              { num: txt.stat2, label: txt.stat2Label },
              { num: txt.stat3, label: txt.stat3Label },
              { num: txt.stat4, label: txt.stat4Label },
            ].map((s, i) => (
              <div
                key={i}
                ref={addRef}
                className={`fade-up card card-dark ${styles.statCard}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="stat-number">{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MISSION PILLARS ===== */}
      <section className="section section-cream">
        <div className="container">
          <div ref={addRef} className="fade-up text-center">
            <span className="section-label">{txt.missionLabel}</span>
            <h2 className="section-title">{txt.missionTitle}</h2>
            <div className="gold-divider center" />
            <p className="section-subtitle">{txt.missionSub}</p>
          </div>
          <div className="grid-3">
            {[
              { icon: <BookOpen size={32} />, title: txt.pillar1Title, text: txt.pillar1Text },
              { icon: <Brain size={32} />, title: txt.pillar2Title, text: txt.pillar2Text },
              { icon: <Scale size={32} />, title: txt.pillar3Title, text: txt.pillar3Text },
            ].map((p, i) => (
              <div
                key={i}
                ref={addRef}
                className={`fade-up card ${styles.pillarCard}`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className={styles.pillarIcon}>{p.icon}</div>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <div className="gold-divider" />
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STORY SECTION ===== */}
      <section className={`section ${styles.storySection}`}>
        <div className="container">
          <div className="grid-2">
            <div ref={addRef} className="fade-up">
              <Image
                src="https://static.wixstatic.com/media/56e6ee_1883900cfc974a68ba6cd750894bc110~mv2.jpg"
                alt="Iman's Light Foundation Logo"
                width={520}
                height={520}
                className={styles.storyImg}
              />
            </div>
            <div ref={addRef} className="fade-up" style={{ transitionDelay: '0.2s' }}>
              <span className="section-label">{txt.storyLabel}</span>
              <h2 className="section-title">{txt.storyTitle}</h2>
              <div className="gold-divider" />
              <p style={{ marginBottom: '20px' }}>{txt.storyText1}</p>
              <p style={{ marginBottom: '32px' }}>{txt.storyText2}</p>
              <Link href="/about" className="btn btn-dark">{txt.storyBtn} →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROGRAMS ===== */}
      <section className="section section-dark">
        <div className="container">
          <div ref={addRef} className="fade-up text-center">
            <span className="section-label">{txt.programsLabel}</span>
            <h2 className="section-title" style={{ color: '#fff' }}>{txt.programsTitle}</h2>
            <div className="gold-divider center" />
            <p className="section-subtitle" style={{ margin: '0 auto 48px', color: 'rgba(255,255,255,0.6)' }}>{txt.programsSub}</p>
          </div>
          <div className="grid-4">
            {[
              { icon: <GraduationCap size={32} />, title: txt.prog1, text: txt.prog1Text },
              { icon: <HeartPulse size={32} />, title: txt.prog2, text: txt.prog2Text },
              { icon: <ShieldPlus size={32} />, title: txt.prog3, text: txt.prog3Text },
              { icon: <Users size={32} />, title: txt.prog4, text: txt.prog4Text },
            ].map((p, i) => (
              <div
                key={i}
                ref={addRef}
                className={`fade-up card card-dark ${styles.programCard}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={styles.programIcon}>{p.icon}</div>
                <h4 className={styles.programTitle}>{p.title}</h4>
                <p className={styles.programText}>{p.text}</p>
                <Link href="/programs" className={styles.programLink}>{txt.learnMore} →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaOverlay} />
        <div className={`container ${styles.ctaContent}`}>
          <div ref={addRef} className="fade-up">
            <h2 className={styles.ctaTitle}>{txt.ctaTitle}</h2>
            <p className={styles.ctaText}>{txt.ctaText}</p>
            <div className={styles.ctaBtns}>
              <Link href="/donate" className="btn btn-primary">{txt.ctaDonate}</Link>
              <Link href="/get-involved" className="btn btn-secondary">{txt.ctaVolunteer}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className={`section ${styles.newsletterSection}`}>
        <div className="container">
          <div ref={addRef} className={`fade-up ${styles.newsletterBox}`}>
            <div className={styles.newsletterText}>
              <span className="section-label">{txt.newsletterTitle}</span>
              <h3>{txt.newsletterText}</h3>
            </div>
            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={txt.newsletterPlaceholder}
                className={styles.newsletterInput}
                aria-label="Email address for newsletter"
                required
              />
              <button type="submit" className="btn btn-primary">{txt.newsletterBtn}</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
