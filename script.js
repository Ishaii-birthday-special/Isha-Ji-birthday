// Loading Screen
setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").classList.remove("hidden");
}, 3000);

// Floating Hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 400);

// Button
document.getElementById("enterBtn").addEventListener("click", () => {
    alert("✨ Welcome, Isha Ji ❤️\n\nThe magical journey has just begun...");
});
