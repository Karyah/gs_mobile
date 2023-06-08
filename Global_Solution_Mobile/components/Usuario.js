import {View, StyleSheet, Text,  Pressable }  from 'react-native';

export default function Usuario(props){

  return(
    <>
    <View style={styles.div}>
      <Text style={{fontWeight:'bold'}}>{props.nome}{'\n'}</Text>
      <Text style={{fontWeight:'bold'}}>{props.email}{'\n'}</Text>
      <Text style={{fontWeight:'bold'}}>{props.senha}{'\n'}</Text>
      <Text style={{fontWeight:'bold'}}>{props.telefone}{'\n'}</Text>
      <Text style={{fontWeight:'bold'}}>{props.cpf}{'\n'}</Text>
      <Text>{props.descricao}</Text>
      <Pressable style={styles.botao}> <Text> Editar</Text></Pressable>
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