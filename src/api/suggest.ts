import { SuggestParams } from "../types/suggest";
import apiRequest from "./index";

const RESOURCE = "/search";

export const getSuggestList = async ({ q, page, limit }: SuggestParams) => {
  try {
    const response = await apiRequest.suggest(`${RESOURCE}?q=${q}&page=${page}&limit=${limit}`);

    return response;
  } catch (error) {
    throw new Error("API getSuggestionList error");
  }
};