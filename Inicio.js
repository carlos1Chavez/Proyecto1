import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const Inicio = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('./Imagenes/Logo.png')} style={styles.logo} />
      </View>
      <Text style={styles.title}>Bienvenido</Text>

      

      <View style={styles.buttonContainer}>
        <Button
          title="Mi Perfil"
          onPress={() => navigation.navigate('Mi Perfil')}
          color="red"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Persona Admirada"
          onPress={() => navigation.navigate('Persona Admirada')}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 260,
    height: 260,
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
});

export default Inicio;
