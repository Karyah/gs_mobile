import {View, Text, StyleSheet, Pressable, Image, Picker} from 'react-native';
import LabelInput from '../components/LabelInput';
import Constants from 'expo-constants';
import React from 'react';

export default function Login ({navigation}){

 fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      emailUsuario: email,
      senhaUsuario: senha
    })
  })
    .then(resposta => resposta.json())
      .then( (json) => console.log(json))
      .catch((error) => console.error(error));
  
  const [email, setEmail] = React.useState(null);
  const [senha, setSenha] = React.useState(null);
  
  return(
  <View style={styles.div}>
    <Image style={{marginLeft:60, marginBottom:50}} source={require('../assets/logo4.png')}/>
    <LabelInput label="Email" setarValor={setEmail} value={email}/>
    <LabelInput label="Senha" setarValor={setSenha} value={senha}/>
    <Pressable style={styles.botao}><Text style={{color:'#BFFFC9'}}>Logar</Text></Pressable>

  </View>
  );
}

const styles = StyleSheet.create({
  div:{
    flex: 1,
    alignItems:'space-around',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    textAlign:'center',
    backgroundColor: '#4F4F4F',
  }, 
  botao:{backgroundColor: '#CC3759',
    padding: '4%',
    margin:'5%',
    width:'60%',
    textAlign:'center',
    marginLeft:'20%',
    borderRadius:10,}
})