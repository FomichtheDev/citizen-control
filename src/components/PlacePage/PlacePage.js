import { Button, TextareaAutosize, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CommentCard from "../CommentCard";
import FaceIcon from "@material-ui/icons/Face";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const PlacePage = () => {
  const [open, setOpen] = useState(false);

  const [editedName, setEditedName] = useState("");
  const [editedAddress, setEditedAddress] = useState("");
  const [editedImage, setEditedImage] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [comments, setComments] = useState([]);
  console.log(comments);

  const handleName = (e) => {
    setEditedName(e.target.value);
  };
  const handleAddress = (e) => {
    setEditedAddress(e.target.value);
  };
  const handleImage = (e) => {
    setEditedImage(e.target.value);
  };
  const handleDescription = (e) => {
    setEditedDescription(e.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [place, setPlace] = useState([{}]);
  const { id } = useParams();
  console.log("ID", id);

  const editPlace = async () => {
    const body = {
      _id: id,
      img: editedImage,
      name: editedName,
      location: editedAddress,
      description: editedDescription,
    };
    const response = await fetch(`http://localhost:5000/place/editplace`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const json = await response.json();
    setPlace(json);
    window.location.reload();
  };

  useEffect(() => {
    const getPlace = async () => {
      const body = {
        id,
      };
      const response = await fetch(`http://localhost:5000/place/id`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const json = await response.json();
      setPlace(json);
    };
    const getComments = async () => {
      const body = {
        placeId: id,
      };
      const response = await fetch(
        "http://localhost:5000/comment/getcomments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      const json = await response.json();

      setComments(json);
    };

    getPlace();
    getComments();
  }, [open]);

  const { description, img, location, name } = place[0];

  const useStyles = makeStyles(() => ({
    img: {
      height: "30vh",
      backgroundImage: `url(${img})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      marginBottom: "2rem",
      position: "relative",
    },
    address: {
      position: "absolute",
      top: "110%",
      left: "80%",
    },
    name: {
      marginBottom: "2rem",
    },
    commentsWrapper: {
      width: "80vw",
      margin: "0 auto",
      marginBottom: "10vh",
    },
  }));
  const classes = useStyles();
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Обновите данные про свое заведение
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Введите новые данные про свое заведение в форму ниже, чтобы
            пользователи всегда видели только актуальные данные про вас!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Название"
            fullWidth
            defaultValue={editedName}
            onChange={handleName}
          />
          <TextField
            margin="dense"
            id="address"
            label="Ваш адрес"
            fullWidth
            defaultValue={editedAddress}
            onChange={handleAddress}
          />
          <TextField
            margin="dense"
            id="image"
            label="URL изображения"
            fullWidth
            defaultValue={editedImage}
            onChange={handleImage}
          />
          <TextareaAutosize
            margin="dense"
            id="description"
            label="Описание"
            fullWidth
            defaultValue={editedDescription}
            style={{ minHeight: "5vh" }}
            onChange={handleDescription}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Отменить
          </Button>
          <Button
            onClick={() => {
              editPlace();
              handleClose();
            }}
            color="primary"
          >
            Обновить
          </Button>
        </DialogActions>
      </Dialog>
      <div className={classes.img}>
        <Typography variant="h5" className={classes.address}>
          {location}
        </Typography>
        <Button
          style={{
            height: "40px",
            position: "absolute",
            top: "110%",
            left: "5%",
          }}
          variant="contained"
          color="primary"
          onClick={handleClickOpen}
        >
          <EditIcon style={{ marginRight: "5px" }} />
          Edit info
        </Button>
      </div>
      <Typography color="textSecondary" variant="h3" className={classes.name}>
        {name}
      </Typography>
      <Typography
        color="textSecondary"
        variant="subtitle2"
        component="p"
        className={classes.name}
        style={{ width: "75vw", margin: "0 auto", marginBottom: "1rem" }}
      >
        {description}
      </Typography>
      <div className={classes.commentsWrapper}>
        <Typography
          style={{ textAlign: "start" }}
          color="textPrimary"
          variant="h5"
          className={classes.name}
        >
          Последние отклики{" "}
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-end",
          }}
        >
          {comments.map((comment) => {
            return (
              <CommentCard text={comment.content} author={comment.authorId} />
            );
          })}

          <Button
            style={{ height: "40px" }}
            variant="contained"
            color="primary"
          >
            View all
          </Button>
        </div>
      </div>
    </>
  );
};

export default PlacePage;
