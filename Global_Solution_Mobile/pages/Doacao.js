import Cabecalho from '../components/Cabecalho';
import {View, StyleSheet} from 'react-native';


export default function Doacao(){
  return(
  <>
    <Cabecalho titulo='Doação'></Cabecalho>
    <View style={styles.div}>
 
    </View>
  </>);
}

const styles = StyleSheet.create({
  div:{
    backgroundColor:'#4f4f4f',
    flex:1,
    display:'flex',
    alignItems:'center',
    alignContent:'center',
    justifyContent:'space-around',
  }
})