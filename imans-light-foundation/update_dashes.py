import re

# Update about/page.tsx
with open("src/app/about/page.tsx", "r") as f:
    about_text = f.read()

testimonials_en_old = """    testimonials: [
      { quote: "The foundation's workshop in our high school completely completely changed the narrative. The students were finally spoken to with respect and truth, rather than just fear.", author: "High School Counselor, Miami-Dade" },
      { quote: "Receiving the Narcan kit and the emotional training from Dr. Barbosa made our family feel equipped. We no longer feel helpless against this crisis.", author: "Local Parent & Advocate" },
      { quote: "Mari's strength is awe-inspiring. This foundation doesn't just talk about the problem—they are out here physically saving lives.", author: "Community Leader, S.A.R.A." },
    ],"""

testimonials_en_new = """    testimonials: [
      { quote: "We honestly felt lost before finding Iman's Light. The emotional training and the Narcan kits gave us an overwhelming sense of relief and an actual plan to protect our kids. You feel Mari's genuine heart in every single presentation.", author: "A Grateful Local Parent & Advocate" },
      { quote: "The interactive workshop they hosted at our school resonated deeply with the youth. They finally felt spoken to with deep respect, truth, and genuine care instead of standard fear tactics. It completely shifted the narrative in our classrooms.", author: "Miami-Dade High School Counselor" },
      { quote: "This foundation doesn't just discuss the fentanyl crisis. They are physically out here carrying Narcan, holding space for grieving families, and saving actual lives every single day. Their strength and compassion are truly awe-inspiring.", author: "Community Leader with S.A.R.A." },
    ],"""

testimonials_es_old = """    testimonials: [
      { quote: "El taller de la fundación cambió completamente la narrativa en nuestra escuela secundaria.", author: "Consejero Escolar" },
      { quote: "Recibir el entrenamiento emocional del Dr. Barbosa hizo que nuestra familia se sintiera equipada contra esta crisis.", author: "Padre Local" },
      { quote: "La fuerza de Mari es impresionante. Físicamente están salvando vidas.", author: "Líder Comunitario, S.A.R.A." },
    ],"""

testimonials_es_new = """    testimonials: [
      { quote: "Nos sentíamos honestamente perdidos antes de encontrar la Luz de Iman. El entrenamiento emocional y los kits de Narcan nos dieron un enorme sentido de alivio. Sientes el genuino corazón de Mari en cada presentación que hacen.", author: "Una Madre y Defensora Local Increíblemente Agradecida" },
      { quote: "El taller interactivo que hicieron en nuestra escuela resonó profundamente con los jóvenes. Se sintieron escuchados con gran respeto, verdad y un cuidado real. Cambió completamente la conversación en nuestros pasillos.", author: "Consejero de Escuela Secundaria de Miami-Dade" },
      { quote: "Esta fundación no solo habla de la crisis del fentanilo en teoría. Ellos están físicamente presentes impartiendo Narcan, llorando con las familias y salvando vidas reales todos los días. Su amor y dolor son nuestra mayor esperanza.", author: "Líder Comunitario en S.A.R.A." },
    ],"""

about_text = about_text.replace(testimonials_en_old, testimonials_en_new)
about_text = about_text.replace(testimonials_es_old, testimonials_es_new)

# Remove the dash before test.author
dash_author_old = "<span style={{ color: 'var(--gold)', fontWeight: 600, fontFamily: 'Playfair Display, serif' }}>- {test.author}</span>"
dash_author_new = "<span style={{ color: 'var(--gold)', fontWeight: 600, fontFamily: 'Playfair Display, serif' }}>{test.author}</span>"
about_text = about_text.replace(dash_author_old, dash_author_new)

with open("src/app/about/page.tsx", "w") as f:
    f.write(about_text)


# Update programs/page.tsx
with open("src/app/programs/page.tsx", "r") as f:
    prog_text = f.read()

# Replace em-dashes
prog_text = prog_text.replace("Mental Wellness Workshop—\"Understanding", "Mental Wellness Workshop \"Understanding")
prog_text = prog_text.replace("laugh, and have fun—proving", "laugh, and have fun, proving")

with open("src/app/programs/page.tsx", "w") as f:
    f.write(prog_text)

