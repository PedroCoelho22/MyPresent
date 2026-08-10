// ============================================================
// PERSONALIZE THIS FILE
// Replace the placeholder text below with your own words.
// ============================================================

const reasons = [
  {
    title: "Your smile",
    text: "There is something about your smile that can make even an ordinary day feel special. I don't think you realize how much it affects me."
  },
  {
    title: "The way you make me laugh",
    text: "Even when I'm having a bad day, somehow you manage to make me laugh. I love that about you more than I can explain."
  },
  {
    title: "I can be myself with you",
    text: "With you, I never feel like I have to pretend to be someone else. I can just be me, and that means more to me than you know."
  },
  {
    title: "Your little habits",
    text: "Even the tiny things you do without thinking have become some of my favorite things about you."
  },
  {
    title: "Your voice",
    text: "I could listen to you talk about absolutely nothing and still somehow want to keep listening."
  },
  {
    title: "You make me feel loved",
    text: "There are moments with you where I stop and realize just how lucky I am to have someone like you in my life."
  },
  {
    title: "Your kindness",
    text: "The way you care about people says so much about the person you are. Your heart is genuinely one of my favorite things about you."
  },
  {
    title: "Our conversations",
    text: "From serious conversations to the most random nonsense imaginable, I love the time I get to spend talking with you."
  },
  {
    title: "You understand me",
    text: "You somehow notice things about me that other people don't. Being understood by you is one of the best feelings."
  },
  {
    title: "You're adorable",
    text: "I could probably spend an entire day listing all the ways I find you cute. And yes, I know you'd probably get embarrassed."
  },
  {
    title: "You challenge me",
    text: "You make me want to grow, try things and become a better version of myself. I'm grateful for that."
  },
  {
    title: "Our memories",
    text: "Every memory we make becomes something I want to keep forever. Even the silly ones are precious to me."
  },
  {
    title: "You make ordinary moments special",
    text: "It doesn't always have to be a big event. Sometimes simply talking to you is enough to make a normal day feel special."
  },
  {
    title: "Your personality",
    text: "There is nobody quite like you. Your personality, your weirdness and all your little quirks are exactly what make you you."
  },
  {
    title: "You make me feel safe",
    text: "Being able to trust someone with my thoughts, feelings and vulnerable moments is something I never take for granted."
  },
  {
    title: "You are you",
    text: "I don't love some perfect version of you. I love you as you are — including the messy, silly, stubborn and ridiculous parts."
  },
  {
    title: "You're my favorite person",
    text: "Out of all the people I could have met, I'm incredibly grateful that somehow our paths crossed."
  },
  {
    title: "Because it's you",
    text: "After all these reasons, there is still no perfect explanation for why I love you. I just do. And I hope I get to keep loving you for a very, very long time."
  }
];

