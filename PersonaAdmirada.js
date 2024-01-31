import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const PersonaAdmirada = ({ navigation }) => {
  const [nombre, setNombre] = React.useState('Robert John Downey Jr.');
  const [fechaNacimiento, setFechaNacimiento] = React.useState('6 de abril de 1865');
  const [descripcion, setDescripcion] = React.useState('Admiro su compromiso con la recuperación y su dedicación a ser una mejor persona. Robert Downey Jr. no solo es un actor talentoso, sino también un ejemplo de resiliencia, redención y crecimiento personal. Su capacidad para convertir adversidades en oportunidades y aprender de sus experiencias lo convierte en una persona admirable tanto en el mundo del entretenimiento como en la vida cotidiana.');

  return (
    <View style={styles.container}>
      <View></View>
      <Text></Text>
      <View style={styles.imageContainer}>
        <Image source={require('./Imagenes/robert.jpg')} style={{ width: 200, height: 250 }} />
      </View>
      <Text>
        <Text style={styles.boldText}>Nombre:</Text> {nombre}
      </Text>
      <Text>
        <Text style={styles.boldText}>Fecha de Nacimiento:</Text> {fechaNacimiento}
      </Text>
      <Text>
        <Text style={styles.boldText}>Descripcion:</Text> {descripcion}
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Regresar al Menú"
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
export default PersonaAdmirada;