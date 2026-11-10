console.log("JavaScript läuft");

document.addEventListener("DOMContentLoaded", function() {

    const button = document.getElementById("katzenButton");
    const container = document.getElementById("emojiContainer");

    if (!button || !container) {
        console.log("Button oder Container wurde nicht gefunden!");
        return;
    }

    button.addEventListener("click", function() {

        container.innerHTML = "";

        // KATZEN UND HERZEN
        const emojis = ["🐈‍⬛", "💕", "💗", "💖", "❤️", "🐾"];

        for (let i = 0; i < 35; i++) {

            const emoji = document.createElement("span");

            emoji.className = "schwebe-emoji";
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

            emoji.style.left = Math.random() * 100 + "vw";
            emoji.style.animationDuration = (2 + Math.random() * 2) + "s";
            emoji.style.fontSize = (20 + Math.random() * 25) + "px";

            container.appendChild(emoji);

            emoji.addEventListener("animationend", function() {
                emoji.remove();
            });
        }

    });

});

// ===============================
// SIAMKATZEN-QUIZ
// ===============================

document.addEventListener("DOMContentLoaded", function() {

    const titel = document.getElementById("quizTitel");
    const fenster = document.getElementById("quizFenster");
    const frage = document.getElementById("quizFrage");
    const antworten = document.getElementById("quizAntworten");
    const rueckmeldung = document.getElementById("quizRueckmeldung");
    const weiter = document.getElementById("quizWeiter");
    const punkte = document.getElementById("quizPunkte");
    const schliessen = document.getElementById("quizSchliessen");

    if (!titel || !fenster || !frage || !antworten ||
        !rueckmeldung || !weiter || !punkte || !schliessen) {
        console.log("Quiz-Elemente wurden nicht gefunden!");
        return;
    }

    let fragenNummer = 0;
    let punktzahl = 0;
    let quizBeendet = false;

    const fragen = [
        {
            frage: "1. Aus welchem Land stammen Siamkatzen?",
            antworten: ["Japan", "Thailand", "China", "Indien"],
            richtig: 1
        },
        {
            frage: "2. Welche Augenfarbe haben Siamkatzen typischerweise?",
            antworten: ["Grün", "Braun", "Blau", "Gelb"],
            richtig: 2
        },
        {
            frage: "3. Wie ist der Charakter von Siamkatzen häufig?",
            antworten: ["Sehr kommunikativ", "Immer ruhig", "Sehr scheu", "Einzelgängerisch"],
            richtig: 0
        },
        {
            frage: "4. Wie nennt man die dunkle Färbung an Gesicht, Ohren, Pfoten und Schwanz?",
            antworten: ["Tigerzeichnung", "Point-Färbung", "Fleckenmuster", "Marmorierung"],
            richtig: 1
        },
        {
            frage: "5. Warum sind die Körperenden bei Siamkatzen dunkler?",
            antworten: [
                "Wegen der Sonne",
                "Wegen einer speziellen Ernährung",
                "Wegen eines temperaturempfindlichen Farbpigments",
                "Wegen ihres Alters"
            ],
            richtig: 2
        }
    ];

    // Quiz mit Doppelklick öffnen

    titel.addEventListener("dblclick", function() {
        fenster.style.display = "flex";

        fragenNummer = 0;
        punktzahl = 0;
        quizBeendet = false;

        weiter.textContent = "Weiter →";

        zeigeFrage();
    });

    // Eine Frage anzeigen

    function zeigeFrage() {

        rueckmeldung.textContent = "";
        weiter.style.display = "none";
        antworten.innerHTML = "";

        if (fragenNummer >= fragen.length) {
            zeigeErgebnis();
            return;
        }

        const aktuelleFrage = fragen[fragenNummer];

        frage.textContent = aktuelleFrage.frage;

        aktuelleFrage.antworten.forEach(function(antwort, index) {

            const button = document.createElement("button");

            button.textContent = antwort;
            button.className = "quiz-antwort";

            button.addEventListener("click", function() {

                const alleButtons = antworten.querySelectorAll("button");

                alleButtons.forEach(function(b) {
                    b.disabled = true;
                });

                if (index === aktuelleFrage.richtig) {
                    punktzahl++;
                    rueckmeldung.textContent = "🎉 Richtig! Super gemacht!";
                } else {
                    rueckmeldung.textContent =
                        "💕 Leider falsch! Richtig wäre: " +
                        aktuelleFrage.antworten[aktuelleFrage.richtig];
                }

                punkte.textContent = "Punkte: " + punktzahl;

                weiter.style.display = "inline-block";
            });

            antworten.appendChild(button);
        });

        punkte.textContent =
            "Frage " + (fragenNummer + 1) + " von " + fragen.length;
    }

    // Zur nächsten Frage

    weiter.addEventListener("click", function() {

        if (quizBeendet) {
            fragenNummer = 0;
            punktzahl = 0;
            quizBeendet = false;
            weiter.textContent = "Weiter →";
            zeigeFrage();
        } else {
            fragenNummer++;
            zeigeFrage();
        }

    });

    // Ergebnis anzeigen

    function zeigeErgebnis() {

        quizBeendet = true;

        frage.textContent = "🐾 Quiz geschafft!";
        antworten.innerHTML = "";

        rueckmeldung.textContent =
            "Du hast " + punktzahl + " von " + fragen.length +
            " Punkten erreicht! 💗";

        punkte.textContent = "Toll gemacht!";

        weiter.textContent = "Nochmal spielen ↻";
        weiter.style.display = "inline-block";
    }

    // Quiz schließen

    schliessen.addEventListener("click", function() {
        fenster.style.display = "none";
    });

});