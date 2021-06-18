import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

const useStyles = makeStyles({
  root: {
    maxWidth: "400px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    border: "none",
  },

  title: {
    fontSize: "14px",
  },
  pos: {
    marginBottom: "1rem",
  },
});

export default function CommentCard({ text, author, isNegative }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {author}
        </Typography>
        <Typography
          style={{ maxWidth: "300px", margin: "0 auto" }}
          variant="body2"
          component="p"
        >
          {text}
        </Typography>
      </CardContent>
      {isNegative ? (
        <Chip
          style={{ marginBottom: "1rem" }}
          icon={<ThumbDownIcon style={{ margin: "0 1rem" }} />}
          label="Negative review 3/10"
          clickable
          color="secondary"
        />
      ) : (
        <Chip
          style={{ marginBottom: "1rem" }}
          icon={<ThumbUpIcon style={{ margin: "0 1rem" }} />}
          label="Positive review 9/10"
          clickable
          color="primary"
        />
      )}
    </Card>
  );
}
