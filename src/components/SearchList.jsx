import {
  List,
  ListItem,
  ListItemText,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    border: "1px solid black",
    marginTop: 10,
  },
}));

const SearchList = ({ data }) => {
  const classes = useStyles();

  return (
    <div>
      <List className={classes.root}>
        {data &&
          data.query.search.map((d) => (
            <ListItem
              button
              component="a"
              href={`https://en.wikipedia.org/?curid=${d.pageid}`}
              target="_blank"
              key={d.pageid}
              className={classes.listItem}
            >
              <ListItemText
                primary={d.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      dangerouslySetInnerHTML={{ __html: d.snippet }}
                    />
                  </React.Fragment>
                }
              />
            </ListItem>
          ))}
      </List>
    </div>
  );
};

export default SearchList;
