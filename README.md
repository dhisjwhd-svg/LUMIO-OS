<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/dhisjwhd-svg/lumio-assets@main/images/branding/kon-favicon.jpg" alt="LUMIO-OS mark" width="88">
</p>

<h1 align="center">LUMIO-OS</h1>

<p align="center">
  A browser-based desktop for entertainment, games, music, and everyday shortcuts.
  <br>
  <a href="https://github.com/dhisjwhd-svg/LUMIO-OS/blob/main/main.html"><strong>Launch LUMIO-OS</strong></a>
  ·
  <a href="https://github.com/dhisjwhd-svg/LUMIO-OS/tree/main">Browse the source</a>
  ·
  <a href="https://github.com/dhisjwhd-svg/lumio-assets">Browse app assets</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/platform-web-111827?style=flat-square" alt="Platform: web">
  <img src="https://img.shields.io/badge/built%20with-HTML%20%2F%20CSS%20%2F%20JS-111827?style=flat-square" alt="Built with HTML, CSS, and JavaScript">
  <img src="https://img.shields.io/badge/interface-desktop--inspired-111827?style=flat-square" alt="Desktop-inspired interface">
</p>

---

## What is LUMIO-OS?

LUMIO-OS is a desktop-style environment built with HTML, CSS, and JavaScript. It runs inside a web browser rather than replacing the computer's actual operating system. From one desktop, you can open the included entertainment apps, reach web-based services, use the start menu, and customize parts of the interface.

## The desktop

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/dhisjwhd-svg/lumio-assets@main/images/branding/kon-favicon.jpg" alt="LUMIO-OS project mark" width="100">
</p>

The current interface includes:

- **Login screen** — a profile-style entry screen with a password field and sign-in feedback.
- **Desktop app grid** — launch the available apps from their desktop icons.
- **Bottom dock** — quick access to app shortcuts, with hover and active states.
- **Live clock** — displays the current time in the desktop header.
- **Start menu** — opens a compact menu with a Moon profile shortcut, Settings, and Sign out.
- **Settings panel** — includes wallpaper choices, display-related controls, and an About section.
- **Wallpaper and visual effects** — dark gradient wallpaper, subtle texture, glass-like panels, and animated transitions.
- **Full-screen app layer** — opens apps over the desktop and provides a close control to return.
- **Responsive layout** — the desktop spacing and app icons adapt for smaller screens.
- **Keyboard focus support** — desktop app shortcuts expose focus styling and keyboard activation.
- **App loading fallback** — supported hosted app files can fall back between GitHub Raw and jsDelivr if one source fails.
- **Session continuity** — the desktop attempts to preserve the signed-in state during interface reinitialization; Sign out clears that state.

The desktop's apps and some visual assets are hosted separately in the [lumio-assets repository](https://github.com/dhisjwhd-svg/lumio-assets).

## App gallery

These are the five apps currently wired into the desktop launcher. Images are loaded from the project's shared assets where available; Steam uses its recognizable service icon.

<table>
  <tr>
    <td align="center" width="20%">
      <img src="https://cdn.jsdelivr.net/gh/dhisjwhd-svg/lumio-assets@main/images/apps/netflix-cover.jpg" alt="Netflix app artwork" width="100">
      <br><strong>Netflix</strong>
      <br><sub>Video library</sub>
    </td>
    <td align="center" width="20%">
      <img src="https://cdn.jsdelivr.net/gh/dhisjwhd-svg/lumio-assets@main/images/apps/spotify-icon.jpg" alt="Spotify app icon" width="100">
      <br><strong>Spotify</strong>
      <br><sub>Music library</sub>
    </td>
    <td align="center" width="20%">
      <img src="https://cdn.simpleicons.org/steam/FFFFFF" alt="Steam logo" width="100">
      <br><strong>Steam</strong>
      <br><sub>Game catalogue</sub>
    </td>
    <td align="center" width="20%">
      <img src="https://cdn.jsdelivr.net/gh/dhisjwhd-svg/lumio-assets@main/images/apps/directory-icon.jpeg" alt="Directory app icon" width="100">
      <br><strong>Directory</strong>
      <br><sub>Links and records</sub>
    </td>
    <td align="center" width="20%">
      <img src="https://cdn.jsdelivr.net/gh/dhisjwhd-svg/lumio-assets@main/images/apps/milkbox-icon.png" alt="MilkBox app icon" width="100">
      <br><strong>MilkBox</strong>
      <br><sub>External streaming site</sub>
    </td>
  </tr>
</table>

### Netflix

<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/dhisjwhd-svg/lumio-assets@main/images/apps/netflix-cover.jpg" alt="Netflix artwork" width="150">
</p>

The project includes a Netflix-inspired video interface with library and playback-oriented controls.

- Browse the available titles and open title details.
- Use the **My List** / favorites controls to keep track of selected titles.
- Navigate series and episode views where the selected title provides them.
- Use playback controls such as Play, Play next, and source/retry options where available.
- Import and manage HTML modules through the app's module controls.
- Use the app's library and continue-playing areas when supported by the loaded content.

**Important:** playback depends on the available video sources, imported modules, browser support, and any restrictions imposed by third-party sites. This is not a claim that every title or external stream will work.

### Spotify

<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/dhisjwhd-svg/lumio-assets@main/images/apps/spotify-icon.jpg" alt="Spotify artwork" width="120">
</p>

