import { SuggestParams } from "../types/suggest";

export const INPUT_DELAY_TIME = 500;
export const SCROLL_DELAY_TIME = 300;
export const INITIAL_PAGE = 1;
export const SHOW_LIMIT = 10;
export const PARAM_OBJ: SuggestParams = {
  q: "",
  page: INITIAL_PAGE,
  limit: SHOW_LIMIT,
};