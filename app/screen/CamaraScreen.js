import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableWithoutFeedback, Alert, Platform, Dimensions} from 'react-native';
import {Image} from 'react-native' ; 
import { useEffect, useRef, useState} from 'react';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

export default function App() {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  //http://10.0.2.2/api/test
  const getData = (x, y, base64) => {
    fetch('https://pruebaserver.nicolasdomnguez.repl.co/recognition', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      mode: "cors",
      body: JSON.stringify({
            "base64": base64,
            "x": x,
            "y": y,
            "platform": Platform.OS,
            "Wwidth": windowWidth,
            "Wheight": windowHeight
          })
    }) .then(function(response) {
          return response.text();
        }).then(function(data) {
          Alert.alert(data); 
          console.log(data);
          // this will be a string
        });
  }

  if (photo) {
    console.log('foto');  
    return (
      <TouchableWithoutFeedback onPress={(e) => {console.log(e.nativeEvent.locationX | 0, e.nativeEvent.locationY | 0), getData(e.nativeEvent.locationX | 0, e.nativeEvent.locationY | 0, photo.base64)}} style={styles.touch}>
        <SafeAreaView style={styles.container}>
          <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64}} />
          <Button title="Volver" onPress={() => setPhoto(undefined)} />
        </SafeAreaView>
      </TouchableWithoutFeedback>
      
    );
  }

  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={[styles.buttonContainer,{right:156, top:300}]}>
        <Button title="" onPress={takePic} />
      </View>
      <StatusBar style="auto" />
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#fff',
    alignSelf: 'flex-end'
  },
  preview: {
    alignSelf: 'stretch',
    flex: 1
  },
  touch: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  }
});