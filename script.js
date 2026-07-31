// ---------- Loading Screen ----------
setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").classList.remove("hidden");
}, 3000);

// ---------- Floating Hearts ----------
function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 400);

// ---------- Password ----------
const PASSWORD = "isha";

const enterBtn = document.getElementById("enterBtn");
const popup = document.getElementById("passwordScreen");
const unlockBtn = document.getElementById("unlockBtn");
const passwordInput = document.getElementById("passwordInput");
const errorText = document.getElementById("errorText");

const main = document.getElementById("main");
const welcome = document.getElementById("welcomeScene");

const title = document.getElementById("typingTitle");
const text = document.getElementById("typingText");
const letterBtn = document.getElementById("letterBtn");
enterBtn.onclick = () => {

    document.getElementById("bgMusic").play();

    popup.classList.remove("hidden");
    passwordInput.focus();

}; 
unlockBtn.onclick = () => {

    if(passwordInput.value !== PASSWORD){

        errorText.innerHTML="❌ Wrong password ❤️";
        passwordInput.value="";
        return;
    }

    popup.classList.add("hidden");

main.style.display = "none";

welcome.classList.add("show");
welcome.style.display = "flex";

document.getElementById("typingTitle").innerHTML =
"Happy Birthday Isha Ji ❤️";

document.getElementById("typingText").innerHTML =
"Welcome to your special surprise! ✨";

document.getElementById("letterBtn").classList.remove("hidden");

};

// ---------- Typewriter ----------
const heading="Happy Birthday Isha Ji ❤️";

const message=
"Today isn't just another day...\\n\\nIt is the day the world became brighter because someone truly special was born.\\n\\nMay your smile always shine and may every dream in your heart come true.";

function typeStory(){

    let i=0;

    const t=setInterval(()=>{

        title.innerHTML=heading.substring(0,i);

        i++;

        if(i>heading.length){

            clearInterval(t);

            typeMessage();

        }

    },80);

}

function typeMessage(){

    let j=0;

    const m=setInterval(()=>{

        text.innerHTML=message.substring(0,j).replace(/\\n/g,"<br>");

        j++;

        if(j>message.length){

            clearInterval(m);

            letterBtn.classList.remove("hidden");

        }

    },30);

}

const letterScene = document.getElementById("letterScene");
const envelope = document.querySelector(".envelope");

letterBtn.onclick = () => {

    // Hide the welcome scene
    welcome.classList.remove("show");
    welcome.classList.add("hidden");

    // Show the envelope scene
    letterScene.classList.add("show");

    // Open the envelope after a short delay
    setTimeout(() => {
        envelope.classList.add("open");
    }, 800);

};
const galleryBtn = document.getElementById("galleryBtn");
const galleryScene = document.getElementById("galleryScene");

galleryBtn.onclick = () => {

    welcome.style.display = "none";

    letterScene.classList.remove("show");
    letterScene.style.display = "none";

    galleryScene.classList.remove("hidden");
    galleryScene.style.display = "block";

};
const photos = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg",
    "images/11.jpg",
    "images/12.jpg"
];

let currentPhoto = 0;

const galleryImage = document.getElementById("galleryImage");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const photoCounter = document.getElementById("photoCounter");

function updatePhoto() {

    galleryImage.src = photos[currentPhoto];
    photoCounter.innerHTML = `${currentPhoto + 1} / ${photos.length}`;

}

nextBtn.onclick = () => {

    alert("Next button clicked!");

    currentPhoto++;

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    updatePhoto();

};

prevBtn.onclick = () => {

    alert("Previous button clicked!");

    currentPhoto--;

    if (currentPhoto < 0) {
        currentPhoto = photos.length - 1;
    }

    updatePhoto();

};
const messages = [

    "You are the most special person in my life ❤️",

    "Your smile makes every day brighter 🌸",

    "Thank you for always being there ✨",

    "Happy Birthday, Isha Ji 🎂"

];

function showMessage(index){

    document.getElementById("secretText").innerHTML =
        messages[index];

}
const secretBtn = document.getElementById("secretBtn");
const secretScene = document.getElementById("secretScene");

secretBtn.onclick = () => {

    galleryScene.style.display = "none";

    secretScene.classList.remove("hidden");
    secretScene.style.display = "block";

};
const reasonBtn = document.getElementById("reasonBtn");
const reasonsScene = document.getElementById("reasonsScene");

reasonBtn.onclick = () => {

    secretScene.style.display = "none";

    reasonsScene.classList.remove("hidden");
    reasonsScene.style.display = "block";

};
const timelineBtn = document.getElementById("timelineBtn");
const timelineScene = document.getElementById("timelineScene");

timelineBtn.onclick = () => {

    reasonsScene.style.display = "none";

    timelineScene.classList.remove("hidden");
    timelineScene.style.display = "block";

};
