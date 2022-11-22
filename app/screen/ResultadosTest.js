import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, Text, View, Image, ScrollView, SafeAreaView, StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback, TextInput, TouchableOpacity } from 'react-native';
import MyTextInput from '@components/MyTextInput'
import { mainStyles, loginStyles } from '@styles/styles'
import { useNavigation } from '@react-navigation/native'

import color from '@styles/Colors'



const Resultados = () => {
  const navigation = useNavigation();
  const varurl = "https://b0f9-181-231-29-78.sa.ngrok.io/"
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    fetch(`${varurl}api/show-summary?usuario=1&profile_id=Predeterminado`)
      .then(response => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, []);


  return (
    <ScrollView>
      <View style={[mainStyles.container, {paddingTop: 20, paddingBottom: 100 }]}>

        <Text style={[{ color: 'black', fontSize: 53, bottom: 20 }]}>Resultados</Text>

        {loading ? <Text>Loading...</Text> :


          (<View style={{ flex: 1, flexDirection: 'column' }}>
            <Text style={{ fontSize: 24, color: 'black', textAlign: 'center' }}>Resultados {data[0].tipo}:</Text>
            <Text style={{ fontSize: 24, color: 'black', textAlign: 'center' }}>Resultados correctos: {data[0].ResOK}</Text>
            <Text style={{ fontSize: 24, color: 'black', textAlign: 'center' }}>Resultados incorrectos: {data[0].ResNOK}</Text>
            <Text style={{ fontSize: 24, color: 'black', textAlign: 'center' }}>Porcentaje: {data[0].Porc}%</Text>
          </View>
          )}
        {loading ? <Text>Loading...</Text> :


          (<View style={{ flex: 1, flexDirection: 'column', top: 20 }}>
            <Text style={{ fontSize: 24, color: 'black', textAlign: 'center' }}>Resultados {data[1].tipo}</Text>
            <Text style={{ fontSize: 24, color: 'black', textAlign: 'center' }}>Resultados correctos: {data[1].ResOK}</Text>
            <Text style={{ fontSize: 24, color: 'black', textAlign: 'center' }}>Resultados incorrectos: {data[1].ResNOK}</Text>
            <Text style={{ fontSize: 24, color: 'black', textAlign: 'center' }}>Porcentaje: {data[1].Porc}%</Text>
          </View>
          )}

        {loading ? <Text>Loading...</Text> :

          (<View style={{ flex: 1, flexDirection: 'column', top: 40 }}>
            <Text style={{ fontSize: 24, color: 'black', textAlign: 'center' }}>Resultados {data[2].tipo}:</Text>
            <Text style={{ fontSize: 24, color: 'black', textAlign: 'center' }}>Resultados correctos: {data[2].ResOK}</Text>
            <Text style={{ fontSize: 24, color: 'black', textAlign: 'center' }}>Resultados incorrectos: {data[2].ResNOK}</Text>
            <Text style={{ fontSize: 24, color: 'black', textAlign: 'center' }}>Porcentaje: {data[2].Porc}%</Text>
          </View>
          )}

        {loading ? <Text>Loading...</Text> :

          (<View style={{ flex: 1, flexDirection: 'column', top: 60 }}>
            <Text style={{ fontSize: 24, color: 'black', textAlign: 'center' }}>Resultados finales:</Text>
            <Text style={{ fontSize: 24, color: 'black', textAlign: 'center' }}>Tipo: {data[3].Tipo}</Text>
          </View>
          )}

        <View style={[mainStyles.otro2Btn, {bottom: 20, width: 150, top: 80 }]}>
          <TouchableOpacity
            onPress={() => renderConditionalScreen()}>
            <Text style={[mainStyles.dosText, { justifyContent: 'center' }]}>Siguiente</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );

  function renderConditionalScreen() {
    if (data[3].Tipo == "PROTANOPIA") 
    {
      return navigation.navigate('Protanopia')
    }
    else if (data[3].Tipo == "DEUTERANOPIA") 
    {
      return navigation.navigate('Deuteranopia')
    }
    else if (data[3].Tipo == "TRITANOPIA") 
    {
      return navigation.navigate('Tritanopia')
    }
    else
    {
      return navigation.navigate('Pantallas')
    }
  }

}

export default Resultados