const letters = [
  {
    icon: "🥺",
    title: "Open when you're sad",
    text: "If you're reading this because you're having a bad day, please remember that you don't have to deal with everything alone. I'm here for you, always mi amor. Even if I can't magically fix what's wrong, I'll listen, stay with you and remind you that tomorrow can be better. 💝"
  },
  {
    icon: "💌",
    title: "Open when you miss me",
    text: "If you miss me right now, and I cant text you, just know that there is a part of me missing you too. Close your eyes for a second and imagine me giving you the biggest kiss I can. 😘"
  },
  {
    icon: "😴",
    title: "Open when you can't sleep",
    text: "Put your phone down for a moment, get comfortable and take a deep breath. Imagine we're lying next to each other, talking quietly until we both fall asleep. Goodnight, my love. ✨"
  },
  {
    icon: "🫂",
    title: "Open when you need a hug",
    text: "Consider this your emergency digital hug. If I were there, I would probably hold you for way too long and refuse to let go. 🤍"
  },
  {
    icon: "😂",
    title: "Open when you need a laugh",
    text: "Remember that I'm voluntarily choosing to love you despite all the stupid things you do. That's true dedication and love. 😂"
  },
  {
    icon: "❤️",
    title: "Open when you doubt yourself",
    text: "I know there are moments when you question yourself and wonder if you're good enough. So let me remind you: YOU ARE. You don't have to be perfect, you don't need answer to everything, and you don't have to prove your worth to anyone. I believe in you, always. 💞"
  },
  {
    icon: "🥹",
    title: "Open when you're feeling lonely",
    text: "I wish I could be right next to you now. But even far away, I hope you remember that you have someone who cares about you, thinks about you and loves you more than you probably realize. So until I can give you a real hug, let this little letter be one instead. 💖"
  },
  {
    icon: "🎮",
    title: "Open when you want to play with me",
    text: "If you opened this, I think you already know what I'm going to say: just invite me, baby. I don't care what we play, whether we're winning or getting absolutely destroyed, I just want to spend some time with you. So go on, I'm waiting for you. 💌"
];

// -------------------- SITE LOGIC --------------------

const reasonsGrid = document.getElementById("reasonsGrid");
const lettersGrid = document.getElementById("lettersGrid");
const modal = document.getElementById("modal");

function makeReasonCards() {
  reasonsGrid.innerHTML = reasons.map((r, i) => `
    <article class="reason-card" data-type="reason" data-index="${i}">
      <div class="number">REASON ${String(i + 1).padStart(2, "0")}</div>
      <h3>${r.title}</h3>
      <p class="card-hint">Click to open ♡</p>
    </article>
  `).join("");
}

function makeLetterCards() {
  lettersGrid.innerHTML = letters.map((l, i) => `
    <article class="letter-card" data-type="letter" data-index="${i}">
      <div class="letter-icon">${l.icon}</div>
      <div>
        <h3>${l.title}</h3>
        <p class="card-hint">Open this letter →</p>
      </div>
    </article>
  `).join("");
}

function openModal(type, index) {
  const item = type === "reason" ? reasons[index] : letters[index];
  document.getElementById("modalIcon").textContent = type === "reason" ? "♡" : item.icon;
  document.getElementById("modalEyebrow").textContent =
    type === "reason" ? `Reason ${String(index + 1).padStart(2, "0")}` : "A little letter for you";
  document.getElementById("modalTitle").textContent = item.title;
  document.getElementById("modalText").innerHTML = `<p>${item.text}</p>`;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function showSection(id) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  document.querySelectorAll(".nav-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.section === id);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("click", e => {
  const nav = e.target.closest("[data-section]");
  if (nav) showSection(nav.dataset.section);

  const go = e.target.closest("[data-go]");
  if (go) showSection(go.dataset.go);

  const card = e.target.closest("[data-type]");
  if (card) openModal(card.dataset.type, Number(card.dataset.index));

  if (e.target.closest(".close") || e.target.classList.contains("modal-backdrop")) {
    closeModal();
  }
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

makeReasonCards();
makeLetterCards();

// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = Math.random() > .25 ? "♡" : "♥";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-30px";
  heart.style.fontSize = (10 + Math.random() * 18) + "px";
  heart.style.animationDuration = (7 + Math.random() * 7) + "s";
  document.querySelector(".hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 15000);
}

setInterval(createHeart, 1000);


// Background music
const backgroundMusic = document.getElementById("backgroundMusic");
backgroundMusic.volume = 0.10;
const musicToggle = document.getElementById("musicToggle");

function setMusicIcon() {
  musicToggle.textContent = backgroundMusic.paused ? "♫" : "❚❚";
}

async function startMusic() {
  try {
    await backgroundMusic.play();
    setMusicIcon();
  } catch (_) {
    // Browsers may block autoplay until the visitor interacts with the page.
  }
}

document.addEventListener("click", () => {
  if (backgroundMusic.paused) startMusic();
}, { once: true });

musicToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  if (backgroundMusic.paused) {
    startMusic();
  } else {
    backgroundMusic.pause();
    setMusicIcon();
  }
});

setMusicIcon();


// Relationship counter — together since 08/08/2026 at 16:30 (Portugal time)
(function () {
  const relationshipStart = new Date("2026-08-08T16:30:00+01:00");
  const counterDays = document.getElementById("counterDays");
  const counterHours = document.getElementById("counterHours");
  const counterMinutes = document.getElementById("counterMinutes");
  const counterSeconds = document.getElementById("counterSeconds");

  function updateRelationshipCounter() {
    if (!counterDays || !counterHours || !counterMinutes || !counterSeconds) return;

    let diff = Math.max(0, Date.now() - relationshipStart.getTime());
    const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;

    const days = Math.floor(diff / day);
    diff %= day;
    const hours = Math.floor(diff / hour);
    diff %= hour;
    const minutes = Math.floor(diff / minute);
    diff %= minute;
    const seconds = Math.floor(diff / second);

    counterDays.textContent = days;
    counterHours.textContent = String(hours).padStart(2, "0");
    counterMinutes.textContent = String(minutes).padStart(2, "0");
    counterSeconds.textContent = String(seconds).padStart(2, "0");
  }

  updateRelationshipCounter();
  setInterval(updateRelationshipCounter, 1000);
})();

// Final letter envelope animation
const finalEnvelope = document.getElementById("finalEnvelope");
const envelopeHint = document.getElementById("envelopeHint");
const finalLetterContent = document.getElementById("finalLetterContent");

function openFinalLetter() {
  if (finalEnvelope.classList.contains("opened")) return;
  finalEnvelope.classList.add("opened");
  envelopeHint.textContent = "Your letter is waiting for you ❤️";
  setTimeout(() => {
    finalLetterContent.classList.add("visible");
    finalLetterContent.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 850);
}

finalEnvelope.addEventListener("click", openFinalLetter);
finalEnvelope.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    openFinalLetter();
  }
});
