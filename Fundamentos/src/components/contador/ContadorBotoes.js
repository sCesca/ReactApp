import Button from "react-native";

export const ContadorBotoes = (props) => {
  return (
    <>
      <Button title={"+"} onPress={props.inc}>
        INC
      </Button>
      <Button title={"-"} onPress={props.dec}>
        DEC
      </Button>
    </>
  );
};
