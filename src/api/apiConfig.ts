import axios from "axios";

export const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "aa609223bed73a9cb6c83e6dfe8b06ad",
  getLargeImage: (path: string) =>
    `https://image.tmdb.org/t/p/original/${path}`,
  getSmallImage: (path: string) => `https://image.tmdb.org/t/p/w500/${path}`,
};

const axiosInstance = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: { "Content-Type": "application/json" },
  params: {
    api_key: apiConfig.apiKey,
  },
});

axiosInstance.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }
  return response;
});

export default axiosInstance;
