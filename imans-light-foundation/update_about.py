import re

with open("src/app/about/page.tsx", "r") as f:
    text = f.read()

# Define new team definitions
team_en = """team: [
      { name: 'Mari C. Rodriguez', role: 'Founder & President', image: 'https://static.wixstatic.com/media/56e6ee_c8a42446ccc74e71817a9116052f4ce2~mv2.jpg/v1/crop/x_0,y_404,w_1500,h_1381/fill/w_413,h_371,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20240111_190833.jpg', bio: 'Driven by profound personal loss, Mari transformed her family’s tragedy into an uncompromising foundation that reaches tens of thousands. Her work honors her daughter while fighting to ensure no other mother has to endure the devastation of the fentanyl crisis.' },
      { name: 'Brianna A. Rodriquez', role: 'Vice President', image: 'https://static.wixstatic.com/media/56e6ee_af44b0afacc84026a7d798066e207ef3~mv2.png/v1/fill/w_413,h_371,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_2971_PNG.png', bio: 'Iman\\'s loving sister. Brianna carries forward Iman’s spirit by directly impacting youth outreach, standing as a pillar of strength, resilience, and compassion for her community.' },
      { name: 'Maria E. Liriano', role: 'Treasurer', image: 'https://static.wixstatic.com/media/56e6ee_3ddb5580bfcd4f2f85790a4e10b0ef56~mv2.jpg/v1/crop/x_967,y_0,w_5165,h_4755/fill/w_413,h_371,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_7355_JPG.jpg', bio: 'A successful entrepreneur for over 30 years with a background in Real Estate and Escrow. Maria manages our foundation’s finances to ensure every single dollar is effectively utilized to support our educational and therapeutic initiatives.' },
      { name: 'Mercy M. Preciado', role: 'Outreach Community Chair', image: 'https://static.wixstatic.com/media/56e6ee_aa30d37cd6ce4cddb9cee9bfd4c40832~mv2.jpeg/v1/fill/w_413,h_371,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-08-10%20at%2012_24_28.jpeg', bio: 'A Spiritual Counselor with a Master’s in Psychology. Mercy connects individuals and families with life-changing mental health services, blending professional expertise with deep spiritual guidance.' },
      { name: 'Dunia Cuneo', role: 'Volunteer Director', image: 'https://static.wixstatic.com/media/56e6ee_fe5c234f71af45758073f116758dc4b1~mv2.jpeg/v1/fill/w_413,h_371,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-08-10%20at%2014_41_59.jpeg', bio: 'A dedicated educator and HR professional with over 25 years of experience. Dunia leverages her MBA and acumen to foster inclusive cultures, mentoring emerging leaders to drive systemic change through community advocacy.' },
      { name: 'Brittany DeMeo', role: 'Recording Secretary', image: 'https://static.wixstatic.com/media/56e6ee_3c8481b926504a1dae34abe7d0fd3dde~mv2.jpeg/v1/fill/w_413,h_371,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/E43C39AD-DCE7-4504-BC2D-FDD3D4B5451F.jpeg', bio: 'Joining the foundation after witnessing the devastating regional impacts of fentanyl, Brittany ensures that our operational structure remains efficient, organized, and perfectly clear so our resources hit the frontlines immediately.' },
      { name: 'Libby L. Calero', role: 'PR & Sponsor Development', image: 'https://static.wixstatic.com/media/56e6ee_37bc5c9d971949858e3cd5393e414ae6~mv2.jpg/v1/fill/w_413,h_371,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG-20250918-WA0055(1).jpg', bio: 'With over 25 years in hospitality and PR (working alongside DJ Irie and Jamie Foxx), Libby uses her vast network to bring massive visibility and crucial sponsorships to the foundation’s life-saving mission.' },
      { name: 'Victor H. Jinete', role: 'Audio Visual Director', image: 'https://static.wixstatic.com/media/56e6ee_1857a150774e4beb9114d4788de004a5~mv2.jpeg/v1/fill/w_413,h_371,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-09-21%20at%2019_01_37.jpeg', bio: 'Known as "Vic The Kid", this rising Latin music artist uses his massive platform to produce engaging content for the foundation, demonstrating to youth that success and joy do not require lethal substances.' },
      { name: 'Naylin Rizo, LMHC', role: 'Psychology Advisor', image: 'https://static.wixstatic.com/media/56e6ee_35c37897108948f48e30e3d1ff4434c9~mv2.jpg/v1/fill/w_344,h_344,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0477.jpg', bio: 'A Licensed Mental Health Counselor with 14+ years guiding teens and adults through trauma and addiction. She ensures our mental wellness programs are clinically sound and maximally effective.' },
      { name: 'Nicolas S. Nobrega', role: 'IT Intern', image: 'https://static.wixstatic.com/media/56e6ee_e765024d488a45ffad6cb38cac0d5d78~mv2.jpeg/v1/fill/w_344,h_344,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-08-19%20at%2013_41_58.jpeg', bio: 'A passionate Cybersecurity student at FIU, Nicolas handles the foundation’s digital infrastructure, ensuring our lifesaving resources and data remain accessible, secure, and easily reachable.' },
    ],"""

