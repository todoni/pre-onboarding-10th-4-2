import { renderHook } from "@testing-library/react-hooks";
import { PARAM_OBJ } from "../constants";
import useScroll from "./useScroll";

const setSuggestList = jest.fn();
const setIsScrolling = jest.fn();
const mockProps = {
  params: { current: PARAM_OBJ },
  isMore: { current: false },
  setSuggestList,
  setIsScrolling,
};

describe("useScroll", () => {
  test("useScroll은 함수를 리턴한다.", () => {
    const { result } = renderHook(() => useScroll(mockProps));
    const onScrollHandler = result.current;

    expect(typeof onScrollHandler).toBe("function");
  });
});
