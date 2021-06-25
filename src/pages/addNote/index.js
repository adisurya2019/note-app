import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Axios from 'axios'

const addNote = ({navigation}) => {
  const [title, setTitle] = useState ("");
  const [deskripsi, setDeskripsi] = useState ("");
  
  const submit = () => {
    const data ={
      title,
      deskripsi
    }
    Axios.post('http://192.168.43.242:8081/notes', data)
    .then(res => {
      console.log('res: ', res);
      setTitle("");
      setDeskripsi("");
    })
  }
    return (
        <View style={styles.background}>
            <View style={styles.textInputView}>
                <TextInput style={styles.textInput}
                placeholder="Enter Title"
                placeholderTextColor={'black'}
                value={title}
                onChangeText ={(value) => setTitle(value)}
                />
            </View>
            <View style={styles.textInputView}>
                <TextInput style={styles.textInput2}
                placeholder="Enter Description"
                placeholderTextColor={'black'}
                value={deskripsi}
                onChangeText ={(value) => setDeskripsi(value)}
                />
            </View>
            <View onPress={() => navigation.navigate("home")}>
                <TouchableOpacity style={styles.loginView} onPress={submit}>
                    <Text style={styles.textForInput}>SAVE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default addNote

const styles = StyleSheet.create({
    background: {
      flex: 1,
      alignItems: 'center',
      
      backgroundColor: 'white'
    },
    judul: {
      marginTop: 170,
      marginBottom: 100,
      fontSize: 30,
      fontWeight: 'bold',
      color: 'black'
    },
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    textInputView: {
      
      color: '#000'
    },
    textInput: {
        width: 390,
        height: 50,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#777',
        margin: 10,
        textAlign: 'center',
        backgroundColor: '#f0f0f0'
      },
      textInput2: {
          width: 390,
          height: 400,
          borderWidth: 1,
          borderRadius: 15,
          borderColor: '#777',
          margin: 10,
          textAlign: 'center',
          backgroundColor: '#f0f0f0'
        },
    textForInput: {
      fontSize: 20,
      alignSelf: 'center',
      fontWeight: "600",
        textAlign: 'center',
      color: 'white',
      marginTop: 10
    },
    textHeadline: {
      fontSize: 20,
      alignSelf: 'center',
      fontWeight: "700",
      margin: 10
    },
    loginView: {
      margin: 10,
      backgroundColor: 'black',
      width: 350,
      height: 55,
      borderWidth: 3,
      borderRadius: 15,
      alignSelf: 'center',
      marginTop: 140
    },
    textHeadlineTwo: {
      fontSize: 20,
      alignSelf: 'center',
      fontWeight: "700",
      margin: 10,
      color: "white",
    },
  })