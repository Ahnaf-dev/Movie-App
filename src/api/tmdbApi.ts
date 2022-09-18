import axiosInstance, { apiConfig } from "./apiConfig";

type category = "movie" | "tv";
type movieType = "popular" | "top_rated" | "upcoming";
type tvType = "popular" | "top_rated";

const tmdbApi = {
  getMovies: (type: movieType, param: any) => {
    const url = `movie/${type}`;
    return axiosInstance.get(url, { params: param });
  },
  getTV: (type: tvType, param: any) => {
    const url = `tv/${type}`;
    return axiosInstance.get(url, { params: param });
  },
  detail: (category: category, id: number, param: any) => {
    const url = `${category}/${id}`;
    return axiosInstance.get(url, { params: param });
  },
  search: (category: category, param: any) => {
    const url = `search/${category}`;
    return axiosInstance.get(url, { params: param });
  },
  getVideo: (category: category, id: number, param: any) => {
    const url = `${category}/${id}/videos`;
    return axiosInstance.get(url, { params: param });
  },
  getGenres: (category: category, param: any) => {
    const url = `genre/${category}/list`;
    return axiosInstance.get(url, { params: param });
  },
  getCast: (category: category, id: number, param: any) => {
    const url = `${category}/${id}/credits`;
    return axiosInstance.get(url, { params: param });
  },
  getSimilar: (category: category, id: number, param: any) => {
    const url = `${category}/${id}/similar`;
    return axiosInstance.get(url, { params: param });
  },
};

export default tmdbApi;
///movie/{movie_id}/credits
