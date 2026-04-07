with open("src/app/donate/page.tsx", "r") as f:
    text = f.read()

# Replace inner styling
new_sponsor_code = """      {/* Official Sponsors */}
      <section className="section transparent-bg">
        <div className="container text-center">
          <span className="section-label">{isEs ? 'Nuestros Socios' : 'Our Partners'}</span>
          <h2 className="section-title">{isEs ? 'Patrocinadores Actuales' : 'Current Sponsors'}</h2>
          <div className="gold-divider center" />
          <p className="section-subtitle">{isEs ? 'Agradecemos profundamente a las organizaciones que hacen posible nuestra misión.' : 'We are deeply grateful to the organizations that make our mission possible.'}</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', marginTop: '48px', alignItems: 'center' }}>
            {/* Platinum */}
            <div style={{ width: '100%' }}>
              <h4 style={{ color: 'var(--gold)', marginBottom: '16px', fontSize: '1.2rem', fontFamily: 'Playfair Display' }}>PLATINUM</h4>
              <div className={styles.sponsorLogosGrid}>
                <div className={styles.sponsorBadge}>
                  <Image src="https://static.wixstatic.com/media/56e6ee_b2c36136ad654d72a7f4de09ea17cf05~mv2.png/v1/fill/w_568,h_191,q_90,enc_avif,quality_auto/56e6ee_b2c36136ad654d72a7f4de09ea17cf05~mv2.png" alt="FGA" width={284} height={95} style={{ objectFit: 'contain' }} />
                </div>
              </div>
            </div>

            {/* Gold */}
            <div style={{ width: '100%' }}>
              <h4 style={{ color: 'var(--gold)', marginBottom: '16px', fontSize: '1.2rem', fontFamily: 'Playfair Display' }}>GOLD</h4>
              <div className={styles.sponsorLogosGrid}>
                <div className={styles.sponsorBadge}>
                  <Image src="https://static.wixstatic.com/media/56e6ee_b9e7061a12d24743b5b3fc07a74f92ed~mv2.png/v1/fill/w_201,h_194,q_90,enc_avif,quality_auto/56e6ee_b9e7061a12d24743b5b3fc07a74f92ed~mv2.png" alt="The Bridge" width={100} height={97} style={{ objectFit: 'contain' }} />
                </div>
                <div className={styles.sponsorBadge}>
                  <Image src="https://static.wixstatic.com/media/56e6ee_b29a7ddaabd3481bb888135a8da07410~mv2.png/v1/fill/w_357,h_194,q_90,enc_avif,quality_auto/56e6ee_b29a7ddaabd3481bb888135a8da07410~mv2.png" alt="Survivors Pathway" width={178} height={97} style={{ objectFit: 'contain' }} />
                </div>
                <div className={styles.sponsorBadge}>
                  <Image src="https://static.wixstatic.com/media/56e6ee_f010f8e8cccb405a8fc28f3fb2481f7e~mv2.png/v1/fill/w_233,h_183,q_90,enc_avif,quality_auto/56e6ee_f010f8e8cccb405a8fc28f3fb2481f7e~mv2.png" alt="Nicklaus Childrens" width={116} height={91} style={{ objectFit: 'contain' }} />
                </div>
              </div>
            </div>

            {/* Silver & Educational */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', justifyContent: 'center', width: '100%' }}>
              <div style={{ flex: '1 1 300px' }}>
                <h4 style={{ color: 'var(--gold)', marginBottom: '16px', fontSize: '1.2rem', fontFamily: 'Playfair Display' }}>SILVER</h4>
                <div className={styles.sponsorLogosGrid}>
                  <div className={styles.sponsorBadge}>
                    <Image src="https://static.wixstatic.com/media/56e6ee_55f0bbe459fb41e9907cd3c547b6afb5~mv2.png/v1/fill/w_371,h_268,q_90,enc_avif,quality_auto/56e6ee_55f0bbe459fb41e9907cd3c547b6afb5~mv2.png" alt="One More Child" width={135} height={97} style={{ objectFit: 'contain' }} />
                  </div>
                </div>
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <h4 style={{ color: 'var(--gold)', marginBottom: '16px', fontSize: '1.2rem', fontFamily: 'Playfair Display' }}>EDUCATIONAL SILVER</h4>
                <div className={styles.sponsorLogosGrid}>
                  <div className={styles.sponsorBadge}>
                    <Image src="https://static.wixstatic.com/media/56e6ee_0b1d1f617c3b42acbf68755c62e11afe~mv2.png/v1/fill/w_224,h_225,q_90,enc_avif,quality_auto/56e6ee_0b1d1f617c3b42acbf68755c62e11afe~mv2.png" alt="Village South" width={97} height={97} style={{ objectFit: 'contain' }} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>"""

import re
old_section_pattern = re.compile(r"\{\/\* Official Sponsors \*\/}.*?\{\/\* Main Donate CTA \*\/\}", re.DOTALL)
text = old_section_pattern.sub(new_sponsor_code + "\n\n      {/* Main Donate CTA */}", text)

with open("src/app/donate/page.tsx", "w") as f:
    f.write(text)

