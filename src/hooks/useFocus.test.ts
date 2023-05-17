import { renderHook } from "@testing-library/react-hooks";
import useFocus from "./useFocus";

describe("useFocus", () => {
  test("useFocus는 객체를 리턴한다. {ref, setFocus}", () => {
    const { result } = renderHook(() => useFocus());
    const { ref, setFocus } = result.current;

    expect(ref.current).toBe(null);
    expect(typeof setFocus).toBe("function");
  });
});
