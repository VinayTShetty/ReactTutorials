import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList,Image }from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home(props) {

const pressHandler=()=>{
  props.navigation.navigate('ReviewDetails')
}


const IMAGES = {
  image1: require('../assets/pizza.png'),
  image2: require('../assets/meals.png'),
  image3: require('../assets/potatofries.png'),
  image4: require('../assets/sandwich.png'),
  image5: require('../assets/chicken.png'),
};

const [reviews, setReviews] = useState([
  { title: 'Empire Restaurant', menu: "Pizza", body: 'lorem ipsum',image:IMAGES.image1 ,key: '1' },
  { title: 'King Restaurant', menu: "Meals", body: 'lorem ipsum', image:IMAGES.image2 ,key: '2' },
  { title: 'ABC Restaurant', menu: "PotatoFries", body: 'lorem ipsum',image:IMAGES.image3 , key: '3' },
  { title: 'Ginger Restaurant', menu: "Sandwich", body: 'lorem ipsum', image:IMAGES.image4 ,key: '4' },
  { title: 'Tasty Restuarant', menu: "Chicken", body: 'lorem ipsum', image:IMAGES.image5 ,key: '5' },
]);

return (
  <View style={globalStyles.container}>
    <FlatList data={reviews} renderItem={({ item }) => (
      <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
        <Text style={globalStyles.titleText}>{ item.title }</Text>
      </TouchableOpacity>
    )} />
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