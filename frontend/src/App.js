import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import HomePage from "./components/Homepage";
import Register from "./components/Register";
import Login from "./components/Login";
import DealerHomePage from "./components/DealerHomePage";
import { Navbar } from "./components/Navbar";
import { DEALERS_API } from "./constants/constants";
import axios from "axios";

function App() {
  const [loggedInLockedInUser, setLoggedInLockedInUser] = useState(null);
  const [loginOpen, setLoginOpen] = useState(false);
  const [userDealers, setUserDealers] = useState(null);
  const [targetDealer, setTargetDealer] = useState(null);
  const config = loggedInLockedInUser && {
    headers: {
      Authorization: `Bearer ${loggedInLockedInUser.token}`,
    },
  };

  targetDealer && console.log(targetDealer.dealerName);

  const lockedInUser = JSON.parse(localStorage.getItem("lockedInUser"));

  const getUserDealers = async () => {
    const response = await axios.get(DEALERS_API, config);

    if (response) {
      setUserDealers(response.data);
    }
  };

  useEffect(() => {
    lockedInUser && setLoggedInLockedInUser(lockedInUser);
  }, []);

  useEffect(() => {
    loggedInLockedInUser && getUserDealers();
  }, [loggedInLockedInUser]);

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
                <HomePage
                  loggedInLockedInUser={loggedInLockedInUser}
                  userDealers={userDealers}
                  setTargetDealer={setTargetDealer}
                  targetDealer={targetDealer}
                />
              ) : (
                <Landing />
              )
            }
          />
          <Route
            path="dealer/:id"
            element={<DealerHomePage targetDealer={targetDealer} />}
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
