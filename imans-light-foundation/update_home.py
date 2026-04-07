with open("src/app/page.tsx", "r") as f:
    text = f.read()

# Add Sponsor grid CSS import and event rendering
new_sections = """      {/* ===== GALA EVENT ===== */}
      <section className="section transparent-bg">
        <div className="container">
          <div ref={addRef} className="fade-up text-center">
            <span className="section-label">{txt.eventsLabel}</span>
            <h2 className="section-title">{txt.eventsTitle}</h2>
            <div className="gold-divider center" />
            <p className="section-subtitle">{txt.eventsSub}</p>
          </div>
          
          <div ref={addRef} className="fade-up" style={{ marginTop: '40px', background: 'var(--navy)', borderRadius: '16px', border: '2px solid rgba(201,168,76,0.6)', padding: '48px', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'var(--gradient-gold)' }} />
            <h3 style={{ color: 'var(--gold)', fontFamily: 'Playfair Display', fontSize: '2.5rem', marginBottom: '16px' }}>{lang === 'es' ? 'Segunda Gala Anual' : '2nd Annual Gala'}</h3>
            <p style={{ color: 'var(--white)', fontSize: '1.4rem', marginBottom: '8px' }}>{lang === 'es' ? '25 de Octubre, 2025' : 'October 25th, 2025'}</p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginBottom: '32px' }}>@ The Signature Grand</p>
            <Link href="/events" className="btn btn-primary">{txt.viewAllEvents} →</Link>
          </div>
        </div>
      </section>

      {/* ===== SPONSORS ===== */}
      <section className="section section-cream">
        <div className="container text-center">
          <span className="section-label">{lang === 'es' ? 'Nuestros Socios' : 'Our Partners'}</span>
          <h2 className="section-title">{lang === 'es' ? 'Patrocinadores Actuales' : 'Current Sponsors'}</h2>
          <div className="gold-divider center" />
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginTop: '48px', alignItems: 'center' }}>
            {/* Platinum & Gold Combined for Home */}
            <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.9)', padding: '24px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <Image src="https://static.wixstatic.com/media/56e6ee_b2c36136ad654d72a7f4de09ea17cf05~mv2.png/v1/fill/w_568,h_191,q_90,enc_avif,quality_auto/56e6ee_b2c36136ad654d72a7f4de09ea17cf05~mv2.png" alt="FGA" width={200} height={67} style={{ objectFit: 'contain' }} />
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.9)', padding: '24px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <Image src="https://static.wixstatic.com/media/56e6ee_b9e7061a12d24743b5b3fc07a74f92ed~mv2.png/v1/fill/w_201,h_194,q_90,enc_avif,quality_auto/56e6ee_b9e7061a12d24743b5b3fc07a74f92ed~mv2.png" alt="The Bridge" width={80} height={77} style={{ objectFit: 'contain' }} />
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.9)', padding: '24px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <Image src="https://static.wixstatic.com/media/56e6ee_b29a7ddaabd3481bb888135a8da07410~mv2.png/v1/fill/w_357,h_194,q_90,enc_avif,quality_auto/56e6ee_b29a7ddaabd3481bb888135a8da07410~mv2.png" alt="Survivors Pathway" width={140} height={76} style={{ objectFit: 'contain' }} />
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.9)', padding: '24px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <Image src="https://static.wixstatic.com/media/56e6ee_f010f8e8cccb405a8fc28f3fb2481f7e~mv2.png/v1/fill/w_233,h_183,q_90,enc_avif,quality_auto/56e6ee_f010f8e8cccb405a8fc28f3fb2481f7e~mv2.png" alt="Nicklaus Childrens" width={100} height={78} style={{ objectFit: 'contain' }} />
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.9)', padding: '24px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <Image src="https://static.wixstatic.com/media/56e6ee_55f0bbe459fb41e9907cd3c547b6afb5~mv2.png/v1/fill/w_371,h_268,q_90,enc_avif,quality_auto/56e6ee_55f0bbe459fb41e9907cd3c547b6afb5~mv2.png" alt="One More Child" width={110} height={79} style={{ objectFit: 'contain' }} />
              </div>
            </div>
            <Link href="/about#partnerships" className="btn btn-outline" style={{ marginTop: '24px' }}>{lang === 'es' ? 'Ver Todos los Socios' : 'View All Partners'} →</Link>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}"""

import re
old_section_pattern = re.compile(r"\{\/\* ===== CTA BANNER ===== \*\/\}")
text = old_section_pattern.sub(new_sections, text)

with open("src/app/page.tsx", "w") as f:
    f.write(text)

