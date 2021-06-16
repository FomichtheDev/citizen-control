import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    paddingTop: 40,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const AddPlace = ({ authorId, refetchPlaces, setIsOpen }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");

  const disableHandler = () => {
    return name.length < 4 ||
      location.length < 4 ||
      description.length < 4 ||
      img.length < 4
      ? true
      : false;
  };
  const addPlace = async (e) => {
    e.preventDefault();
    const body = {
      authorId,
      name,
      location,
      description,
      img,
    };
    await fetch("http://localhost:5000/place/addPlace", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    setName("");
    setLocation("");
    setDescription("");
    setImg("");
    setIsOpen(false);
    refetchPlaces();
  };

  return (
    <Container component="main" maxWidth="xs" style={{ background: "white" }}>
      <CssBaseline />
      <div className={classes.paper}>
        <div className={classes.avatar}></div>
        <Typography component="h1" variant="h5">
          Please, fill form below
        </Typography>
        <form className={classes.form} noValidate onSubmit={addPlace}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Place name"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="location"
            label="Location"
            name="location"
            autoComplete="location"
            autoFocus
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="description"
            label="Description"
            type="description"
            id="description"
            autoComplete="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            multiline
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="img"
            label="Place img"
            name="img"
            autoComplete="img"
            autoFocus
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
          <Button
            type="submit"
            disabled={disableHandler()}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add place
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default AddPlace;
