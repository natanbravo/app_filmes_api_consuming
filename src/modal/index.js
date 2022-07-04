import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ModalScreen(props) {

   

  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.backBtn} onPress={props.voltar}>
          <Text style={styles.btnText}>Voltar</Text>
        </TouchableOpacity  >
        <Text style={styles.movieTitle}>{props.filme.nome}</Text>
        <Text style={styles.movieSinopse}> Sinopse: </Text>
        <Text style={styles.movieDescription}>
          {props.filme.sinopse}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    height: '80%',
    backgroundColor: '#101010',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: 20,
  },
  backBtn: {
    backgroundColor: '#ff0000',
    width: 100,
    height: 40,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  movieDescription: {
    color: '#fff',
    fontSize: 16,
    padding: 4,
    fontWeight: '400',

  },
  movieSinopse: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    marginVertical:10
  },
  movieTitle: {
    color: '#fff',
    fontSize: 28,
    textAlign: 'center',
    padding: 15,
    fontWeight: 'bold',
    marginTop: 30
  },
});
