const STORAGE_KEY = "nextgen_wishlist_v1";

function readWishlist() {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeWishlist(items) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function getWishlistItems() {
  return readWishlist();
}

export function isWishlisted(id) {
  return readWishlist().some((item) => item.id === id);
}

export function toggleWishlistItem(item) {
  const current = readWishlist();
  const exists = current.some((entry) => entry.id === item.id);
  const next = exists ? current.filter((entry) => entry.id !== item.id) : [...current, item];
  writeWishlist(next);
  return next;
}

export function clearWishlist() {
  writeWishlist([]);
}
