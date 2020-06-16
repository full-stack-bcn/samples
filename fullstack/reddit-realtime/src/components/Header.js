import React, { useContext, useState, useRef } from "react";
import "./Header.css";
import UserContext from "../UserContext";

const _prevDef = (fn) => (e) => {
  e.preventDefault();
  fn();
};

const Logout = ({ user, onClick }) => {
  return (
    <div>
      {user}
      <span className="separator"></span>
      <a onClick={_prevDef(onClick)} href="#logout">
        logout
      </a>
    </div>
  );
};

const Login = ({ onClick }) => {
  return (
    <a href="#login" onClick={_prevDef(onClick)}>
      login
    </a>
  );
};

const LoginForm = ({ onLogin }) => {
  const ref = useRef(null);
  return (
    <form onSubmit={_prevDef(() => onLogin(ref.current.value))}>
      <input type="text" ref={ref} />
      <button>login</button>
    </form>
  );
};

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const [loginForm, showLoginForm] = useState(false);

  const clickLogin = () => showLoginForm(true);
  const doLogout = () => setUser(null);
  const doLogin = (user) => {
    setUser(user);
    showLoginForm(false);
  };

  let login;
  if (user) {
    login = <Logout user={user} onClick={doLogout} />;
  } else if (loginForm) {
    login = <LoginForm onLogin={doLogin} />;
  } else {
    login = <Login onClick={clickLogin} />;
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
};

export default Header;
