with open("src/app/programs/page.tsx", "r") as f:
    text = f.read()

# Replace var(--navy) text colors with var(--white)
text = text.replace("color: i % 2 === 1 ? 'var(--navy)' : 'var(--white)'", "color: 'var(--white)'")
text = text.replace("color: i % 2 === 1 ? 'var(--navy-600)' : 'rgba(255,255,255,0.85)'", "color: 'rgba(255,255,255,0.85)'")

with open("src/app/programs/page.tsx", "w") as f:
    f.write(text)

