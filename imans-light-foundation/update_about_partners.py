with open("src/app/about/page.tsx", "r") as f:
    text = f.read()

# Replace the text array list
old_array = "['Secure Your Drink', 'Outreach Behavior Support', 'Infinity Life Wellness Center', 'Behavior Support Center', 'Improving Lives Community Mental Health', 'Luxe Properties', 'DAER Nightclub']"
new_array = "['Secure Your Drink', 'Outreach Behavior Support', 'Infinity Life Wellness Center', 'Behavior Support Center of Florida', 'Improving Lives Community', 'Luxe Properties', 'DAER Nightclub', 'Juan Carlos Pinera', 'Master Bodyworker', 'ScribeAmerica']"

text = text.replace(old_array, new_array)

with open("src/app/about/page.tsx", "w") as f:
    f.write(text)

