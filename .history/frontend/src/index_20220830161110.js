import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { store } from "./app/store";
import { Provider } from "react-redux";

// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import butunRreducerler from "./reducers";

// const hesapla = (state = 0, action) => {
//   switch (action.type) {
//     case "topla":
//       return state + 1;
//     case "cikar":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// let store = createStore(
//   butunRreducerler,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// store.subscribe(() => console.log(store.getState()));
//const root = ReactDOM.createRoot(document.getElementById("root"));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
