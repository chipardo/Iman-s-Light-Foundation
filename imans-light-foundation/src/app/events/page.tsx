'use client';
import { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';
import styles from './events.module.css';
import Image from 'next/image';
import eventsData from '@/data/events.json';

export default function EventsPage() {
  const { lang } = useContext(LanguageContext);

  return (
    <div>
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1>{lang === 'en' ? 'Our Proof of Impact' : 'Nuestra Prueba de Impacto'}</h1>
          <p>
            {lang === 'en'
              ? 'Tracking every presentation, every partnership, and every life touched.'
              : 'Rastreando cada presentación, cada asociación y cada vida tocada.'}
          </p>
        </div>
      </section>

      <section className="section section-dark transparent-bg">
        <div className="container">
          <div className={styles.eventsGrid}>
            {eventsData.map((evt, idx) => (
              <div key={idx} className={styles.eventCard}>
                {evt.image ? (
                  <div className={styles.eventImage}>
                    <img src={evt.image} alt={evt.titleEn} />
                  </div>
                ) : (
                  <div className={styles.eventImagePlaceholder}>
                    <span>{new Date(evt.date).getFullYear()}</span>
                  </div>
                )}
                <div className={styles.eventContent}>
                  <div className={styles.eventDate}>
                    {new Date(evt.date).toLocaleDateString(lang === 'en' ? 'en-US' : 'es-ES', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </div>
                  <h3>{lang === 'en' ? evt.titleEn : evt.titleEs}</h3>
                  <div className={styles.eventLocation}>
                    📍 {evt.location}
                  </div>
                  <p>{lang === 'en' ? evt.descriptionEn : evt.descriptionEs}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
