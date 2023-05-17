import { ImSpinner8 } from "react-icons/im";
import { BiSearch } from "react-icons/bi";
import { SuggestList } from "../../suggest/SuggestList";
import { InputTodoUIProps } from "../../../types/todo";
import useFocus from "../../../hooks/useFocus";

const InputTodoUI = ({
  isLoading,
  suggestList,
  isTyping,
  isScrolling,
  handleChange,
  handleSubmit,
  handleItemClick,
  handleScroll,
  formRef,
  inputText,
  isMore,
}: InputTodoUIProps) => {
  const { ref } = useFocus();

  return (
    <form className="form-container" onSubmit={handleSubmit} ref={formRef}>
      <BiSearch className="search-icon" />
      <div className="input-container">
        <input
          className="input-text"
          placeholder="Add new todo..."
          ref={ref}
          value={inputText}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>
      {isLoading && <ImSpinner8 className="spinner" />}
      {isTyping && (
        <SuggestList
          suggestList={suggestList}
          clickHandler={handleItemClick}
          inputText={inputText}
          isMore={isMore}
          scrollHandler={handleScroll}
          isScrolling={isScrolling}
        />
      )}
    </form>
  );
};

export default InputTodoUI;
