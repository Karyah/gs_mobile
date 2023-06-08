import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import LabelInput from '../components/LabelInput';
import Constants from 'expo-constants';
import React, { useCallback, useEffect } from 'react';

export default function CadastroUsuario({navigation}) {
  const [usuario, setUsuario] = React.useState();
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [telefone, setTelefone] = React.useState('');
  const [cpf, setCpf] = React.useState('');


  
  const cadastrar = () => {
    const result = {
      "nomeUsuario": nome,
      "emailUsuario": email,
      "senhaUsuario": senha,
      "telefoneUsuario": telefone,
      "cpfUsuario": cpf,
      "ativoUsuario":  true
    }

    setUsuario(result);
  }

  const request = useCallback(async () => {

    await fetch('http://localhost:8080/usuario', {method: "POST", mode: 'cors', headers: {
      // "Authorization": 'Basic ' + Buffer.from("nome" + ":" + "senha").toString('base64'),
      'Access-Control-Allow-Origin': "*",
      'Access-Control-Allow-Headers': "*",
      "Content-Type": "application/json"
    },
      body: JSON.stringify(usuario)
    }) 
  }, [usuario])

  useEffect(() => {
    if(!usuario) return;
    request()
    
  }, [usuario])
  
  return(
    <View style={styles.div}>
    <Image style={{marginLeft:90, marginBottom:20}} source = {require('../assets/logomenor.png')}/>
    <LabelInput label= 'Nome'  value={nome} onChange= {setNome}/>
    <LabelInput label= 'E-mail'  value={email} onChange= {setEmail}/>
    <LabelInput label= 'Senha'  value={senha} onChange= {setSenha}/>
    <LabelInput label= 'Telefone'  value={telefone} onChange= {setTelefone}/>
    <LabelInput label= 'Cpf'  value={cpf} onChange= {setCpf}/>

    <Pressable style={styles.botao} onPress={cadastrar}><Text style={{color:'#BFFFC9'}}>Cadastrar</Text></Pressable>
    <View style={{alignItems:'center', margin:'5%'}}>
     <Text>Já possui uma conta? </Text>
      <Pressable onPress={()=>navigation.navigate('Login')}><Text style={{color:'#BFFFC9'}}>Logar</Text></Pressable>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  div:{
    display: 'flex',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#4f4f4f',

  },
  botao:{
    backgroundColor: '#CC3759',
    padding: '5%',
    marginTop:'5%',
    marginLeft:'25%',
    width:'50%',
    textAlign:'center',
    borderRadius:10,
  }
})