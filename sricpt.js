const nama = "Adikk piaa";

const pesan = `
Aloww adikk Pia! 💗

timaaci yaa sudah menemani hari-hari aku di capil selama magang, aku sangat-sangat bersyukur bisa kenal adik,

aku masih ingat banget waktu pertama kali kamu masuk bareng qiqiss, kelihatan lugu dan culun banget wkwk becanda yaa adikk! waktu itu aku juga masih cuek kalau ketemu di ikd atau di loket pengambilan tapi lama-lama jadi akrab dan sekarang malah paling bakal kangen.

aku juga ngerasa punya adik beneran padahal di rumah aku bungsu hahaha, senang banget kenal adik Pia, kamu bikin hari-hari di sini jadi lebih seru dan nggak sepi.

adik jangan lupain aku yaa, dan jangan lupain kenangan kita selama di capil, semoga adik selalu sehat, semangat, dan semua yang adik mau dimudahkan.

Kita main uno lagi yukk di Berikopi again! hahaha 🃏☕

take care, adikk  🤍
`;

const warnaNote = "#F9DCE4";
const kodeRahasia = "ADIKK PIAA";

// MEMBUAT STICKY NOTE
const notesContainer = document.getElementById("notesContainer");

const note = document.createElement("div");
note.className = "note";
note.style.background = warnaNote;

note.innerHTML = `
    <div class="character">🦄</div>
    <h3>For ${nama} ♡</h3>
    <p>Click here to open your little message!</p>
`;

note.addEventListener("click", openMessage);
notesContainer.appendChild(note);


// MEMBUKA PESAN
function openMessage() {
    document.getElementById("modalCharacter").innerHTML = "🦄💗";
    document.getElementById("modalName").innerText = `Dear ${nama} ♡`;
    document.getElementById("modalMessage").innerText = pesan;
    document.getElementById("modal").style.display = "flex";
}

// MENUTUP PESAN
function closeMessage() {
    document.getElementById("modal").style.display = "none";
}

// KEMBALI KE MENU
function backToMenu() {
    document.getElementById("modal").style.display = "none";
}

// KODE RAHASIA
function checkCode() {
    const input = document.getElementById("secretCode").value.trim();

    if (input.toUpperCase() === kodeRahasia) {
        document.getElementById("mainContent").style.display = "block";
        document.getElementById("lockScreen").style.display = "none";
    } else {
        document.getElementById("errorMessage").innerText =
            "Eitsss, kode rahasianya salah! Coba lagi yaa ♡";

        document.getElementById("secretCode").value = "";
    }
}

// TEKAN ENTER UNTUK MEMASUKKAN KODE
document.getElementById("secretCode").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkCode();
    }
});


function playWithSound() {
  const video = document.querySelector("video");
  const tombol = document.querySelector(".sound-button");

  if (video.muted) {
    video.muted = false;
    video.play();
    tombol.textContent = "♡ Matikan Suara ♡";
  } else {
    video.muted = true;
    tombol.textContent = "♡ Putar dengan Suara ♡";
  }
}

// MUSIK BACKGROUND
function toggleMusic() {
    const music = document.getElementById("backgroundMusic");
    const button = document.querySelector(".music-button");

    if (music.paused) {
        music.play()
            .then(() => {
                button.innerHTML = "♫ Matikan Musik ♡";
            })
            .catch(error => {
                alert("Musik belum bisa diputar. Coba lagi yaa!");
            });
    } else {
        music.pause();
        button.innerHTML = "♡ Putar Musik ♡";
    }
}

window.toggleMusic = toggleMusic;
window.playWithSound = playWithSound;
window.checkCode = checkCode;
window.closeMessage = closeMessage;
window.backToMenu = backToMenu;