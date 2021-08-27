import React from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({navigation}) {
  return (
    <View style={styles.card}>
    <Text style={styles.paragraph}>{navigation.getParam('menu')}</Text>
    <Image  style={styles.userImage}source={navigation.getParam('image')}/>
    <Text style={styles.description}>{navigation.getParam('body')}</Text>
   </View>

//    <SafeAreaView style={styles.container}>
//    <View style={styles.container}>
//      <Card title="Local Modules">
//        {/*react-native-elements Card*/}
//        <Text style={styles.paragraph}>
//          React Native Card View for Android and IOS using
//          "react-native-elements"
//        </Text>
//      </Card>
//    </View>
//  </SafeAreaView>





  );
  // return (
  //   <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
  //     <View style={{ backgroundColor: "#eee", borderRadius: 10, overflow: "hidden" }}>
  //       <View>
  //         <Image
  //           source={navigation.getParam('image')}
  //           style={{
  //             height: 250,
  //             width: 300,
  //             alignSelf:'center',
  //             marginBottom:10
  //           }}
  //         />
  //       </View>
  //       <View style={{ padding: 10, width: 155 }}>
  //         <Text>Title</Text>
  //         <Text style={{ color: "#777", paddingTop: 5 }}>
  //           Description of the image
  //         </Text>
  //       </View>
  //     </View>
  //   </View>
  // );
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
  }
 
  
  
});   