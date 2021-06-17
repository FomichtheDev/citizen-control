import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 60,
    backgroundColor: "#1976d2",
    color: "white",
    padding: "0 20px",
    boxSizing: "border-box",
    marginBottom: "10%",
  },
  logo: {
    fontSize: "32px",
  },
  links: {
    width: "20%",
    display: "flex",
    justifyContent: "flex-end",
    fontWeight: "bold",
  },
});

function Header({ isAuth }) {
  console.log("isAuth", isAuth);
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div className={classes.logo}>Citizen-control</div>
      <div className={classes.links}>
        {/* {isAuth && <Link to="/places">Your places</Link>} */}
        {isAuth && <Link to="/logout">Log out</Link>}
        {!isAuth && <Link to="/signin">Sign in</Link>}
        {!isAuth && <Link to="/signup">Sign up</Link>}
      </div>
    </div>
  );
}

export default Header;
