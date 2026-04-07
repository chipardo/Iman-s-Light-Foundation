'use client';
import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LanguageContext } from '@/context/LanguageContext';
import { GraduationCap, Brain, HeartPulse, Music, Info, AlertTriangle, ShieldAlert } from 'lucide-react';

const programs = {
  en: [
    {
      id: 'workshops',
      icon: GraduationCap,
      tag: 'Interactive Workshops',
      title: 'The Truth About Drugs & Awareness',
      subtitle: 'Knowledge is the strongest defense against synthetics.',
      description: 'Your investment of $5000 funds four interactive, specialized workshops (1-2.5 hours each) led by presenters and presentation aids. "The Truth About Drugs" covers the realities of vaping, marijuana, fentanyl, synthetics, and addiction. We detail how these affect the brain and body, providing clear instruction on overdose signs and Narcan application. Pre- and post-assessments guarantee that students properly integrate this critical survival knowledge.',
      cta: 'View Lesson Plans',
    },
    {
      id: 'mental-health',
      icon: Brain,
      tag: 'Emotional Resilience',
      title: 'Mental Wellness Workshops',
      subtitle: 'Understanding emotions to prevent self-harm.',
      description: 'Addiction often stems from emotional pain. Our Mental Wellness Workshop "Understanding Emotions and Critical Thinking"—provides deep skills in emotional intelligence and cognitive restructuring. By teaching nonviolent communication and positive self-talk, we help youth manage the stress, anger, anxiety, and grief that often lead to self-medication and violence.',
      cta: 'Request a Session',
    },
    {
      id: 'youth-groups',
      icon: HeartPulse,
      tag: 'Continuous Prevention',
      title: 'ILF Youth Group Networks',
      subtitle: 'Empowering students to lead their peers.',
      description: 'Iman\'s Light Foundation is committed to encouraging and supporting schools and students to continue the conversation locally. We establish ILF Youth Groups, providing them with ongoing materials and topics to discuss among themselves. This transforms students into proactive leaders and positive influences within their own peer circles.',
      cta: 'Start a Youth Group',
    },
    {
      id: 'music-dance',
      icon: Music,
      tag: 'Community Events',
      title: 'Music and Lights for Life',
      subtitle: 'Celebrating life safely, without substances.',
      description: 'Our annual "Music and Lights for Life Dance and Exhibition" provides a safe environment to dance, laugh, and have fun, proving there is absolutely no need for substances that alter your mental state. We deliver crucial information on drug lacing, mental wellness, and the reality of fake pills. With Narcan distributed on-site and sponsors offering CPR lessons, we honor lives lost while actively protecting the living.',
      cta: 'Attend the Event',
    },
  ],
  es: [
    {
      id: 'workshops',
      icon: GraduationCap,
      tag: 'Talleres Interactivos',
      title: 'La Verdad Sobre las Drogas',
      subtitle: 'El conocimiento es la defensa más fuerte.',
      description: 'Su inversión de $5000 financia cuatro talleres interactivos y especializados. Cubrimos las realidades del vapeo, la marihuana, el fentanilo y las adicciones. Detallamos cómo afectan el cerebro y el cuerpo, y enseñamos a aplicar Narcan. Las evaluaciones previas y posteriores garantizan que los estudiantes integren este conocimiento vital de supervivencia.',
      cta: 'Ver Planes de Estudio',
    },
    {
      id: 'mental-health',
      icon: Brain,
      tag: 'Resiliencia Emocional',
      title: 'Talleres de Bienestar Mental',
      subtitle: 'Comprendiendo las emociones para prevenir autolesiones.',
      description: 'Nuestro taller "Comprendiendo las emociones y pensamiento crítico" brinda habilidades de inteligencia emocional. Enseñamos comunicación no violenta para manejar el estrés, la ira y el dolor, que a menudo llevan a la automedicación.',
      cta: 'Solicitar una Sesión',
    },
    {
      id: 'youth-groups',
      icon: HeartPulse,
      tag: 'Prevención Continua',
      title: 'Grupos Juveniles ILF',
      subtitle: 'Empoderando a los líderes del mañana.',
      description: 'Establecemos Grupos Juveniles ILF en escuelas, brindándoles materiales y temas continuos para continuar la conversación de prevención entre ellos mismos. Esto transforma a los estudiantes en líderes positivos.',
      cta: 'Crear un Grupo',
    },
    {
      id: 'music-dance',
      icon: Music,
      tag: 'Eventos Comunitarios',
      title: 'Música y Luces por la Vida',
      subtitle: 'Celebrando con seguridad, sin sustancias.',
      description: 'Nuestro baile anual proporciona un entorno seguro demostrando que no hay necesidad de sustancias para alterar el estado mental. Entregamos información vital, distribuimos Narcan y celebramos las vidas que hemos perdido.',
      cta: 'Asistir al Evento',
    },
  ]
};

