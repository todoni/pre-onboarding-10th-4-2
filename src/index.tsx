import App from "./App";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { TodoProvider } from "./application/TodoProvider";

ReactDOM.render(
  <StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </StrictMode>,
  document.getElementById("root")
);
