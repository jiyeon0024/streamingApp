import React, { useContext } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import PrivateRoute from "../helpers/PrivateRoute";
import MoviesPage from "../pages/MoviesPage";
import App from "../App";
import BookmarksPage from "../pages/BookmarksPage";
import TvPage from "../pages/TvPage";
import { UserContext } from "../context/UserContext";
import LoginPage from "../pages/LoginPage";

const Router = () => {
  const { loggedIn } = useContext(UserContext);
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            loggedIn ? (
              <PrivateRoute>
                <App />
              </PrivateRoute>
            ) : (
              <LoginPage />
            )
          }
        />

        <Route
          path="/moviesPage"
          element={
            <PrivateRoute>
              <MoviesPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/tvPage"
          element={
            <PrivateRoute>
              <TvPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/bookmarkPage"
          element={
            <PrivateRoute>
              <BookmarksPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default Router;
