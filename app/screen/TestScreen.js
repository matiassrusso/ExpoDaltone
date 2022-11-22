import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback, TextInput, TouchableOpacity } from 'react-native';
import MyTextInput from '@components/MyTextInput'
import MyButton from '@components/MyButton'
import color from '@styles/Colors'
import { mainStyles, loginStyles } from '@styles/styles'
import { useNavigation } from '@react-navigation/native'




const Test = () =>  {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [imageIndex, setImageIndex] = useState(0)
  const [numeroElegido, setNumeroElegido] = useState(null)

  function navigateTo(routeName){  //Function 1 
    siguienteImagen(numeroElegido)
    navigation.navigate(routeName)
  }
  const numImagen = 0

  const varurl = "https://b0f9-181-231-29-78.sa.ngrok.io"

  useEffect(() => {
    if (loading) {


      fetch(`${varurl}/api/show-tests?type=allRecords`)
        .then(response => response.json())
        .then((json) => setData(json))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }
  }, [loading])

  const loadImage = () => { setLoading(true) }

 
  function siguienteImagen(num_usuario) {
    enviarDatos(num_usuario)
    if (imageIndex !== data.length-1) {
      setImageIndex(imageIndex + 1)
      setNumeroElegido(null)
      console.log(data.length, "length")
      console.log(imageIndex, "imageIndex")
   
    }
  }
  function enviarDatos(num_usuario) {

    console.log("index:", imageIndex+1);

    fetch(`${varurl}/api/eval-test?usuario=1&imagen_id=${imageIndex+1}&num_ing=${num_usuario}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    }).then((response) =>
      response.json()
    ).then((data) => {
      console.log(data);
    })
  }

  return (
    <KeyboardAvoidingView>    
    <ScrollView>
        <View style={[styles.container, { paddingTop:10, bottom:20, paddingBottom:200}]}>

          <Text style={[mainStyles.btntxt, { color: 'black', fontSize: 66, top:10}]}>Evaluacion</Text>
          <StatusBar backgroundColor={'white'} translucent={true} />

          {
            data.length > 0 &&
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', top:40 }}>
              <Image source={{ uri: `data:image/jpg;base64,${data[imageIndex]?.img_testeo}` }}
                style={{ width: 250, height: 250 }} />
            </View>

          }
          <View style={{top:80}}>
          <TextInput style={mainStyles.inputView} onChangeText={(text) => setNumeroElegido(text)} keyboardType="number-pad" placeholder='Escriba el numero de arriba' clearTextOnFocus='true'  />        
          </View>


          <View style={{top:80}}>
          {
            imageIndex !== data.length - 1 ?

            <View style={[styles.loginBtn]}>
            <TouchableOpacity
              onPress={() => siguienteImagen(numeroElegido)}>
              <Text style={styles.loginText}>Siguiente</Text>
            </TouchableOpacity>
          </View>
          :
          <View style={[styles.loginBtn]}>
            <TouchableOpacity
              onPress={() => navigateTo('Resultados')}>
              <Text style={styles.loginText}>Finalizar</Text>
            </TouchableOpacity>
          </View>

          }
          </View>

        </View>
        </ScrollView>
        </KeyboardAvoidingView>
  )


}
 export default Test


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtn: {
    width: 150,
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
    fontSize: 24,
    fontStyle: 'normal'
  },
});