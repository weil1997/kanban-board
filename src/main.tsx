import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import BoardsContextProvider from "./context/BoardsContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <BoardsContextProvider>
        <App />
    </BoardsContextProvider>
);
