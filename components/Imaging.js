import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, View, Image } from 'react-native';
import img from "../assets/dna.jpg";

export default function App() {

  
  return (
    <View style = {styles.container}>
      
      <Image source={img} style = {styles.imgStyle}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    alignItem: "center",
  },
  imgStyle : {
    width: '200px',
    height : "200px",
    marginLeft: '100px'
   
  }
});
