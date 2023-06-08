import {View, StyleSheet, Text, Image, Pressable }  from 'react-native';

export default function Organizacao(props){

  return(
    <>
    <View style={styles.div}>
      <View>
      <Image source={require('../assets/logomenor.png')}></Image>
      </View>
      <Text style={{fontWeight:'bold'}}>{props.nome}{'\n'}</Text>
      <Text>{props.descricao}</Text>
      <Pressable style={styles.botao}> <Text>Doar</Text></Pressable>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  div:
  {backgroundColor:'#BFFFC9',
  width:'90%',
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  textAlign:'center',
  padding:'5%', 
  margin:'5%'
  },
   botao:{backgroundColor:'#CC3759',
      padding: '3%',
      marginTop:'5%',
      borderRadius:10,}
})