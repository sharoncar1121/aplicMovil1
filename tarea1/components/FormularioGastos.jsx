import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function FormularioGastos ({ onAgregarGasto }) {
  const [nuevoGasto, setNuevoGasto] = useState('');

  const agregarGasto = () => {
    if (nuevoGasto.trim() !== '') {
      onAgregarGasto(nuevoGasto);
      setNuevoGasto('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el gasto"
        value={nuevoGasto}
        onChangeText={value => setNuevoGasto(value)}
      />
      <Button title="Agregar Gasto" onPress={agregarGasto} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default FormularioGastos;