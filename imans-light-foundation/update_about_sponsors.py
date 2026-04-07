with open("src/app/about/page.tsx", "r") as f:
    text = f.read()

new_partner_code = """          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', marginTop: '48px', alignItems: 'center' }}>
            <div style={{ width: '100%' }}>
              <div className={styles.sponsorLogosGrid}>
                <div className={styles.sponsorBadge}>
                  <Image src="https://static.wixstatic.com/media/56e6ee_b2c36136ad654d72a7f4de09ea17cf05~mv2.png/v1/fill/w_568,h_191,q_90,enc_avif,quality_auto/56e6ee_b2c36136ad654d72a7f4de09ea17cf05~mv2.png" alt="FGA" width={284} height={95} style={{ objectFit: 'contain' }} />
                </div>
                <div className={styles.sponsorBadge}>
                  <Image src="https://static.wixstatic.com/media/56e6ee_b9e7061a12d24743b5b3fc07a74f92ed~mv2.png/v1/fill/w_201,h_194,q_90,enc_avif,quality_auto/56e6ee_b9e7061a12d24743b5b3fc07a74f92ed~mv2.png" alt="The Bridge" width={100} height={97} style={{ objectFit: 'contain' }} />
                </div>
                <div className={styles.sponsorBadge}>
                  <Image src="https://static.wixstatic.com/media/56e6ee_b29a7ddaabd3481bb888135a8da07410~mv2.png/v1/fill/w_357,h_194,q_90,enc_avif,quality_auto/56e6ee_b29a7ddaabd3481bb888135a8da07410~mv2.png" alt="Survivors Pathway" width={178} height={97} style={{ objectFit: 'contain' }} />
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', justifyContent: 'center', width: '100%' }}>
              <div className={styles.sponsorLogosGrid}>
                <div className={styles.sponsorBadge}>
                  <Image src="https://static.wixstatic.com/media/56e6ee_f010f8e8cccb405a8fc28f3fb2481f7e~mv2.png/v1/fill/w_233,h_183,q_90,enc_avif,quality_auto/56e6ee_f010f8e8cccb405a8fc28f3fb2481f7e~mv2.png" alt="Nicklaus Childrens" width={116} height={91} style={{ objectFit: 'contain' }} />
                </div>
                <div className={styles.sponsorBadge}>
                  <Image src="https://static.wixstatic.com/media/56e6ee_55f0bbe459fb41e9907cd3c547b6afb5~mv2.png/v1/fill/w_371,h_268,q_90,enc_avif,quality_auto/56e6ee_55f0bbe459fb41e9907cd3c547b6afb5~mv2.png" alt="One More Child" width={135} height={97} style={{ objectFit: 'contain' }} />
                </div>
                <div className={styles.sponsorBadge}>
                  <Image src="https://static.wixstatic.com/media/56e6ee_0b1d1f617c3b42acbf68755c62e11afe~mv2.png/v1/fill/w_224,h_225,q_90,enc_avif,quality_auto/56e6ee_0b1d1f617c3b42acbf68755c62e11afe~mv2.png" alt="Village South" width={97} height={97} style={{ objectFit: 'contain' }} />
                </div>
              </div>
            </div>
            
            {/* Extended text partners from Wix data */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginTop: '24px' }}>
              {['Secure Your Drink', 'Outreach Behavior Support', 'Infinity Life Wellness Center', 'Behavior Support Center', 'Improving Lives Community Mental Health', 'Luxe Properties', 'DAER Nightclub'].map((p, i) => (
                <div key={i} className={styles.partnerLogo} style={{ border: '1px solid rgba(255,255,255,0.2)', padding: '16px 24px', borderRadius: '8px', color: 'var(--white)', fontWeight: 600 }}>{p}</div>
              ))}
            </div>

          </div>"""

import re
old_section_pattern = re.compile(r"<div className=\{styles\.partnerLogos\}.*?<\/div>(\s*<Link href=\"\/contact\")", re.DOTALL)
text = old_section_pattern.sub(new_partner_code + r"\1", text)

with open("src/app/about/page.tsx", "w") as f:
    f.write(text)

