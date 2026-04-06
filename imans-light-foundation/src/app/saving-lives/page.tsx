'use client';

import { useContext } from 'react';
import Link from 'next/link';
import { LanguageContext } from '@/context/LanguageContext';
import { HeartPulse, ShieldAlert, Activity, Users } from 'lucide-react';

const t = {
  en: {
    breadcrumb: 'Home',
    heroLabel: 'Initiatives',
    heroTitle: 'Saving Lives',
    heroSub: 'Through direct action, critical partnerships, and resource distribution, we are actively preventing tragedies on the front lines.',
    initiativesTitle: 'Our Life-Saving Initiatives',
    sections: [
      {
        icon: <HeartPulse size={36} color="var(--gold)" />,
        title: 'Naloxone Distribution Program',
        desc: 'We proudly distribute free Naloxone/Narcan kits through our partnership with the Florida Department of Children and Families. Each kit includes a display, keychain, gloves, and plastic mouth protection to ensure safe and effective overdose response.',
      },
      {
        icon: <ShieldAlert size={36} color="var(--gold)" />,
        title: 'One Pill Can Kill Campaign',
        desc: 'In collaboration with the DEA, we actively support the “One Pill Can Kill” campaign to raise awareness about the dangers of counterfeit prescription pills laced with fentanyl.',
      },
      {
        icon: <Activity size={36} color="var(--gold)" />,
        title: 'ISAVEFL Participation',
        desc: 'We are official participants in the ISAVEFL initiative, working to make life-saving opioid overdose reversal medication more accessible throughout the community.',
      },
      {
        icon: <Users size={36} color="var(--gold)" />,
        title: 'Youth & Family Support',
        desc: 'We focus on empowering youth and families through prevention education, recovery resources, and support programs that build resilience against substance misuse.',
      },
    ],
    affectedLabel: 'Who We Help',
    affectedTitle: 'Supporting Affected Communities',
    affectedText1: 'Children, youth, adults, schools, underserved communities and the community at large greatly benefit from our educational and transformative programs and initiatives.',
    affectedText2: 'Participants are provided with a safe space in which to receive information and share their perspectives and experiences. Drugs, fake pills and criminals don’t discriminate. An overdose can happen to anyone.',
    affectedText3: 'In 2023 alone we lost 122,000 souls according to the CDC, many of them youth. Unwavering education, awareness, prevention and wrap-around programs are proving to be key.',
  },
  es: {
    breadcrumb: 'Inicio',
    heroLabel: 'Iniciativas',
    heroTitle: 'Salvando Vidas',
    heroSub: 'A través de la acción directa, asociaciones críticas y distribución de recursos, estamos previniendo tragedias en la primera línea.',
    initiativesTitle: 'Nuestras Iniciativas que Salvan Vidas',
    sections: [
      {
        icon: <HeartPulse size={36} color="var(--gold)" />,
        title: 'Programa de Distribución de Naloxona',
        desc: 'Distribuimos con orgullo kits gratuitos de Naloxona/Narcan a través de nuestra asociación con el Departamento de Niños y Familias de Florida. Cada kit incluye un llavero, guantes y protección bucal de plástico para garantizar una respuesta segura y eficaz en caso de sobredosis.',
      },
      {
        icon: <ShieldAlert size={36} color="var(--gold)" />,
        title: 'Campaña Una Pastilla Puede Matar',
        desc: 'En colaboración con la DEA, apoyamos activamente la campaña "One Pill Can Kill" para crear conciencia sobre los peligros de las píldoras recetadas falsificadas mezcladas con fentanilo.',
      },
      {
        icon: <Activity size={36} color="var(--gold)" />,
        title: 'Participación en ISAVEFL',
        desc: 'Somos participantes oficiales en la iniciativa ISAVEFL, trabajando para que la medicación para revertir sobredosis de opioides sea más accesible en toda la comunidad.',
      },
      {
        icon: <Users size={36} color="var(--gold)" />,
        title: 'Apoyo a Jóvenes y Familias',
        desc: 'Nos enfocamos en empoderar a jóvenes y familias a través de educación preventiva, recursos de recuperación y programas de apoyo que desarrollan resiliencia contra el abuso de sustancias.',
      },
    ],
    affectedLabel: 'A Quién Ayudamos',
    affectedTitle: 'Apoyando a las Comunidades Afectadas',
    affectedText1: 'Niños, jóvenes, adultos, escuelas, comunidades marginadas y la comunidad en general se benefician enormemente de nuestros programas e iniciativas educativas y transformadoras.',
    affectedText2: 'A los participantes se les proporciona un espacio seguro para recibir información y compartir sus perspectivas y experiencias. Las drogas, las pastillas falsas y los delincuentes no discriminan. Una sobredosis le puede pasar a cualquiera.',
    affectedText3: 'Solo en 2023 perdimos 122,000 almas según el CDC, muchos de ellos jóvenes. La educación, concienciación, prevención y los programas integrales son clave.',
  },
};

export default function SavingLivesPage() {
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
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <h2 className="section-title">{txt.initiativesTitle}</h2>
            <div className="gold-divider center" />
          </div>
          <div className="grid-2">
            {txt.sections.map((sec, i) => (
              <div key={i} className="card" style={{ padding: '32px' }}>
                <div style={{ marginBottom: '20px' }}>{sec.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '16px' }}>{sec.title}</h3>
                <p style={{ color: 'var(--navy-600)', lineHeight: '1.7' }}>{sec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-label">{txt.affectedLabel}</span>
              <h2 className="section-title" style={{ color: '#fff' }}>{txt.affectedTitle}</h2>
              <div className="gold-divider" />
              <p style={{ marginBottom: '20px', color: 'rgba(255,255,255,0.8)' }}>{txt.affectedText1}</p>
              <p style={{ marginBottom: '20px', color: 'rgba(255,255,255,0.8)' }}>{txt.affectedText2}</p>
              <p style={{ color: 'var(--gold)', fontWeight: 500 }}>{txt.affectedText3}</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                background: 'var(--navy-900)',
                padding: '40px',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <Activity size={80} color="var(--gold)" style={{ marginBottom: '24px' }} />
                <h3 style={{ color: '#fff', marginBottom: '16px' }}>122,000+</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)' }}>Lives lost in 2023 to preventable overdoses according to the CDC.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
