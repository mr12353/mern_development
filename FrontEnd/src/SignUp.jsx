import { useState } from "react";

function Signup({ onSignup }) {
  const [username, setUsername] = useState("");

  const handleSignup = () => {
    if(username === ""){
        alert("Username cannot be empty");
    } else {
        // alert("Signup successful");
        onSignup(username);
        setUsername("");
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;