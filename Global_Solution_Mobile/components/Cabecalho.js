import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import Constants from 'expo-constants';

export default function Cabecalho(props){
  return(
  <>
  <View style={styles.cabecalho}>
      <Text style={{fontWeight:'bold'}}>{props.titulo}</Text>
      <Pressable onPress={()=> props.evento}>
      <Image source= {require('../assets/options.png')}></Image>
      </Pressable>
      </View>
  </>
  );
}

const styles = StyleSheet.create({

   cabecalho:{
    backgroundColor:'#CC3759',
    width:'100%',
    height:'10%',
    textAlign:'center',
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center'
  }
});