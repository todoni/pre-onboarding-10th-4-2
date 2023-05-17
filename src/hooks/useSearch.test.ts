import { renderHook } from "@testing-library/react-hooks";
import { PARAM_OBJ } from "../constants";
import useSearch from "./useSearch";

const setInputText = jest.fn();
const setIsLoading = jest.fn();
const setIsTyping = jest.fn();
const setSuggestList = jest.fn();
const mockProps = {
  setInputText,
  setIsLoading,
  setIsTyping,
  setSuggestList,
  params: { current: PARAM_OBJ },
  isMore: { current: false },
};

describe("useSearch", () => {
  test("useSearch는 함수를 리턴한다.", () => {
    const { result } = renderHook(() => useSearch(mockProps));
    const onChangeHandler = result.current;

    expect(typeof onChangeHandler).toBe("function");
  });
});
