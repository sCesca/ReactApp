import React from "react";
import { View, Text } from "react-native";
import { ContadorBotoes } from "./ContadorBotoes";

export const ContadorV2 = () => {
  const [num, setNum] = React.useState(0);

  const inc = () => setNum(num + 1);

  const dec = () => setNum(num - 1);

  return (
    <View>
      <Text style={{ fontSize: 12, color: "black" }}>ContadorV2</Text>
      <ContadorDisplay num={num} />
      <ContadorBotoes inc={inc} dec={dec} />
    </View>
  );
};
