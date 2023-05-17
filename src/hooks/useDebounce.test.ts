import { renderHook } from "@testing-library/react-hooks";
import useDebounce from "./useDebounce";

describe("useDebounce", () => {
  test("useDebounce는 함수를 리턴한다", () => {
    const { result } = renderHook(() => useDebounce(500));
    const debounce = result.current;

    expect(typeof debounce).toBe("function");
  });
});
