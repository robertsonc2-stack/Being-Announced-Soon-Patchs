document.addEventListener("DOMContentLoaded", () => {
  const message = document.getElementById("message");
  const datetime = document.getElementById("datetime");
  const xLink = document.getElementById("x-link");
  const viewCounter = document.getElementById("view-counter");

  // Main message
  message.textContent = "🚧 To be announced soon 🚧";

  // Date & time (editable)
  const eventDate = "October 31, 2025 at 6:00 PM EST";
  datetime.textContent = `📅 Event Date: ${eventDate}`;

  // Link to X account (replace with your username)
  const xUsername = "SD_COLTON";
  xLink.href = `https://x.com/${xUsername}`;

  // View counter (local to each browser)
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

  // Change this password to whatever you want
  const correctPassword = "MDPROJECT";

  if (input === correctPassword) {
    secretSection.style.display = "block";
  } else {
    alert("❌ Wrong password. Try again!");
  }
}
