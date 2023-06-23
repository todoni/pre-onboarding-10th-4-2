import React from "react";

interface TodoRecommendationsProps {
  inputText: string;
  recommendedText: string[];
}

const TodoRecommendations = ({
  inputText,
  recommendedText,
}: TodoRecommendationsProps) => {
  return (
    <div className="recommendations-container">
      <ul className="recommendations-list">
        {recommendedText.map((text) => (
          <li
            key={text}
            className={text.includes(inputText) ? "highlight" : ""}
          >
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoRecommendations;
