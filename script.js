console.log("JavaScript läuft")
<script>
const button = document.getElementById("katzenButton");
const container = document.getElementById("emojiContainer");

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
</script>