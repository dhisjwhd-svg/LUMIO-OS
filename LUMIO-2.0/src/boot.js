import { EventBus } from "./core/event-bus.js";
import { AppRegistry, createDefaultApps } from "./core/app-registry.js";
import { WindowManager } from "./core/window-manager.js";
import { storage } from "./core/storage.js";
import { renderFiles } from "./apps/files.js";
import { renderSettings } from "./apps/settings.js";

const bus = new EventBus();
const layer = document.querySelector("#windowLayer");
const windows = new WindowManager(layer, bus);
const registry = new AppRegistry();
const handlers = { open: id => openApp(id) };
for (const app of createDefaultApps(handlers)) {
  if (app.id === "files") app.render = renderFiles;
  if (app.id === "settings") app.render = renderSettings;
  if (["netflix","spotify","steam"].includes(app.id)) {
    app.render = container => {
      const p = document.createElement("p");
      p.textContent = "Connect this tile to the existing LUMIO app loader during migration. The current desktop remains unchanged.";
      container.append(p);
    };
  }
  registry.register(app);
}
function openApp(id) {
  const app = registry.get(id);
  if (!app) return;
  windows.open(app);
  bus.emit("app:launched", { id });
}
function makeTile(app, className = "app-tile") {
  const button = document.createElement("button");
  button.type = "button"; button.className = className; button.dataset.app = app.id;
  const icon = document.createElement("span"); icon.className = "app-icon";
  icon.textContent = app.icon; icon.style.color = app.accent;
  const name = document.createElement("span"); name.className = "app-name"; name.textContent = app.name;
  button.append(icon, name); button.addEventListener("click", () => openApp(app.id));
  return button;
}
const grid = document.querySelector("#appGrid");
const dock = document.querySelector("#dockItems");
const menu = document.querySelector("#startMenu");
const startList = document.querySelector("#startAppList");
for (const app of registry.list()) {
  grid.append(makeTile(app));
  dock.append(makeTile(app, "dock-app"));
  startList.append(makeTile(app, "start-menu-app"));
}
document.querySelector("#startButton").addEventListener("click", () => { menu.hidden = !menu.hidden; });
document.addEventListener("click", event => {
  if (!menu.hidden && !menu.contains(event.target) && !event.target.closest("#startButton")) menu.hidden = true;
});
document.querySelector("#appSearch").addEventListener("input", event => {
  const query = event.target.value.trim().toLowerCase();
  for (const button of startList.querySelectorAll("button")) button.hidden = !button.textContent.toLowerCase().includes(query);
});
function tick() {
  const now = new Date();
  document.querySelector("#clock").textContent = new Intl.DateTimeFormat(undefined,{hour:"2-digit",minute:"2-digit"}).format(now);
  document.querySelector("#date").textContent = new Intl.DateTimeFormat(undefined,{weekday:"short",month:"short",day:"numeric"}).format(now);
}
tick(); window.setInterval(tick, 15000);
document.documentElement.classList.toggle("reduce-motion", storage.get("reduceMotion", false));
bus.on("window:closed", ({id}) => console.info("LUMIO window closed:", id));
