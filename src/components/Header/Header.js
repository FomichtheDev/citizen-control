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
    padding: "0 3%",
    boxSizing: "border-box",
  },
  logo: {
    fontSize: "32px",
  },
  links: {
    width: "15%",
    display: "flex",
    justifyContent: "flex-end",
    fontWeight: "bold",
  },
  link: {
    marginLeft: "30px",
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
        {!isAuth && (
          <Link className={classes.link} to="/signin">
            Sign in
          </Link>
        )}
        {!isAuth && (
          <Link className={classes.link} to="/signup">
            Sign up
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
