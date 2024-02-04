import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import FormularioGastos from './FormularioGastos';
import ListaGastos from './ListaGastos';

function RegistroGastos() {
  const [gastos, setGastos] = useState([]);
  const [mostrarGastos, setMostrarGastos] = useState(false);

  const agregarGasto = (descripcion) => {
    setGastos([...gastos, { id: Date.now().toString(), descripcion }]);
  };

  const verGastos = () => {
    setMostrarGastos(true);
  };

  return (
    <View style={styles.container}>
      <Text>Registro de Gastos</Text>
      <FormularioGastos onAgregarGasto={agregarGasto} />
      <Button title="Ver Gastos" onPress={verGastos} />
      {mostrarGastos && <ListaGastos gastos={gastos} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default RegistroGastos;