const apps = [
  { id:"netflix", name:"Netflix", icon:"N", accent:"#e50914", category:"Entertainment" },
  { id:"spotify", name:"Spotify", icon:"♫", accent:"#1ed760", category:"Music" },
  { id:"steam", name:"Steam", icon:"◉", accent:"#79c8ff", category:"Gaming" },
  { id:"files", name:"Files", icon:"▤", accent:"#d7c6ff", category:"System" },
  { id:"settings", name:"Settings", icon:"⚙", accent:"#d7d7df", category:"System" }
];
export class AppRegistry {
  #apps = new Map();
  register(app) {
    if (!app?.id || !app?.name || typeof app.open !== "function") throw new TypeError("Apps need id, name, and open()");
    if (this.#apps.has(app.id)) throw new Error("Duplicate app id: " + app.id);
    this.#apps.set(app.id, Object.freeze({ ...app }));
  }
  get(id) { return this.#apps.get(id) ?? null; }
  list() { return [...this.#apps.values()]; }
}
export function createDefaultApps(handlers) {
  return apps.map(app => ({ ...app, open: () => handlers.open(app.id) }));
}
