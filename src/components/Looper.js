import React from "react";
import compose from "recompose/compose";
import Track from "./Track";

const Looper = ({ ...props }) => (
  <div>
    <Track />
    <Track />
    <Track />
    <Track />
    <Track />
    <Track />
    <Track />
    <Track />
    <Track />
  </div>
);

export default compose()(Looper);
