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
    heroTitle: "Iman's Light: A Mother's Love",
    heroSub: 'Born from a deep longing to honor a beautiful life, we are here to walk alongside families, offering comfort, education, and unwavering support in the face of the fentanyl crisis.',
    storyLabel: "How We Started",
    storyTitle: 'A Life Full of Light',
    storyText1: "Iman’s Light Foundation began at a kitchen table, rooted in the deep love of a family determined to keep their daughter's beautiful spirit alive. Iman was a bright, caring light in our community, and losing her to fentanyl was a heartbreak no family should ever have to endure.",
    storyText2: "But from that heartbreak grew a mission of pure love and connection. We realized that if we could openly share our story and honest facts, we could protect other children. We want to live in a world where kids are safe to learn and grow, surrounded by a community that looks out for them with compassion and truth.",
    storyText3: "Through Iman’s light, we have built a warm, welcoming community of support. We believe that love and education are our greatest tools, and by standing together—listening, learning, and supporting one another—we can guide our youth toward safe, healthy futures.",
    missionLabel: 'Our Purpose',
    missionTitle: 'The Mission',
    missionText: "Our mission is simple and deeply personal: to protect our communities with heartfelt education and genuine support. We provide clear, honest information about synthetic opioids, advocate gently but firmly for safety, and offer a comforting sanctuary for families who need mental health resources or a shoulder to lean on.",
    visionTitle: 'Our Hope for the Future',
    visionText: "We envision a community wrapped in understanding and care. A place where mental wellness is prioritized, where families feel openly supported rather than isolated, and where every child is safe, guided by the loving legacy of those we hold dear in our hearts.",
    valuesLabel: 'What Guides Us',
    valuesTitle: 'Our Heartfelt Values',
    values: [
      { icon: <Lightbulb size={32} />, title: 'Honest Conversations', text: 'We believe in talking openly and warmly with parents and youth, providing real facts without judgment.' },
      { icon: <Heart size={32} />, title: 'Deep Compassion', text: 'We welcome everyone with open arms, offering a safe space and loving support when they need it most.' },
      { icon: <Scale size={32} />, title: 'Community Care', text: 'We gently advocate for systems that prioritize the safety and well-being of our children above all else.' },
      { icon: <Leaf size={32} />, title: 'Healing Together', text: 'Grief is hard to carry alone. We provide counseling and resources to help families heal side by side.' },
      { icon: <Users size={32} />, title: 'Hand in Hand', text: 'We work closely with schools, parents, and local health workers because together we are stronger.' },
      { icon: <Star size={32} />, title: 'Iman’s Spirit', text: "Every comforting word and every family we support is a pure reflection of Iman’s kindness and warmth." },
    ],
    teamLabel: 'Our Family',
    teamTitle: 'The Hearts Behind the Foundation',
    teamSub: 'A community of love, working together to bring light where it is needed most.',
    team: [
      { name: 'Mari C. Rodriguez', role: 'Founder & Mother', bio: 'With a heart full of love for her daughter, Mari built this foundation to offer the support and education she wishes her family had, touching the lives of thousands.' },
      { name: 'Dr. Barbosa', role: 'Health Educator', bio: 'A compassionate medical professional who gently guides our community through opiate response training and distributes life-saving Narcan.' },
      { name: 'Our Volunteers', role: 'Community Support', bio: 'A beautiful family of parents, educators, and friends who volunteer their time and hearts to look out for our youth.' },
    ],
    partnersLabel: 'Our Extended Family',
    partnersTitle: 'Friends of the Foundation',
    partnersSub: 'We are so grateful for the local partners who walk alongside us in this journey.',
    partnerCta: 'Walk With Us',
    ctaTitle: 'Join Our Community',
    ctaText: "We can't do this alone. Your kindness and support help us reach more families, provide counseling, and bring educational workshops into our schools.",
    ctaDonate: 'Make a Heartfelt Gift',
    ctaContact: 'Get in Touch',
  },
  es: {
    breadcrumb: 'Inicio',
    heroLabel: 'Nuestra Historia',
    heroTitle: "La Luz de Iman: El Amor de una Madre",
    heroSub: 'Nacida del profundo anhelo de honrar una vida hermosa, estamos aquí para caminar junto a las familias, ofreciendo consuelo, educación y apoyo incondicional.',
    storyLabel: "Cómo Empezamos",
    storyTitle: 'Una Vida Llena de Luz',
    storyText1: "La Fundación Iman's Light comenzó en la mesa de una familia decidida a mantener vivo el hermoso espíritu de su hija. Iman era una luz brillante en nuestra comunidad, y perderla por el fentanilo fue un dolor que ninguna familia debería soportar.",
    storyText2: "Pero de ese dolor creció una misión de puro amor. Nos dimos cuenta de que podíamos proteger a otros niños si compartíamos nuestra historia abiertamente. Queremos un mundo donde los niños estén seguros, rodeados de una comunidad compasiva.",
    storyText3: "A través de la luz de Iman, hemos construido una comunidad cálida de apoyo. Creemos que apoyándonos unos a otros podemos guiar a nuestros jóvenes hacia un futuro saludable.",
    missionLabel: 'Nuestro Propósito',
    missionTitle: 'La Misión',
    missionText: "Nuestra misión es proteger a nuestras comunidades con educación amorosa y apoyo genuino. Brindamos información clara sobre los opioides y ofrecemos un refugio reconfortante para las familias que necesitan apoyo emocional.",
    visionTitle: 'Nuestra Esperanza para el Futuro',
    visionText: "Imaginamos una comunidad envuelta en comprensión y cuidado. Un lugar donde se priorice el bienestar mental, donde las familias se sientan apoyadas en lugar de aisladas, y donde cada niño esté a salvo.",
    valuesLabel: 'Lo Que Nos Guía',
    valuesTitle: 'Nuestros Valores',
    values: [
      { icon: <Lightbulb size={32} />, title: 'Conversaciones Honestas', text: 'Hablar abiertamente con padres y jóvenes, brindando información real sin juzgar.' },
      { icon: <Heart size={32} />, title: 'Compasión Profunda', text: 'Recibimos a todos con los brazos abiertos, ofreciendo un espacio seguro.' },
      { icon: <Scale size={32} />, title: 'Cuidado Comunitario', text: 'Abogamos por sistemas que prioricen la seguridad de nuestros niños.' },
      { icon: <Leaf size={32} />, title: 'Sanando Juntos', text: 'El duelo es difícil de llevar solo. Brindamos recursos para sanar juntos.' },
      { icon: <Users size={32} />, title: 'Mano a Mano', text: 'Trabajamos con escuelas y padres porque juntos somos más fuertes.' },
      { icon: <Star size={32} />, title: 'El Espíritu de Iman', text: 'Cada palabra de consuelo es un reflejo puro de la bondad de Iman.' },
    ],
    teamLabel: 'Nuestra Familia',
    teamTitle: 'Los Corazones de la Fundación',
    teamSub: 'Una comunidad de amor trabajando junta.',
    team: [
      { name: 'Mari C. Rodriguez', role: 'Fundadora y Madre', bio: 'Con el corazón lleno de amor por su hija, Mari construyó esta fundación para ofrecer el apoyo que desearía haber tenido.' },
      { name: 'Dr. Barbosa', role: 'Educador de Salud', bio: 'Guía compasivamente a nuestra comunidad a través de la capacitación.' },
      { name: 'Nuestros Voluntarios', role: 'Apoyo Comunitario', bio: 'Padres y amigos que ofrecen su tiempo y corazón por nuestros jóvenes.' },
    ],
    partnersLabel: 'Nuestra Familia Extendida',
    partnersTitle: 'Amigos de la Fundación',
    partnersSub: 'Estamos muy agradecidos por nuestros socios locales.',
    partnerCta: 'Camina Con Nosotros',
    ctaTitle: 'Únete a Nuestra Comunidad',
    ctaText: "Su bondad y apoyo nos ayuda a llegar a más familias.",
    ctaDonate: 'Hacer una Donación',
    ctaContact: 'Contáctanos',
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
