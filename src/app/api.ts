import { doGet } from "../common/utils/baseAPI";
import { CATS_BASE_URL } from "../common/utils/constant";

export const doGetBreeds = (q: string) => {
  return doGet(`${CATS_BASE_URL}/breeds/search`, { q });
};

export const doGetBreedImages = (breed_id: string) => {
  return doGet(`${CATS_BASE_URL}/images/search`, { breed_id, limit: 10 });
};
