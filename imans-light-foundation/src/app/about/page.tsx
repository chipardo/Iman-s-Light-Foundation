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
    heroLabel: 'The Legacy',
    heroTitle: "Iman's Story: Our Radiant Light",
    heroSub: 'From profound heartbreak emerged an unbreakable resolve. We exist to ensure no other family has to navigate the devastating silence left behind by fentanyl.',
    storyLabel: "Our Genesis",
    storyTitle: 'A Life That Demands Defense',
    storyText1: "Iman’s Light Foundation was not born in a boardroom; it was forged in the fire of unimaginable grief. We were created in memory and absolute honor of Iman, a beloved light in our community whose life was tragically and abruptly stolen by fentanyl a silent, synthetic warfare that is aggressively targeting our youth and devastating families across America.",
    storyText2: "Today, we operate on the frontlines of a crisis where experimentation is fatal. We reject the normalization of these tragedies. We demand a world where children can make mistakes without paying with their lives, where communities are preemptively armed with absolute facts, and where human life is guarded ferociously against those who manufacture and distribute poison.",
    storyText3: "Through Iman’s light, we have transformed our darkest hour into an unyielding shield for your family. We stand as a testament that love is stronger than addiction, and through education, immediate prevention, and aggressive advocacy, we will save lives.",
    missionLabel: 'Our Core Reason',
    missionTitle: 'The Mission',
    missionText: "We intercept the fentanyl crisis at every vulnerable point. Our mission is to proactively educate youth and adults with raw, life-saving facts regarding synthetic opioids, to aggressively advocate for severe legislative consequences against traffickers, and to provide immediate, deeply compassionate sanctuary and mental health resources to grieving families. We do not just raise awareness; we actively equip communities to survive.",
    visionTitle: 'The Vision',
    visionText: "We foresee a society entirely fortified against synthetic drug deception. A world where robust mental health integration eliminates the desire for self-medication, where schools possess the tools to reverse overdoses instantly, and where the legacy of those we've lost powers a permanent cultural shift toward safety and accountability.",
    valuesLabel: 'What We Stand For',
    valuesTitle: 'Our Uncompromising Values',
    values: [
      { icon: <Lightbulb size={32} />, title: 'Radical Transparency', text: 'We do not hide from the brutal facts. We arm parents and students with the raw truth about synthetic lethality.' },
      { icon: <Heart size={32} />, title: 'Unwavering Empathy', text: 'We approach every victim of addiction not with judgment, but with immediate, trauma-informed support.' },
      { icon: <Scale size={32} />, title: 'Fierce Accountability', text: 'We lobby heavily to ensure legislative systems exact absolute justice upon illicit drug manufacturers.' },
      { icon: <Leaf size={32} />, title: 'Generational Healing', text: 'We provide specialized counseling resources to ensure grief does not break families, but unites them.' },
      { icon: <Users size={32} />, title: 'Unified Front', text: 'We collaborate with the DEA, local school boards, and health agencies. No one organization can win this alone.' },
      { icon: <Star size={32} />, title: 'Iman’s Light', text: "Every life saved, every family comforted, and every law changed is a direct continuation of Iman’s beautiful legacy." },
    ],
    teamLabel: 'The Vanguard',
    teamTitle: 'Leadership & Advocacy',
    teamSub: 'Grief transformed into relentless, life-saving action.',
    team: [
      { name: 'Mari C. Rodriguez', role: 'Founder & Executive Director', bio: 'Driven by profound personal loss, Mari transformed her family’s tragedy into an uncompromising foundation that has already reached tens of thousands of students across Florida.' },
      { name: 'Dr. Barbosa', role: 'Medical Response Trainer', bio: 'Leads our opiate response training and Narcan distribution, bringing decades of frontline medical expertise directly into the hands of community members.' },
      { name: 'Community Outreach', role: 'Advocacy Team', bio: 'A coalition of grieving parents, recovering individuals, and educators who stand together to shatter the stigma of addiction.' },
    ],
    partnersLabel: 'A Unified Network',
    partnersTitle: 'Our Critical Allies',
    partnersSub: 'We operate in lockstep with national and local authorities to multiply our impact.',
    partnerCta: 'Become a Sponsor',
    ctaTitle: 'Stand With Us on the Frontlines',
    ctaText: "We cannot fight profound darkness without profound support. Your partnership directly funds Naloxone distribution, trauma counseling, and school prevention workshops.",
    ctaDonate: 'Provide Crucial Funding',
    ctaContact: 'Join the Movement',
  },
  es: {
    breadcrumb: 'Inicio',
    heroLabel: 'El Legado',
    heroTitle: "La Historia de Iman: Nuestra Luz Radiante",
    heroSub: 'De una profunda tragedia surgió una determinación inquebrantable. Existimos para asegurar que ninguna otra familia tenga que navegar por el devastador silencio que deja el fentanilo.',
    storyLabel: "Nuestro Origen",
    storyTitle: 'Una Vida Que Exige Defensa',
    storyText1: "La Fundación Iman's Light no nació en una sala de juntas; se forjó en el fuego de un dolor inimaginable. Fuimos creados en memoria y en honor absoluto de Iman, una luz amada en nuestra comunidad cuya vida fue trágica y abruptamente robada por el fentanilo.",
    storyText2: "Hoy operamos en la primera línea de una crisis donde la experimentación es fatal. Exigimos un mundo donde los niños puedan cometer errores sin pagar con sus vidas, donde las comunidades estén equipadas preventivamente con hechos, y donde la vida humana sea protegida ferozmente.",
    storyText3: "A través de la luz de Iman, hemos transformado nuestra hora más oscura en un escudo inquebrantable para su familia. Somos un testimonio de que el amor es más fuerte que la adicción, y salvaremos vidas.",
    missionLabel: 'Nuestra Razón Fundamental',
    missionTitle: 'La Misión',
    missionText: "Interceptamos la crisis del fentanilo en cada punto vulnerable. Nuestra misión es educar proactivamente a jóvenes y adultos con hechos vitales sobre los opioides sintéticos, abogar agresivamente por consecuencias legislativas severas contra los traficantes, y proveer un santuario compasivo y recursos de salud mental a las familias en duelo.",
    visionTitle: 'La Visión',
    visionText: "Prevemos una sociedad completamente fortificada contra el engaño de las drogas sintéticas. Un mundo donde la integración de la salud mental elimine el deseo de automedicarse, y donde las escuelas posean las herramientas para revertir sobredosis instantáneamente.",
    valuesLabel: 'Lo Que Defendemos',
    valuesTitle: 'Nuestros Valores Intransigentes',
    values: [
      { icon: <Lightbulb size={32} />, title: 'Transparencia Radical', text: 'No nos escondemos de los hechos. Armamos a padres y estudiantes con la cruda verdad.' },
      { icon: <Heart size={32} />, title: 'Empatía Inquebrantable', text: 'Abordamos a cada víctima sin juicio, sino con apoyo inmediato informado sobre el trauma.' },
      { icon: <Scale size={32} />, title: 'Responsabilidad Feroz', text: 'Presionamos fuertemente para asegurar justicia absoluta sobre los fabricantes ilícitos.' },
      { icon: <Leaf size={32} />, title: 'Sanación Generacional', text: 'Proporcionamos recursos de consejería para asegurar que el duelo una a las familias.' },
      { icon: <Users size={32} />, title: 'Frente Unido', text: 'Colaboramos con la DEA y juntas escolares. Ninguna organización puede ganar esto sola.' },
      { icon: <Star size={32} />, title: 'La Luz de Iman', text: "Cada vida salvada es una continuación directa del hermoso legado de Iman." },
    ],
    teamLabel: 'La Vanguardia',
    teamTitle: 'Liderazgo y Abogacía',
    teamSub: 'El dolor transformado en una acción implacable que salva vidas.',
    team: [
      { name: 'Mari C. Rodriguez', role: 'Fundadora y Directora Ejecutiva', bio: 'Impulsada por una profunda pérdida personal, Mari transformó la tragedia en una fundación inquebrantable que ya ha llegado a miles de estudiantes en Florida.' },
      { name: 'Dr. Barbosa', role: 'Entrenadora de Respuesta Médica', bio: 'Lidera nuestro entrenamiento de respuesta a opiáceos y distribución de Narcan.' },
      { name: 'Alcance Comunitario', role: 'Equipo de Abogacía', bio: 'Una coalición de padres en duelo y educadores que se unen para destruir el estigma de la adicción.' },
    ],
    partnersLabel: 'Una Red Unida',
    partnersTitle: 'Nuestros Aliados Críticos',
    partnersSub: 'Operamos en coordinación con las autoridades nacionales y locales para multiplicar nuestro impacto.',
    partnerCta: 'Convertirse en Patrocinador',
    ctaTitle: 'Acompáñenos en Primera Línea',
    ctaText: "No podemos luchar contra esta profunda oscuridad sin un apoyo profundo. Su asociación financia directamente Naloxona, consejería y talleres comunitarios.",
    ctaDonate: 'Proveer Fondos Críticos',
    ctaContact: 'Únete al Movimiento',
  },
};

