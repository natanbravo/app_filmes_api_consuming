import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import ModalScreen from '../modal';
export default function Filmes({data}) {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{data.nome}</Text>
        <Image source={{uri: data.foto}} style={styles.capa} />

        <View style={styles.buttonArea}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => setVisibleModal(true)}>
            <Text style={styles.buttontext}>LEIA MAIS</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal animationType="slide" visible={visibleModal} transparent={true}>
        <ModalScreen
          filme={data}
          voltar={()=> setVisibleModal(false)}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
    backgroundColor: '#191919',
    borderRadius: 20 / 2,
    letterSpacing: 2,
    fontStyle: 'italic',
    padding: 10,
  },
  card: {
    backgroundColor: '#202020',
    margin: 20,
    elevation: 2,
  },
  capa: {
    height: 250,
    width: 380,
    zIndex: 2,
  },
  buttonArea: {
    alignItems: 'flex-end',
    marginTop: -35,
    zIndex: 3,
    elevation: 5,
  },
  buttonContainer: {
    backgroundColor: '#ff0000',
    width: 100,
    height: 40,
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  buttontext: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
