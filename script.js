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

// Password Popup
const enterBtn = document.getElementById("enterBtn");
const popup = document.getElementById("passwordScreen");
const unlockBtn = document.getElementById("unlockBtn");
const passwordInput = document.getElementById("passwordInput");
const errorText = document.getElementById("errorText");

// CHANGE THIS PASSWORD TO ANYTHING YOU WANT
const PASSWORD = "isha";

enterBtn.addEventListener("click", () => {
    popup.classList.remove("hidden");
    passwordInput.focus();
});

unlockBtn.addEventListener("click", () => {

    if (passwordInput.value === PASSWORD) {

        popup.classList.add("hidden");

        alert("🎉 Welcome Isha Ji ❤️\n\nYour magical birthday journey begins now!");

    } else {

        errorText.innerHTML = "❌ Wrong password. Try again ❤️";

        passwordInput.value = "";

    }

});
