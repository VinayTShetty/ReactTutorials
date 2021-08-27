import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MenuDetialsHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Menu Detials</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: 'coral',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  }
});