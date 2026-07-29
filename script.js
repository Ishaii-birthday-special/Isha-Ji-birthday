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

    main.style.display="none";

    welcome.classList.remove("hidden");

    typeStory();

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
