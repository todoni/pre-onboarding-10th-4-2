import { Dispatch, MouseEvent, MutableRefObject, SetStateAction, UIEvent } from "react";

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
type SuggestListScrollHandler = (e: UIEvent<HTMLElement>) => void;

export type ParamRef = MutableRefObject<SuggestParams>;
export type IsMoreRef = MutableRefObject<boolean>;

export type SuggestListProps = {
  suggestList: string[],
  clickHandler: SuggestItemClickHandler,
  inputText: string,
  isMore: IsMoreRef,
  scrollHandler: SuggestListScrollHandler,
  isScrolling: boolean
};

export type SuggestItemProps = {
  text: string,
  clickHandler: SuggestItemClickHandler,
  inputText: string
};

export type SetSuggestType = Dispatch<SetStateAction<string[]>>;
export type SetBooleanType = Dispatch<SetStateAction<boolean>>;
