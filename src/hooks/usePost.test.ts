import { renderHook } from "@testing-library/react-hooks";
import usePost from "./usePost";

const setIsLoading = jest.fn();
const setInputText = jest.fn();
const setIsTyping = jest.fn();
const setTodos = jest.fn();
const mockProps = {
  setIsLoading,
  setInputText,
  setIsTyping,
  setTodos,
  inputText: "test",
  ref: {
    current: document.createElement("input"),
  },
  formRef: {
    current: document.createElement("form"),
  },
};

describe("usePost", () => {
  test("usePost는 객체를 리턴한다. {handleSubmit, handleItemClick}", () => {
    const { result } = renderHook(() => usePost(mockProps));
    const { handleSubmit, handleItemClick } = result.current;

    expect(typeof handleSubmit).toBe("function");
    expect(typeof handleItemClick).toBe("function");
  });
});
