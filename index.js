document.addEventListener("DOMContentLoaded", () => {
  const message = document.getElementById("message");
  const datetime = document.getElementById("datetime");
  const xLink = document.getElementById("x-link");
  const viewCounter = document.getElementById("view-counter");

  // Main message
  message.textContent = "🚧 To be announced soon. 🚧";

  // Countdown target (EDIT THIS DATE/TIME)
  const eventDate = new Date("October 18, 2025 18:00:00 EST").getTime();

  // Update countdown every second
  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance <= 0) {
      clearInterval(timer);
      datetime.textContent = "🎉 Event Started!";
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      datetime.textContent = `📅 Event starts in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  }, 1000);

  // Link to X account (replace with your username)
  const xUsername = "OpenAI";
  xLink.href = `https://x.com/${xUsername}`;

  // View counter (local per browser)
  let views = localStorage.getItem("pageViews");
  if (!views) {
    views = 1;
  } else {
    views = parseInt(views) + 1;
  }
  localStorage.setItem("pageViews", views);
  viewCounter.textContent = `👀 Page views (on your browser): ${views}`;
});

// Password check
function checkPassword() {
  const input = document.getElementById("password").value;
  const secretSection = document.getElementById("secret-section");

  // Change this password
  const correctPassword = "MDPROJECT";

  if (input === correctPassword) {
    secretSection.style.display = "block";
  } else {
    alert("❌ Wrong password. Try again!");
  }
}
