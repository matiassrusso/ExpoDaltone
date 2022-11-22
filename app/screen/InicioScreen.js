import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { mainStyles, registroStyles } from '@styles/styles'
import { SocialIcon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';






const Inicio = () =>  {
  const navigation = useNavigation();


  return (
    <ScrollView>
    <View style={[styles.container]}>
      <View style={[mainStyles.container, {bottom:0}]}>
        <Text style={[mainStyles.logText, {bottom: 35, textAlign: 'center', }]}>Iniciar sesion </Text>

        <View style={[styles.inputView, { paddingTop: 25 }]}>
          <TextInput
            style={styles.inputText}
            placeholder="Usuario"
            placeholderTextColor="#000000"
          />
        </View>

        <View style={[styles.inputView, { paddingTop: 25 }]}>
          <TextInput
            style={styles.inputText}
            placeholder="Contraseña"
            placeholderTextColor="#000000"
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Pantallas')}>
          <Text style={[styles.inicioText, { color: 'black' }, { textDecorationLine: 'underline' }, { textAlign: 'center' }, { paddingTop: 25 }, { bottom: 27 }, {}]}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>

        <View style={[styles.loginBtn]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Pantallas')}>
            <Text style={styles.loginText}>Iniciar sesion</Text>
          </TouchableOpacity>
        </View>

        <Text style={[styles.loginButtonBelowText1, { top: 17.9 }, { fontSize: 20 }]}>〇</Text>
        <View style={[styles.hairlineRg, { top: 3.9 }]} />
        <View style={[styles.hairlineLf, { bottom: -1.9 }]} />

        <View style={registroStyles.containerSocial}>

          <TouchableOpacity>
          <SocialIcon
            style={registroStyles.socialButton}
            title='Iniciar sesion con Google'
            button type='google'
            iconColor='black'
            color='black'
            light='false'
          />
          </TouchableOpacity>

          <TouchableOpacity>
            <SocialIcon
            style={registroStyles.socialButton}
            title='Iniciar sesion con Facebook'
            light='false'
            button type='facebook'
          />
          </TouchableOpacity>
        </View>
        <View style={[{top:10}]}>
          <Text style={[styles.inicioText, { top: 1 }, { right: 75, bottom: 100,  }]}>Nuevo en Daltone</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Registro')}>
            <Text style={[styles.inicioText, { color: '#0066CC' }, { textDecorationLine: 'underline' }, { left: 90 }, { bottom: 22.7 }]}>Crear una cuenta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </ScrollView>
  );
}
export default Inicio



const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#00000',
    //paddingLeft: 1,

  },
  subContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hairline: {
    backgroundColor: 'gray',
    height: 1,
    width: 350
  },
  hairlineRg: {
    backgroundColor: 'gray',
    height: 1,
    width: 145,
    left: 100,
  },
  hairlineLf: {
    backgroundColor: 'gray',
    height: 1,
    width: 145,
    right: 100,
  },

  loginButtonBelowText1: {
    fontFamily: 'AvenirNext-Bold',
    fontSize: 14,
    paddingHorizontal: 5,
    alignSelf: 'center',
    color: '#A2A2A2'
  },

  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#DFDFDF',
    borderRadius: 35,
    height: 60,
    marginBottom: 40,
    justifyContent: 'center',
    padding: 20,
    paddingLeft: 30,
  },
  inputText: {
    height: 50,
    color: 'black',
    fontSize: 24,
    right: 13,
    bottom:1,
  },

  forgot: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#9289FF',
    borderRadius: 25,
    height: 55,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    //left: 20,
  },
  loginText: {
    color: 'black',
    fontSize: 30,
    fontStyle: 'normal'
  },
  inicioText: {
    color: 'black',
    fontSize: 20,

  },


});