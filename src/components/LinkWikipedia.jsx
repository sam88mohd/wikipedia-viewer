import React from "react";
import { Typography, Link } from "@material-ui/core";

const LinkWikipedia = () => {
  const url = "https://en.wikipedia.org/wiki/Special:Random";

  return (
    <Typography variant="h5">
      <Link href={url} target="_blank" rel="noopener">
        Click here for a random article
      </Link>
    </Typography>
  );
};

export default LinkWikipedia;
