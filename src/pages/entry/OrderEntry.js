import React from "react";
import Options from "./Options";

const OrderEntry = () => {
  return (
    <>
      <Options optionType="scopes" />
      <Options optionType="toppings" />
    </>
  );
};

export default OrderEntry;
