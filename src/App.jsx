import { makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import LinkWikipedia from "./components/LinkWikipedia";
import SearchForm from "./components/SearchForm";
import SearchList from "./components/SearchList";

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
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");

  const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${search}&format=json&origin=*`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(url);
    if (res.ok) {
      const d = await res.json();
      setData(d);
    }
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h1" gutterBottom>
        Wikipedia Viewer
      </Typography>
      <LinkWikipedia />
      <SearchForm
        handleSubmit={handleSubmit}
        search={search}
        setSearch={setSearch}
      />
      <SearchList data={data} />
    </div>
  );
};

export default App;
