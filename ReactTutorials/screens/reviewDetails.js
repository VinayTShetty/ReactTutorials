import React from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails(props) {
  return (
    <View style={globalStyles.container}>
    <Image source={props.Image}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});