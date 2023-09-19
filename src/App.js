import React, { useState } from "react";
import Loginform from "./Loginform";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username === "user" && password === "pass") {
      setLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };
  const handleLogout = () => {
    setLoggedIn(false);
  };
  return (
    <div>
      {loggedIn ? (
        <div>
          <p>Welcome! You have logged in</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Loginform handleLogin={handleLogin} />
      )}
    </div>
  );
};
export default App;
