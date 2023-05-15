import React from "react";
import "./SuggestItem.css";
import { SuggestItemProps } from "../../types/suggest";

export const SuggestItem = ({ text, clickHandler }: SuggestItemProps) => {
  return <li className="suggest-item" onClick={clickHandler}>{text}</li>;
};
