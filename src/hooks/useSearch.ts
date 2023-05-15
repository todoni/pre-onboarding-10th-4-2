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
        const res = await getSuggestList(params.current);
        setIsLoading(true);
        /* eslint-disable */
        console.log(res.data.result);
        setSuggestList(res.data.result);
      } catch (error) {
        console.error(error);
        alert("Something went wrong.");
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 100);
      }
    };
    debounce(getSuggestions);
  };

  return onChangeHandler;
};

export default useSearch;