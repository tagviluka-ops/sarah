// SET YOUR START DATE HERE: (Year, Month [0-11], Day, Hours [0-23], Minutes)
// June is month index 5. 3:00 PM is 15 hours.
const startDate = new Date(2026, 5, 5, 15, 0, 0);

// --- Floating Background Icons Setup ---
const icons = ['🎀', '🍓', '🐱', '🐰', '💖', '✨', '🍰'];
const bgDecor = document.getElementById('bgDecor');

function createFloatingDecoration() {
  if (!bgDecor) return;
  const icon = document.createElement('div');
  icon.classList.add('floating-icon');
  icon.innerText = icons[Math.floor(Math.random() * icons.length)];
  icon.style.left = Math.random() * 100 + 'vw';
  icon.style.animationDuration = (Math.random() * 4 + 6) + 's';
  bgDecor.appendChild(icon);

  setTimeout(() => {
    icon.remove();
  }, 9000);
}

setInterval(createFloatingDecoration, 900);

// --- Interactive Letter Toggle ---
const envelope = document.getElementById('envelope');
if (envelope) {
  envelope.addEventListener('click', () => {
    envelope.classList.toggle('open');
  });
}

// --- Interactive Hug Clicker Game ---
let hugs = 0;
const clickerBtn = document.getElementById('clickerBtn');
const hugCount = document.getElementById('hugCount');
const rewardMsg = document.getElementById('rewardMsg');

const rewards = {
  3: "Chiikawa gives you a warm hug! 🐱",
  7: "Hello Kitty made you a strawberry pastry! 🍓",
  12: "The Calico Critters built you a little celebration wreath! 🐰",
  16: "🎉 16 hugs for 16 years! You're officially the sweetest 16-year-old ever. 💖"
};

if (clickerBtn && hugCount && rewardMsg) {
  clickerBtn.addEventListener('click', () => {
    hugs++;
    hugCount.innerText = hugs;

    if (rewards[hugs]) {
      rewardMsg.innerText = rewards[hugs];
    }
  });
}

// --- Together Timer Calculation ---
function updateTogetherTimer() {
  const now = new Date();
  const diff = Math.max(0, now - startDate);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minsEl = document.getElementById('mins');
  const secsEl = document.getElementById('secs');

  if (daysEl) daysEl.innerText = days;
  if (hoursEl) hoursEl.innerText = hours;
  if (minsEl) minsEl.innerText = mins;
  if (secsEl) secsEl.innerText = secs;
}

setInterval(updateTogetherTimer, 1000);
updateTogetherTimer();

// --- Spotify Modal Toggle ---
const musicBtn = document.getElementById('music-btn');
const musicModal = document.getElementById('music-modal');
const closeModal = document.getElementById('close-modal');

if (musicBtn && musicModal && closeModal) {
  musicBtn.addEventListener('click', () => {
    musicModal.classList.add('show');
  });

  closeModal.addEventListener('click', () => {
    musicModal.classList.remove('show');
  });

  musicModal.addEventListener('click', (e) => {
    if (e.target === musicModal) {
      musicModal.classList.remove('show');
    }
  });
}
// --- Interactive Birthday Cake Logic ---
const frostingThemes = {
  pink: { top: '#ffb3c1', bottom: '#ff85a1' },
  cream: { top: '#fff3b0', bottom: '#ffe066' },
  lavender: { top: '#e2afff', bottom: '#c77dff' },
  mint: { top: '#b7efc5', bottom: '#74c69d' }
};

// Swap Cake Colors
function changeFrosting(themeKey) {
  const theme = frostingThemes[themeKey];
  if (!theme) return;

  const layerTop = document.getElementById('layerTop');
  const layerBottom = document.getElementById('layerBottom');

  if (layerTop && layerBottom) {
    layerTop.style.backgroundColor = theme.top;
    layerBottom.style.backgroundColor = theme.bottom;
  }

  // Update button highlight active state
  document.querySelectorAll('.color-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.querySelector(`.color-btn.${themeKey}`);
  if (activeBtn) activeBtn.classList.add('active');
}

// Add Topping Emoji to Cake Layers
function addTopping(emoji) {
  const toppingsTop = document.getElementById('toppingsTop');
  const toppingsBottom = document.getElementById('toppingsBottom');
  
  if (!toppingsTop || !toppingsBottom) return;

  const topping = document.createElement('span');
  topping.classList.add('placed-topping');
  topping.innerText = emoji;

  // Random horizontal position across the cake layer
  const randomX = Math.floor(Math.random() * 75) + 12; // 12% to 87%
  topping.style.left = `${randomX}%`;

  // Randomly distribute onto top or bottom tier
  if (Math.random() > 0.45) {
    toppingsTop.appendChild(topping);
  } else {
    toppingsBottom.appendChild(topping);
  }
}

// Clear all toppings
function clearToppings() {
  const toppingsTop = document.getElementById('toppingsTop');
  const toppingsBottom = document.getElementById('toppingsBottom');
  if (toppingsTop) toppingsTop.innerHTML = '';
  if (toppingsBottom) toppingsBottom.innerHTML = '';
}

// Light Candle & Show Overlay
function lightCandle() {
  const flame = document.getElementById('flame');
  const wishOverlay = document.getElementById('wishOverlay');
  const lightBtn = document.getElementById('lightBtn');

  if (!flame || !wishOverlay) return;

  flame.classList.add('lit');
  wishOverlay.classList.add('active');

  if (lightBtn) {
    lightBtn.innerText = '✨ Candle Lit!';
  }
}

// Blow Out Candle & Create Sparkles
function blowOutCandle() {
  const flame = document.getElementById('flame');
  const wishOverlay = document.getElementById('wishOverlay');
  const lightBtn = document.getElementById('lightBtn');

  if (!flame || !wishOverlay) return;

  flame.classList.remove('lit');
  wishOverlay.classList.remove('active');

  if (lightBtn) {
    lightBtn.innerText = '🕯️ Light Candle!';
  }

  // Spawn celebration sparkles floating up
  for (let i = 0; i < 20; i++) {
    setTimeout(createFloatingDecoration, i * 100);
  }

  setTimeout(() => {
    alert("💖 Wish made & candle blown out! Happy Sweet 16 Sarah! 🎉🌸");
  }, 400);
}

// Helper: Create floating hearts & sparkles across the screen
function createFloatingDecoration() {
  const emojis = ['🌸', '✨', '💖', '🍓', '🎀', '🎉'];
  const deco = document.createElement('div');
  deco.classList.add('floating-deco');
  deco.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  
  deco.style.left = `${Math.random() * 90 + 5}vw`;
  deco.style.bottom = '-20px';
  
  document.body.appendChild(deco);

  setTimeout(() => {
    deco.remove();
  }, 2500);
}
