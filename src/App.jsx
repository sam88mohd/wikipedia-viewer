import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4">Wikipedia Viewer</Typography>
    </div>
  );
};

export default App;
