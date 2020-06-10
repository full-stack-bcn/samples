import React, { useContext, useState, useRef } from "react";
import "./Header.css";
import UserContext from "../UserContext";

function Header() {
  const { user, setUser } = useContext(UserContext);
  const [showForm, setShowForm] = useState(false);
  const userRef = useRef(null);

  const _prevDef = (fn) => (e) => {
    e.preventDefault();
    fn();
  };

  const clickLogin = () => setShowForm(true);
  const doLogin = () => {
    setUser(userRef.current.value);
    setShowForm(false);
  }
  const doLogout = () => setUser(null);

  let login;
  if (user) {
    login = (
      <div>
        {user}
        <span className="separator"></span>
        <a onClick={_prevDef(doLogout)} href="#logout">
          logout
        </a>
      </div>
    );
  } else if (showForm) {
    login = (
      <form onSubmit={_prevDef(doLogin)}>
        <input type="text" ref={userRef} />
        <button>login</button>
      </form>
    );
  } else {
    login = (
      <a href="#login" onClick={_prevDef(clickLogin)}>
        login
      </a>
    );
  }

  return (
    <header>
      <div>
        <strong>Reddit</strong>
      </div>
      <div className="spacer"></div>
      {login}
    </header>
  );
}

export default Header;
