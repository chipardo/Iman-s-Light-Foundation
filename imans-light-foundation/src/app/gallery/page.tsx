'use client';
import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Camera } from 'lucide-react';
import { LanguageContext } from '@/context/LanguageContext';
import styles from './gallery.module.css';

const galleryItems = [
  { src: 'https://static.wixstatic.com/media/56e6ee_3576a17eaea54dc89bcb590ac41a3ec6~mv2.jpeg', captionEn: 'Legislative Advocacy Day', captionEs: 'Taller de Educación Comunitaria', category: 'Support' },
  { src: 'https://static.wixstatic.com/media/56e6ee_8fa3d2dc25d34cbcaaa0219bd31efeaa~mv2.jpg', captionEn: 'School Prevention Workshop', captionEs: 'Campaña de Eliminación Segura', category: 'Support' },
  { src: 'https://static.wixstatic.com/media/56e6ee_4a4131c645aa4f63860a5f8b60f152e0~mv2.jpeg', captionEn: 'Safe Disposal Drive', captionEs: 'Reunión Comunitaria', category: 'Outreach' },
  { src: 'https://static.wixstatic.com/media/56e6ee_eb632825620a4ff7a1fefb3f494a0216~mv2.jpg', captionEn: 'School Prevention Workshop', captionEs: 'Evento de Prevención Juvenil', category: 'Advocacy' },
  { src: 'https://static.wixstatic.com/media/56e6ee_b5621014b4e14c088141ec0ff07a50fb~mv2.jpeg', captionEn: 'Healing & Support Circle', captionEs: 'Campaña de Eliminación Segura', category: 'Advocacy' },
  { src: 'https://static.wixstatic.com/media/56e6ee_ddb3b153cadc4eae9b30bbc94c4287d9~mv2.jpg', captionEn: 'Mental Health Forum', captionEs: 'Campaña de Eliminación Segura', category: 'Support' },
  { src: 'https://static.wixstatic.com/media/56e6ee_03ab8a5dab7447aab4707f294780cd1a~mv2.jpeg', captionEn: 'Town Hall Meeting', captionEs: 'Círculo de Sanación y Apoyo', category: 'Outreach' },
  { src: 'https://static.wixstatic.com/media/56e6ee_a2b70b8e86c24d7586d3e018f554eb5c~mv2.jpeg', captionEn: 'Town Hall Meeting', captionEs: 'Programa de Alcance Comunitario', category: 'Outreach' },
  { src: 'https://static.wixstatic.com/media/56e6ee_5d7d8f8d4b1a4978aeacd2698f3fbfd1~mv2.jpeg', captionEn: 'Town Hall Meeting', captionEs: 'Taller de Prevención Escolar', category: 'Advocacy' },
  { src: 'https://static.wixstatic.com/media/56e6ee_6643f782583744e7b4a29a6f69b06f59~mv2.jpeg', captionEn: 'Safe Disposal Drive', captionEs: 'Programa de Alcance Comunitario', category: 'Advocacy' },
  { src: 'https://static.wixstatic.com/media/56e6ee_3ca4f9f33190497980f3328f6b2d3f97~mv2.jpeg', captionEn: 'Legislative Advocacy Day', captionEs: 'Día de Abogacía Legislativa', category: 'Advocacy' },
  { src: 'https://static.wixstatic.com/media/56e6ee_e040ea5e26da409780256c44ce3ce74d~mv2.jpeg', captionEn: 'Safe Disposal Drive', captionEs: 'Foro de Salud Mental', category: 'Workshop' },
  { src: 'https://static.wixstatic.com/media/56e6ee_0f2c809c926641329fd63076093e1de7~mv2.png', captionEn: 'Mental Health Forum', captionEs: 'Círculo de Sanación y Apoyo', category: 'Event' },
  { src: 'https://static.wixstatic.com/media/56e6ee_c52d2b6dcc1148a5a69c479f7f779a21~mv2.jpeg', captionEn: 'Community Education Workshop', captionEs: 'Taller de Educación Comunitaria', category: 'Outreach' },
  { src: 'https://static.wixstatic.com/media/56e6ee_b29a7ddaabd3481bb888135a8da07410~mv2.png', captionEn: 'Community Education Workshop', captionEs: 'Círculo de Sanación y Apoyo', category: 'Event' },
  { src: 'https://static.wixstatic.com/media/56e6ee_4f6b2f457dc54ac08979733aeed97c90~mv2.jpg', captionEn: 'Safe Disposal Drive', captionEs: 'Reunión Comunitaria', category: 'Outreach' },
  { src: 'https://static.wixstatic.com/media/56e6ee_6dc6e53b782046e0a3fcbfab5a1dc446~mv2.jpg', captionEn: 'Town Hall Meeting', captionEs: 'Día de Abogacía Legislativa', category: 'Outreach' },
  { src: 'https://static.wixstatic.com/media/56e6ee_a50079ec691048d8bdb8696486b07456~mv2.jpg', captionEn: 'Safe Disposal Drive', captionEs: 'Taller de Prevención Escolar', category: 'Event' },
  { src: 'https://static.wixstatic.com/media/56e6ee_90b6e59a5df142298b790e6f643fa66a~mv2.png', captionEn: 'School Prevention Workshop', captionEs: 'Círculo de Sanación y Apoyo', category: 'Event' },
  { src: 'https://static.wixstatic.com/media/56e6ee_5ce5a2543f51453cbc008df599127ce9~mv2.jpeg', captionEn: 'Community Outreach Program', captionEs: 'Reunión Comunitaria', category: 'Outreach' },
  { src: 'https://static.wixstatic.com/media/56e6ee_b2c36136ad654d72a7f4de09ea17cf05~mv2.png', captionEn: 'Community Education Workshop', captionEs: 'Círculo de Sanación y Apoyo', category: 'Advocacy' },
  { src: 'https://static.wixstatic.com/media/56e6ee_55dce64df3354190b26098791edccbe0~mv2.jpeg', captionEn: 'Community Outreach Program', captionEs: 'Día de Abogacía Legislativa', category: 'Advocacy' },
  { src: 'https://static.wixstatic.com/media/56e6ee_3d08247bcecf4368844f77cc2095fffe~mv2.jpg', captionEn: 'Community Education Workshop', captionEs: 'Taller de Prevención Escolar', category: 'Outreach' },
  { src: 'https://static.wixstatic.com/media/56e6ee_00ead282e22a4cef9e4867393c8dc5db~mv2.jpeg', captionEn: 'Youth Prevention Event', captionEs: 'Foro de Salud Mental', category: 'Outreach' },
  { src: 'https://static.wixstatic.com/media/56e6ee_b9e7061a12d24743b5b3fc07a74f92ed~mv2.png', captionEn: 'Legislative Advocacy Day', captionEs: 'Día de Abogacía Legislativa', category: 'Advocacy' },
  { src: 'https://static.wixstatic.com/media/56e6ee_76650825df6342da8642e0e1b7c243d3~mv2.jpeg', captionEn: 'School Prevention Workshop', captionEs: 'Reunión Comunitaria', category: 'Outreach' },
  { src: 'https://static.wixstatic.com/media/56e6ee_a7ab7f31d44241a093a59f770c6c180d~mv2.jpg', captionEn: 'School Prevention Workshop', captionEs: 'Día de Abogacía Legislativa', category: 'Outreach' },
  { src: 'https://static.wixstatic.com/media/56e6ee_754c1044df8448d297f799571f41b145~mv2.jpg', captionEn: 'Youth Prevention Event', captionEs: 'Taller de Prevención Escolar', category: 'Advocacy' },
  { src: 'https://static.wixstatic.com/media/56e6ee_f96e2e03e38f4cafa7f45f9969059dd6~mv2.png', captionEn: 'Safe Disposal Drive', captionEs: 'Campaña de Eliminación Segura', category: 'Workshop' },
  { src: 'https://static.wixstatic.com/media/56e6ee_8ebc946a14fe46f4bbc36fb5a29252f1~mv2.jpeg', captionEn: 'Healing & Support Circle', captionEs: 'Evento de Prevención Juvenil', category: 'Support' },
];

