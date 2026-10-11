/**
 * Friendship Birthday Website — Common Utilities (spa.js)
 * Provides background music coordination, floating particles, and navigation helpers.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Coordinated Background Music Handler
  const bgMusic = document.getElementById("bg-music") || document.getElementById("bg-audio");

  if (bgMusic) {
    bgMusic.volume = 0.4;

    // Gracefully handle browser autoplay policies
    const playPromise = bgMusic.play();
    if (playPromise && typeof playPromise.then === "function") {
      playPromise.catch(() => {
        // Autoplay policy prevented playback; will start on first user interaction
        const startAudioOnce = () => {
          bgMusic.play().catch(() => {});
          document.removeEventListener("pointerdown", startAudioOnce);
        };
        document.addEventListener("pointerdown", startAudioOnce, { once: true });
      });
    }

    // Auto-pause background audio when any video or other audio element starts playing
    const mediaEls = document.querySelectorAll("audio, video");
    mediaEls.forEach((el) => {
      if (el === bgMusic) return;

      el.addEventListener("play", () => {
        if (!bgMusic.paused) bgMusic.pause();
      });

      el.addEventListener("ended", () => {
        bgMusic.play().catch(() => {});
      });

      el.addEventListener("pause", () => {
        const stillPlaying = Array.from(mediaEls).some(
          (m) => m !== bgMusic && !m.paused && !m.ended
        );
        if (!stillPlaying) bgMusic.play().catch(() => {});
      });
    });
  }
});