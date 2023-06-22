import React from "react";
import Main from "./ui/pages/Main";
import { SWRConfig } from "swr";
import axios from "axios";
import "./App.css";

const App = () => {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          axios
            .get(url, {
              headers: {
                Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
              },
            })
            .then((res) => res.data),
      }}
    >
      <Main />
    </SWRConfig>
  );
};

export default App;
