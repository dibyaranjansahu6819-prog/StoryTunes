import api from "./api";

export async function generateRecommendation(data) {
  const token = localStorage.getItem("access");

  const endpoint = token
    ? "recommendation/"
    : "recommendation/public/";

  const response = await api.post(endpoint, data);

  return response.data;
}