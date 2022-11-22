import React, { useState } from 'react'
import {StyleSheet,Text,View,TextInput,TouchableOpacity,Image,} from 'react-native';
import { mainStyles, loginStyles } from '@styles/styles'
import { useNavigation } from '@react-navigation/native'
import { useFonts } from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';


const Registro = () =>  {
  const navigation = useNavigation();
  


  
    return (
      <ScrollView>
<View style={[styles.container, { padding: 0 }]}>
          <View style={[styles.containerLeft,]}>
          <Text style={[mainStyles.leftText, { paddingBottom: 23, }]}>Crear{"\n"}cuenta </Text>
          <View style={[styles.inputView, {paddingTop:25}]}>
            <TextInput
              style={styles.inputText}
              placeholder="Nombre de usuario"
              placeholderTextColor="#000000"
            />
            
          </View>
          <View style={[styles.inputView, {paddingTop:25,}]}>
            <TextInput
              style={styles.inputText}
              placeholder="E-mail"
              keyboardType="email-address"
              placeholderTextColor="#000000"
            />
            
          </View>
          <View style={[styles.inputView, {paddingTop:25}]}>
            <TextInput
              style={styles.inputText}
              placeholder="Contraseña"
              placeholderTextColor="#000000"
            />
            
          </View>
          <View style={[styles.inputView, {paddingTop:25}]}>
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder="Verificar contraseña"
              placeholderTextColor="#000000"
            />
          </View>
          {/* <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity> */}
          <View style={[styles.loginBtn,{bottom:10}]}>
          <TouchableOpacity
          onPress={() => navigation.navigate('Inicio')}>

            <Text style={styles.loginText}>Siguiente</Text>
          </TouchableOpacity>
          </View>
          
            <Text style={[styles.inicioText,{paddingTop: 10, left:15,}]}>Ya tengo cuenta</Text> 
            <TouchableOpacity
              onPress={() => navigation.navigate('Inicio')}>
            <Text style={[styles.inicioText,{color: '#0066CC'},{textDecorationLine: 'underline'}, {left:180},{bottom:27.6}]}>Iniciar sesion</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    );
  }
  
  export default Registro


const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#00000',
    paddingLeft: 30,

  },
  subContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: '90%',
    backgroundColor: '#D9D9D9',
    borderRadius: 35,
    height: 60,
    marginBottom: 35,
    justifyContent: 'center',
    padding: 20,
    paddingLeft: 30,
  },
  inputText: {
    height: 50,
    color: 'black',
    fontSize:24,
    right: 17,
},

  forgot: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '65%',
    backgroundColor: '#9289FF',
    borderRadius: 25,
    height: 55,
    alignItems: 'center',
    display: 'flex', 
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  left: 50,

  },
  loginText: {
    color: 'black',
    fontSize: 30,
  },
  inicioText :{
    color: 'black',
    fontSize: 23,

  },
  
  
});