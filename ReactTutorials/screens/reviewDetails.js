import React, { useState } from 'react';
import { StyleSheet, View, Text,Image,FlatList,TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function ReviewDetails({navigation}) {

  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);


  return (
    <View style={styles.card}>
    <Text style={styles.paragraph}>{navigation.getParam('menu')}</Text>
    <Image  style={styles.userImage}source={navigation.getParam('image')}/>
    <Text style={styles.description}>{navigation.getParam('body')}</Text>
    <View style={styles.iconcontainer}>
    <AntDesign name="heart" size={24} color="red" />
    <FontAwesome name="pencil" size={24} color="blue" />
    </View>
    <View style={styles.card}>
    <FlatList data={reviews} renderItem={({ item }) => (
      <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
          <Text style={globalStyles.titleText}>{ item.title }</Text>
      </TouchableOpacity>
    )} />
    </View>

   </View>
   
  );
}




const styles = StyleSheet.create({
  userImage:{
    height: 150,
    width: 300,
    alignSelf:'center',
    borderColor:"#DCDCDC",
    borderWidth:3,
  },
  paragraph: {
    marginBottom:10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  description: {
    marginBottom:10,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10
  },
  iconcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    padding: 10,
    flexDirection:'row',
    alignItems:'center'

  }
});