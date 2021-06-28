import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Axios from 'axios'

const addNote = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  const submit = () => {
    navigation.navigate("home")
    const data = {
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
      <View style={{marginTop: 25}} >
      <View style={styles.textInputView}>
        <TextInput style={styles.textInput}
          placeholder="Enter Title"
          placeholderTextColor={'white'}
          value={title}
          onChangeText={(value) => setTitle(value)}
        />
      </View>
      <View style={styles.textInputView}>
        <TextInput style={styles.textInput2}
          placeholder="Enter Description"
          placeholderTextColor={'white'}
          value={deskripsi}
          onChangeText={(value) => setDeskripsi(value)}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.loginView} onPress={submit}>
          <Text style={styles.textForInput}>SAVE</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}
export default addNote

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',

    backgroundColor: '#1E1A3C'
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
    borderWidth: 0,
    borderRadius: 15,
    borderColor: '#777',
    margin: 10,
    textAlign: 'center',
    backgroundColor: '#3E3364'
  },
  textInput2: {
    width: 390,
    height: 400,
    borderWidth: 0,
    borderRadius: 15,
    borderColor: '#777',
    margin: 10,
    textAlign: 'center',
    backgroundColor: '#3E3364'
  },
  textForInput: {
    fontSize: 20,
    alignItems: 'center',
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
    backgroundColor: '#3E3364',
    width: 350,
    height: 55,
    borderWidth: 0,
    borderRadius: 15,
    alignItems: 'center',
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