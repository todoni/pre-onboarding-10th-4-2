import "./SuggestItem.css";
import { SuggestItemProps } from "../../../types/suggest";

export const SuggestItem = ({ text, clickHandler, inputText }: SuggestItemProps) => {
  const regex = new RegExp(`(${inputText})`, "gi");
  const newText = text.split(regex).map((str, idx) => {
    if (inputText.toLowerCase() === str.toLowerCase())
      return (
        <span className="highlight" key={idx}>
          {str}
        </span>
      );
    return str;
  });
  return (
    <li className="suggest-item" onClick={clickHandler}>
      {newText}
    </li>
  );
};
