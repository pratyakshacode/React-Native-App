import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import Imaging from "./components/Imaging";

export default function App() {

  const arr = [

    {
      name : "KGF 2", 
      
    }, 
    {
      name : "Pathan"
    },{
      name : "Robot 2", 
      
    },
    {
      name : "Ant man", 
      
    },
    {
      name : "Spider man", 
      
    },
  ]
  return (
    <View>
      <FlatList  horizontal showsHorizontalScrollIndicator={false} data = {arr} renderItem={(element)=>{
        return <Text style={styles.listStyle}> {element.item.name}</Text>
      }}/>
      <Imaging/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle : {
    width: '200px'
  },
  listStyle : {
    backgroundColor: "red", 
    color : '#fff',
    fontWeight : 'bolder', 
    padding : "20px",
    margin: "10px", 
    width : "200px"
    
  }
});
