import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, Routes, HashRouter, RouterProvider } from "react-router-dom";

import PrivateRoute from "./helpers/PrivateRoute.jsx";
import UserContextProvider from "./context/UserContext.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { MoviesContextProvider } from "./context/MoviesContext.jsx";
import MoviesPage from "./pages/MoviesPage.jsx";
import TvPage from "./pages/TvPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <HashRouter>
        <MoviesContextProvider>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <App />
                </PrivateRoute>
              }
            />
            <Route path="/loginPage" element={<LoginPage />} />
            <Route path="/moviesPage" element={<MoviesPage />} />
            <Route path="/tvPage" element={<TvPage />} />
          </Routes>
        </MoviesContextProvider>
      </HashRouter>
    </UserContextProvider>
  </React.StrictMode>
);
