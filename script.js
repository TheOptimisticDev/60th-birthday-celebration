// Redirect functions
function redirect() {
  window.location.href = "https://www.youtube.com/watch?v=5u4xTa3LR2U&list=RD5u4xTa3LR2U&start_radio=1";
}

function redirectToExplore() {
  window.location.href = "./explore.html";
}

// Confetti Effect
function createConfetti(containerId, fromTop = true) {
  const confettiContainer = document.getElementById(containerId);
  const fragment = document.createDocumentFragment();
  
  for (let i = 0; i < 50; i++) { // Reduced number for performance
    const confetti = document.createElement('div');
    confetti.className = 'confetti square';
    confetti.style.setProperty('--left', `${Math.random() * 100}`);
    confetti.style.setProperty('--top', fromTop ? `${Math.random() * -10}` : `${Math.random() * 10}`);
    confetti.style.setProperty('--delay', `${Math.random() * 5}`);
    confetti.style.setProperty('--hue', `${Math.random() * 360}`);
    fragment.appendChild(confetti);
  }
  
  confettiContainer.appendChild(fragment);
}

// Colorful Balloons
function createBalloons() {
  const balloonColors = ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6', '#e67e22'];
  const balloons = document.querySelectorAll('.balloon');
  
  balloons.forEach((balloon) => {
    const randomColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
    balloon.style.setProperty('--balloon-color', randomColor);
  });
}

// Run effects on page load
document.addEventListener('DOMContentLoaded', () => {
  createConfetti('confetti-container-top', true);
  createConfetti('confetti-container-bottom', false);
  createBalloons();
});

// Function to randomize the flip between tiles
function randomizeTileFlip() {
  const tiles = document.querySelectorAll('.tile');
  if (tiles.length === 0) return;
  
  const randomIndex = Math.floor(Math.random() * tiles.length);
  
  tiles.forEach(tile => tile.classList.remove('active'));
  
  const selectedTile = tiles[randomIndex];
  selectedTile.classList.add('active');
  
  setTimeout(() => {
    selectedTile.classList.remove('active');
  }, 2000);
}

// Start flipping tiles if they exist
if (document.querySelector('.tile')) {
  setInterval(randomizeTileFlip, 5000);
}

// Confetti Effect - Improved Version
function createConfetti(containerId, fromTop = true) {
  const confettiContainer = document.getElementById(containerId);
  
  // Clear any existing confetti
  confettiContainer.innerHTML = '';
  
  // Create confetti elements
  for (let i = 0; i < 60; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    
    // Random shape (square or circle)
    const shape = Math.random() > 0.5 ? 'square' : 'circle';
    confetti.classList.add(shape);
    
    // Random position and animation
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.top = fromTop ? `${Math.random() * -10}vh` : `${Math.random() * 10 + 90}vh`;
    confetti.style.animationDelay = `${Math.random() * 5}s`;
    
    // Random color
    const hue = Math.floor(Math.random() * 360);
    confetti.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
    
    // Random size
    const size = Math.random() * 8 + 6;
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    
    // Random animation duration
    const duration = Math.random() * 3 + 5;
    confetti.style.animationDuration = `${duration}s`;
    
    confettiContainer.appendChild(confetti);
  }
}

// Initialize effects when page loads
document.addEventListener('DOMContentLoaded', () => {
  createConfetti('confetti-container-top', true);
  createConfetti('confetti-container-bottom', false);
  createBalloons();
});

// Colorful Balloons
function createBalloons() {
  const balloonColors = ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6', '#e67e22'];
  const balloons = document.querySelectorAll('.balloon');
  
  balloons.forEach((balloon) => {
    const randomColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
    balloon.style.setProperty('--balloon-color', randomColor);
  });
}

// Initialize effects when page loads
document.addEventListener('DOMContentLoaded', () => {
  createConfetti('confetti-container-top', true);
  createConfetti('confetti-container-bottom', false);
  createBalloons();
});
