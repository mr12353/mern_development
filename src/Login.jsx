import { useState } from "react";
import HomePage from "./Components/HomePage";

function Login() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    const storedUsername = localStorage.getItem("user");

    if (storedUsername === username) {
      alert("Login Successful");
      setIsLoggedIn(true);
    } else {
      alert("Invalid Username");
    }
  };

  return (
    isLoggedIn ? (<HomePage />) : (
        <div>
        <h2>Login</h2>
        <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        </div>)
  );
}

export default Login;