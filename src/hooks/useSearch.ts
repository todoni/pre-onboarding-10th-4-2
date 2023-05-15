import { ChangeEvent, useRef } from "react";
import { SHOW_LIMIT, SHOW_PAGE } from "../constants";
import { SetSuggestType, SuggestParams } from "../types/suggest";
import { useDebounce } from "./useDebounce";
import { getSuggestList } from "../api/suggest";
import { SetInputType } from "../types/todo";

const paramObj: SuggestParams = {
  q: '',
  page: SHOW_PAGE,
  limit: SHOW_LIMIT
};

const useSearch = (setSuggestList: SetSuggestType, setInputText: SetInputType) => {
  const params = useRef(paramObj);
  const debounce = useDebounce();
  const onChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;

    params.current.q = value;
    setInputText(value);
    if (value.trim() === '') {
      setSuggestList([]);
      return;
    }
    /* eslint-disable */
    console.log(value);

    const getSuggestions = async () => {
      const res = await getSuggestList(params.current);
      /* eslint-disable */
      console.log(res.data.result);
      setSuggestList(res.data.result);
    }
    debounce(getSuggestions);
  };

  return onChangeHandler
};

export default useSearch;