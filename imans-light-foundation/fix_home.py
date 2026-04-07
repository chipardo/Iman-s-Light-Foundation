with open("src/app/page.tsx", "r") as f:
    text = f.read()

# Fix eventsLabel and eventsTitle dictionary
text = text.replace("eventsTitle: 'Upcoming & Past Events'", "eventsTitle: 'Upcoming Events'")
text = text.replace("eventsTitle: 'Eventos Próximos y Pasados'", "eventsTitle: 'Próximos Eventos'")

# Update Gala info
text = text.replace("2nd Annual Gala", "3rd Annual Gala")
text = text.replace("Segunda Gala Anual", "Tercera Gala Anual")
text = text.replace("October 25th, 2025", "October 2026")
text = text.replace("25 de Octubre, 2025", "Octubre 2026")

with open("src/app/page.tsx", "w") as f:
    f.write(text)

