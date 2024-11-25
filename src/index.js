import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // App.js 연결

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root") // index.html의 <div id="root"></div>에 렌더링
);
