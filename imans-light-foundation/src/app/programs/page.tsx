'use client';
import { useContext } from 'react';
import Link from 'next/link';
import { LanguageContext } from '@/context/LanguageContext';
import { GraduationCap, Brain, HeartPulse, Handshake } from 'lucide-react';

const programs = {
  en: [
    {
      id: 'education',
      icon: GraduationCap,
      tag: 'Prevention in Schools',
      title: 'Youth Drug Education & Empowerment',
      subtitle: 'Arming students with the knowledge to survive the synthetic opioid crisis.',
      description: 'The narrative around drug use has violently shifted. Today, experimentation is fatal. We bring our trauma-informed education directly into middle schools, high schools, and faith communities to speak frankly with youth about the immediate, undeniable lethality of fentanyl. We do not use scare tactics; we use science. We teach students exactly how dealers groom them online, how pills are pressed to look like authentic prescription medication, and how to biologically respond to an overdose. By providing a safe space to ask real questions without judgment, we dismantle the illusions of "safe partying" and replace them with the critical thinking skills needed to survive.',
      cta: 'Request a School Workshop',
    },
    {
      id: 'mental-health',
      icon: Brain,
      tag: 'Emotional Resilience',
      title: 'Mental Health & Wellness Integration',
      subtitle: 'Addressing the invisible wounds that lead to self-medication.',
      description: 'Addiction does not happen in a vacuum. It is often the tragic result of untreated anxiety, severe depression, unaddressed trauma, or overwhelming stress. Our wellness workshops are designed to break the cycle of self-medication by treating the underlying pain first. Led by trauma-care specialists and advocates, these sessions teach vulnerable youth and their families practical emotional regulation, nonviolent communication, and healthy coping mechanisms. We bridge the critical gap between feeling hopelessly overwhelmed and finding sustainable, healthy relief, ensuring that no one turns to an unknown pill for comfort.',
      cta: 'Join a Wellness Session',
    },
    {
      id: 'saving-lives',
      icon: HeartPulse,
      tag: 'Frontline Intervention',
      title: 'The Saving Lives Initiative',
      subtitle: 'Taking direct action to reverse overdoses and change the law.',
      description: 'Prevention is crucial, but intervention is absolute. Through the Saving Lives Initiative, we are physically stopping overdoses where they happen. We distribute hundreds of complete Naloxone (Narcan) kits directly into the hands of citizens, parents, and educators. Furthermore, we recognize that bad actors must be held accountable. We aggressively collect data on local fentanyl impacts and take those human stories straight to legislative floors, fighting to pass stricter enforcement against human trafficking and synthetic drug manufacturing. Your support funds this dual sword of immediate community defense and long-term legal protection.',
      cta: 'Access Naloxone Training',
    },
    {
      id: 'resources',
      icon: Handshake,
      tag: 'Grief & Recovery',
      title: 'Victim & Family Sanctuary',
      subtitle: 'Walking alongside families when the unimaginable happens.',
      description: 'When the unthinkable happens, the isolation can be as devastating as the loss itself. We stand beside families whose loved ones have been stolen by fentanyl, providing an unwavering pillar of support. Our sanctuary systems guide grieving families through the darkest hours of their lives—connecting them with specialized grief counselors, establishing community healing networks, and helping them navigate the complex aftermath of an overdose. For those actively fighting addiction, we sponsor critical bed placements and rapidly connect them to compassionate healthcare services. You do not have to fight this war alone; we are here.',
      cta: 'Find Immediate Support',
    },
  ],
  es: [
    {
      id: 'education',
      icon: GraduationCap,
      tag: 'Prevención en Escuelas',
      title: 'Educación y Empoderamiento Juvenil',
      subtitle: 'Armando a los estudiantes con el conocimiento para sobrevivir a la crisis.',
      description: 'La narrativa en torno al uso de drogas ha cambiado drásticamente. Hoy, la experimentación es letal. Llevamos nuestra educación informada sobre el trauma directamente a las escuelas y comunidades para hablar con franqueza sobre la letalidad innegable del fentanilo. No usamos tácticas de miedo; usamos ciencia. Enseñamos a los estudiantes exactamente cómo los traficantes los manipulan en línea, cómo las píldoras se fabrican para parecer medicamentos recetados y cómo responder biológicamente a una sobredosis. Al proporcionar un espacio seguro para hacer preguntas reales, desmantelamos las ilusiones de las "fistas seguras".',
      cta: 'Solicitar un Taller Escolar',
    },
    {
      id: 'mental-health',
      icon: Brain,
      tag: 'Resiliencia Emocional',
      title: 'Integración de Salud Mental',
      subtitle: 'Abordando las heridas invisibles que llevan a la automedicación.',
      description: 'La adicción no ocurre en el vacío. A menudo es el resultado trágico de la ansiedad no tratada, la depresión o el estrés abrumador. Nuestros talleres de bienestar están diseñados para romper el ciclo de la automedicación al tratar primero el dolor subyacente. Lideradas por especialistas en trauma, estas sesiones enseñan a los jóvenes vulnerables ya sus familias la regulación emocional práctica y mecanismos de afrontamiento saludables. Cerramos la brecha crítica entre sentirse abrumado y encontrar un alivio saludable.',
      cta: 'Unirse a una Sesión',
    },
    {
      id: 'saving-lives',
      icon: HeartPulse,
      tag: 'Intervención Directa',
      title: 'La Iniciativa Salvando Vidas',
      subtitle: 'Tomando acción directa para revertir sobredosis y cambiar la ley.',
      description: 'A través de la Iniciativa Salvando Vidas, estamos deteniendo físicamente las sobredosis donde ocurren. Distribuimos cientos de kits completos de Naloxona directamente en manos de ciudadanos y educadores. Además, reconocemos que los responsables deben rendir cuentas. Recopilamos agresivamente datos sobre los impactos locales del fentanilo y llevamos esas historias humanas directamente a las legislaturas, luchando para aprobar leyes más estrictas. Su donación financia esta defensa comunitaria.',
      cta: 'Acceder a Entrenamiento Naloxona',
    },
    {
      id: 'resources',
      icon: Handshake,
      tag: 'Duelo y Recuperación',
      title: 'Santuario para Familias',
      subtitle: 'Caminando junto a las familias cuando sucede lo inimaginable.',
      description: 'Cuando ocurre lo impensable, el aislamiento puede ser tan devastador como la pérdida misma. Apoyamos a las familias a las que el fentanilo les ha robado a sus seres queridos, proporcionando un pilar inquebrantable de apoyo. Guiamos a las familias en duelo a través de las horas más oscuras: conectándolas con consejeros especializados, estableciendo redes de sanación y ayudándolas a navegar por las secuelas de la sobredosis. No tienen que librar esta guerra solos; estamos aquí.',
      cta: 'Encontrar Apoyo Inmediato',
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
          <p>{isEs ? 'Damos un paso al frente donde ocurre la crisis. Descubre cómo nuestras intervenciones directas transforman su apoyo en vidas salvadas en nuestra comunidad.' : 'We step in where the crisis happens. See precisely how our direct interventions transform your support into lives saved within our local community.'}</p>
        </div>
      </div>

      {progs.map((prog, i) => (
        <section key={prog.id} id={prog.id} className={`section ${i % 2 === 1 ? 'section-cream' : 'transparent-bg'}`}>
          <div className="container">
            <div className="grid-2" style={{ gap: '64px', alignItems: 'center' }}>
              <div style={{ order: i % 2 === 1 ? 2 : 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <span style={{ display: 'flex', color: 'var(--gold)' }}><prog.icon size={44} /></span>
                  <span className="tag" style={{ border: '1px solid rgba(201,168,76,0.4)', background: 'transparent' }}>{prog.tag}</span>
                </div>
                <h2 className="section-title" style={{ color: 'var(--white)', marginBottom: '12px' }}>{prog.title}</h2>
                <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--gold)', marginBottom: '20px', fontFamily: 'Playfair Display, serif', lineHeight: '1.5' }}>
                  "{prog.subtitle}"
                </p>
                <div className="gold-divider" style={{ marginBottom: '28px' }} />
                <p style={{ marginBottom: '36px', color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: '1.9' }}>
                  {prog.description}
                </p>
                <Link href="/contact" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  {prog.cta} <span style={{ fontSize: '1.2rem' }}>→</span>
                </Link>
              </div>
              <div style={{ order: i % 2 === 1 ? 1 : 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{
                  width: '100%',
                  aspectRatio: '1',
                  maxWidth: '460px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'rgba(20, 28, 46, 0.7)',
                  backdropFilter: 'blur(12px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  color: 'var(--gold-light)',
                  padding: '30px'
                }}>
                  <prog.icon size={160} strokeWidth={1} style={{ opacity: 0.9 }} />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section section-dark">
        <div className="container text-center">
          <h2 style={{ color: '#fff', marginBottom: '24px', fontFamily: 'Playfair Display, serif' }}>
            {isEs ? 'El Poder de Su Asociación' : 'The Power of Your Partnership'}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '640px', margin: '0 auto 40px', fontSize: '1.1rem', lineHeight: '1.8' }}>
            {isEs ? 'Su contribución no solo financia una organización; brinda compasión palpable a un estudiante ansioso, proporciona herramientas de recuperación a quienes están en duelo y equipa escuelas con conocimientos para salvar vidas. Únase a nuestra misión.' : 'Your contribution doesn\'t just fund an organization; it delivers palpable compassion to an anxious student, provides recovery tools to the grieving, and arms schools with life-saving knowledge. Stand beside us.'}
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/donate" className="btn btn-primary">{isEs ? 'Hacer una Donación' : 'Make a Donation'}</Link>
            <Link href="/get-involved" className="btn btn-secondary">{isEs ? 'Voluntario' : 'Volunteer With Us'}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
