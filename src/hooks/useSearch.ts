import { ChangeEvent } from "react";
import { INITIAL_PAGE, INPUT_DELAY_TIME } from "../constants";
import todoRepository from "../infrastructure/TodoRepository";
import { UseSearchArgs } from "../types/hook";
import { useDebounce } from "./useDebounce";

const useSearch = ({
  setInputText,
  setIsLoading,
  setIsTyping,
  setSuggestList,
  params,
  isMore,
}: UseSearchArgs) => {
  const debounce = useDebounce(INPUT_DELAY_TIME);
  const repo = todoRepository;

  const onChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;

    setIsTyping(true);
    params.current.q = value;
    params.current.page = INITIAL_PAGE;
    setInputText(value);
    if (value.trim() === "") {
      setSuggestList([]);
      return;
    }

    const getSuggestions = async () => {
      try {
        if (params.current.q === "") return;

        setIsLoading(true);

        const { page, limit, total, result } = await repo.getTodoSearchList(
          params.current.q,
          params.current.page,
          params.current.limit
        );

        isMore.current = page * limit < total;
        setSuggestList(result);
      } catch (error) {
        console.error(error);
        alert("Something went wrong.");
      } finally {
        setIsLoading(false);
      }
    };
    debounce(getSuggestions);
  };

  return onChangeHandler;
};

export default useSearch;
