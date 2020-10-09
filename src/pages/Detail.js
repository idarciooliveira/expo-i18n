import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  TouchableHighlight,
} from 'react-native';

export default function Detail({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detail Page</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={styles.text}>English</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor='#f5dd4b'
          ios_backgroundColor='#3e3e3e'
          onValueChange={(value) => setIsEnabled(value)}
          value={isEnabled}
        />
      </View>
      <TouchableHighlight
        onPress={() => navigation.navigate('Home')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableHighlight>
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
    margin: 20,
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
