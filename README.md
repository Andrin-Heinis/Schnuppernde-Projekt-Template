# HTML

1. Setze den Seitentitel auf **„Confetti Demo“**.
2. Fuege im `<body>` ganz oben `id="top"` ein.
3. Erstelle einen `<header class="header">` mit dem Text **„Confetti“**.
4. Direkt darunter eine `<nav class="nav">` mit 3 Links: Home, Galerie, Kontakt. Der dritte Link zeigt auf `#contact`.
5. Erstelle `<main id="main" class="main">`.
6. In `<main>`: ein `<h1>` mit **„Willkommen“**.
7. Darunter ein kurzer `<p>` mit 1–2 Saetzen.
8. Fuege ein Bild ein: `<img class="image" src="https://placecats.com/400/250" alt="Suesse Katze">`.
9. Fuege einen Button ein: `<button class="button" id="confettiBtn">Konfetti</button>`.
10. Unter `<main>` erstelle `<section id="contact">Kontakt</section>` und einen `<footer class="footer">` mit Link **„Back to top“** zu `#top`.

# CSS

11. `body`: margin 0, Schrift `system-ui`, Hintergrund `#f5f5f5`, Textfarbe `#222`.
12. `:root`: definiere `--primary: #2563eb`.
13. `.header`: Hintergrund weiss, Padding 12px 16px, unten feine Linie `1px solid #e5e7eb`.
14. `.nav a`: links nebeneinander mit 12px Abstand, keine Unterstreichung; bei Hover Unterstreichung.
15. `.main`: max-width 640px, zentrieren mit `margin:20px auto`, Padding 16px, Hintergrund weiss, Radius 8px.
16. `.image`: `max-width:100%`, `height:auto`, Radius 8px.
17. `.button`: Hintergrund `var(--primary)`, Text weiss, kein Rahmen, Radius 8px, Padding 10px 14px, Cursor pointer.
18. `.button:hover`: leicht dunkler mit `filter: brightness(.95)`.
19. `.button:active`: ganz wenig kleiner mit `transform: scale(.98)`.
20. Fokus sichtbar machen: `a:focus-visible, .button:focus-visible { outline:2px solid var(--primary); outline-offset:2px; }`.
