import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const Perfil = ({ navigation }) => {

  const [nombre, setNombre] = React.useState('Carlos Alejandro Chavez Cruz');
  const [fechaNacimiento, setFechaNacimiento] = React.useState('15 de Septiembre de 1995');
  const [pasatiempos, setPasatiempos] = React.useState('Peliculas y Video juegos');

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('./Imagenes/IMG.jpg')} style={{ width: 200, height: 200 }} />
      </View>
      <Text>
        <Text style={styles.boldText}>Nombre:</Text> {nombre}
      </Text>
      <Text>
        <Text style={styles.boldText}>Fecha de Nacimiento:</Text> {fechaNacimiento}
      </Text>
      <Text>
        <Text style={styles.boldText}>Pasatiempos:</Text> {pasatiempos}
      </Text>
      
      

      <View style={styles.buttonContainer}>
        <Button
          title="Menú"
          onPress={() => navigation.navigate('Inicio')}
          color="red"
        />
      </View>
     
    </View>
  );
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  
  buttonContainer: {
    marginVertical: 10,
    width: '50%',
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default Perfil;