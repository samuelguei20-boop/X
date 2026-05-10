// POPUP

const popup =
document.getElementById("popup");

function showPopup(message){

popup.innerText = message;

popup.classList.add("show");

setTimeout(() => {

popup.classList.remove("show");

},2000);

}

/* ========================= */
/* MODE SOMBRE / CLAIR */
/* ========================= */

const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

document.body.classList.toggle(
"light"
);

if(
document.body.classList.contains(
"light"
)
){

themeBtn.innerHTML =
'<i class="fa-solid fa-sun"></i>';

}else{

themeBtn.innerHTML =
'<i class="fa-solid fa-moon"></i>';

}

/* vibration */

if(navigator.vibrate){

navigator.vibrate(30);

}

});

/* ========================= */
/* POPUP BOUTONS */
/* ========================= */

const popupButtons =
document.querySelectorAll(
".popup-btn"
);

popupButtons.forEach(button => {

button.addEventListener("click", () => {

showPopup(
"Service disponible bientôt"
);

if(navigator.vibrate){

navigator.vibrate(40);

}

});

});

/* ========================= */
/* NAVIGATION */
/* ========================= */

const homeBtn =
document.getElementById("homeBtn");

const rewardBtn =
document.getElementById("rewardBtn");

const marketBtn =
document.getElementById("marketBtn");

const profileBtn =
document.getElementById("profileBtn");

const homePage =
document.getElementById("homePage");

const rewardPage =
document.querySelector(".reward-page");

const marketPage =
document.querySelector(".market-page");

const profilePage =
document.querySelector(".profile-page");

const navItems =
document.querySelectorAll(
".nav-item"
);

/* RESET NAV */

function resetNav(){

navItems.forEach(item => {

item.classList.remove("active");

});

}

/* RESET PAGES */

function hidePages(){

homePage.classList.add("hidden");

rewardPage.classList.add("hidden");

marketPage.classList.add("hidden");

profilePage.classList.add("hidden");

}

/* ACCUEIL */

homeBtn.addEventListener("click", () => {

hidePages();

resetNav();

homePage.classList.remove("hidden");

homeBtn.classList.add("active");

});

/* RECOMPENSE */

rewardBtn.addEventListener("click", () => {

hidePages();

resetNav();

rewardPage.classList.remove("hidden");

rewardBtn.classList.add("active");

});

/* MARCHÉ */

marketBtn.addEventListener("click", () => {

hidePages();

resetNav();

marketPage.classList.remove("hidden");

marketBtn.classList.add("active");

});

/* PROFIL */

profileBtn.addEventListener("click", () => {

hidePages();

resetNav();

profilePage.classList.remove("hidden");

profileBtn.classList.add("active");

});

/* ========================= */
/* ROUE BCC */
/* ========================= */

const wheel =
document.getElementById("wheel");

const spinBtn =
document.getElementById("spinBtn");

let currentRotation = 0;

const rewards = [

"0 BCC",
"5 BCC",
"10 BCC",
"40 BCC",
"80 BCC",
"100 BCC"

];

spinBtn.addEventListener("click", () => {

const randomRotation =

Math.floor(
Math.random() * 360
);

currentRotation +=
3600 + randomRotation;

wheel.style.transform =
`rotate(${currentRotation}deg)`;

/* vibration */

if(navigator.vibrate){

navigator.vibrate([
100,
50,
100
]);

}

/* popup */

showPopup(
"🎡 La roue tourne..."
);

/* résultat */

setTimeout(() => {

const reward =

rewards[
Math.floor(
Math.random() *
rewards.length
)
];

showPopup(
`🎉 Bravo : ${reward}`
);

},5000);

});

/* ========================= */
/* TEXTE FUTURE */
/* ========================= */

const futureMessages = [

"Bienvenue sur Baby Cash Coin",

"Le futur du wallet ivoirien",

"Gagnez des récompenses BCC",

"Votre portefeuille numérique premium",

"Envoyez et recevez des BCC",

"Le futur du paiement africain"

];

const futureTrack =
document.querySelector(
".future-track"
);

let futureIndex = 0;

setInterval(() => {

futureIndex++;

if(
futureIndex >=
futureMessages.length
){

futureIndex = 0;

}

futureTrack.innerHTML =
`<span>${futureMessages[futureIndex]}</span>`;

},4000);

/* ========================= */
/* NOTIFICATION */
/* ========================= */

const notifBtn =
document.querySelector(
".notif-btn"
);

notifBtn.addEventListener("click", () => {

showPopup(
"Aucune notification"
);

});

/* ========================= */
/* BOUTON BCC CENTRE */
/* ========================= */

const centerNav =
document.querySelector(
".center-nav"
);

centerNav.addEventListener("click", () => {

showPopup(
"Bienvenue sur Baby Cash Coin"
);

if(navigator.vibrate){

navigator.vibrate(60);

}

});

/* ========================= */
/* ACTIONS */
/* ========================= */

const actionButtons =
document.querySelectorAll(
".action-btn"
);

actionButtons.forEach(button => {

button.addEventListener("click", () => {

showPopup(
"Fonction bientôt disponible"
);

if(navigator.vibrate){

navigator.vibrate(40);

}

});

});

/* ========================= */
/* EFFET GLOW */
/* ========================= */

const glowButtons =
document.querySelectorAll(
".action-btn, .reward-option, .chest, .spin-btn, .save-btn"
);

glowButtons.forEach(button => {

button.addEventListener("touchstart", () => {

button.style.transform =
"scale(0.96)";

});

button.addEventListener("touchend", () => {

button.style.transform =
"scale(1)";

});

});

/* ========================= */
/* PROFIL */
/* ========================= */

const saveBtn =
document.querySelector(
".save-btn"
);

saveBtn.addEventListener("click", () => {

showPopup(
"Profil enregistré"
);

});

/* ========================= */
/* ANIMATION CFA */
/* ========================= */

const cfaValue =
document.querySelector(
".cfa-live h2"
);

setInterval(() => {

cfaValue.style.opacity = "0.5";

setTimeout(() => {

cfaValue.style.opacity = "1";

},500);

},1000);
