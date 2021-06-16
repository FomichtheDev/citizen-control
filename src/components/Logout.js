import React, { useEffect } from "react";
import { Redirect } from "react-router";

function Logout({ setIsAuth }, e) {
  useEffect(() => {
    // setIsAuth(false);
    localStorage.removeItem("userId");
    window.location.reload();
  }, []);
  return <Redirect to="/signin" />;
}

export default Logout;
