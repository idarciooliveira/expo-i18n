import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import en from '../i18n/en';
import pt from '../i18n/pt';

i18n.translations = { en, pt };
i18n.locale = Localization.locale;
i18n.fallbacks = true;

export default function Home() {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleTranslate = (value) => {
    if (isEnabled === true) {
      i18n.locale = 'pt';
    } else {
      i18n.locale = Localization.locale;
    }
    setIsEnabled(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}> {i18n.t('homePage')}</Text>

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
          onValueChange={(value) => handleTranslate(value)}
          value={isEnabled}
        />
      </View>

      <Text style={styles.text}>{i18n.t('welcome')}</Text>
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