export default function GalleryPage() {
  const { lang } = useContext(LanguageContext);
  const isEs = lang === 'es';

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">{isEs ? 'Inicio' : 'Home'}</Link>
            <span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>{isEs ? 'Galería' : 'Gallery'}</span>
          </div>
          <span className="section-label">{isEs ? 'Nuestra Comunidad' : 'Our Community'}</span>
          <h1>{isEs ? 'Galería de Fotos' : 'Photo Gallery'}</h1>
          <p>{isEs ? 'Una ventana a nuestro trabajo comunitario — cada imagen representa vidas tocadas y comunidades fortalecidas.' : 'A window into our community work — every image represents lives touched and communities strengthened.'}</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.galleryNote}>
            <p style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <Camera className="gold-icon" style={{ flexShrink: 0, marginTop: '2px' }} size={20} />
              <span>
                {isEs
                  ? 'La galería de fotos completa se actualizará con imágenes reales de nuestros eventos y programas. Por favor contáctenos para enviar fotos de nuestros eventos.'
                  : 'The full photo gallery will be updated with real images from our events and programs. Please contact us to submit photos from our events.'}
              </span>
            </p>
          </div>
          <div className={styles.gallery}>
            {galleryItems.map((item, i) => (
              <div key={i} className={styles.galleryItem}>
                <div className={styles.galleryImg}>
                  <Image
                    src={item.src}
                    alt={isEs ? item.captionEs : item.captionEn}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className={styles.galleryOverlay}>
                    <span className="tag">{item.category}</span>
                    <p className={styles.galleryCaption}>{isEs ? item.captionEs : item.captionEn}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container text-center">
          <h2 className="section-title">{isEs ? '¿Tienes fotos de nuestros eventos?' : 'Have photos from our events?'}</h2>
          <div className="gold-divider center" />
          <p className="section-subtitle">{isEs ? 'Comparte tus fotos con nosotros y las agregaremos a nuestra galería.' : 'Share your photos with us and we\'ll add them to our gallery.'}</p>
          <Link href="/contact" className="btn btn-dark">{isEs ? 'Enviar Fotos' : 'Submit Photos'} →</Link>
        </div>
      </section>
    </>
  );
}
