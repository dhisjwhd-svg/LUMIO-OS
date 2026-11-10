export class EventBus {
  #listeners = new Map();
  on(type, listener) {
    if (typeof listener !== "function") throw new TypeError("Listener must be a function");
    const bucket = this.#listeners.get(type) ?? new Set();
    bucket.add(listener);
    this.#listeners.set(type, bucket);
    return () => this.off(type, listener);
  }
  off(type, listener) {
    const bucket = this.#listeners.get(type);
    if (!bucket) return;
    bucket.delete(listener);
    if (!bucket.size) this.#listeners.delete(type);
  }
  emit(type, detail = {}) {
    for (const listener of [...(this.#listeners.get(type) ?? [])]) {
      try { listener(detail); } catch (error) { queueMicrotask(() => { throw error; }); }
    }
  }
  clear() { this.#listeners.clear(); }
}
