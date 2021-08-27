import React from 'react';
import { StyleSheet, View, Text,Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home(props) {

const pressHandler=()=>{
  props.navigation.navigate('ReviewDetails')
}

  return (
    <View style={globalStyles.container}>
      <Text>Home Demo Screen</Text>
      <Button title ='Go to Review Details ' onPress={
        pressHandler
      }/>
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