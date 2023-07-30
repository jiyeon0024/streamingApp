import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { UserContext } from "../../src/context/UserContext";
import { useSearchParams } from "react-router-dom";
import LoginModal from "./LoginModal";

function Sidebar() {
  const { user } = useContext(UserContext);
  const [modal, setModal] = useState(false);

  function checkModal() {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  }
  return (
    <div className="sideBar">
      <div className="navIconBox">
        <img className="logo" src="src/assets/logo.svg" alt="" />
        <img className="sideIcon" src="src/assets/icon-nav-home.svg" alt="" />
        <img className="sideIcon" src="src/assets/icon-nav-movies.svg" alt="" />
        <img
          className="sideIcon"
          src="src/assets/icon-nav-tv-series.svg"
          alt=""
        />
        <img
          className="sideIcon"
          src="src/assets/icon-nav-bookmark.svg"
          alt=""
        />
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
