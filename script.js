function redirect() {
  window.location.href = "https://www.youtube.com/watch?v=example";
}

function redirectToExplore() {
  window.location.href = "./explore.html";
}
  
  // Confetti Effect
function createConfetti(containerId, fromTop = true) {
  const confettiContainer = document.getElementById(containerId);
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti square';
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.top = fromTop ? `${Math.random() * -10}vh` : `${Math.random() * 10}vh`;
    confetti.style.animationDelay = `${Math.random() * 5}s`;
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confettiContainer.appendChild(confetti);
  }
}
  
  // Colorful Balloons
function createBalloons() {
  const balloonColors = ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6', '#e67e22'];
  const balloons = document.querySelectorAll('.balloon');
  balloons.forEach((balloon) => {
    balloon.style.backgroundColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
  });
}
  
  // Run effects on page load
window.onload = () => {
  createConfetti('confetti-container-top', true); // Confetti from top
  createConfetti('confetti-container-bottom', false); // Confetti from bottom
  createBalloons(); // Colorful balloons
};

// Function to randomize the flip between two tiles
function randomizeTileFlip() {
  const tiles = document.querySelectorAll('.tile'); // Select both tiles
  const randomIndex = Math.floor(Math.random() * tiles.length); // Randomly select one tile

  // Remove 'active' class from both tiles before applying a new flip
  tiles.forEach(tile => tile.classList.remove('active'));

  // Add 'active' class to the randomly selected tile
  const selectedTile = tiles[randomIndex];
  selectedTile.classList.add('active');

  // Remove 'active' class after 2 seconds to flip back
  setTimeout(() => {
    selectedTile.classList.remove('active');
  }, 2000);
}

// Call the randomize function every 5 seconds
setInterval(randomizeTileFlip, 5000);
