import { getToken } from "@/lib/authenticate";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function authFetch(url, options = {}) {
  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        'Authorization': `Bearer ${getToken()}`,
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
    });

    if (res.status === 200) {
      return res.json();
    } else {
      return [];
    }
  } catch (err) {
    console.error("Request failed:", err);
    return [];
  }
}

// FAVOURITES
export async function getFavourites() {
  return authFetch(`${API_URL}/favourites`);
}

export async function addToFavourites(id) {
  return authFetch(`${API_URL}/favourites/${id}`, {
    method: 'PUT'
  });
}

export async function removeFromFavourites(id) {
  return authFetch(`${API_URL}/favourites/${id}`, {
    method: 'DELETE'
  });
}

// HISTORY
export async function getHistory() {
  return authFetch(`${API_URL}/history`);
}

export async function addToHistory(id) {
  return authFetch(`${API_URL}/history/${id}`, {
    method: 'PUT'
  });
}

export async function removeFromHistory(id) {
  return authFetch(`${API_URL}/history/${id}`, {
    method: 'DELETE'
  });
}
