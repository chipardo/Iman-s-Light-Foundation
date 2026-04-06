'use client';

import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LanguageContext } from '@/context/LanguageContext';
import { Lightbulb, Heart, Scale, Leaf, Users, Star, Globe2 } from 'lucide-react';
import styles from './about.module.css';

const t = {
  en: {
    breadcrumb: 'Home',
    heroLabel: 'Our Story',
    heroTitle: "About Iman's Light Foundation",
    heroSub: 'Born from tragedy, transformed into hope — we fight to protect every life from the devastation of Fentanyl and deadly drugs.',
    storyLabel: "Iman's Story",
    storyTitle: 'The Story That Started It All',
    storyText1: "Iman's Light Foundation was created in memory and honor of a beloved community member whose life was tragically cut short by Fentanyl — a chemical warfare quietly devastating families across America.",
    storyText2: "We are in the middle of a crisis where no infant, child, youth or adult should lose their life to Fentanyl or any other drug. A world where \"life\" is considered priceless, and where we collectively strive to stop the distribution of illegal street Fentanyl and any other deadly drug.",
    storyText3: "From the depths of grief, Iman's Light Foundation rose — committed to ensuring that no other family has to experience this devastation. Our mission is education, prevention, advocacy, and healing.",
    missionLabel: 'Mission & Vision',
    missionTitle: 'Our Mission',
    missionText: "Iman's Light Foundation (ILF) aims to educate children, youth, adults and communities on the perils of Fentanyl, and other deadly drugs to prevent lethalities, a life of addiction, and of personal and family destruction. To advocate for severe legislative punitive consequences for drug dealers and traffickers. To provide mental health wellness, strategies and techniques to tackle anxiety, depression, stress, anger, and conflicts. To support and provide key resources to victims and grieving families.",
    visionTitle: 'Our Vision',
    visionText: "Our vision is a world free from the devastating effects of Fentanyl and other lethal drugs. A society where comprehensive drug education and mental health programs fortify communities, enabling children, youth, and adults to resist harmful substances. A world where those who deal in lethal illegal substances receive severe legal and criminal consequences.",
    valuesLabel: 'Core Values',
    valuesTitle: 'What Guides Us',
    values: [
      { icon: <Lightbulb size={32} />, title: 'Education First', text: 'Knowledge is the most powerful weapon against addiction. We arm communities with facts.' },
      { icon: <Heart size={32} />, title: 'Compassion', text: 'Every person affected by addiction deserves empathy, support, and a path forward.' },
      { icon: <Scale size={32} />, title: 'Justice', text: 'We advocate fiercely for legislative change and accountability for those who profit from addiction.' },
      { icon: <Leaf size={32} />, title: 'Healing', text: 'We provide resources and support for victims and families on their journey to healing.' },
      { icon: <Users size={32} />, title: 'Community', text: 'Together we are stronger. We build bridges across organizations, agencies, and communities.' },
      { icon: <Star size={32} />, title: 'Hope', text: "Even in the darkest moments, Iman's Light shines — a beacon of hope for a better tomorrow." },
    ],
    teamLabel: 'Our People',
    teamTitle: 'The Team Behind the Mission',
    teamSub: 'Passionate individuals committed to creating lasting change in our communities.',
    team: [
      { name: 'Foundation Founder', role: 'Executive Director & Founder', bio: 'Dedicated to turning personal tragedy into lasting community change, leading the foundation with heart and purpose.' },
      { name: 'Program Director', role: 'Programs & Education Director', bio: 'Develops and delivers life-changing educational workshops across schools and communities throughout South Florida.' },
      { name: 'Outreach Coordinator', role: 'Community Outreach Coordinator', bio: 'Builds relationships with partner organizations, schools, and community leaders to extend the foundation\'s reach.' },
    ],
    partnersLabel: 'Partners & Sponsors',
    partnersTitle: 'Our Partners',
    partnersSub: 'We are grateful for the organizations and individuals who support our mission.',
    partnerCta: 'Become a Partner',
    ctaTitle: 'Join Our Mission',
    ctaText: "Every donation, volunteer hour, and shared story brings us closer to a world free from the devastation of Fentanyl.",
    ctaDonate: 'Donate Today',
    ctaContact: 'Contact Us',
  },
  es: {
    breadcrumb: 'Inicio',
    heroLabel: 'Nuestra Historia',
    heroTitle: 'Sobre la Fundación Iman\'s Light',
    heroSub: 'Nacida de la tragedia, transformada en esperanza — luchamos para proteger cada vida de la devastación del Fentanilo y las drogas mortales.',
    storyLabel: 'La Historia de Iman',
    storyTitle: 'La Historia Que Lo Comenzó Todo',
    storyText1: 'La Fundación Iman\'s Light fue creada en memoria y honor de un querido miembro de la comunidad cuya vida fue trágicamente truncada por el Fentanilo — una guerra química que silenciosamente devasta a familias en toda América.',
    storyText2: 'Estamos en medio de una crisis donde ningún infante, niño, joven o adulto debería perder la vida por el Fentanilo o cualquier otra droga. Un mundo donde la "vida" se considera invaluable.',
    storyText3: 'De las profundidades del dolor, la Fundación Iman\'s Light surgió — comprometida a garantizar que ninguna otra familia tenga que vivir esta devastación.',
    missionLabel: 'Misión y Visión',
    missionTitle: 'Nuestra Misión',
    missionText: 'La Fundación Iman\'s Light (ILF) tiene como objetivo educar a niños, jóvenes, adultos y comunidades sobre los peligros del Fentanilo y otras drogas mortales para prevenir muertes, vidas de adicción y destrucción personal y familiar.',
    visionTitle: 'Nuestra Visión',
    visionText: 'Nuestra visión es un mundo libre de los efectos devastadores del Fentanilo y otras drogas letales. Una sociedad donde programas integrales de educación sobre drogas y salud mental fortalezcan las comunidades.',
    valuesLabel: 'Valores Fundamentales',
    valuesTitle: 'Lo Que Nos Guía',
    values: [
      { icon: <Lightbulb size={32} />, title: 'Educación Primero', text: 'El conocimiento es el arma más poderosa contra la adicción. Armamos comunidades con hechos.' },
      { icon: <Heart size={32} />, title: 'Compasión', text: 'Cada persona afectada por la adicción merece empatía, apoyo y un camino hacia adelante.' },
      { icon: <Scale size={32} />, title: 'Justicia', text: 'Abogamos ferozmente por cambios legislativos y responsabilidad para quienes se benefician de la adicción.' },
      { icon: <Leaf size={32} />, title: 'Sanación', text: 'Proporcionamos recursos y apoyo para víctimas y familias en su camino hacia la sanación.' },
      { icon: <Users size={32} />, title: 'Comunidad', text: 'Juntos somos más fuertes. Construimos puentes entre organizaciones, agencias y comunidades.' },
      { icon: <Star size={32} />, title: 'Esperanza', text: 'Incluso en los momentos más oscuros, la luz de Iman brilla — un faro de esperanza para un mañana mejor.' },
    ],
    teamLabel: 'Nuestro Equipo',
    teamTitle: 'El Equipo Detrás de la Misión',
    teamSub: 'Personas apasionadas comprometidas a crear un cambio duradero en nuestras comunidades.',
    team: [
      { name: 'Fundadora', role: 'Directora Ejecutiva y Fundadora', bio: 'Dedicada a transformar la tragedia personal en un cambio comunitario duradero, liderando la fundación con corazón y propósito.' },
      { name: 'Directora de Programas', role: 'Directora de Programas y Educación', bio: 'Desarrolla y ofrece talleres educativos que cambian vidas en escuelas y comunidades del sur de Florida.' },
      { name: 'Coordinadora de Alcance', role: 'Coordinadora de Alcance Comunitario', bio: 'Construye relaciones con organizaciones asociadas, escuelas y líderes comunitarios para extender el alcance de la fundación.' },
    ],
    partnersLabel: 'Socios y Patrocinadores',
    partnersTitle: 'Nuestros Socios',
    partnersSub: 'Estamos agradecidos con las organizaciones e individuos que apoyan nuestra misión.',
    partnerCta: 'Ser Socio',
    ctaTitle: 'Únete a Nuestra Misión',
    ctaText: 'Cada donación, hora de voluntariado e historia compartida nos acerca a un mundo libre de la devastación del Fentanilo.',
    ctaDonate: 'Donar Hoy',
    ctaContact: 'Contactanos',
  },
};

