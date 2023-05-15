// import { FaPlusCircle, FaSpinner } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";
import { BiSearch } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import useFocus from "../../hooks/useFocus";
import { InputTodoProps } from "../../types/todo";
import { SuggestList } from "../suggest/SuggestList";
import useSearch from "../../hooks/useSearch";
import usePost from "../../hooks/usePost";
import { blurInput } from "../../utils";

const InputTodo = ({ setTodos }: InputTodoProps) => {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [suggestList, setSuggestList] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const { ref, setFocus } = useFocus();
  const postArgs = {
    setIsLoading,
    setTodos,
    setInputText,
    setIsTyping,
    inputText,
    ref,
    formRef
  };
  const searchArgs = {
    setIsLoading,
    setInputText,
    setIsTyping,
    setSuggestList
  }
  const { onChangeHandler, isMore } = useSearch(searchArgs);
  const { handleSubmit, handleItemClick } = usePost(postArgs);

  const handleBlur = ({ target }: Event) => {
    if ((target as HTMLElement).matches('.input-text')) return;
    setIsTyping(false);
    ref.current!.blur();
    blurInput(ref, formRef);
  };

  useEffect(() => {
    setFocus();
    document.addEventListener('click', handleBlur);
  }, [setFocus]);

  return (
    <form className="form-container" onSubmit={handleSubmit} ref={formRef}>
      <BiSearch className="search-icon" />
      <div className="input-container">
        <input
          className="input-text"
          placeholder="Add new todo..."
          ref={ref}
          value={inputText}
          onChange={onChangeHandler}
          disabled={isLoading}
        />
      </div>
      {isLoading && <ImSpinner8 className="spinner" />}
      {isTyping && <SuggestList suggestList={suggestList} clickHandler={handleItemClick} inputText={inputText} isMore={isMore.current} />}
    </form>
  );
};

export default InputTodo;
