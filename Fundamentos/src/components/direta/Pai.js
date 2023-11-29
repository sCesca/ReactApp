import React from "react";
import { View, Text } from "react-native";
import Filho from "./Filho";

export default (props) => {
  let x = 13;
  let y = 100;
  return (
    <>
      <Filho a={x + 7} b={y}></Filho>
      <Filho a={x + 70} b={y + 100}></Filho>
    </>
  );
};