const lessonPlans = {
  en: [
    {
      icon: <Info size={32} />,
      title: 'What is Marijuana?',
      points: [
        'Key Definitions: THC, Intoxication, Drug',
        'The Plant and its over 400 chemicals',
        'Myths and Facts regarding modern usage',
        'Harmful effects on the developing brain',
        'THC altering mental states & protective mechanisms',
        'Today’s extreme potency of THC vs the 70’s',
        'Health risks of smoking & methods of use',
        'Long-term consequences & addiction rates'
      ]
    },
    {
      icon: <AlertTriangle size={32} />,
      title: 'What is Vaping?',
      points: [
        'How does it work? Is it better than smoking?',
        'Vapes heavily disguised as highlighters, USBs, hoodies',
        'Is vaping actually addictive?',
        'How nicotine is dangerous & can make you sick',
        'Impact on the brain: Understanding mechanisms',
        'The emergence of Fentanyl-laced vapes',
        'What is lacing & signs a vape contains Fentanyl',
        'Narcan effects, applications, and immediate responses'
      ]
    },
    {
      icon: <ShieldAlert size={32} />,
      title: 'What is Fentanyl?',
      points: [
        'What is it? Can you taste or smell it?',
        'Medical/pharmaceutical vs. street/illegal fentanyl',
        'Is it addictive and what are its exact effects?',
        'How much is a lethal overdose? (Visualizing 2mg)',
        'Is medicine bought on the internet safe?',
        'What is a fake pill and how fast can it kill?',
        'Overdose deaths in 2023 and 2024 (Data metrics)',
        'Signs of an overdose & correctly administering Narcan'
      ]
    }
  ],
  es: [
    {
      icon: <Info size={32} />,
      title: '¿Qué es la Marihuana?',
      points: [
        'Definiciones: THC, Intoxicación, Droga',
        'La planta y sus más de 400 químicos',
        'Mitos y realidades del uso moderno',
        'Efectos dañinos en el cerebro en desarrollo',
        'Potencia extrema del THC de hoy vs los años 70',
        'Riesgos de fumar a largo plazo',
        'Tasas de adicción y cómo altera la mente'
      ]
    },
    {
      icon: <AlertTriangle size={32} />,
      title: '¿Qué es el Vapeo?',
      points: [
        '¿Cómo funciona? ¿Está disfrazado como USB?',
        '¿Es el vapeo verdaderamente adictivo?',
        'Peligros de la nicotina para el sistema inmunológico',
        'Impacto severo en el cerebro de los jóvenes',
        'El peligro inminente de vapes mezclados con fentanilo',
        'Signos de un vape contaminado',
        'Aplicación inmediata de Narcan'
      ]
    },
    {
      icon: <ShieldAlert size={32} />,
      title: '¿Qué es el Fentanilo?',
      points: [
        '¿A qué huele y sabe? (A nada)',
        'Fentanilo farmacéutico vs ilegal',
        '¿Cuánta cantidad es letal? (Visualizando 2mg)',
        'Peligro de píldoras falsas compradas en línea',
        'Estadísticas brutales de sobredosis 2023-2024',
        'Identificar una sobredosis y aplicar Narcan rápidamente'
      ]
    }
  ]
};

