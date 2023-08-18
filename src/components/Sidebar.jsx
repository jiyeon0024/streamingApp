import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { UserContext } from "../../src/context/UserContext";
import { useSearchParams } from "react-router-dom";
import LoginModal from "./LoginModal";
import { Link } from "react-router-dom";
import { MoviesContext } from "../context/MoviesContext";

function Sidebar() {
  const { user } = useContext(UserContext);
  const [modal, setModal] = useState(false);
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);
  const { setFiltered, data } = useContext(MoviesContext);

  function checkModal() {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  }

  function clicked() {
    if (click1) {
      setClick1(false);
    } else {
      setClick1(true);
    }
  }

  function clicked2() {
    if (click2) {
      setClick2(false);
    } else {
      setClick2(true);
    }
  }

  function clicked3() {
    if (click3) {
      setClick3(false);
    } else {
      setClick3(true);
    }
  }

  function clicked4() {
    if (click4) {
      setClick4(false);
    } else {
      setClick4(true);
    }
  }

  return (
    <div className="sideBar">
      <div className="navIconBox">
        <img className="logo" src="assets/assets/logo.svg" alt="" />

        <Link to="/">
          <img
            className={click1 ? "click" : "sideIcon"}
            src="assets/assets/icon-nav-home.svg"
            alt=""
            onClick={() => {
              setFiltered(data);
              clicked();
            }}
          />
        </Link>
        <Link to="/moviesPage">
          <img
            className={click2 ? "click" : "sideIcon"}
            src="assets/assets/icon-nav-movies.svg"
            alt=""
            onClick={() => {
              setFiltered(data);
              clicked2();
            }}
          />
        </Link>
        <Link to="/tvPage">
          <img
            className={click3 ? "click" : "sideIcon"}
            src="assets/assets/icon-nav-tv-series.svg"
            alt=""
            onClick={() => {
              setFiltered(data);
              clicked3();
            }}
          />
        </Link>

        <Link to="/bookmarkPage">
          <img
            className={click4 ? "click" : "sideIcon"}
            src="assets/assets/icon-nav-bookmark.svg"
            alt=""
            onClick={() => {
              setFiltered(data);
              clicked4();
            }}
          />
        </Link>
      </div>

      <div className="userIconBox">
        <img
          className="userIcon"
          src={user.image}
          alt=""
          onClick={checkModal}
        />
      </div>
      {modal ? <LoginModal></LoginModal> : null}
    </div>
  );
}

export default Sidebar;
