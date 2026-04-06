'use client';
import { useContext } from 'react';
import Link from 'next/link';
import { LanguageContext } from '@/context/LanguageContext';
import styles from './events.module.css';

const upcomingEvents = [
  {
    date: { month: 'MAY', day: '15', year: '2025' },
    titleEn: 'Community Fentanyl Awareness Workshop',
    titleEs: 'Taller Comunitario de Concientización sobre el Fentanilo',
    locationEn: 'Miami Community Center, Miami, FL',
    locationEs: 'Centro Comunitario de Miami, Miami, FL',
    timeEn: '10:00 AM – 2:00 PM',
    timeEs: '10:00 AM – 2:00 PM',
    descEn: 'A free educational workshop covering fentanyl dangers, drug lacing, and prevention strategies for families and youth.',
    descEs: 'Un taller educativo gratuito que cubre los peligros del fentanilo, el corte de drogas y estrategias de prevención para familias y jóvenes.',
    tag: 'Workshop',
    tagEs: 'Taller',
  },
  {
    date: { month: 'JUN', day: '07', year: '2025' },
    titleEn: 'Mental Health & Wellness Forum',
    titleEs: 'Foro de Salud Mental y Bienestar',
    locationEn: 'Northwest Library, Miami, FL',
    locationEs: 'Biblioteca Northwest, Miami, FL',
    timeEn: '6:00 PM – 9:00 PM',
    timeEs: '6:00 PM – 9:00 PM',
    descEn: 'A powerful evening of discussion on mental health strategies, anxiety management, and building resilience in your community.',
    descEs: 'Una poderosa noche de discusión sobre estrategias de salud mental, manejo de la ansiedad y construcción de resiliencia.',
    tag: 'Forum',
    tagEs: 'Foro',
  },
  {
    date: { month: 'JUL', day: '19', year: '2025' },
    titleEn: 'Youth Drug Prevention Day',
    titleEs: 'Día de Prevención de Drogas para Jóvenes',
    locationEn: 'Bayfront Park, Miami, FL',
    locationEs: 'Parque Bayfront, Miami, FL',
    timeEn: '11:00 AM – 5:00 PM',
    timeEs: '11:00 AM – 5:00 PM',
    descEn: 'A family-friendly community event with educational activities, speakers, and resources focused on youth drug prevention.',
    descEs: 'Un evento comunitario familiar con actividades educativas, oradores y recursos enfocados en la prevención de drogas en jóvenes.',
    tag: 'Community Event',
    tagEs: 'Evento Comunitario',
  },
];

const pastEvents = [
  { titleEn: 'Fentanyl Awareness Town Hall', titleEs: 'Reunión de Concientización sobre el Fentanilo', year: '2024', tag: 'Town Hall' },
  { titleEn: 'Mental Health Wellness Summit', titleEs: 'Cumbre de Bienestar de Salud Mental', year: '2024', tag: 'Summit' },
  { titleEn: 'Safe Drug Disposal Drive', titleEs: 'Campaña de Eliminación Segura de Drogas', year: '2024', tag: 'Outreach' },
  { titleEn: 'School Prevention Workshop Series', titleEs: 'Serie de Talleres de Prevención Escolar', year: '2023', tag: 'Workshop' },
  { titleEn: 'Community Healing Ceremony', titleEs: 'Ceremonia de Sanación Comunitaria', year: '2023', tag: 'Community' },
  { titleEn: 'Legislative Advocacy Day', titleEs: 'Día de Abogacía Legislativa', year: '2023', tag: 'Advocacy' },
];

export default function EventsPage() {
  const { lang } = useContext(LanguageContext);
  const isEs = lang === 'es';

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">{isEs ? 'Inicio' : 'Home'}</Link>
            <span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>{isEs ? 'Eventos' : 'Events'}</span>
          </div>
          <span className="section-label">{isEs ? 'Eventos' : 'Events'}</span>
          <h1>{isEs ? 'Eventos Próximos y Pasados' : 'Upcoming & Past Events'}</h1>
          <p>{isEs ? 'Únase a nuestros eventos comunitarios donde la educación se convierte en acción. Todos los eventos son gratuitos y abiertos al público.' : 'Join our community events where education meets action. All events are free and open to the public.'}</p>
        </div>
      </div>

      {/* Upcoming Events */}
      <section className="section">
        <div className="container">
          <span className="section-label">{isEs ? 'Próximamente' : 'Upcoming'}</span>
          <h2 className="section-title">{isEs ? 'Eventos Próximos' : 'Upcoming Events'}</h2>
          <div className="gold-divider" />
          <div className={styles.eventsList}>
            {upcomingEvents.map((event, i) => (
              <div key={i} className={`card ${styles.eventCard}`}>
                <div className={styles.eventDate}>
                  <span className={styles.dateMonth}>{event.date.month}</span>
                  <span className={styles.dateDay}>{event.date.day}</span>
                  <span className={styles.dateYear}>{event.date.year}</span>
                </div>
                <div className={styles.eventInfo}>
                  <span className="tag">{isEs ? event.tagEs : event.tag}</span>
                  <h3 className={styles.eventTitle}>{isEs ? event.titleEs : event.titleEn}</h3>
                  <div className={styles.eventMeta}>
                    <span>📍 {isEs ? event.locationEs : event.locationEn}</span>
                    <span>🕐 {isEs ? event.timeEs : event.timeEn}</span>
                  </div>
                  <p className={styles.eventDesc}>{isEs ? event.descEs : event.descEn}</p>
                </div>
                <div className={styles.eventAction}>
                  <Link href="/contact" className="btn btn-primary" style={{ fontSize: '0.85rem', padding: '12px 22px' }}>
                    {isEs ? 'Registrarse' : 'Register'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section section-cream">
        <div className="container">
          <span className="section-label">{isEs ? 'Archivo' : 'Archive'}</span>
          <h2 className="section-title">{isEs ? 'Eventos Pasados' : 'Past Events'}</h2>
          <div className="gold-divider" />
          <div className="grid-3" style={{ marginTop: '40px' }}>
            {pastEvents.map((event, i) => (
              <div key={i} className={`card ${styles.pastCard}`}>
                <div className={styles.pastYear}>{event.year}</div>
                <span className="tag" style={{ marginBottom: '12px' }}>{event.tag}</span>
                <h4 className={styles.pastTitle}>{isEs ? event.titleEs : event.titleEn}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container text-center">
          <h2 style={{ color: '#fff', marginBottom: '16px' }}>{isEs ? '¿Quieres organizar o patrocinar un evento?' : 'Want to host or sponsor an event?'}</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '540px', margin: '0 auto 36px' }}>
            {isEs ? 'Estamos siempre buscando socios comunitarios para llevar nuestros programas a nuevos vecindarios y escuelas.' : "We're always looking for community partners to bring our programs to new neighborhoods and schools."}
          </p>
          <Link href="/contact" className="btn btn-primary">{isEs ? 'Contáctanos' : 'Contact Us'} →</Link>
        </div>
      </section>
    </>
  );
}
