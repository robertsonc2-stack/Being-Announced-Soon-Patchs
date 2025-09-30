document.addEventListener("DOMContentLoaded", () => {
  const message = document.getElementById("message");
  const datetime = document.getElementById("datetime");
  const xLink = document.getElementById("x-link");

  // Main message
  message.textContent = "🚧 To be announced soon 🚧";

  // Date & time (you can edit this string)
  const eventDate = "October 18, 2025 at 6:00 PM EST";
  datetime.textContent = `📅 Event Date: ${eventDate}`;

  // Link to your X account (replace with your username)
  const xUsername = "SD_COLTON"; // Example account
  xLink.href = `https://x.com/${xUsername}`;
});
