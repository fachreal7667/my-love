// ==============================
// Mengambil elemen HTML
// ==============================

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const catImage = document.getElementById("catImage");

// ==============================
// Variabel
// ==============================

// Ukuran awal tombol YES
let scale = 1;

// Index pesan yang sedang aktif
let currentMessage = 0;

// ==============================
// Array Pesan Tombol NO
// ==============================

const messages = [

    "JANGANNNNN 🥺🥺🥺🥺",

    "serius mau klik ini 🥺",

    "pliss jangann 🥺",

    "coba adek pikirkan lagi 🥺",

    "adek gak sayang? 🥺",

    "nanti mas ke cangar loh 😢",

    "makanya klik iya 🥺❤️",

    "plisss sayangg...🥺"

];

// ==============================
// Array GIF Kucing
// ==============================

const cats = [

    "img/cat1.gif",

    "img/cat2.gif",

    "img/cat3.gif",

    "img/cat4.gif",

    "img/cat5.gif",

    "img/cat6.gif",

    "img/cat7.gif",

    "img/cat8.gif"

];

// ==============================
// Tombol YES
// ==============================

yesBtn.addEventListener("click", function () {

    window.location.href = "pageyes.html";

});

// ==============================
// Tombol NO
// ==============================

noBtn.addEventListener("mouseover", function () {

    // --------------------------
    // Posisi Acak Tombol
    // --------------------------

    const randomX =
        Math.random() * (window.innerWidth - 150);

    const randomY =
        Math.random() * (window.innerHeight - 100);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    // --------------------------
    // Tombol YES Membesar
    // --------------------------

   if(scale < 3){

    scale += 0.2;
    }

yesBtn.style.transform = `scale(${scale})`;

    // --------------------------
    // Ganti Pesan Tombol
    // --------------------------

    if (currentMessage < messages.length - 1) {

        currentMessage++;

    }

    noBtn.innerHTML = messages[currentMessage];

    // --------------------------
    // Ganti GIF Kucing
    // --------------------------

    catImage.src = cats[currentMessage];

});