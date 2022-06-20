import { doGet } from "../common/utils/baseAPI";
import { CATS_BASE_URL } from "../common/utils/constant";

export const doGetBreeds = (q: string) => {
  return doGet(`${CATS_BASE_URL}/breeds/search`, { q });
};
