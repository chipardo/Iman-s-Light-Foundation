'use client';

import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LanguageContext } from '@/context/LanguageContext';
import { Phone, Mail } from 'lucide-react';
import styles from './Navbar.module.css';

const navLinks = [
  {
    href: '/about',
    labelEn: 'About Us',
    labelEs: 'Acerca de Nosotros',
    dropdown: [
      { href: '/about', labelEn: 'Our Story', labelEs: 'Nuestra Historia' },
      { href: '/about#mission', labelEn: 'Mission & Vision', labelEs: 'Misión y Visión' },
      { href: '/about#team', labelEn: 'Our Team', labelEs: 'Nuestro Equipo' },
      { href: '/about#partnerships', labelEn: 'Partners & Sponsors', labelEs: 'Socios y Patrocinadores' },
    ],
  },
  {
    href: '/programs',
    labelEn: 'What We Do',
    labelEs: 'Lo Que Hacemos',
    dropdown: [
      { href: '/programs', labelEn: 'Drug Education', labelEs: 'Educación sobre Drogas' },
      { href: '/saving-lives', labelEn: 'Saving Lives', labelEs: 'Salvando Vidas' },
      { href: '/data-metrics', labelEn: 'Data & Metrics', labelEs: 'Datos y Métricas' },
    ],
  },
  {
    href: '/events',
    labelEn: 'Media & Events',
    labelEs: 'Medios y Eventos',
    dropdown: [
      { href: '/events', labelEn: 'Upcoming Events', labelEs: 'Próximos Eventos' },
      { href: '/events#past', labelEn: 'Past Events', labelEs: 'Eventos Pasados' },
      { href: '/gallery', labelEn: 'Photo Gallery', labelEs: 'Galería de Fotos' },
    ],
  },
  {
    href: '/donate',
    labelEn: 'Support & Giving',
    labelEs: 'Apoyo y Donaciones',
    dropdown: [
      { href: '/donate', labelEn: 'Donate Online', labelEs: 'Donar en Línea' },
      { href: '/get-involved', labelEn: 'Other Ways to Give', labelEs: 'Otras Formas de Dar' },
      { href: '/get-involved#volunteer', labelEn: 'Volunteer', labelEs: 'Ser Voluntario' },
      { href: '/contact', labelEn: 'Sponsor a Workshop', labelEs: 'Patrocinar un Taller' },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang } = useContext(LanguageContext);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Utility Bar */}
      <div className={`${styles.topBar} ${scrolled ? styles.topBarHidden : ''}`}>
        <div className={`container ${styles.topBarInner}`}>
          <div className={styles.topBarLeft}>
            <span className={styles.crisisText}>
              <Phone size={12} /> Need Help? Call 988 Suicide & Crisis Lifeline
            </span>
          </div>
          <div className={styles.topBarRight}>
            <Link href="/contact" className={styles.topLink}>
              <Mail size={12} /> {lang === 'en' ? 'Contact Us' : 'Contáctanos'}
            </Link>
            <div className={styles.topLangWrapper}>
              <button
                className={lang === 'en' ? styles.activeLangSmall : ''}
                onClick={() => setLang('en')}
              >
                EN
              </button>
              <span className={styles.langDivider}>|</span>
              <button
                className={lang === 'es' ? styles.activeLangSmall : ''}
                onClick={() => setLang('es')}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.inner}`}>
          {/* Logo */}
          <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
            <Image src="/logo.jpg" alt="Iman's Light Foundation" width={56} height={56} className={styles.logoImg} />
            <span className={styles.logoText}>
              <span className={styles.logoMain}>Iman's Light</span>
              <span className={styles.logoSub}>Foundation</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className={styles.desktopLinks}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                {lang === 'en' ? 'Home' : 'Inicio'}
              </Link>
            </li>
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={styles.navItem}
              >
                <Link href={link.href} className={styles.navLink}>
                  {lang === 'en' ? link.labelEn : link.labelEs}
                  {link.dropdown && <span className={styles.chevron}>▾</span>}
                </Link>
                {link.dropdown && (
                  <div className={styles.dropdown}>
                    {link.dropdown.map((item) => (
                      <Link key={item.href} href={item.href} className={styles.dropdownItem}>
                        {lang === 'en' ? item.labelEn : item.labelEs}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Right side Donate CTA */}
          <div className={styles.controls}>
            <Link href="/donate" className={`btn btn-primary ${styles.donateBtn}`}>
              {lang === 'en' ? 'Donate' : 'Donar Ahora'}
            </Link>

            {/* Mobile Hamburger */}
            <button
              className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}>
          <div className={styles.mobileInner}>
            <Link href="/" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>
              {lang === 'en' ? 'Home' : 'Inicio'}
            </Link>
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={styles.mobileLink}
                  onClick={() => setMobileOpen(false)}
                >
                  {lang === 'en' ? link.labelEn : link.labelEs}
                </Link>
                {link.dropdown && (
                  <div className={styles.mobileDropdown}>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={styles.mobileSubLink}
                        onClick={() => setMobileOpen(false)}
                      >
                        {lang === 'en' ? item.labelEn : item.labelEs}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className={styles.mobileLang}>
              <button className={lang === 'en' ? styles.activeLang : ''} onClick={() => setLang('en')}>English</button>
              <button className={lang === 'es' ? styles.activeLang : ''} onClick={() => setLang('es')}>Español</button>
            </div>
            <Link href="/donate" className="btn btn-primary" onClick={() => setMobileOpen(false)}>
              {lang === 'en' ? 'Donate' : 'Donar Ahora'}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
