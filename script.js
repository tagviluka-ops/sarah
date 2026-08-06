// Floating Background Icons Setup
const icons = ['🎀', '🍓', '🐱', '🐰', '💖', '✨', '🍰'];
const bgDecor = document.getElementById('bgDecor');

function createFloatingDecoration() {
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

// Interactive Letter Toggle
const envelope = document.getElementById('envelope');
envelope.addEventListener('click', () => {
  envelope.classList.toggle('open');
});

// Interactive Hug Clicker Game
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

clickerBtn.addEventListener('click', () => {
  hugs++;
  hugCount.innerText = hugs;

  if (rewards[hugs]) {
    rewardMsg.innerText = rewards[hugs];
  }
});