// import { FaPlusCircle, FaSpinner } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";
import { BiSearch } from "react-icons/bi";
import { FocusEvent, useEffect, useRef, useState } from "react";
import useFocus from "../../hooks/useFocus";
import { InputTodoProps } from "../../types/todo";
import { SuggestList } from "../suggest/SuggestList";
import useSearch from "../../hooks/useSearch";
import usePost from "../../hooks/usePost";
import { useDebounce } from "../../hooks/useDebounce";
import { CLICK_DELAY_TIME } from "../../constants";

const InputTodo = ({ setTodos }: InputTodoProps) => {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [suggestList, setSuggestList] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const { ref, setFocus } = useFocus();
  const debounce = useDebounce(CLICK_DELAY_TIME);
  const postArgs = {
    setIsLoading,
    setTodos,
    setInputText,
    setIsTyping,
    inputText
  };
  const searchArgs = {
    setIsLoading,
    setInputText,
    setIsTyping,
    setSuggestList
  }
  const handleSearch = useSearch(searchArgs);
  const { handleSubmit, handleItemClick } = usePost(postArgs);

  useEffect(() => {
    setFocus();
  }, [setFocus]);

  const onBlurHandler = ({ target }: FocusEvent<HTMLInputElement>) => {
    const { scrollWidth, clientWidth } = target;
    if (scrollWidth > clientWidth) 
      formRef.current!.style.boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)';
    else formRef.current!.style.boxShadow = 'none';
    debounce(setIsTyping.bind(null, false));
  }

  return (
    <form className="form-container" onSubmit={handleSubmit} ref={formRef}>
      <BiSearch className="search-icon" />
      <div className="input-container">
        <input
          className="input-text"
          placeholder="Add new todo..."
          ref={ref}
          value={inputText}
          onChange={handleSearch}
          onBlur={onBlurHandler}
          disabled={isLoading}
        />
      </div>
      {isLoading && <ImSpinner8 className="spinner" />}
      {isTyping && <SuggestList suggestList={suggestList} clickHandler={handleItemClick} />}
    </form>
  );
};

export default InputTodo;
