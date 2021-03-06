import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import api from './src/services/api';
import Filmes from './src/filmes';

export default function App() {
  const [filmes, setFilmes] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('r-api/?api=filmes');
      setFilmes(response.data);
      setLoading(false);
    }
    loadFilmes();
  }, []);

  if (loading) {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <ActivityIndicator color="#121212" size={45} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} backgroundColor={'#121212'} />
        <SafeAreaView>
          <Text style={styles.title}>BRAVOFLIX</Text>
          <FlatList
            data={filmes}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => <Filmes data={item} />}
          />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FF0000',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
    elevation: 5,
  },
});
