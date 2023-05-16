import { Dispatch, MouseEvent, MutableRefObject, SetStateAction, UIEvent } from "react";

export type ParamRef = MutableRefObject<{ q: string; page: number; limit: number }>;
export type IsMoreRef = MutableRefObject<boolean>;

export type SuggestListProps = {
  suggestList: string[];
  inputText: string;
  isMore: MutableRefObject<boolean>;
  scrollHandler: (e: UIEvent<HTMLElement>) => void;
  clickHandler: (e: MouseEvent<HTMLElement>) => void;
  isScrolling: boolean;
};

export type SuggestItemProps = {
  text: string;
  clickHandler: (e: MouseEvent<HTMLElement>) => void;
  inputText: string;
};

export type SetSuggestType = Dispatch<SetStateAction<string[]>>;
export type SetBooleanType = Dispatch<SetStateAction<boolean>>;
