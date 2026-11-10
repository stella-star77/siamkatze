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