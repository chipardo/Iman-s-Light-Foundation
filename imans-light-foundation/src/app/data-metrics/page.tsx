'use client';

import { useContext } from 'react';
import Link from 'next/link';
import { LanguageContext } from '@/context/LanguageContext';
import { BarChart3, Database, FileSearch, ShieldCheck } from 'lucide-react';

const t = {
  en: {
    breadcrumb: 'Home',
    heroLabel: 'Evidence-Based Approach',
    heroTitle: 'Data, Metrics & Methodologies',
    heroSub: 'Our foundation relies on robust data and proven methodologies to drive effective education and prevention programs.',
    dataLabel: 'The Data',
    dataTitle: 'Why Our Work Matters',
    dataText: 'The CDC, DEA, and Opiate Response Network (ORN) have extensive data supporting the absolute necessity for education, prevention, and awareness programs. Iman’s Light Foundation operates within this framework of urgent national need.',
    partnerships: [
      { title: 'Opiate Response Network', desc: 'Iman’s Light sponsored the Opiate Response Network in Miramar, Florida to build community resilience.' },
      { title: 'S.A.R.A.', desc: 'We are active members of the Substance Abuse Reduction Alliance, organizing regional preventative efforts.' },
    ],
    methodLabel: 'Our Approach',
    methodTitle: 'Core Methodologies',
    methodSub: 'We utilize proven communication, psychological, and institutional frameworks to maximize program impact:',
    methods: [
      { icon: <Database size={32} />, title: 'Dr. King\'s Philosophy', desc: 'Emphasizing nonviolence, community building, and social justice as the foundation for community healing.' },
      { icon: <Users size={32} />, title: 'Dr. Marshall Rosenberg', desc: 'Utilizing Nonviolent Communication (NVC) to foster empathy and deep connection in our workshops.' },
      { icon: <Activity size={32} />, title: 'NIDA Protocols', desc: 'Applying guidelines from the National Institute on Drug Abuse for preventing drug misuse.' },
      { icon: <ShieldCheck size={32} />, title: 'CDC & ORN Data', desc: 'Targeting adolescence as a crucial intervention timeframe based on comprehensive metric analysis.' },
    ]
  },
  es: {
    breadcrumb: 'Inicio',
    heroLabel: 'Enfoque Basado en Evidencia',
    heroTitle: 'Datos, Métricas y Metodologías',
    heroSub: 'Nuestra fundación se basa en datos sólidos y metodologías probadas para impulsar programas eficaces de educación y prevención.',
    dataLabel: 'Los Datos',
    dataTitle: 'Por Qué Nuestro Trabajo Importa',
    dataText: 'El CDC, la DEA y la Red de Respuesta a los Opiáceos (ORN) tienen datos que respaldan la absoluta necesidad de programas de prevención y educación. La Fundación Iman\'s Light opera dentro de este marco de necesidad nacional urgente.',
    partnerships: [
      { title: 'Red de Respuesta a los Opiáceos', desc: 'Iman\'s Light patrocinó la Red de Respuesta a los Opiáceos en Miramar, Florida, para desarrollar resiliencia comunitaria.' },
      { title: 'S.A.R.A.', desc: 'Somos miembros activos de la Alianza para la Reducción del Abuso de Sustancias, organizando esfuerzos preventivos regionales.' },
    ],
    methodLabel: 'Nuestro Enfoque',
    methodTitle: 'Metodologías Principales',
    methodSub: 'Utilizamos marcos comunicacionales, psicológicos e institucionales probados para maximizar el impacto:',
    methods: [
      { icon: <Database size={32} />, title: 'Filosofía del Dr. King', desc: 'Enfatizando la no violencia, la construcción de la comunidad y la justicia social como base para la sanación.' },
      { icon: <Users size={32} />, title: 'Dr. Marshall Rosenberg', desc: 'Utilizando la Comunicación No Violenta (CNV) para fomentar la empatía y la conexión profunda en nuestros talleres.' },
      { icon: <Activity size={32} />, title: 'Protocolos de NIDA', desc: 'Aplicando las pautas del Instituto Nacional sobre el Abuso de Drogas para prevenir el uso indebido.' },
      { icon: <ShieldCheck size={32} />, title: 'Datos del CDC y ORN', desc: 'Apuntando a la adolescencia como un período crucial de intervención basado en análisis métricos integrales.' },
    ]
  },
};

// Re-import missing icons for the loop inside component to avoid out-of-scope errors in definition
import { Users, Activity } from 'lucide-react';

export default function DataMetricsPage() {
  const { lang } = useContext(LanguageContext);
  const txt = t[lang];

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">{txt.breadcrumb}</Link>
            <span>›</span>
            <Link href="/programs" style={{ color: 'rgba(255,255,255,0.7)' }}>
              {lang === 'en' ? 'Programs' : 'Programas'}
            </Link>
          </div>
          <span className="section-label">{txt.heroLabel}</span>
          <h1>{txt.heroTitle}</h1>
          <p>{txt.heroSub}</p>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="section-label">{txt.dataLabel}</span>
              <h2 className="section-title">{txt.dataTitle}</h2>
              <div className="gold-divider" />
              <p style={{ marginBottom: '32px', color: 'var(--navy-600)', fontSize: '1.1rem', lineHeight: '1.7' }}>
                {txt.dataText}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {txt.partnerships.map((p, i) => (
                  <div key={i} style={{ paddingLeft: '20px', borderLeft: '3px solid var(--gold)' }}>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'var(--navy-900)' }}>{p.title}</h4>
                    <p style={{ color: 'var(--navy-600)' }}>{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '400px', aspectRatio: '1/1', background: 'var(--navy-800)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                <BarChart3 size={120} color="var(--gold)" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span className="section-label">{txt.methodLabel}</span>
            <h2 className="section-title">{txt.methodTitle}</h2>
            <div className="gold-divider center" />
            <p className="section-subtitle">{txt.methodSub}</p>
          </div>
          <div className="grid-4">
            {txt.methods.map((m, i) => (
              <div key={i} className="card text-center" style={{ padding: '32px 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', color: 'var(--navy-800)' }}>
                  {m.icon}
                </div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '16px' }}>{m.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--navy-600)' }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
