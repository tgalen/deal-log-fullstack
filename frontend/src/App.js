import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import HomePage from "./components/Homepage";
import Register from "./components/Register";
import Login from "./components/Login";
import { Navbar } from "./components/Navbar";

function App() {
  const [loggedInLockedInUser, setLoggedInLockedInUser] = useState(null);
  const [loginOpen, setLoginOpen] = useState(false);

  const lockedInUser = JSON.parse(localStorage.getItem("lockedInUser"));

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          loggedInLockedInUser={loggedInLockedInUser}
          setLoggedInLockedInUser={setLoggedInLockedInUser}
          loginOpen={loginOpen}
          setLoginOpen={setLoginOpen}
        />
        <Routes>
          <Route
            path="/"
            element={
              loggedInLockedInUser ? (
                <HomePage loggedInLockedInUser={loggedInLockedInUser} />
              ) : (
                <Landing />
              )
            }
          />
          <Route
            path="/register"
            element={
              <Register setLoggedInLockedInUser={setLoggedInLockedInUser} />
            }
          />
          <Route
            path="/login"
            element={
              <Login setLoggedInLockedInUser={setLoggedInLockedInUser} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
