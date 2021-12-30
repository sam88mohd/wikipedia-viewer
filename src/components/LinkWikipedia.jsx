import React from "react";
import { Typography, Link } from "@material-ui/core";

const LinkWikipedia = () => {
  const url = "https://en.wikipedia.org/wiki/Special:Random";

  return (
    <Typography variant="">
      <Link href={url}>Click here for a random article</Link>
    </Typography>
  );
};

export default LinkWikipedia;
