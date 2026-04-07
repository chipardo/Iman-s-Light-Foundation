import re

with open("src/app/donate/page.tsx", "r") as f:
    text = f.read()

# Add amounts
tiers_old = """    tiers: [
      {
        id: 'platinum',
        name: 'Platinum Supporter',
        icon: <Trophy size={40} color="var(--gold)" />,
        descEn: 'At the Platinum level, you become a cornerstone of Iman\\'s Light...',
        descEs: 'En el nivel Platino, te conviertes en un pilar fundamental...'
      },
      {
        id: 'gold',
        name: 'Gold Sponsor',
        icon: <Star size={40} color="var(--gold-light)" />,
        isFeatured: true,
        descEn: 'Your Gold Sponsorship directly funds multiple interactive workshops...',
        descEs: 'Su Patrocinio Oro financia directamente múltiples talleres interactivos...'
      },
      {
        id: 'silver',
        name: 'Silver Donor',
        icon: <Shield size={40} />,
        descEn: 'A beautiful way to directly sponsor families and individuals...',
        descEs: 'Una hermosa manera de patrocinar directamente a familias e individuos...'
      },
      {
        id: 'educational-silver',
        name: 'Educational Silver',
        icon: <BookHeart size={40} />,
        descEn: 'Specifically funds our critical "Truth About Drugs" school presentations...',
        descEs: 'Financia específicamente nuestras presentaciones escolares críticas...'
      }
    ],"""

tiers_new = """    tiers: [
      {
        id: 'platinum',
        name: 'Platinum Supporter',
        amount: '$10,000+',
        icon: <Trophy size={40} color="var(--gold)" />,
        descEn: 'At the Platinum level, you become a cornerstone of Iman\\'s Light...',
        descEs: 'En el nivel Platino, te conviertes en un pilar fundamental...'
      },
      {
        id: 'gold',
        name: 'Gold Sponsor',
        amount: '$5,000',
        icon: <Star size={40} color="var(--gold-light)" />,
        isFeatured: true,
        descEn: 'Your Gold Sponsorship directly funds multiple interactive workshops...',
        descEs: 'Su Patrocinio Oro financia directamente múltiples talleres interactivos...'
      },
      {
        id: 'silver',
        name: 'Silver Donor',
        amount: '$2,500',
        icon: <Shield size={40} />,
        descEn: 'A beautiful way to directly sponsor families and individuals...',
        descEs: 'Una hermosa manera de patrocinar directamente a familias e individuos...'
      },
      {
        id: 'educational-silver',
        name: 'Educational Silver',
        amount: '$1,000',
        icon: <BookHeart size={40} />,
        descEn: 'Specifically funds our critical "Truth About Drugs" school presentations...',
        descEs: 'Financia específicamente nuestras presentaciones escolares críticas...'
      }
    ],"""

text = text.replace(tiers_old, tiers_new)

# Update JSX to include amount
jsx_old = """                <h3 className={styles.tierAmount}>{tier.name}</h3>"""
jsx_new = """                <h3 className={styles.tierAmount}>{tier.amount}</h3>
                <h4 className={styles.tierLabel}>{tier.name}</h4>"""

text = text.replace(jsx_old, jsx_new)

with open("src/app/donate/page.tsx", "w") as f:
    f.write(text)

