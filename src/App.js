import "./App.css";
import { Route, Switch } from "react-router";
import Header from "./components/Header/Header";
import React, { useState } from "react";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Logout from "./components/Logout";
import PublicPlaces from "./components/PublicPlaces/PublicPlaces";

function App() {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("userId"));
  console.log("isAuth", isAuth);
  const [userId, setUserId] = useState("");
  // const isUserAuth = localStorage.getItem('userId')
  return (
    <div className="App">
      <Header isAuth={isAuth} />
      <Switch>
        <Route path="/places">
          <PublicPlaces userId={userId} />
        </Route>
        {isAuth ? (
          <Route path="/logout">
            <Logout setIsAuth={setIsAuth} />
          </Route>
        ) : (
          <div>
            <Route path="/signin">
              <SignIn setIsAuth={setIsAuth} setUserId={setUserId} />
            </Route>
            <Route path="/signup">
              <SignUp setIsAuth={setIsAuth} setUserId={setUserId} />
            </Route>
          </div>
        )}
      </Switch>
    </div>
  );
}

export default App;
