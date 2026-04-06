'use client';

import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LanguageContext } from '@/context/LanguageContext';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/', labelEn: 'Home', labelEs: 'Inicio' },
  {
    href: '/about',
    labelEn: 'About',
    labelEs: 'Acerca',
    dropdown: [
      { href: '/about', labelEn: "Iman's Story", labelEs: 'La Historia de Iman' },
      { href: '/about#mission', labelEn: 'Our Mission', labelEs: 'Nuestra Misión' },
      { href: '/about#team', labelEn: 'Our Team', labelEs: 'Nuestro Equipo' },
      { href: '/about#partnerships', labelEn: 'Partnerships', labelEs: 'Alianzas' },
    ],
  },
  {
    href: '/programs',
    labelEn: 'Programs',
    labelEs: 'Programas',
    dropdown: [
      { href: '/programs#education', labelEn: 'Drug Education', labelEs: 'Educación sobre Drogas' },
      { href: '/programs#mental-health', labelEn: 'Mental Health', labelEs: 'Salud Mental' },
      { href: '/programs#saving-lives', labelEn: 'Saving Lives', labelEs: 'Salvando Vidas' },
      { href: '/programs#resources', labelEn: 'Community Resources', labelEs: 'Recursos Comunitarios' },
    ],
  },
  { href: '/events', labelEn: 'Events', labelEs: 'Eventos' },
  { href: '/gallery', labelEn: 'Gallery', labelEs: 'Galería' },
  { href: '/get-involved', labelEn: 'Get Involved', labelEs: 'Participa' },
  { href: '/contact', labelEn: 'Contact', labelEs: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { lang, setLang } = useContext(LanguageContext);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
          <Image src="/logo.jpg" alt="Iman's Light Foundation" width={48} height={48} className={styles.logoImg} />
          <span className={styles.logoText}>
            <span className={styles.logoMain}>Iman's Light</span>
            <span className={styles.logoSub}>Foundation</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className={styles.desktopLinks}>
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={styles.navItem}
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.href)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href={link.href} className={styles.navLink}>
                {lang === 'en' ? link.labelEn : link.labelEs}
                {link.dropdown && <span className={styles.chevron}>▾</span>}
              </Link>
              {link.dropdown && (
                <div className={`${styles.dropdown} ${activeDropdown === link.href ? styles.dropdownOpen : ''}`}>
                  {link.dropdown.map((item) => (
                    <Link key={item.href} href={item.href} className={styles.dropdownItem} onClick={() => setActiveDropdown(null)}>
                      {lang === 'en' ? item.labelEn : item.labelEs}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right side controls */}
        <div className={styles.controls}>
          {/* Language Toggle */}
          <div className="lang-toggle">
            <button
              className={lang === 'en' ? 'active' : ''}
              onClick={() => setLang('en')}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              className={lang === 'es' ? 'active' : ''}
              onClick={() => setLang('es')}
              aria-label="Cambiar a Español"
            >
              ES
            </button>
          </div>

          {/* Donate Button */}
          <Link href="/donate" className={`btn btn-primary ${styles.donateBtn}`}>
            {lang === 'en' ? 'Donate' : 'Donar'}
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
            {lang === 'en' ? 'Donate Now' : 'Donar Ahora'}
          </Link>
        </div>
      </div>
    </nav>
  );
}
