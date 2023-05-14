// import { FaPlusCircle, FaSpinner } from "react-icons/fa";
// import { ImSpinner8 } from "react-icons/im";
import { BiSearch } from "react-icons/bi";
import { ChangeEvent, FormEvent, useCallback, useEffect, useRef, useState } from "react";

import { createTodo } from "../api/todo";
import useFocus from "../hooks/useFocus";
import { InputTodoProps } from "../types/todo";
import { SuggestList } from "./SuggestList";
import { SuggestParams } from "../types/suggest";
import { getSuggestList } from "../api/suggest";
import { SHOW_LIMIT, SHOW_PAGE } from "../constants";

const InputTodo = ({ setTodos }: InputTodoProps) => {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [suggestList, setSuggestList] = useState<string[]>([]);
  const { ref, setFocus } = useFocus();
  const paramObj: SuggestParams = {
    q: '',
    page: SHOW_PAGE,
    limit: SHOW_LIMIT
  };
  const params = useRef(paramObj);

  useEffect(() => {
    setFocus();
  }, [setFocus]);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      try {
        e.preventDefault();
        setIsLoading(true);

        const trimmed = inputText.trim();
        if (!trimmed) {
          return alert("Please write something");
        }

        const newItem = { title: trimmed };
        const { data } = await createTodo(newItem);

        if (data) {
          return setTodos((prev) => [...prev, data]);
        }
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
    getSuggestions();
  };

  const handleSuggestionClick = () => {

  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <BiSearch className="search-icon" />
      <input
        className="input-text"
        placeholder="Add new todo..."
        ref={ref}
        value={inputText}
        onChange={onChangeHandler}
        disabled={isLoading}
      />
      {/* {!isLoading ? (
        <button className="input-submit" type="submit">
          <FaPlusCircle className="btn-plus" />
        </button>
      ) : (
        <FaSpinner className="spinner" />
      )} */}
      <SuggestList suggestList={suggestList} />
    </form>
  );
};

export default InputTodo;
