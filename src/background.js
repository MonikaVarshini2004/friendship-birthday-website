document.addEventListener("DOMContentLoaded", () => {
  const bg = document.getElementById("bg-music");
  const toggle = document.getElementById("music-toggle");

  if (!bg) return;

  bg.volume = 0.4;

  // restore last time
  const lastTime = localStorage.getItem("bg-music-time");
  if (lastTime) bg.currentTime = parseFloat(lastTime);

  bg.play().catch(() => {
    console.log("Autoplay blocked — will start after user interaction.");
  });

  // resume after click if blocked
  document.addEventListener("click", () => {
    if (bg.paused) bg.play().catch(() => {});
  }, { once: true });

  // save position
  setInterval(() => {
    if (!bg.paused) {
      localStorage.setItem("bg-music-time", bg.currentTime);
    }
  }, 2000);

  // pause/resume button if present
  if (toggle) {
    toggle.addEventListener("click", () => {
      if (bg.paused) {
        bg.play().catch(() => {});
        toggle.textContent = "⏸ Pause";
      } else {
        bg.pause();
        toggle.textContent = "▶ Resume";
      }
    });
  }
});
