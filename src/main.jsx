import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// npm install @reduxjs/toolkit react-redux
import { store } from "./store/store";
import { Provider } from "react-redux";
import { PokemonApp } from './PokemonApp';
import { TodoApp } from './TodoApp';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <TodoApp />
      <PokemonApp />
    </Provider>
  </React.StrictMode>
);
