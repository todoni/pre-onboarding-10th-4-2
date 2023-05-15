import React from "react";
import "./SuggestList.css";
import { SuggestListProps } from "../../types/suggest";
import { SuggestItem } from "./SuggestItem";

export const SuggestList = ({ suggestList, clickHandler, inputText, isMore }: SuggestListProps) => {
const isEmpty = suggestList.length === 0;
/* eslint-disable */
console.log(isMore)
  return (
    <ul className="suggestion-wrapper">
      {isEmpty && <p className="suggest-none">추천 검색어 없음</p>}
      {suggestList.map((item, index) => (
        <SuggestItem key={index} text={item} clickHandler={clickHandler} inputText={inputText} />
      ))}
      {!isEmpty && isMore && <div className="more-list">...</div>}
    </ul>
  );
};
