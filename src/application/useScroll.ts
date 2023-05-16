import { UIEvent } from "react";
import { UseScrollArgs } from "../types/hook";
import useThrottle from "./useThrottle";
import TodoRepository from "../infrastructure/TodoRepository";

const SCROLL_DELAY_TIME = 300;

const useScroll = ({ params, isMore, setSuggestList, setIsScrolling }: UseScrollArgs) => {
  const throttle = useThrottle(SCROLL_DELAY_TIME);
  const repo = TodoRepository;

  const onScrollHandler = ({ currentTarget }: UIEvent<HTMLElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = currentTarget;
    const isAtBottom = scrollTop + clientHeight === scrollHeight;

    if (!isMore.current || !isAtBottom) return;

    const getSuggestions = async () => {
      try {
        if (params.current.q === "") return;

        setIsScrolling(true);
        params.current.page = params.current.page + 1;

        const { page, limit, total, result } = await repo.getTodoSearchList(
          params.current.q,
          params.current.page,
          params.current.limit
        );

        isMore.current = page * limit < total;
        setSuggestList(prev => [...prev, ...result]);
      } catch (error) {
        console.error(error);
        alert("Something went wrong.");
      } finally {
        setIsScrolling(false);
        if (params.current.q === "") setSuggestList([]);
      }
    };
    throttle(getSuggestions);
  };

  return onScrollHandler;
};

export default useScroll;