The Spotify app provides a music-oriented interface and library controls.

- Open the music interface from the desktop or dock.
- Use **Add songs** to add music files/content supported by the app.
- View the **Your Library** area.
- Use **Clear library** to remove the current library entries.

Music availability and playback depend on the app's loaded content and browser permissions. The presence of a Spotify-style interface does not bypass Spotify's own account, licensing, or access requirements.

### Steam

<p align="left">
  <img src="https://cdn.simpleicons.org/steam/FFFFFF" alt="Steam logo" width="100">
</p>

Steam opens the project's game-catalogue interface.

- Browse the **Featured** area and available game entries.
- Use **Play Now** / **Play** on supported entries.
- Mark entries as favorites.
- Load more catalogue items when that control is available.
- Use the history controls to clear browsing/play history.
- Return from a game view with the Back control, or retry/refresh when available.

A game's success depends on its source files, asset paths, browser compatibility, and whether it can run in an embedded browser context. Steam branding in this project does not mean the official Steam client is included.

### Directory

<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/dhisjwhd-svg/lumio-assets@main/images/apps/directory-icon.jpeg" alt="Directory app artwork" width="120">
</p>

Directory is a link-directory interface presented as a terminal-style workspace for managing entries.

- **Directory** — open and browse the directory.
- **Logbook** — review saved or recorded entries.
- **Verified Entries** — view entries classified as verified by the app.
- **Field Guide** — read the app's guidance for using and maintaining the directory.
- **Register Site** — add a site by submitting its details.
- **Quarantine** — review flagged or quarantined entries.
- **Reinstate** — move a quarantined entry back when appropriate.
- **Move to notes** — keep a record without leaving it in the main active list.
- **Export Directory** — export directory data.
- **Purge Quarantine** — clear quarantined entries.

Directory entries are user/content supplied; verify destinations before opening them. Labels such as “verified” describe the app's own organization and should not be treated as a guarantee that a website is safe.

### MilkBox

<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/dhisjwhd-svg/lumio-assets@main/images/apps/milkbox-icon.png" alt="MilkBox app artwork" width="120">
</p>

MilkBox opens the external MilkBox website inside the app layer. Its content and available controls are provided by that third-party service rather than by the local LUMIO-OS code. Access can change if the service is unavailable or blocks embedding.

## Start menu and profile shortcut

The Start menu includes a shortcut to the **moon.d.flower** profile page, alongside Settings and Sign out. The profile experience is hosted as a separate app page in the shared assets repository.

## Settings and desktop controls

The current desktop source includes the following controls and panels:

| Feature | What it does |
| --- | --- |
| Wallpaper | Offers wallpaper changes through the Settings interface. |
| Display settings | Opens the display-related settings section provided by the current build. |
| About | Opens the About section for the desktop. |
| Sign out | Clears the remembered login state and returns to the login screen. |
| Close app | Closes the active app layer and returns to the desktop. |
| Clock | Displays the current time in the header. |
| Responsive layout | Adjusts desktop padding and icon sizes for smaller screens. |

Specific behavior may vary by build; the README describes controls present in the current source and does not imply that the browser can change the device's actual system settings.

## Get started

1. Open [main.html](https://github.com/dhisjwhd-svg/LUMIO-OS/blob/main/main.html) to launch the current entry page.
2. The main desktop implementation is [Assets/lumio-desktop.html](https://github.com/dhisjwhd-svg/LUMIO-OS/blob/main/Assets/lumio-desktop.html).
3. To work locally, clone or download this repository and open the entry page in a modern browser.
4. If local-file restrictions affect app loading, serve the files through a local web server and keep an internet connection available for externally hosted apps and assets.

## Project structure

```text
LUMIO-OS/
├── Assets/
│   └── lumio-desktop.html   # Desktop, login, settings, launcher, and app layer
├── main.html                # Main entry / launcher page
└── README.md                # Project documentation
```

Shared apps, app artwork, and supporting pages are maintained in [lumio-assets](https://github.com/dhisjwhd-svg/lumio-assets).

## Built with

| Technology | Role |
| --- | --- |
| HTML | Page structure and app interfaces |
| CSS | Desktop layout, responsive styling, visual effects, and transitions |
| JavaScript | App launching, menus, settings, and interface interactions |
| SVG | Interface icons and scalable graphics |
| GitHub Raw / jsDelivr | Hosting and delivery of external app files and assets |

## Compatibility and limitations

- LUMIO-OS is a browser-based project, not a separate operating system or native desktop application.
- Internet access is needed for remotely hosted app pages and assets.
- Embedded sites may block iframes or restrict playback.
- Browser security rules, third-party changes, file paths, and mobile-browser behavior can affect individual apps.
- Game and media playback cannot be guaranteed for every entry.
- Never enter sensitive credentials into an embedded third-party page unless you trust the destination.

## Project links

- [Launch LUMIO-OS](https://github.com/dhisjwhd-svg/LUMIO-OS/blob/main/main.html)
- [Desktop implementation](https://github.com/dhisjwhd-svg/LUMIO-OS/blob/main/Assets/lumio-desktop.html)
- [Shared apps and assets](https://github.com/dhisjwhd-svg/lumio-assets)
- [TikTok · @moon.d.flower](https://www.tiktok.com/@moon.d.flower)

---

<p align="center"><sub>LUMIO-OS · A desktop-inspired experience for the web.</sub></p>