export default function ProgramsPage() {
  const { lang } = useContext(LanguageContext);
  const progs = programs[lang];
  const lessons = lessonPlans[lang];
  const isEs = lang === 'es';

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">{isEs ? 'Inicio' : 'Home'}</Link>
            <span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>{isEs ? 'Agenda y Programas' : 'Agenda & Programs'}</span>
          </div>
          <span className="section-label">{isEs ? 'Lo Que Hacemos' : 'What We Do'}</span>
          <h1>{isEs ? 'Agenda y Programas' : 'Agenda & Programs'}</h1>
          <p>{isEs ? 'La importancia vital de la prevención y la educación. Todos los estudios muestran que debemos comenzar la educación mucho antes de lo pensado.' : 'The vital importance of prevention, education, and awareness. All research shows why we must start educating children earlier than previously thought.'}</p>
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
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <span className="section-label">{isEs ? 'Detalles del Taller' : 'Workshop Details'}</span>
            <h2 className="section-title" style={{ color: '#fff' }}>{isEs ? 'Nuestro Plan de Estudios' : 'Our Lesson Plans'}</h2>
            <div className="gold-divider center" />
            
            <div style={{ position: 'relative', width: '100%', maxWidth: '800px', height: '300px', margin: '0 auto 32px', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
              <Image src="https://static.wixstatic.com/media/11062b_59516b702cdd4a77a238c94f7f13e378~mv2.jpg/v1/fill/w_616,h_651,al_c,q_85,enc_avif,quality_auto/11062b_59516b702cdd4a77a238c94f7f13e378~mv2.jpg" alt="Interactive Workshops" fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(4,8,20,1), transparent)' }} />
            </div>

            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
              {isEs ? 'Desglosamos los hechos reales sobre las sustancias para desmentir mitos y salvar vidas. Cada presentación está diseñada para la resiliencia juvenil.' : 'We break down the raw facts regarding substances to shatter internet myths and definitively save lives. Each presentation is custom-built.'}
            </p>
          </div>

          <div className="grid-3" style={{ gap: '30px' }}>
            {lessons.map((lesson, idx) => (
              <div key={idx} style={{
                background: 'rgba(20, 28, 46, 0.5)',
                border: '1px solid rgba(201, 168, 76, 0.2)',
                borderRadius: '16px',
                padding: '40px 30px',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ color: 'var(--gold)', marginBottom: '24px' }}>
                  {lesson.icon}
                </div>
                <h3 style={{ color: '#fff', fontSize: '1.4rem', fontFamily: 'Playfair Display, serif', marginBottom: '20px' }}>
                  {lesson.title}
                </h3>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  {lesson.points.map((point, pIdx) => (
                    <li key={pIdx} style={{
                      color: 'rgba(255,255,255,0.8)',
                      fontSize: '0.95rem',
                      lineHeight: '1.5',
                      paddingLeft: '20px',
                      position: 'relative'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: '8px',
                        width: '6px',
                        height: '6px',
                        background: 'var(--gold)',
                        borderRadius: '50%'
                      }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container text-center">
          <h2 style={{ color: 'var(--navy-900)', marginBottom: '24px', fontFamily: 'Playfair Display, serif' }}>
            {isEs ? 'Patrocine una Escuela Hoy' : 'Sponsor a School Today'}
          </h2>
          <p style={{ color: 'var(--navy-600)', maxWidth: '640px', margin: '0 auto 40px', fontSize: '1.1rem', lineHeight: '1.8' }}>
            {isEs ? 'Asociándose con la policía, líderes comunitarios y la DEA para la eliminación segura de drogas. Ayúdenos a abogar por cambios legislativos y llevar estos talleres a los estudiantes en mayor riesgo.' : 'Partnering with police, city leaders, and the DEA for safe drug disposal. Help us advocate for legislative changes and bring these life-saving workshops to students.'}
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">{isEs ? 'Póngase en Contacto' : 'Get in Touch'}</Link>
            <Link href="/donate" className="btn btn-outline">{isEs ? 'Financiar un Taller' : 'Fund a Workshop'}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