team_es = """team: [
      { name: 'Mari C. Rodriguez', role: 'Fundadora y Presidenta', image: 'https://static.wixstatic.com/media/56e6ee_c8a42446ccc74e71817a9116052f4ce2~mv2.jpg/v1/crop/x_0,y_404,w_1500,h_1381/fill/w_413,h_371,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20240111_190833.jpg', bio: 'Impulsada por una profunda pérdida personal, Mari transformó la tragedia de su familia en una base intransigente que llega a decenas de miles.' },
      { name: 'Brianna A. Rodriquez', role: 'Vicepresidenta', image: 'https://static.wixstatic.com/media/56e6ee_af44b0afacc84026a7d798066e207ef3~mv2.png/v1/fill/w_413,h_371,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_2971_PNG.png', bio: 'La amorosa hermana de Iman. Brianna lleva adelante el espíritu de Iman impactando directamente a los jóvenes como un pilar de fortaleza.' },
      { name: 'Maria E. Liriano', role: 'Tesorera', image: 'https://static.wixstatic.com/media/56e6ee_3ddb5580bfcd4f2f85790a4e10b0ef56~mv2.jpg/v1/crop/x_967,y_0,w_5165,h_4755/fill/w_413,h_371,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_7355_JPG.jpg', bio: 'Con experiencia en Bienes Raíces y Fideicomiso. Maria administra las finanzas para garantizar que cada dólar se utilice para apoyar nuestras iniciativas.' },
      { name: 'Mercy M. Preciado', role: 'Presidenta Comunitaria', image: 'https://static.wixstatic.com/media/56e6ee_aa30d37cd6ce4cddb9cee9bfd4c40832~mv2.jpeg/v1/fill/w_413,h_371,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-08-10%20at%2012_24_28.jpeg', bio: 'Mercy conecta a las familias con servicios de salud mental que cambian sus vidas, combinando la experiencia profesional con la guía espiritual.' },
      { name: 'Dunia Cuneo', role: 'Directora de Voluntarios', image: 'https://static.wixstatic.com/media/56e6ee_fe5c234f71af45758073f116758dc4b1~mv2.jpeg/v1/fill/w_413,h_371,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-08-10%20at%2014_41_59.jpeg', bio: 'Dunia aprovecha su MBA y perspicacia de Recursos Humanos para cambiar sistemas educativos en apoyo hacia la comunidad.' },
      { name: 'Brittany DeMeo', role: 'Secretaria', image: 'https://static.wixstatic.com/media/56e6ee_3c8481b926504a1dae34abe7d0fd3dde~mv2.jpeg/v1/fill/w_413,h_371,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/E43C39AD-DCE7-4504-BC2D-FDD3D4B5451F.jpeg', bio: 'Garantiza que nuestra estructura operativa se mantenga eficiente, organizada y perfectamente clara en nuestras misiones diarias.' },
      { name: 'Libby L. Calero', role: 'Relaciones Públicas', image: 'https://static.wixstatic.com/media/56e6ee_37bc5c9d971949858e3cd5393e414ae6~mv2.jpg/v1/fill/w_413,h_371,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG-20250918-WA0055(1).jpg', bio: 'Utiliza su vasta red (DJ Irie, Jamie Foxx) para dar visibilidad masiva y patrocinios cruciales a la misión de la fundación.' },
      { name: 'Victor H. Jinete', role: 'Director Audiovisual', image: 'https://static.wixstatic.com/media/56e6ee_1857a150774e4beb9114d4788de004a5~mv2.jpeg/v1/fill/w_413,h_371,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-09-21%20at%2019_01_37.jpeg', bio: 'El artista de música latina ("Vic The Kid") utiliza su plataforma para demostrar a los jóvenes que el éxito no requieren sustancias letales.' },
      { name: 'Naylin Rizo, LMHC', role: 'Asesora Psicológica', image: 'https://static.wixstatic.com/media/56e6ee_35c37897108948f48e30e3d1ff4434c9~mv2.jpg/v1/fill/w_344,h_344,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0477.jpg', bio: 'Asesora especializada en traumas y adicciones, garantiza que nuestros programas enfocados en el bienestar mental sean sumamente efectivos.' },
      { name: 'Nicolas S. Nobrega', role: 'Pasante de TI', image: 'https://static.wixstatic.com/media/56e6ee_e765024d488a45ffad6cb38cac0d5d78~mv2.jpeg/v1/fill/w_344,h_344,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-08-19%20at%2013_41_58.jpeg', bio: 'Nico maneja nuestra infraestructura cibernética para que los recursos siempre estén totalmente seguros y accesibles para todos.' },
    ],"""

