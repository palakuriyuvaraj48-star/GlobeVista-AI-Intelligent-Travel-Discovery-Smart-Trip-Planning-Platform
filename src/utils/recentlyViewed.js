const STORAGE_KEY = "nextgen_recently_viewed_v1";

function readItems() {
  if (typeof window === "undefined") return [];

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeItems(items) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function getRecentlyViewedItems() {
  return readItems();
}

export function addRecentlyViewedItem(item) {
  const current = readItems();
  const deduped = current.filter((entry) => `${entry.category}-${entry.id}` !== `${item.category}-${item.id}`);
  const next = [item, ...deduped].slice(0, 6);
  writeItems(next);
  return next;
}
