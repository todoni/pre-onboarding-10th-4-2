import React from "react";
import "./SuggestItem.css";
import { SuggestItemProps } from "../../types/suggest";

export const SuggestItem = ({ text }: SuggestItemProps) => {
  return <li className="suggest-item">{text}</li>;
};
