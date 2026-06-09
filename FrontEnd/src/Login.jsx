import { useState } from "react";

function Login({ user, onLogin }) {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username === user) {
      // alert("Login Successful");
      onLogin(username);
    } else {
      alert("Invalid Username");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;