import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

function ListaGastos ({ gastos }){
  return (
    <View>
      <Text style={styles.sectionTitle}>Gastos Registrados:</Text>
      <FlatList
        data={gastos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text>{item.descripcion}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default ListaGastos;