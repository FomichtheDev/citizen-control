import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "25%",
    flex: "0 1 calc((100% / 4) - 1.5rem)",
  },
  media: {
    height: 140,
  },
});

export default function PlaceCard({ name, description, location, img }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography
            style={{ fontSize: 14 }}
            gutterBottom
            variant="h7"
            component="h2"
          >
            {location}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <NavLink style={{ color: "#000" }} to="/placeInfo">
            Learn More
          </NavLink>
        </Button>
      </CardActions>
    </Card>
  );
}
