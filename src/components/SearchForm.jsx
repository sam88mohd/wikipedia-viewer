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

const SearchForm = () => {
  const [showInput, setShowInput] = useState(false);
  const classes = useStyles(showInput);

  return (
    <form noValidate autoComplete="off" className={classes.root}>
      <TextField
        className={classes.textField}
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowInput(false)}>
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
