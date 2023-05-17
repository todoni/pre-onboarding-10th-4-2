import "./InputTodo.css";
import { useEffect, useRef, useState } from "react";
import useFocus from "../../../hooks/useFocus";
import { InputTodoProps } from "../../../types/todo";
import useSearch from "../../../hooks/useSearch";
import usePost from "../../../hooks/usePost";
import { blurInput } from "../../../utils";
import { PARAM_OBJ } from "../../../constants";
import useScroll from "../../../hooks/useScroll";
import InputTodoUI from "./InputTodo.presenter";

const InputTodo = ({ setTodos }: InputTodoProps) => {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [suggestList, setSuggestList] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const params = useRef(PARAM_OBJ);
  const isMore = useRef<boolean>(false);

  const { ref, setFocus } = useFocus();
  const postArgs = {
    setIsLoading,
    setTodos,
    setInputText,
    setIsTyping,
    inputText,
    ref,
    formRef,
  };
  const searchArgs = {
    setIsLoading,
    setInputText,
    setIsTyping,
    setSuggestList,
    params,
    isMore,
  };
  const scrollArgs = {
    params,
    isMore,
    setSuggestList,
    setIsScrolling,
  };
  const handleChange = useSearch(searchArgs);
  const { handleSubmit, handleItemClick } = usePost(postArgs);
  const handleScroll = useScroll(scrollArgs);

  const handleBlur = ({ target }: Event) => {
    if ((target as HTMLElement).matches(".input-text")) return;
    setIsTyping(false);

    if (ref.current) {
      ref.current.blur();
      const focusRef = ref;
      blurInput(focusRef, formRef);
    }
  };

  useEffect(() => {
    setFocus();
    document.addEventListener("click", handleBlur);
  }, [setFocus]);

  return (
    <InputTodoUI
      isLoading={isLoading}
      suggestList={suggestList}
      isTyping={isTyping}
      isScrolling={isScrolling}
      formRef={formRef}
      inputText={inputText}
      isMore={isMore}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleItemClick={handleItemClick}
      handleScroll={handleScroll}
    />
  );
};

export default InputTodo;
