import { makeStyles } from "@material-ui/core/styles";
const PlacePage = ({ name, location, description, img }) => {
  const useStyles = makeStyles(() => ({
    page: {
      display: "flex",
    },
    info: {
      width: "50%",
      backgroundColor: "#000",
    },
    editting: {
      width: "50%",
      backgroundColor: "#bebebe",
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.page}>
      <div className={classes.info}>1</div>
      <div className={classes.editting}>2</div>
    </div>
  );
};

export default PlacePage;
