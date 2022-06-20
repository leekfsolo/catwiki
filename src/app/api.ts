import { doGet } from "../common/base/api/api";
import { CATS_BASE_URL } from "../common/base/constant/constant";

export const doGetBreeds = (q: string) => {
  return doGet(`${CATS_BASE_URL}/breeds/search`, { q });
};
