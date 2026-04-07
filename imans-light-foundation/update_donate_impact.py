import re

with open("src/app/donate/page.tsx", "r") as f:
    text = f.read()

tiers_pattern = re.compile(r"tiers:\s*\[.*?\]", re.DOTALL)

new_tiers = """tiers: [
      {
        id: 'workshop',
        name: 'The Workshop Package',
        amount: '$5,000',
        icon: <GraduationCap size={40} color="var(--gold-light)" />,
        isFeatured: true,
        descEn: 'Directly fund four interactive "Truth About Drugs" presentations for an entire school. Includes projector equipment, printed materials, and expert speakers.',
        descEs: 'Financia directamente cuatro presentaciones interactivas completas para toda una escuela. Equipos, materiales e instructores expertos.'
      },
      {
        id: 'family',
        name: 'The Family Support Package',
        amount: '$2,500',
        icon: <Heart size={40} color="var(--gold)" />,
        descEn: 'Provide a grieving family or at-risk youth with 6 months of dedicated mental health counseling from our licensed psychological advisors.',
        descEs: 'Proporciona a una familia en duelo o a un joven en riesgo 6 meses de asesoramiento de salud mental dedicado con nuestros psicólogos.'
      },
      {
        id: 'lifesaver',
        name: 'The Community Lifesaver',
        amount: '$1,000',
        icon: <ShieldAlert size={40} color="var(--gold)" />,
        descEn: 'Supply a local community center with bulk Narcan kits and specialized training on overdose reversal and emergency response.',
        descEs: 'Proporcionar al centro comunitario local kits masivos de Narcan y capacitación especializada sobre reversión de sobredosis.'
      },
      {
        id: 'ambassador',
        name: 'The Ambassador',
        amount: '$500+',
        icon: <Scale size={40} color="var(--gold)" />,
        descEn: 'Support our ongoing legislative advocacy to aggressively punish drug traffickers and enforce stricter child protection laws.',
        descEs: 'Apoye nuestra defensa legislativa para castigar a los traficantes y hacer cumplir leyes más estrictas de protección.'
      }
    ]"""

# Since I used GraduationCap, Heart, ShieldAlert, Scale, I need to add them to lucide-react imports if not there.
text = re.sub(r"import\s*\{\s*([^{}]+)\s*\}\s*from\s*'lucide-react';", 
              lambda m: "import { " + m.group(1) + ", GraduationCap, Heart, ShieldAlert, Scale } from 'lucide-react';", 
              text)

text = tiers_pattern.sub(new_tiers, text)

with open("src/app/donate/page.tsx", "w") as f:
    f.write(text)