export default function AboutPage() {
  const { lang } = useContext(LanguageContext);
  const txt = t[lang];

  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">{txt.breadcrumb}</Link>
            <span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>{lang === 'en' ? 'About' : 'Acerca'}</span>
          </div>
          <span className="section-label">{txt.heroLabel}</span>
          <h1>{txt.heroTitle}</h1>
          <p>{txt.heroSub}</p>
        </div>
      </div>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="section-label">{txt.storyLabel}</span>
              <h2 className="section-title">{txt.storyTitle}</h2>
              <div className="gold-divider" />
              <p style={{ marginBottom: '18px' }}>{txt.storyText1}</p>
              <p style={{ marginBottom: '18px' }}>{txt.storyText2}</p>
              <p>{txt.storyText3}</p>
            </div>
            <div className={styles.storyVisual}>
              <Image
                src="https://static.wixstatic.com/media/56e6ee_ece131f2ea484a41881b640ba6c9430a~mv2.jpg"
                alt="Iman's Light Foundation"
                width={500}
                height={500}
                className={styles.storyImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section section-cream" id="mission">
        <div className="container">
          <div className="text-center">
            <span className="section-label">{txt.missionLabel}</span>
          </div>
          <div className={`grid-2 ${styles.missionGrid}`}>
            <div className={`card ${styles.missionCard}`}>
              <div className={styles.missionIcon}><Star size={48} color="var(--gold)" /></div>
              <h2>{txt.missionTitle}</h2>
              <div className="gold-divider" />
              <p>{txt.missionText}</p>
            </div>
            <div className={`card ${styles.missionCard}`}>
              <div className={styles.missionIcon}><Globe2 size={48} color="var(--blue-500)" /></div>
              <h2>{txt.visionTitle}</h2>
              <div className="gold-divider" />
              <p>{txt.visionText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-dark" id="values">
        <div className="container">
          <div className="text-center">
            <span className="section-label">{txt.valuesLabel}</span>
            <h2 className="section-title" style={{ color: '#fff' }}>{txt.valuesTitle}</h2>
            <div className="gold-divider center" />
          </div>
          <div className="grid-3" style={{ marginTop: '48px' }}>
            {txt.values.map((v, i) => (
              <div key={i} className={`card card-dark ${styles.valueCard}`}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h4 className={styles.valueTitle}>{v.title}</h4>
                <p className={styles.valueText}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" id="team">
        <div className="container">
          <div className="text-center">
            <span className="section-label">{txt.teamLabel}</span>
            <h2 className="section-title">{txt.teamTitle}</h2>
            <div className="gold-divider center" />
            <p className="section-subtitle">{txt.teamSub}</p>
          </div>
          <div className="grid-3">
            {txt.team.map((member, i) => (
              <div key={i} className={`card ${styles.teamCard}`}>
                <div className={styles.teamAvatar}>
                  <span>{member.name[0]}</span>
                </div>
                <h3 className={styles.teamName}>{member.name}</h3>
                <span className="tag" style={{ marginBottom: '16px' }}>{member.role}</span>
                <p className={styles.teamBio}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section section-cream" id="partnerships">
        <div className="container text-center">
          <span className="section-label">{txt.partnersLabel}</span>
          <h2 className="section-title">{txt.partnersTitle}</h2>
          <div className="gold-divider center" />
          <p className="section-subtitle">{txt.partnersSub}</p>
          <div className={styles.partnerLogos}>
            {['Community Partner', 'Local Schools', 'Health Organizations', 'Gov. Agencies'].map((p, i) => (
              <div key={i} className={styles.partnerLogo}>{p}</div>
            ))}
          </div>
          <Link href="/get-involved" className="btn btn-dark" style={{ marginTop: '40px' }}>
            {txt.partnerCta} →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-dark">
        <div className="container text-center">
          <h2 style={{ color: '#fff', marginBottom: '20px' }}>{txt.ctaTitle}</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '560px', margin: '0 auto 40px' }}>{txt.ctaText}</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/donate" className="btn btn-primary">{txt.ctaDonate}</Link>
            <Link href="/contact" className="btn btn-secondary">{txt.ctaContact}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
