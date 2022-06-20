import { doGet } from "../common/utils/baseAPI";
import { CATS_BASE_URL } from "../common/utils/constant";

export const doGetPopularBreeds = () => {
  return doGet(`${CATS_BASE_URL}/breeds`, { limit: 4, page: 0 });
};

export const doGetBreeds = (q: string) => {
  return doGet(`${CATS_BASE_URL}/breeds/search`, { q });
};

export const doGetBreedImages = (breed_id: string) => {
  return doGet(`${CATS_BASE_URL}/images/search`, { breed_id, limit: 9 });
};
