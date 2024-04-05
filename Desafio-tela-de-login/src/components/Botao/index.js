import React from "react";
import { Button, Alert } from "react-native";

const Meubotao = (props) => {
  const handlePress = () => {
    Alert.alert("Aqui eu farei o login");
  };

  return (
    <Button
      color="blue"
      title={props.titulo}
      onPress={handlePress} // Correção: chame a função handlePress aqui
    />
  );
};

export default Meubotao;
