import { storage } from "../core/storage.js";
export function renderSettings(container) {
  const card = document.createElement("div"); card.className = "panel-card";
  const heading = document.createElement("h2"); heading.textContent = "Settings";
  const label = document.createElement("label");
  const toggle = document.createElement("input"); toggle.type = "checkbox";
  toggle.checked = storage.get("reduceMotion", false);
  toggle.addEventListener("change", () => {
    storage.set("reduceMotion", toggle.checked);
    document.documentElement.classList.toggle("reduce-motion", toggle.checked);
  });
  label.append(toggle, document.createTextNode(" Reduce motion"));
  const note = document.createElement("p"); note.textContent = "Preferences are saved in this browser on this device.";
  card.append(heading, label, note); container.append(card);
}
