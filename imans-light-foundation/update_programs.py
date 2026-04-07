import re

with open("src/app/programs/page.tsx", "r") as f:
    text = f.read()

# Add Image import
if "import Image from 'next/image';" not in text:
    text = text.replace("import Link from 'next/link';", "import Link from 'next/link';\nimport Image from 'next/image';")


old_header = """          <div className="text-center" style={{ marginBottom: '60px' }}>
            <span className="section-label">{isEs ? 'Detalles del Taller' : 'Workshop Details'}</span>
            <h2 className="section-title" style={{ color: '#fff' }}>{isEs ? 'Nuestro Plan de Estudios' : 'Our Lesson Plans'}</h2>
            <div className="gold-divider center" />
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
              {isEs ? 'Desglosamos los hechos reales sobre las sustancias para desmentir mitos y salvar vidas. Cada presentación está diseñada para la resiliencia juvenil.' : 'We break down the raw facts regarding substances to shatter internet myths and definitively save lives. Each presentation is custom-built.'}
            </p>
          </div>"""

new_header = """          <div className="text-center" style={{ marginBottom: '60px' }}>
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
          </div>"""

text = text.replace(old_header, new_header)

with open("src/app/programs/page.tsx", "w") as f:
    f.write(text)

