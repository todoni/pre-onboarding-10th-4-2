import { renderHook } from "@testing-library/react-hooks";
import useThrottle from "./useThrottle";

describe("useThrottle", () => {
  test("useThrottle은 함수를 리턴한다.", () => {
    const { result } = renderHook(() => useThrottle(500));
    const throttle = result.current;

    expect(typeof throttle).toBe("function");
  });
});
