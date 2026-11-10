console.log("JavaScript läuft");

document.addEventListener("DOMContentLoaded", function() {

    // =================================
    // 1. KATZEN-EMOJIS
    // =================================

    const button = document.getElementById("katzenButton");
    const container = document.getElementById("emojiContainer");

    if (button && container) {
        button.addEventListener("click", function() {

            const emojis = ["🐈‍⬛", "💕", "💗", "💖", "❤️", "🐾"];

            for (let i = 0; i < 35; i++) {

                const emoji = document.createElement("span");

                emoji.classList.add("schwebe-emoji");
                emoji.textContent = emojis[
                    Math.floor(Math.random() * emojis.length)
                ];

                emoji.style.left = Math.random() * 100 + "vw";
                emoji.style.animationDuration = (2 + Math.random() * 2) + "s";
                emoji.style.fontSize = (20 + Math.random() * 25) + "px";

                container.appendChild(emoji);

                emoji.addEventListener("animationend", function() {
                    emoji.remove();
                });
            }
        });
    }


    // =================================
    // 2. ROSA KATZENPFOTEN
    // =================================

    const links = document.querySelectorAll(".nav-link");

    links.forEach(function(link) {

        link.addEventListener("click", function(event) {

            const zielID = link.getAttribute("href").substring(1);
            const ziel = document.getElementById(zielID);

            if (!ziel) return;

            event.preventDefault();

            const start = link.getBoundingClientRect();
            const startX = start.left + start.width / 2;
            const startY = start.bottom + 15;

            const ende = ziel.getBoundingClientRect();

            const endeX = ende.left + 45;
            const endeY = ende.top + 20;

            const anzahl = 18;

            for (let i = 0; i < anzahl; i++) {

                setTimeout(function() {

                    const t = (i + 1) / anzahl;

                    const pfote = document.createElement("div");
                    pfote.classList.add("paw-print");

                    const seite = i % 2 === 0 ? -12 : 12;

                    pfote.style.left =
                        (startX + (endeX - startX) * t + seite) + "px";

                    pfote.style.top =
                        (startY + (endeY - startY) * t) + "px";

                    pfote.style.setProperty(
                        "--rotation",
                        seite === -12 ? "-25deg" : "25deg"
                    );

                    for (let j = 0; j < 4; j++) {
                        const zehe = document.createElement("span");
                        zehe.classList.add("paw-toe");
                        pfote.appendChild(zehe);
                    }

                    const polster = document.createElement("span");
                    polster.classList.add("paw-pad");
                    pfote.appendChild(polster);

                    document.body.appendChild(pfote);

                    setTimeout(function() {
                        pfote.remove();
                    }, 2500);

                }, i * 350);

            }

            ziel.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

});