# Replace en
pattern_en = re.compile(r"team: \[\s*\{ name: 'Mari C. Rodriguez', role: 'Founder & President'.*?\],\n    testimonialsLabel:", re.DOTALL)
text = pattern_en.sub(team_en + "\n    testimonialsLabel:", text)

# Replace es
pattern_es = re.compile(r"team: \[\s*\{ name: 'Mari C. Rodriguez', role: 'Fundadora y Presidenta'.*?\],\n    testimonialsLabel:", re.DOTALL)
text = pattern_es.sub(team_es + "\n    testimonialsLabel:", text)


# Now fix the rendering section
render_old = """          <div className="grid-3" style={{ marginTop: '40px' }}>
            {txt.team.map((member, i) => (
              <div key={i} className="card" style={{ background: 'transparent', border: '1px solid rgba(201,168,76,0.3)', padding: '32px' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--gold)', color: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '20px', fontFamily: 'Playfair Display' }}>
                  {member.name[0]}
                </div>
                <h3 style={{ color: 'var(--white)', fontSize: '1.3rem', marginBottom: '6px', fontFamily: 'Playfair Display' }}>{member.name}</h3>
                <span className="tag" style={{ marginBottom: '16px', display: 'inline-block', fontSize: '0.85rem' }}>{member.role}</span>
                <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: '1.6', fontSize: '0.95rem' }}>{member.bio}</p>
              </div>
            ))}
          </div>"""

render_new = """          <div className={styles.teamGrid}>
            {txt.team.map((member, i) => (
              <div key={i} className={styles.teamCard}>
                <div className={styles.teamImageWrapper}>
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className={styles.teamImage}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className={styles.teamImageOverlay} />
                </div>
                <div className={styles.teamContent}>
                  <h3 style={{ color: 'var(--white)', fontSize: '1.3rem', marginBottom: '4px', fontFamily: 'Playfair Display' }}>{member.name}</h3>
                  <span className="tag" style={{ marginBottom: '16px', display: 'inline-block', fontSize: '0.85rem' }}>{member.role}</span>
                  <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', fontSize: '0.95rem' }}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>"""

text = text.replace(render_old, render_new)

with open("src/app/about/page.tsx", "w") as f:
    f.write(text)

