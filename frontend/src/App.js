import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const [lockedInLoggedInUser, setLockedInLoggedInUser] = useState(null);
  const lockedInUser = JSON.parse(localStorage.getItem("lockedInUser"));

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/register"
            element={
              <Register setLockedInLoggedInUser={setLockedInLoggedInUser} />
            }
          />
          <Route
            path="/login"
            element={
              <Login setLockedInLoggedInUser={setLockedInLoggedInUser} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
