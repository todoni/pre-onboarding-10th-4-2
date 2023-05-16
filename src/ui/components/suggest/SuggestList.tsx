import "./SuggestList.css";
import { SuggestListProps } from "../../../types/suggest";
import { SuggestItem } from "./SuggestItem";
import { ImSpinner8 } from "react-icons/im";

export const SuggestList = ({
  suggestList,
  clickHandler,
  inputText,
  isMore,
  scrollHandler,
  isScrolling,
}: SuggestListProps) => {
  const isEmpty = suggestList.length === 0;
  const icon = isScrolling ? <ImSpinner8 className="spinner" /> : "...";
  return (
    <ul className="suggestion-wrapper" onScroll={scrollHandler}>
      {isEmpty && <p className="suggest-none">추천 검색어 없음</p>}
      {suggestList.map((item, index) => (
        <SuggestItem key={index} text={item} clickHandler={clickHandler} inputText={inputText} />
      ))}
      {!isEmpty && isMore.current && <div className="more-list">{icon}</div>}
    </ul>
  );
};
