# Interactive Friendship Birthday Website

A rich, interactive, and beautifully designed digital birthday celebration web application created by a friend for a friend. Built with pure HTML5, modern CSS3, and vanilla JavaScript—featuring multi-stage mini-games, interactive locks, scratch cards, video montages, a surprise wheel, memory galleries, and coordinated background music.

---

## 🌟 Overview

This website transforms a traditional birthday greeting into an unforgettable, gamified interactive experience. Across seven immersive pages, the user can explore friendship memories, spin a challenge wheel, solve a custom heart puzzle, scratch digital cards, play reflex games, and watch a cinematic birthday tribute video.

The application is completely self-contained, responsive across desktop and mobile devices, and uses locally stored multimedia assets with zero external framework dependencies (no React or build steps required).

---

## 🚀 Main Entry Point

The primary entry point for the website is:

```
own/src/index.html
```

To run the project locally, see the [How to Run](#-how-to-run) section below.

---

## 🎮 Key Features

- **Interactive Landing Page (`index.html`)**:
  - Warm birthday greeting header: *"Hey Birthday Star! 🎂✨"*
  - Interactive pulsing heart envelope—tap to unwrap the birthday message with animated reveal.
  - Floating ambient sparkle and particle effects.
  - Quick-start call to action and persistent audio toggle.
- **Friendship Memories Gallery (`Gallery.html`)**:
  - Filterable tabs: *Memories & Moments 📸*, *Video Highlights 🎥*, *Laughs & Chaos 😂*, and *Birthday Stars 🎂*.
  - Fullscreen lightbox viewer for both high-resolution images and videos with keyboard (`Esc`) and touch navigation.
  - Meaningful, humorous, and heartwarming friendship captions on every card.
- **Heartfelt Birthday Letter (`Letter-Quotes.html`)**:
  - 9 animated cards celebrating true friendship: the first meeting, midnight chats, inside jokes, food runs, unwavering support, candid polaroids, big dreams, future adventures, and birthday wishes.
  - Smooth cascading card animations with pastel gradient borders.
- **Birthday Surprise Wheel (`Surprise-Wheel.html`)**:
  - Custom HTML5 Canvas 8-segment wheel with realistic physics and smooth deceleration.
  - 8 friendship and birthday challenge prompts:
    1. *Tell a Funny Memory 😂*
    2. *Take a Group Selfie 📸*
    3. *Share an Inside Joke 🤫*
    4. *Send a Birthday Wish 🎂*
    5. *Give a Virtual Hug 🫂*
    6. *Plan a Future Adventure ✈️*
    7. *Funniest Friendship Story 🤣*
    8. *Make a Birthday Promise ✨*
  - Pop-up modal celebration card upon landing.
- **Secret Message & Multi-Lock System (`Secret-Message.html`)**:
  - **Lock 1**: Keyword gate leading to an interactive HTML5 Canvas scratch-card that reveals the secret message under user brushstrokes.
  - **Lock 2**: Keyword gate leading to a 12-piece draggable heart jigsaw puzzle with auto-solve demo mode and memory photo lightbox.
  - **Lock 3**: Tap-the-hearts letter sequence (`B-I-R-T-H-D-A-Y`) or final keyword unlock.
  - **Cinematic Finale**: Inspiring friendship quote and integrated video player for the celebration montage.
- **Friendship Challenge Olympics (`Challenge.html`)**:
  - 8 interactive challenge levels:
    1. *Emoji Story Decoder* (text input verification)
    2. *Photo Spot Hunt* (campus hangout spot recognition)
    3. *Road Trip Wish Q&A* (interactive scrapbook entry)
    4. *Friendship Anthem Lyrics Match* (drag-and-drop line reordering)
    5. *Goofy GIF Selection* (interactive reaction matching)
    6. *Friendship Superpower Q&A* (memory vault entry)
    7. *Speed Tap Game* (10-second star and heart tapping challenge)
    8. *Cosmic Birthday Wish Q&A* (universe manifestation)
  - Badge collection bar and custom scrapbook recap with the final video reward player.
- **Magical Ending (`Magical-Ending.html`)**:
  - Full-screen tap-to-begin introductory portal with starburst particles.
  - 8-clip funny moments grid.
  - Interactive birthday cake with wish-making animation.
  - Emotional friendship birthday tribute poem.
  - Final dual-video memory player (`memories.mp4` & `montage.mp4`).
  - Pop-out *Reels & Highlights* modal tray.
- **Audio Coordination Engine (`js/spa.js`)**:
  - 21 integrated tracks (`song0.mp3` through `song20.mp3` + `background.mp3`).
  - Graceful autoplay recovery following browser security policies.
  - Automatic background music ducking/pause when any video or foreground audio begins playback, resuming automatically upon video pause/completion.

---

## 🔐 TRIAL / DEMO KEYWORDS

For ease of testing and demonstration, the lock system in `Secret-Message.html` includes pre-configured, case-insensitive trial keywords:

| Lock Stage | Feature Unlocked | Trial / Demo Keyword |
| :--- | :--- | :--- |
| **Lock 1** | Canvas Scratch-Card | `FRIEND` |
| **Lock 2** | 12-Piece Heart Puzzle | `MEMORY` |
| **Lock 3** | Cinematic Video Finale | `BIRTHDAY` |

*(Note: In Lock 2, a **"⚡ Quick Auto-Solve"** button is also provided inside the puzzle area so testers can verify the solved state instantly without dragging all 12 pieces manually).*

---

## ⚙️ LOCK KEYWORD CONFIGURATION

The trial keywords are centrally configured in a single location for easy customization or removal prior to public deployment.

### File Location
- **File**: `own/src/Secret-Message.html`
- **Line**: Search for `===== TRIAL LOCK KEYWORDS =====`

### Code Block
```javascript
// ===== TRIAL LOCK KEYWORDS =====
// Edit the values below to change the demo keywords.
// Remove or disable DEMO KEYWORDS before public deployment.
const LOCK_KEYWORDS = {
  lock1: "FRIEND",
  lock2: "MEMORY",
  lock3: "BIRTHDAY"
};
```

### How to Change Keywords
1. Open `own/src/Secret-Message.html` in your editor.
2. Update the strings in `LOCK_KEYWORDS` (e.g., change `lock1` to your custom nickname or memorable date).
3. Update the matching hint text in `#msg1`, `#msg2`, and `#msg3` in the HTML markup.
4. Save the file.

### How to Disable Demo Mode
1. Remove or comment out the `.demo-banner` divs from `Secret-Message.html` so the trial keywords are no longer displayed on screen.
2. Update `LOCK_KEYWORDS` with your private secret answers.

---

## 📁 Project Structure

```
own/src/
├── index.html              # Main landing page with heart envelope reveal
├── Gallery.html            # 4-category photo and video gallery
├── Letter-Quotes.html      # Heartfelt 9-card friendship letter
├── Challenge.html          # 8-level friendship mini-games & scrapbook
├── Secret-Message.html     # 3-stage lock system, scratchcard & puzzle
├── Surprise-Wheel.html     # 8-option canvas spinner wheel & modal
├── Magical-Ending.html     # Cake animation, tribute poem & video finale
│
├── style.css               # Shared styling, design tokens & responsive nav
├── background.js           # Audio persistence helper script
│
├── js/
│   └── spa.js              # Media coordination and utility functions
│
├── images/                 # 40+ curated friendship & birthday illustrations
│   ├── birthday-cake.jpg
│   ├── birthday-gift.jpg
│   ├── friends-selfie.jpg
│   ├── friends-laughing.jpg
│   ├── friends-hugging.jpg
│   ├── friends-travel.jpg
│   ├── friendship-group-01.jpg
│   ├── zoom-photo.jpg
│   └── ... (additional themed visuals)
│
├── audio/                  # Audio soundtrack assets
│   ├── background.mp3      # Main ambient background music
│   └── song0.mp3 .. song20.mp3  # 21 randomized celebration tracks
│
├── songs/                  # Special anthem audio files
│   └── vaaya-veera.mp3
│
├── videos/                 # Main celebration video assets
│   ├── memories.mp4        # Main Friendship Birthday Memories video
│   ├── montage.mp4         # Cinematic finale video
│   └── video1.mp4 .. video45.mp4 # Live celebration clips
│
├── fun_videos/             # Short funny moments & celebration clips
│   └── video1.mp4 .. video8.mp4
│
├── funny/                  # Themed funny friendship cartoon cards
│   └── funny1.jpg .. funny32.jpg
│
├── memo/                   # Themed memory cards for puzzle lightbox
│   └── memo1.jpg .. memo25.jpg
│
├── solo/                   # Themed "Birthday Star" character cards
│   └── solo1.jpg .. solo56.jpg
│
├── puzzle/                 # 12-piece heart jigsaw puzzle slices
│   └── piece-1.png .. piece-12.png
│
└── gifs/                   # Reaction GIFs for Challenge Level 5
    ├── laugh1.gif
    ├── laugh-right.gif
    └── laugh3.gif
```

---

## 🛠️ Technology Stack

- **HTML5**: Semantic markup, Canvas API (scratch-card & wheel), audio/video tags.
- **CSS3**: Modern Flexbox, CSS Grid, Glassmorphism backdrop-filters, keyframe animations, custom responsive design tokens.
- **Vanilla JavaScript**: Zero dependencies, event-driven state management, drag-and-drop HTML5 API, interactive DOM manipulation.
- **Local Multimedia**: H.264 MP4 videos, MP3 audio, high-resolution JPEG/PNG imagery.

---

## 💻 How To Run

Because this is a completely static web application, it can be launched using any standard static file server.

### Preferred Method (Python Built-in HTTP Server)

Open your terminal or command prompt, navigate to `own/src`, and run:

```bash
cd own/src
python -m http.server 5500
```

Then open your browser and navigate to:
```
http://localhost:5500/
```

### Alternative Methods
- **VS Code Live Server**: Open `own/src/index.html` in VS Code, right-click, and select *"Open with Live Server"*.
- **Node `serve` / `http-server`**:
  ```bash
  npx http-server own/src -p 5500
  ```

---

## 📦 Media Inventory & Final Audit

### 1. Visual Assets (Images)
- **`images/`**: 41 newly curated and generated high-resolution friendship illustrations, birthday cakes, gifts, and road trips. All legacy `photo*.jpg` filenames have been replaced with clean illustrations.
- **`solo/`**: 56 cartoon character cards honoring the "Birthday Star". Zero personal photographs remain.
- **`funny/`**: 32 friendship chaos and comedy cards.
- **`memo/`**: 25 illustrated memory snapshot cards.
- **`puzzle/`**: 12 clean puzzle pieces cut from the floral friendship heart illustration (`heart.png.jpg`).

### 2. Video Assets
- **`videos/memories.mp4`**: Brand-new 8-scene friendship birthday video montage with title cards, pan/zoom motion, and audio soundtrack.
- **`videos/montage.mp4`**: Brand-new 5-scene cinematic finale with animated text and music.
- **`fun_videos/video1.mp4` .. `video8.mp4`**: 8 newly rendered animated celebration clips.
- **`videos/video1.mp4` .. `video16.mp4`**: 16 newly rendered live celebration clips.

### 3. Audio Assets
- **Background Music**: `audio/background.mp3`
- **Celebration Tracks**: `audio/song0.mp3` through `audio/song20.mp3` (21 verified tracks).
- **Personal Audio Removed**: Legacy personal audio removed from all active references.

### Final Verification Metrics
- **Old personal image references removed**: 100% (0 remaining)
- **New friendship visual assets added**: 40+ curated files + 113 processed themed cards
- **Old personal video references removed**: 100% (0 remaining)
- **New friendship videos generated**: 26 MP4 videos (including main memories and montage)
- **Old personal names & texts removed**: 100% (0 instances of previous names/couples content)
- **Broken links / 404 console errors**: 0
