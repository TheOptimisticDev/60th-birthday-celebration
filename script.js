function redirectToVideo() {
    // Replace the URL with the actual video link
    window.location.href = "https://www.youtube.com/watch?v=example";
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
  