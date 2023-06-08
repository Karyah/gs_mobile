import Cabecalho from '../components/Cabecalho';
import Usuario from '../components/Usuario';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import React, { useEffect } from 'react';


export default function MeuPerfil(){
  const [usuario, setUsuario ]=React.useState(null);

 useEffect(() => {
  fetch('http://localhost:8080/usuario/1', {method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }})
      .then(resposta => console.log(resposta.json()))

      .catch(() => {
        Alert.alert('Erro', 'Não foi possível carregar os dados da API');
      });
  });

  return(
    <>
    <Cabecalho titulo='Meu Perfil'/>
    <View style={styles.div}>
      <View>
       
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  div:{
    flex:1,
    display:'flex',
    backgroundColor:'#4f4f4f',
    justifyContent:'space-evenly'
    }
})