# LUMIO 2.0 — Modular shell foundation

This is a separate development preview. It does not replace the existing LUMIO desktop or alter its login, embedded app loader, persistent media frames, wallpapers, or settings.

## Run it

Serve this folder over HTTP (ES modules do not reliably load from `file://`):

```bash
cd LUMIO-2.0
python -m http.server 8000
```

Open `http://localhost:8000`.

## Current foundation

- Event bus for decoupled system events
- App registry with validated app definitions
- Window manager with open, focus, minimize, and close
- Local preference storage with guarded browser storage access
- File picker that only reads user-selected files
- Settings module with a saved reduce-motion preference
- Responsive desktop, app grid, dock, and searchable start menu

## Migration plan

1. Connect the existing app tiles to this registry through an adapter, preserving the current app URLs and logo assets.
2. Move wallpaper, login, and settings behavior into separate services without changing their behavior.
3. Add a persistent virtual file library and import/export before attempting broader filesystem access.
4. Package the shell with Tauri and a Rust backend for native windows, filesystem permissions, and OS integration.
5. Build a Linux image using an established distribution as its base. LUMIO would be the desktop shell, not a new kernel.

## Boundaries

This is a browser-based prototype, not a Linux distribution. Browser storage is not a full filesystem, and the file picker only exposes files the user selects. The Netflix, Spotify, and Steam tiles are migration placeholders until the existing desktop loader is connected. The existing production desktop remains the stable version while this branch is developed.
