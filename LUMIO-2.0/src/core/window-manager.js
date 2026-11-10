export class WindowManager {
  #layer; #bus; #windows = new Map(); #sequence = 0;
  constructor(layer, bus) { this.#layer = layer; this.#bus = bus; }
  open(app) {
    const existing = this.#windows.get(app.id);
    if (existing) { existing.element.hidden = false; this.focus(app.id); return existing; }
    const element = document.createElement("section");
    element.className = "window";
    element.dataset.app = app.id;
    element.style.zIndex = String(++this.#sequence);
    const titlebar = document.createElement("header");
    titlebar.className = "window-titlebar";
    const title = document.createElement("span");
    title.className = "window-title";
    title.textContent = app.name;
    const controls = document.createElement("div");
    controls.className = "window-controls";
    const minimize = document.createElement("button");
    minimize.type = "button"; minimize.textContent = "—"; minimize.setAttribute("aria-label", "Minimize");
    minimize.addEventListener("click", () => this.minimize(app.id));
    const close = document.createElement("button");
    close.type = "button"; close.textContent = "×"; close.setAttribute("aria-label", "Close");
    close.addEventListener("click", () => this.close(app.id));
    controls.append(minimize, close); titlebar.append(title, controls);
    const content = document.createElement("div");
    content.className = "window-content";
    if (typeof app.render === "function") app.render(content);
    else {
      const p = document.createElement("p"); p.textContent = app.description ?? "App integration is ready."; content.append(p);
    }
    element.append(titlebar, content); this.#layer.append(element);
    const record = { app, element, content };
    this.#windows.set(app.id, record);
    this.focus(app.id); this.#bus.emit("window:opened", { id: app.id });
    return record;
  }
  focus(id) {
    const record = this.#windows.get(id); if (!record) return;
    record.element.hidden = false; record.element.style.zIndex = String(++this.#sequence);
    this.#bus.emit("window:focused", { id });
  }
  minimize(id) {
    const record = this.#windows.get(id); if (!record) return;
    record.element.hidden = true; this.#bus.emit("window:minimized", { id });
  }
  close(id) {
    const record = this.#windows.get(id); if (!record) return;
    record.element.remove(); this.#windows.delete(id); this.#bus.emit("window:closed", { id });
  }
  closeAll() { for (const id of this.#windows.keys()) this.close(id); }
}
