import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import SignUp from './SignUp';
import HomePage from './Components/HomePage';

function App() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user exists in localStorage on app load
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
      setIsLoggedIn(true);
    }
  }, []);

  const handleSignup = (username) => {
    localStorage.setItem("user", username);
    setUser(username);
    setIsLoggedIn(false); // Redirect to login after signup
  };

  const handleLogin = (username) => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {isLoggedIn && user ? (
        <HomePage user={user} onLogout={handleLogout} />
      ) : user ? (
        <Login user={user} onLogin={handleLogin} />
      ) : (
        <SignUp onSignup={handleSignup} />
      )}
    </div>
  );
}

export default App;
