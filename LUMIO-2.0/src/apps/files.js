export function renderFiles(container) {
  const card = document.createElement("div"); card.className = "panel-card";
  const heading = document.createElement("h2"); heading.textContent = "Local files";
  const copy = document.createElement("p"); copy.textContent = "Choose files from this device. LUMIO only reads files you select.";
  const picker = document.createElement("input"); picker.className = "file-picker"; picker.type = "file"; picker.multiple = true;
  const list = document.createElement("ul");
  picker.addEventListener("change", () => {
    list.replaceChildren();
    for (const file of picker.files ?? []) {
      const item = document.createElement("li");
      item.textContent = file.name + " · " + formatBytes(file.size);
      list.append(item);
    }
  });
  card.append(heading, copy, picker, list); container.append(card);
}
function formatBytes(bytes) {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 ** 2) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / 1024 ** 2).toFixed(1) + " MB";
}
