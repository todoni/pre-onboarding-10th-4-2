// import { FaPlusCircle, FaSpinner } from "react-icons/fa";
// import { ImSpinner8 } from "react-icons/im";
import { BiSearch } from "react-icons/bi";
import { FormEvent, useCallback, useEffect, useState } from "react";

import { createTodo } from "../api/todo";
import useFocus from "../hooks/useFocus";
import { InputTodoProps } from "../types/todo";
import { SuggestList } from "./SuggestList";
import useSearch from "../hooks/useSearch";
// import useToggle from "../utils/useToggle";

const InputTodo = ({ setTodos }: InputTodoProps) => {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [suggestList, setSuggestList] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const { ref, setFocus } = useFocus();
  const handleSearch = useSearch(setSuggestList, setInputText, setIsTyping);

  useEffect(() => {
    setFocus();
  }, [setFocus]);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      try {
        e.preventDefault();
        setIsLoading(true);

        const trimmed = inputText.trim();
        if (!trimmed) return alert("Please write something");

        const newItem = { title: trimmed };
        const { data } = await createTodo(newItem);

        if (data) return setTodos((prev) => [...prev, data]);
      } catch (error) {
        console.error(error);
        alert("Something went wrong.");
      } finally {
        setInputText("");
        setIsLoading(false);
      }
    },
    [inputText, setTodos],
  );

  const onBlurHandler = () => setIsTyping(false);

  // const handleSuggestionClick = (e: MouseEvent<HTMLButtonElement>) => {
  //   setInputText('');
  // };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <BiSearch className="search-icon" />
      <input
        className="input-text"
        placeholder="Add new todo..."
        ref={ref}
        value={inputText}
        onChange={handleSearch}
        onBlur={onBlurHandler}
        disabled={isLoading}
      />
      {/* {!isLoading ? (
        <button className="input-submit" type="submit">
          <FaPlusCircle className="btn-plus" />
        </button>
      ) : (
        <FaSpinner className="spinner" />
      )} */}
      {isTyping && <SuggestList suggestList={suggestList} />}
    </form>
  );
};

export default InputTodo;
