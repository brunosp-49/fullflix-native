import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { data, getMovieDetails } from '../redux/slice';

export default function Detail({navigation}) {
  // const [details, setDetails] = useState(["dds"])
  const dispatch = useDispatch()
  var details = useSelector(data)

  useEffect(()=>{
    dispatch(getMovieDetails(616037))
  },[])

  return (
    <View style={styles.container}>
      {!details ? null :
      <>
        <View style={styles.header}>
          <Text style={styles.tittle}>Titulos</Text>
        </View>
        <View style={styles.mid}>
          <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </>
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    justifyContent: "center"
  },
  mid: {
    flex: 4,
    backgroundColor: "#fff",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  tittle: {
    color: "#fff",
    fontSize: 35,
  },
  button: {
    height: "10%",
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E50914",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  }
});
