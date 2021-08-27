import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home() {
  return (
    <View style={globalStyles.container}>
      <Text>Home Demo Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});



// https://snack.expo.dev/@guruparan/navsample
//https://stackoverflow.com/questions/62761253/how-to-use-stacknavigator-with-drawernavigator-reactnavigation-v5-im-using-c