'use client';
import { useContext } from 'react';
import Link from 'next/link';
import { LanguageContext } from '@/context/LanguageContext';

const programs = {
  en: [
    {
      id: 'education',
      icon: '🎓',
      tag: 'Prevention',
      title: 'Drug Education & Prevention',
      subtitle: 'Teaching communities to recognize and resist the deadliest drugs',
      description: 'Our drug education workshops deliver life-saving information to children, youth, and adults in schools, community centers, and faith organizations. We cover the dangers of Fentanyl and other deadly drugs, how lacing works, grooming tactics used by dealers, and powerful resistance strategies.',
      points: [
        'Fentanyl awareness and drug lacing education',
        'Grooming tactics used by drug dealers',
        'Resistance skills and refusal strategies',
        'Understanding the brain and addiction science',
        'Safe drug disposal information',
      ],
      cta: 'Learn About This Program',
    },
    {
      id: 'mental-health',
      icon: '🧠',
      tag: 'Wellness',
      title: 'Mental Health & Wellness Workshops',
      subtitle: 'Addressing the root causes that lead to substance use',
      description: 'Research shows that anxiety, depression, stress, and trauma are key indicators and root causes of drug use — as individuals seek to self-medicate. Our mental health workshops provide practical strategies and techniques to build healthier mindsets and emotional resilience.',
      points: [
        'Anxiety and depression management strategies',
        'Anger management and emotional self-regulation',
        'Nonviolent communication skills',
        'Positive self-talk and critical thinking',
        'Behavior modification techniques',
      ],
      cta: 'Learn About This Program',
    },
    {
      id: 'saving-lives',
      icon: '❤️',
      tag: 'Advocacy',
      title: 'Saving Lives Initiative',
      subtitle: 'Direct action through advocacy, data, and community outreach',
      description: 'The Saving Lives Initiative combines legislative advocacy with direct community outreach. We collect and analyze data on fentanyl-related deaths and addiction in our communities, advocate for stronger laws and protections, and connect individuals and families to the resources they desperately need.',
      points: [
        'Legislative advocacy for stronger fentanyl law enforcement',
        'Data collection on fentanyl impact in South Florida',
        'Correlation between drugs and human trafficking',
        'Safe medical waste and drug disposal initiatives',
        'Community resource connection and referrals',
      ],
      cta: 'Learn About This Program',
    },
    {
      id: 'resources',
      icon: '🤝',
      tag: 'Support',
      title: 'Victim & Family Resources',
      subtitle: 'Comprehensive support for those who have lost a loved one',
      description: 'No one should face the devastation of addiction or loss alone. We provide meaningful support and resource connections for victims of addiction and families who have lost loved ones to fentanyl and other deadly drugs. From counseling referrals to community support networks, we are here.',
      points: [
        'Grief support and counseling referrals',
        'Community support network connections',
        'Resource navigation for families in crisis',
        'Outreach to underserved communities',
        'Partnership with healthcare and social services',
      ],
      cta: 'Find Resources',
    },
  ],
  es: [
    {
      id: 'education',
      icon: '🎓',
      tag: 'Prevención',
      title: 'Educación sobre Drogas y Prevención',
      subtitle: 'Enseñando a las comunidades a reconocer y resistir las drogas más mortales',
      description: 'Nuestros talleres de educación sobre drogas entregan información que salva vidas a niños, jóvenes y adultos en escuelas, centros comunitarios y organizaciones religiosas.',
      points: [
        'Concientización sobre el Fentanilo y el corte de drogas',
        'Tácticas de manipulación utilizadas por los traficantes',
        'Habilidades de resistencia y estrategias de rechazo',
        'Comprensión del cerebro y la ciencia de la adicción',
        'Información sobre la eliminación segura de drogas',
      ],
      cta: 'Conocer Este Programa',
    },
    {
      id: 'mental-health',
      icon: '🧠',
      tag: 'Bienestar',
      title: 'Talleres de Salud Mental y Bienestar',
      subtitle: 'Abordando las causas raíz que llevan al consumo de sustancias',
      description: 'La investigación muestra que la ansiedad, la depresión, el estrés y el trauma son indicadores clave del consumo de drogas. Nuestros talleres proporcionan estrategias prácticas para construir mentalidades más saludables.',
      points: [
        'Estrategias de manejo de ansiedad y depresión',
        'Manejo de la ira y autoregulación emocional',
        'Habilidades de comunicación no violenta',
        'Auto-diálogo positivo y pensamiento crítico',
        'Técnicas de modificación de comportamiento',
      ],
      cta: 'Conocer Este Programa',
    },
    {
      id: 'saving-lives',
      icon: '❤️',
      tag: 'Abogacía',
      title: 'Iniciativa Salvando Vidas',
      subtitle: 'Acción directa a través de abogacía, datos y alcance comunitario',
      description: 'La Iniciativa Salvando Vidas combina la abogacía legislativa con el alcance comunitario directo. Recopilamos datos sobre muertes relacionadas con el Fentanilo y abogamos por leyes y protecciones más fuertes.',
      points: [
        'Abogacía legislativa por la aplicación de leyes más estrictas',
        'Recopilación de datos sobre el impacto del Fentanilo',
        'Correlación entre drogas y trata de personas',
        'Iniciativas de eliminación segura de desechos médicos',
        'Conexión de recursos comunitarios y referencias',
      ],
      cta: 'Conocer Este Programa',
    },
    {
      id: 'resources',
      icon: '🤝',
      tag: 'Apoyo',
      title: 'Recursos para Víctimas y Familias',
      subtitle: 'Apoyo integral para quienes han perdido a un ser querido',
      description: 'Nadie debería enfrentar la devastación de la adicción o la pérdida solo. Proporcionamos apoyo significativo y conexiones de recursos para víctimas de la adicción y familias que han perdido seres queridos.',
      points: [
        'Apoyo en el duelo y referencias de consejería',
        'Conexiones con redes de apoyo comunitario',
        'Navegación de recursos para familias en crisis',
        'Alcance a comunidades desatendidas',
        'Asociación con servicios de salud y sociales',
      ],
      cta: 'Encontrar Recursos',
    },
  ],
};

