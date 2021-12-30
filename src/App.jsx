import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import LinkWikipedia from "./components/LinkWikipedia";
import SearchForm from "./components/SearchForm";

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
      <Typography variant="h4" component="h1" gutterBottom>
        Wikipedia Viewer
      </Typography>
      <LinkWikipedia />
      <SearchForm />
    </div>
  );
};

export default App;
