import "./SuggestItem.css";

interface SuggestItemProps {
  index: number;
  content: string;
  currentQuery: string;
}

const SuggestItem = ({ index, content, currentQuery }: SuggestItemProps) => {
  const regex = new RegExp(`(${currentQuery})`, "gi");
  const newText = content.split(regex).map((str, idx) => {
    if (currentQuery.toLowerCase() === str.toLowerCase())
      return (
        <span className="highlight" key={idx}>
          {str}
        </span>
      );
    return str;
  });
  return (
    <li className="suggest-item">
      {index}
      {newText}
    </li>
  );
};

export default SuggestItem;
