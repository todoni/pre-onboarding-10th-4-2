import { ChangeEvent, useRef } from "react";
import { INPUT_DELAY_TIME, SHOW_LIMIT, SHOW_PAGE } from "../constants";
import { SuggestParams, UseSearchArgs } from "../types/suggest";
import { useDebounce } from "./useDebounce";
import { getSuggestList } from "../api/suggest";

const paramObj: SuggestParams = {
  q: "",
  page: SHOW_PAGE,
  limit: SHOW_LIMIT,
};

const useSearch = ({
  setInputText,
  setIsLoading,
  setIsTyping,
  setSuggestList
}: UseSearchArgs) => {
  const params = useRef(paramObj);
  const debounce = useDebounce(INPUT_DELAY_TIME);
  const isMore = useRef<boolean>(false);

  const onChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;

    setIsTyping(true);
    params.current.q = value;
    setInputText(value);
    if (value.trim() === "") {
      setSuggestList([]);
      return;
    }
    /* eslint-disable */
    console.log(value);

    const getSuggestions = async () => {
      try {
        setIsLoading(true);
        params.current.page = newPage;
        const res = await getSuggestList(params.current);
        /* eslint-disable */
        console.log(res.data.result);
        const { page, limit, total, result } = res.data;
        setSuggestList(result);
        isMore.current = page * limit < total;
      } catch (error) {
        console.error(error);
        alert("Something went wrong.");
      } finally {
        setIsLoading(false);
      }
    };
    debounce(getSuggestions);
  };

  const onScrollHandler = () => {
    
  }

  return { onChangeHandler, isMore };
};

export default useSearch;