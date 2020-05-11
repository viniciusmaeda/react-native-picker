import React, { useState } from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';

export default function App() {

  const [character, setCharacter] = useState("vader");

  return (
    <View style={styles.container}>

      <Text>Selecione um personagem</Text>

      <Picker
        selectedValue={character}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setCharacter(itemValue)}
      >
        <Picker.Item label="Darth Vader" value="vader" />
        <Picker.Item label="Luke Skywalker" value="luke" />
        <Picker.Item label="Princesa Leia Organa" value="leia" />
        <Picker.Item label="Han Solo" value="solo" />
      </Picker>

    <Text>{character}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff',
  },
  picker: {
    height: 50, 
    width: 300,
    borderWidth: 1,
    borderColor: "#000",
  }
});
