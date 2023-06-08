import { View, StyleSheet, Text } from 'react-native';
import Organizacao from '../components/Organizacao';
import Cabecalho from '../components/Cabecalho';
import React, { useEffect} from 'react';

export default function Organizacoes(){

  useEffect(() => {
  fetch('http://localhost:8080/organizacoes', {method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }})
      .then(resposta => resposta.json())
      .then(json => {
         console.log(json)
      })

      .catch(() => {
        Alert.alert('Erro', 'Não foi possível carregar os dados da API');
      });
  });

  return(
    <View style={styles.tudo}>
    <Cabecalho titulo="Organizacoes"/>
    <View style={styles.div}>
      <Organizacao nome="Org 1" descricao="Descricao mt daora e bem legal"/>
      <Organizacao nome="Org 2" descricao="Descricao mt daora e bem legal"/>
    </View>
    </View>
    );
}

const styles = StyleSheet.create({
  tudo:{ backgroundColor:'#4f4f4f'},
  div:{
    flex:1,
    display:'flex',
    alignItems:'center',
    alignContent:'center',
    justifyContent:'space-around',
  }
})