export default function AboutPage() {
  const { lang } = useContext(LanguageContext);
  const txt = t[lang];

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">{txt.breadcrumb}</Link>
            <span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>{lang === 'en' ? 'Legacy' : 'Legado'}</span>
          </div>
          <span className="section-label">{txt.heroLabel}</span>
          <h1>{txt.heroTitle}</h1>
          <p style={{ maxWidth: '720px', fontSize: '1.2rem', lineHeight: '1.6' }}>{txt.heroSub}</p>
        </div>
      </div>

      <section className="section transparent-bg">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div style={{ paddingRight: '20px' }}>
              <span className="section-label">{txt.storyLabel}</span>
              <h2 className="section-title" style={{ color: 'var(--white)' }}>{txt.storyTitle}</h2>
              <div className="gold-divider" />
              <p style={{ marginBottom: '24px', fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', lineHeight: '1.8' }}>{txt.storyText1}</p>
              <p style={{ marginBottom: '24px', fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', lineHeight: '1.8' }}>{txt.storyText2}</p>
              <p style={{ fontSize: '1.1rem', color: 'var(--gold)', fontWeight: 500, lineHeight: '1.8' }}>{txt.storyText3}</p>
            </div>
            <div className={styles.storyVisual}>
              <Image
                src="https://static.wixstatic.com/media/56e6ee_ece131f2ea484a41881b640ba6c9430a~mv2.jpg"
                alt="Iman's Light Foundation Legacy"
                width={600}
                height={600}
                className={styles.storyImg}
                style={{ borderRadius: '16px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="mission">
        <div className="container">
          <div className="grid-2" style={{ gap: '40px' }}>
            <div className="card" style={{ background: 'rgba(20, 28, 46, 0.7)', backdropFilter: 'blur(12px)', padding: '48px', border: '1px solid rgba(201, 168, 76, 0.2)' }}>
              <Star size={48} color="var(--gold)" style={{ marginBottom: '24px' }} />
              <h2 style={{ color: 'var(--white)', marginBottom: '16px', fontFamily: 'Playfair Display' }}>{txt.missionTitle}</h2>
              <div className="gold-divider" />
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: '1.8' }}>{txt.missionText}</p>
            </div>
            <div className="card" style={{ background: 'rgba(20, 28, 46, 0.7)', backdropFilter: 'blur(12px)', padding: '48px', border: '1px solid rgba(201, 168, 76, 0.2)' }}>
              <Globe2 size={48} color="var(--gold-light)" style={{ marginBottom: '24px' }} />
              <h2 style={{ color: 'var(--white)', marginBottom: '16px', fontFamily: 'Playfair Display' }}>{txt.visionTitle}</h2>
              <div className="gold-divider" />
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: '1.8' }}>{txt.visionText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section transparent-bg" id="values">
        <div className="container">
          <div className="text-center">
            <span className="section-label">{txt.valuesLabel}</span>
            <h2 className="section-title" style={{ color: '#fff' }}>{txt.valuesTitle}</h2>
            <div className="gold-divider center" />
          </div>
          <div className="grid-3" style={{ marginTop: '48px' }}>
            {txt.values.map((v, i) => (
              <div key={i} className="card" style={{ background: 'rgba(20, 28, 46, 0.5)', backdropFilter: 'blur(10px)', padding: '32px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ display: 'block', color: 'var(--gold)', marginBottom: '20px' }}>{v.icon}</span>
                <h4 style={{ color: 'var(--white)', fontSize: '1.25rem', marginBottom: '12px', fontFamily: 'Playfair Display' }}>{v.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: '1.6' }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="team">
        <div className="container">
          <div className="text-center">
            <span className="section-label">{txt.teamLabel}</span>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>{txt.teamTitle}</h2>
            <div className="gold-divider center" />
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>{txt.teamSub}</p>
          </div>
          <div className="grid-3" style={{ marginTop: '40px' }}>
            {txt.team.map((member, i) => (
              <div key={i} className="card" style={{ background: 'transparent', border: '1px solid rgba(201,168,76,0.3)', padding: '40px' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--gold)', color: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '24px' }}>
                  {member.name[0]}
                </div>
                <h3 style={{ color: 'var(--white)', fontSize: '1.4rem', marginBottom: '8px', fontFamily: 'Playfair Display' }}>{member.name}</h3>
                <span className="tag" style={{ marginBottom: '20px', display: 'inline-block' }}>{member.role}</span>
                <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: '1.7' }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section transparent-bg" id="partnerships">
        <div className="container text-center">
          <span className="section-label">{txt.partnersLabel}</span>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>{txt.partnersTitle}</h2>
          <div className="gold-divider center" />
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>{txt.partnersSub}</p>
          <div className={styles.partnerLogos} style={{ marginTop: '40px' }}>
            {['Florida Dept of Children & Families', 'ISAVEFL', 'DEA, One Pill Can Kill', 'Local School Boards'].map((p, i) => (
              <div key={i} className={styles.partnerLogo} style={{ border: '1px solid rgba(255,255,255,0.2)', padding: '20px 30px', borderRadius: '8px', color: 'var(--white)', fontWeight: 600 }}>{p}</div>
            ))}
          </div>
          <Link href="/contact" className="btn btn-outline" style={{ marginTop: '48px' }}>
            {txt.partnerCta} →
          </Link>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container text-center">
          <h2 style={{ color: '#fff', marginBottom: '24px', fontFamily: 'Playfair Display', fontSize: '2.5rem' }}>{txt.ctaTitle}</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '640px', margin: '0 auto 40px', fontSize: '1.1rem', lineHeight: '1.8' }}>{txt.ctaText}</p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/donate" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1rem' }}>{txt.ctaDonate}</Link>
            <Link href="/contact" className="btn btn-secondary" style={{ padding: '16px 36px', fontSize: '1rem' }}>{txt.ctaContact}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
