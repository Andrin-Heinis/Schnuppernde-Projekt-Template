# 💡 Tipps & Hilfen zum Projekt „Meine Lieblingswebsite“

Wenn du mal nicht weiterkommst, findest du hier Hilfen, kleine Codebeispiele und kurze Erklärungen.  
Probiere immer erst selbst – die Tipps sind nur ein Rettungsanker 🚀.

---

## 🔹 HTML Tipps
**Überschrift einfügen:**  
<h1>Meine Lieblingswebsite</h1>  
👉 Mit `<h1>` machst du eine große Hauptüberschrift.  

**Absatz schreiben:**  
<p>Hallo, ich bin Max und ich mag Programmieren!</p>  
👉 Normale Texte schreibt man mit `<p>` (Paragraph).  

**Liste erstellen:**  
<ul>  
  <li>Gaming</li>  
  <li>Pizza essen</li>  
  <li>Netflix schauen</li>  
</ul>  
👉 Mit `<ul>` erstellst du eine Liste, und jedes Element kommt in `<li>`.  

**Button einfügen:**  
<button>Zeig mir ein Fun Fact!</button>  
👉 Buttons erstellt man mit `<button>`.  

**Platzhalter für Fun Fact:**  
<p id="funfact"></p>  
👉 Mit `id="funfact"` kannst du später per JavaScript genau diesen Absatz ansprechen.  

---

## 🔹 CSS Tipps
**CSS einbinden:**  
<link rel="stylesheet" href="style.css">  
👉 Diese Zeile kommt in den `<head>`, damit die Seite dein CSS lädt.  

**Hintergrundfarbe ändern:**  
body {  
  background-color: lightblue;  
}  
👉 Damit änderst du die Hintergrundfarbe der ganzen Seite.  

**Überschrift zentrieren:**  
h1 {  
  text-align: center;  
}  
👉 Text mit `text-align: center;` wird mittig angezeigt.  

**Liste ohne Punkte:**  
ul {  
  list-style-type: none;  
}  
👉 Entfernt die Standard-Punkte einer Liste.  

**Hover-Effekt für Liste:**  
li:hover {  
  background-color: yellow;  
}  
👉 Mit `:hover` kannst du bestimmen, was passiert, wenn man mit der Maus über ein Element fährt.  

**Abgerundete Ecken + Schatten:**  
li {  
  border-radius: 8px;  
  box-shadow: 2px 2px 5px gray;  
}  
👉 `border-radius` macht runde Ecken, `box-shadow` sorgt für einen Schatten.  

---

## 🔹 JavaScript Tipps
**JS einbinden:**  
<script src="funfacts.js"></script>  
👉 Diese Zeile kommt ganz unten vor `</body>`, damit dein JavaScript geladen wird.  

**Array mit Fun Facts:**  
const funFacts = [  
  "Ich liebe Pizza 🍕",  
  "Ich mag Katzen 🐱",  
  "Ich kann gut schlafen 😴"  
];  
👉 Ein Array ist eine Sammlung von mehreren Werten.  

**Button auswählen:**  
const button = document.querySelector("button");  
👉 Damit suchst du das erste `<button>`-Element in deinem HTML.  

**Zufallszahl generieren:**  
const randomIndex = Math.floor(Math.random() * funFacts.length);  
👉 `Math.random()` gibt eine Zahl zwischen 0 und 1 zurück. Damit kannst du zufällig ein Array-Element auswählen.  

**Text ins HTML schreiben:**  
document.getElementById("funfact").innerText = funFacts[randomIndex];  
👉 So setzt du den Text im Absatz mit der ID `funfact`.  

---

## 🔹 Bonus-Tipps
**Bild einfügen:**  
<img src="bild.jpg" alt="Mein Hobby">  
👉 Mit `<img>` fügst du Bilder ein. `alt` ist ein Ersatztext, falls das Bild nicht geladen wird.  

**Dark Mode per CSS-Klasse:**  
.darkmode {  
  background-color: black;  
  color: white;  
}  
👉 Mit dieser Klasse kannst du einen Dark Mode machen.  

**Klasse per JS umschalten:**  
document.body.classList.toggle("darkmode");  
👉 `toggle` fügt die Klasse hinzu, wenn sie fehlt, und entfernt sie, wenn sie da ist.  

**Klickzähler:**  
let count = 0;  
button.addEventListener("click", () => {  
  count++;  
  document.getElementById("funfact").innerText = "Du hast " + count + " Mal geklickt!";  
});  
👉 Mit einer Variable kannst du mitzählen, wie oft ein Button gedrückt wurde.  

---

✅ **Profi-Tipp:** Wenn etwas nicht funktioniert → **Browser-Konsole öffnen (F12 → Tab „Konsole“)**. Dort stehen fast immer die Fehlermeldungen, die dir sagen, was falsch ist.
