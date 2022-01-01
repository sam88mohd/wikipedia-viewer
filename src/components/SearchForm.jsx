import {
  IconButton,
  InputAdornment,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { Close, Search } from "@material-ui/icons";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textField: {
    margin: theme.spacing(1),
    display: (showInput) => {
      if (!showInput) {
        return "none";
      } else {
        return "block";
      }
    },
  },
  icon: {
    marginBottom: 10,
    display: (showInput) => {
      if (showInput) {
        return "none";
      } else {
        return "block";
      }
    },
  },
}));

const SearchForm = ({ handleSubmit, search, setSearch }) => {
  const [showInput, setShowInput] = useState(false);

  const classes = useStyles(showInput);

  const handleCloseIcon = () => {
    setShowInput(false);
    setSearch("");
  };

  return (
    <form
      noValidate
      autoComplete="off"
      className={classes.root}
      onSubmit={handleSubmit}
    >
      <TextField
        className={classes.textField}
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleCloseIcon}>
                <Close />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <IconButton onClick={() => setShowInput(true)} className={classes.icon}>
        <Search size="large" />
      </IconButton>
      <Typography
        variant="caption"
        color="textSecondary"
        className={classes.icon}
      >
        Click icon to search
      </Typography>
    </form>
  );
};

export default SearchForm;
