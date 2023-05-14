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

export type SuggestListProps = {
  suggestList: string[]
};

export type SuggestItemProps = {
  text: string
}