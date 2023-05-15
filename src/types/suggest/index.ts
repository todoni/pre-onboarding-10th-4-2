import { Dispatch, MouseEvent, SetStateAction } from "react";

export type SuggestParams = {
  q: string,
  page: number,
  limit: number
};

export interface SuggestItemFetchType extends SuggestParams {
  result: string[],
  qty: number,
  total: number
};

type SuggestItemClickHandler = (e: MouseEvent<HTMLElement>) => void;

export type SuggestListProps = {
  suggestList: string[],
  clickHandler: SuggestItemClickHandler
};

export type SuggestItemProps = {
  text: string,
  clickHandler: SuggestItemClickHandler
};

export type SetSuggestType = Dispatch<SetStateAction<string[]>>;
export type SetBooleanType = Dispatch<SetStateAction<boolean>>;
