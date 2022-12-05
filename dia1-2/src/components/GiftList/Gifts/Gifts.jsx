import React from "react";
import { Gift } from "./GiftsStyle";

const Gifts = ({ gift }) => {
  return (
    <>
      <Gift>{gift.name}</Gift>
    </>
  );
};

export default Gifts;
