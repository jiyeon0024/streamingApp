import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, Routes, HashRouter, RouterProvider } from "react-router-dom";

import PrivateRoute from "./helpers/PrivateRoute.jsx";
import UserContextProvider, { UserContext } from "./context/UserContext.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { MoviesContextProvider } from "./context/MoviesContext.jsx";
import MoviesPage from "./pages/MoviesPage.jsx";
import TvPage from "./pages/TvPage.jsx";
import BookmarksPage from "./pages/BookmarksPage.jsx";
import MovieCard from "./components/MovieCard.jsx";
import Router from "./router/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <MoviesContextProvider>
        <Router />
      </MoviesContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
