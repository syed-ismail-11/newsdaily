import React, { Component } from "react";
import Loading from "./Loading.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img className="my-5" src={Loading} alt="Loading" />
    </div>
  );
};

export default Spinner;