export default function ProgramsPage() {
  const { lang } = useContext(LanguageContext);
  const progs = programs[lang];
  const isEs = lang === 'es';

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">{isEs ? 'Inicio' : 'Home'}</Link>
            <span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>{isEs ? 'Programas' : 'Programs'}</span>
          </div>
          <span className="section-label">{isEs ? 'Lo Que Hacemos' : 'What We Do'}</span>
          <h1>{isEs ? 'Nuestros Programas' : 'Our Programs'}</h1>
          <p>{isEs ? 'Programas integrales centrados en la comunidad diseñados para prevenir la adicción, proporcionar salud mental y sanar a los afectados.' : 'Comprehensive, community-centered programs designed to prevent addiction, provide mental health support, and heal those affected.'}</p>
        </div>
      </div>

      {progs.map((prog, i) => (
        <section key={prog.id} id={prog.id} className={`section ${i % 2 === 1 ? 'section-cream' : ''}`}>
          <div className="container">
            <div className="grid-2" style={{ gap: '64px' }}>
              <div style={{ order: i % 2 === 1 ? 2 : 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '2.5rem' }}>{prog.icon}</span>
                  <span className="tag">{prog.tag}</span>
                </div>
                <h2 className="section-title">{prog.title}</h2>
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--gold-dark)', marginBottom: '16px', fontFamily: 'Playfair Display, serif' }}>
                  {prog.subtitle}
                </p>
                <div className="gold-divider" />
                <p style={{ marginBottom: '28px' }}>{prog.description}</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
                  {prog.points.map((point, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--gold)', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>✦</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn btn-dark">{prog.cta} →</Link>
              </div>
              <div style={{ order: i % 2 === 1 ? 1 : 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{
                  width: '100%',
                  aspectRatio: '1',
                  maxWidth: '420px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'var(--navy)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '8rem',
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid rgba(201,168,76,0.2)',
                }}>
                  {prog.icon}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section section-dark">
        <div className="container text-center">
          <h2 style={{ color: '#fff', marginBottom: '20px' }}>{isEs ? '¿Listo para Participar?' : 'Ready to Get Involved?'}</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '540px', margin: '0 auto 40px' }}>
            {isEs ? 'Únete a nuestros talleres, apoya nuestros programas o haz una donación para mantener vivos estos programas vitales.' : 'Join our workshops, support our programs, or make a donation to keep these vital programs alive.'}
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/donate" className="btn btn-primary">{isEs ? 'Donar Ahora' : 'Donate Now'}</Link>
            <Link href="/get-involved" className="btn btn-secondary">{isEs ? 'Participar' : 'Get Involved'}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
