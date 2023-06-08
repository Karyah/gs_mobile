import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import LabelInput from '../components/LabelInput';
import Constants from 'expo-constants';
import React from 'react';

export default function CadastroUsuario({navigation}){

  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [telefone, setTelefone] = React.useState('');
  const [cpf, setCpf] = React.useState('');


  const [usuario, setUsuario] = React.useState({
    nomeUsuario:nome,
    emailUsuario:email,
    senhaUsuario:senha,
    telefoneUsuario:telefone,
    cpfUsuario:cpf
  })

  const cadastro =  ()=>{

  setUsuario(usuario)

  console.log(usuario)

  fetch('http://localhost:8080/usuario', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(usuario)
    })
      .then(resposta => resposta.json())
        .then((json) => console.log(json))
        .catch((error) => console.error(error));
  
  }
  
  return(
    <View style={styles.div}>
    <Image style={{marginLeft:90, marginBottom:20}} source = {require('../assets/logomenor.png')}/>
    <LabelInput label= 'Nome'  value={nome} onChange= {setNome}/>
    <LabelInput label= 'E-mail'  value={email} onChange= {setEmail}/>
    <LabelInput label= 'Senha'  value={senha} onChange= {setSenha}/>
    <LabelInput label= 'Telefone'  value={telefone} onChange= {setTelefone}/>
    <LabelInput label= 'Cpf'  value={cpf} onChange= {setCpf}/>

    <Pressable style={styles.botao} onPress={cadastro}><Text style={{color:'#BFFFC9'}}>Cadastrar</Text></Pressable>
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