import { useState } from "react";
import Login from "./Login";

function Signup() {
  const [username, setUsername] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignup = () => {
    if(username === ""){
        alert("Username cannot be empty");
    }else {
        localStorage.setItem("user", username);
        alert("Signup successful");
        setUsername("");
        setIsSignedUp(true);
    }
  };


  return (
    isSignedUp ? (<Login />) : (
    <div>
      <h2>Signup</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>
    </div>)
  );
}

export default Signup;