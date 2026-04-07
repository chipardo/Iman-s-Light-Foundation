'use client';

import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LanguageContext } from '@/context/LanguageContext';
import { Lightbulb, Heart, Scale, Leaf, Users, Star, Globe2, Quote } from 'lucide-react';
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
    teamLabel: 'Our Leadership',
    teamTitle: 'The Board & Advisors',
    teamSub: 'A community of dedicated leaders, educators, and volunteers bringing light where it is needed most.',
    team: [
      { name: 'Mari C. Rodriguez', role: 'Founder & President', bio: 'Driven by profound personal loss, Mari transformed her family’s tragedy into an uncompromising foundation that reaches tens of thousands. Her work honors her daughter while fighting to ensure no other mother has to endure the devastation of the fentanyl crisis.' },
      { name: 'Brianna A. Rodriquez', role: 'Vice President', bio: 'Iman\'s loving sister. Brianna carries forward Iman’s spirit by directly impacting youth outreach, standing as a pillar of strength, resilience, and compassion for her community.' },
      { name: 'Maria E. Liriano', role: 'Treasurer', bio: 'A successful entrepreneur for over 30 years with a background in Real Estate and Escrow. Maria manages our foundation’s finances to ensure every single dollar is effectively utilized to support our educational and therapeutic initiatives.' },
      { name: 'Mercy M. Preciado', role: 'Outreach Community Chair', bio: 'A Spiritual Counselor with a Master’s in Psychology. Mercy connects individuals and families with life-changing mental health services, blending professional expertise with deep spiritual guidance.' },
      { name: 'Dunia Cuneo', role: 'Volunteer Director', bio: 'A dedicated educator and HR professional with over 25 years of experience. Dunia leverages her MBA and acumen to foster inclusive cultures, mentoring emerging leaders to drive systemic change through community advocacy.' },
      { name: 'Brittany DeMeo', role: 'Recording Secretary', bio: 'Joining the foundation after witnessing the devastating regional impacts of fentanyl, Brittany ensures that our operational structure remains efficient, organized, and perfectly clear so our resources hit the frontlines immediately.' },
      { name: 'Libby L. Calero', role: 'PR & Sponsor Development', bio: 'With over 25 years in hospitality and PR (working alongside DJ Irie and Jamie Foxx), Libby uses her vast network to bring massive visibility and crucial sponsorships to the foundation’s life-saving mission.' },
      { name: 'Victor H. Jinete', role: 'Audio Visual Director', bio: 'Known as "Vic The Kid", this rising Latin music artist uses his massive platform to produce engaging content for the foundation, demonstrating to youth that success and joy do not require lethal substances.' },
      { name: 'Naylin Rizo, LMHC', role: 'Psychology Advisor', bio: 'A Licensed Mental Health Counselor with 14+ years guiding teens and adults through trauma and addiction. She ensures our mental wellness programs are clinically sound and maximally effective.' },
      { name: 'Nicolas S. Nobrega', role: 'IT Intern', bio: 'A passionate Cybersecurity student at FIU, Nicolas handles the foundation’s digital infrastructure, ensuring our lifesaving resources and data remain accessible, secure, and easily reachable.' },
    ],
    testimonialsLabel: 'Voices of Hope',
    testimonialsTitle: 'Community Impact Testimonials',
    testimonialsSub: 'Real stories from the families, students, and partners we serve.',
    testimonials: [
      { quote: "The foundation's workshop in our high school completely completely changed the narrative. The students were finally spoken to with respect and truth, rather than just fear.", author: "High School Counselor, Miami-Dade" },
      { quote: "Receiving the Narcan kit and the emotional training from Dr. Barbosa made our family feel equipped. We no longer feel helpless against this crisis.", author: "Local Parent & Advocate" },
      { quote: "Mari's strength is awe-inspiring. This foundation doesn't just talk about the problem—they are out here physically saving lives.", author: "Community Leader, S.A.R.A." },
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
    teamLabel: 'Nuestro Liderazgo',
    teamTitle: 'La Junta y Asesores',
    teamSub: 'Una comunidad de líderes dedicados, educadores y voluntarios que llevan luz a donde más se necesita.',
    team: [
      { name: 'Mari C. Rodriguez', role: 'Fundadora y Presidenta', bio: 'Impulsada por una profunda pérdida personal, Mari transformó la tragedia de su familia en una base intransigente que llega a decenas de miles.' },
      { name: 'Brianna A. Rodriquez', role: 'Vicepresidenta', bio: 'La amorosa hermana de Iman. Brianna lleva adelante el espíritu de Iman impactando directamente a los jóvenes como un pilar de fortaleza.' },
      { name: 'Maria E. Liriano', role: 'Tesorera', bio: 'Con experiencia en Bienes Raíces y Fideicomiso. Maria administra las finanzas para garantizar que cada dólar se utilice para apoyar nuestras iniciativas.' },
      { name: 'Mercy M. Preciado', role: 'Presidenta Comunitaria', bio: 'Mercy conecta a las familias con servicios de salud mental que cambian sus vidas, combinando la experiencia profesional con la guía espiritual.' },
      { name: 'Dunia Cuneo', role: 'Directora de Voluntarios', bio: 'Dunia aprovecha su MBA y perspicacia de Recursos Humanos para cambiar sistemas educativos en apoyo hacia la comunidad.' },
      { name: 'Brittany DeMeo', role: 'Secretaria', bio: 'Garantiza que nuestra estructura operativa se mantenga eficiente, organizada y perfectamente clara en nuestras misiones diarias.' },
      { name: 'Libby L. Calero', role: 'Relaciones Públicas', bio: 'Utiliza su vasta red (DJ Irie, Jamie Foxx) para dar visibilidad masiva y patrocinios cruciales a la misión de la fundación.' },
      { name: 'Victor H. Jinete', role: 'Director Audiovisual', bio: 'El artista de música latina ("Vic The Kid") utiliza su plataforma para demostrar a los jóvenes que el éxito no requieren sustancias letales.' },
      { name: 'Naylin Rizo, LMHC', role: 'Asesora Psicológica', bio: 'Asesora especializada en traumas y adicciones, garantiza que nuestros programas enfocados en el bienestar mental sean sumamente efectivos.' },
      { name: 'Nicolas S. Nobrega', role: 'Pasante de TI', bio: 'Nico maneja nuestra infraestructura cibernética para que los recursos siempre estén totalmente seguros y accesibles para todos.' },
    ],
    testimonialsLabel: 'Voces de Esperanza',
    testimonialsTitle: 'Testimonios de Impacto',
    testimonialsSub: 'Historias reales de las familias, estudiantes y socios a los que servimos.',
    testimonials: [
      { quote: "El taller de la fundación cambió completamente la narrativa en nuestra escuela secundaria.", author: "Consejero Escolar" },
      { quote: "Recibir el entrenamiento emocional del Dr. Barbosa hizo que nuestra familia se sintiera equipada contra esta crisis.", author: "Padre Local" },
      { quote: "La fuerza de Mari es impresionante. Físicamente están salvando vidas.", author: "Líder Comunitario, S.A.R.A." },
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
              <div key={i} className="card" style={{ background: 'transparent', border: '1px solid rgba(201,168,76,0.3)', padding: '32px' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--gold)', color: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '20px', fontFamily: 'Playfair Display' }}>
                  {member.name[0]}
                </div>
                <h3 style={{ color: 'var(--white)', fontSize: '1.3rem', marginBottom: '6px', fontFamily: 'Playfair Display' }}>{member.name}</h3>
                <span className="tag" style={{ marginBottom: '16px', display: 'inline-block', fontSize: '0.85rem' }}>{member.role}</span>
                <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: '1.6', fontSize: '0.95rem' }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section transparent-bg" id="testimonials">
        <div className="container">
          <div className="text-center">
            <span className="section-label">{txt.testimonialsLabel}</span>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>{txt.testimonialsTitle}</h2>
            <div className="gold-divider center" />
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>{txt.testimonialsSub}</p>
          </div>
          <div className="grid-3" style={{ marginTop: '40px' }}>
            {txt.testimonials.map((test, i) => (
              <div key={i} style={{ 
                background: 'rgba(20, 28, 46, 0.7)', 
                backdropFilter: 'blur(12px)', 
                padding: '36px', 
                borderRadius: '16px', 
                border: '1px solid rgba(255,255,255,0.1)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <Quote size={40} color="var(--gold)" style={{ opacity: 0.3, position: 'absolute', top: 20, right: 20 }} />
                <p style={{ color: 'rgba(255,255,255,0.9)', fontStyle: 'italic', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '24px', flexGrow: 1 }}>
                  "{test.quote}"
                </p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px' }}>
                  <span style={{ color: 'var(--gold)', fontWeight: 600, fontFamily: 'Playfair Display, serif' }}>- {test.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="partnerships">
        <div className="container text-center">
          <span className="section-label">{txt.partnersLabel}</span>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>{txt.partnersTitle}</h2>
          <div className="gold-divider center" />
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>{txt.partnersSub}</p>
          <div className={styles.partnerLogos} style={{ marginTop: '40px', justifyContent: 'center', display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {['Florida Dept of Children & Families', 'ISAVEFL', 'DEA, One Pill Can Kill', 'Local School Boards'].map((p, i) => (
              <div key={i} className={styles.partnerLogo} style={{ border: '1px solid rgba(255,255,255,0.2)', padding: '16px 24px', borderRadius: '8px', color: 'var(--white)', fontWeight: 600 }}>{p}</div>
            ))}
          </div>
          <Link href="/contact" className="btn btn-outline" style={{ marginTop: '40px' }}>
            {txt.partnerCta} →
          </Link>
        </div>
      </section>

      <section className="section transparent-bg">
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
