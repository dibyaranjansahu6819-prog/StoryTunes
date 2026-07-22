import api from "./api";

export async function getHistory() {
  const response = await api.get("music/history/");
  return response.data;
}