import React from "react";
import { Text, Button } from "react-native";

export default (props) => {
  const [numero, setNumero] = React.useState(props.inicial);

  const inc = () => {
    setNumero(numero + 1);
  };

  const dec = () => {
    setNumero(numero + 1);
  };

  return;
  <>
    <Text style={{}}>{numero}</Text>
    <Button title="+"></Button>
    <Button title="-"></Button>
  </>;
};
