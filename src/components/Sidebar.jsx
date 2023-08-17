import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { UserContext } from "../../src/context/UserContext";
import { useSearchParams } from "react-router-dom";
import LoginModal from "./LoginModal";
import { Link } from "react-router-dom";
import Img from "./Img";

function Sidebar() {
  const { user, setFiltered, filtered, loggedIn } = useContext(UserContext);
  const [modal, setModal] = useState(false);
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);

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
        <img className="logo" src="src/assets/logo.svg" alt="" />

        <Link to="/">
          <img
            className={click1 ? "click" : "sideIcon"}
            src="src/assets/icon-nav-home.svg"
            alt=""
            onClick={() => {
              clicked();
            }}
          />
        </Link>
        <Link to="/moviesPage">
          <img
            className={click2 ? "click" : "sideIcon"}
            src="src/assets/icon-nav-movies.svg"
            alt=""
            onClick={() => {
              clicked2();
            }}
          />
        </Link>
        <Link to="/tvPage">
          <img
            className={click3 ? "click" : "sideIcon"}
            src="src/assets/icon-nav-tv-series.svg"
            alt=""
            onClick={() => {
              clicked3();
            }}
          />
        </Link>

        <Link to="/bookmarkPage">
          {/* <img
            className={click4 ? "click" : "sideIcon"}
            src="src/assets/icon-nav-bookmark.svg"
            alt=""
            onClick={() => {
              clicked4();
            }}
          /> */}
          <Img
            className={click4 ? "click" : "sideIcon"}
            src="src/assets/icon-nav-bookmark.svg"
            alt=""
            onClick={() => {
              clicked4();
            }}
          ></Img>
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
