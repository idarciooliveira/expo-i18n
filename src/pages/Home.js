import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Pagina Inicial</Text>
      <TouchableHighlight
        onPress={() => navigation.navigate('Detail')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Detail</Text>
      </TouchableHighlight>
      <Text style={styles.text}> Seja BemVindo a i18 Tradutor de Texto</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    height: 45,
    backgroundColor: '#17323b',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  text: {
    fontSize: 20,
    color: 'black',
    margin: 10,
  },
});
