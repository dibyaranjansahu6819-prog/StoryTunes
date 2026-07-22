import api from "./api";

/* Get all favorite songs */

export async function getFavorites() {
  const response = await api.get("favorites/");
  return response.data;
}

/* Add a song to favorites */

export async function addFavorite(songId) {
  const response = await api.post("favorites/add/", {
    song: songId,
  });

  return response.data;
}

/* Remove a song from favorites */

export async function removeFavorite(songId) {
  const response = await api.delete(
    `favorites/remove/${songId}/`
  );

  return response.data;
}